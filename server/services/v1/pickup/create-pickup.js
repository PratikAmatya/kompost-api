const { Pickup, User } = require("../../../models");

const { ValidationError } = require("../../../errors");

/**
 * Create a Pickup
 * It will create a new Pickup
 * @param queryObj
 * @returns {Promise<Pickup>}
 */

module.exports = async (queryObj) => {
  const userExists = await User.findOne({
    where: {
      phone: queryObj.phone,
      active: true,
    },
  });

  if (!userExists) {
    throw new ValidationError("Invalid User", 403);
  }

  const { status, ...rest } = queryObj;

  const pickup = await Pickup.create({
    ...rest,
    userId: userExists.id,
  });

  if (!pickup) {
    throw new ValidationError("Unable to create a new pickup", 500);
  }

  return pickup;
};
