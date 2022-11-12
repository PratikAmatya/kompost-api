const {
  sequelize,
  User,
  UserRole,
  RolePermission,
} = require("../../../../models");

const Sequelize = require("sequelize");

const moment = require("moment");

const { ValidationError } = require("../../../../errors");

/**
 * Get a User
 * It will find a user from provided email or phone number and password
 * @param {queryObj}
 * @returns {Promise<User>}
 */

module.exports = async (queryObj) => {
  console.log("\n>>", queryObj);
  if (queryObj.email) {
    const duplicateEmail = await User.findOne({
      where: { email: queryObj.email },
    });

    if (duplicateEmail) {
      throw new ValidationError("Duplicate Email", 403);
    }
  }
  const duplicatePhone = await User.findOne({
    where: { phone: queryObj.phone },
  });

  if (duplicatePhone) {
    throw new ValidationError("Duplicate Phone number", 403);
  }

  const tr = await sequelize.transaction({ autocommit: true });

  const user = await User.create(queryObj, {
    transaction: tr,
  });

  if (!user) {
    await tr.rollback();
    throw new ValidationError("Unable to create new member.", 500);
  }

  const userRole = await UserRole.create(
    {
      userId: user.id,
      roleId: "member",
    },
    {
      transaction: tr,
    }
  );

  if (!userRole) {
    await tr.rollback();
    throw new ValidationError("Unable to create new member.", 500);
  }

  const permission = await RolePermission.findAll({
    attributes: ["permissionId"],
    where: {
      roleId: "member",
    },
  });

  if (!permission) {
    await tr.rollback();
    throw new ValidationError("Unable to find member permissions.", 500);
  }

  await tr.commit();

  return { user, permission, roles: ["member"] };
};
