const { User, UserRole, RolePermission } = require("../../../../models");

const Sequelize = require("sequelize");

const { ValidationError } = require("../../../../errors");

/**
 * Get a User
 * It will find a User from provided email and password
 * @param {queryObj}
 * @returns {Promise<User>}
 */

module.exports = async (queryObj) => {
  const user = await User.findOne({
    where: {
      email: queryObj.email,
    },
  });

  if (user === null) {
    throw new ValidationError("User not found", queryObj);
  } else if (!user.validPassword(queryObj.password)) {
    throw new ValidationError("Wrong Password", queryObj);
  }

  const role = await UserRole.findAll({
    where: {
      userId: user.id,
    },
  });

  const roles = [];

  for (let i = 0; i < role.length; i += 1) {
    roles.push(role[i].dataValues.roleId);
  }

  const permission = await RolePermission.findAll({
    attributes: ["permissionId"],
    where: {
      roleId: {
        [Sequelize.Op.in]: roles,
      },
    },
  });

  return { user, roles, permission };
};
