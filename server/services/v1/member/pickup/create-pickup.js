const { Pickup, User } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Pickup
 * It will create a new Pickup
 * @param queryObj
 * @returns {Promise<Pickup>}
 */

module.exports = async (queryObj) => {
  const userExists = await User.findOne({
    where: {
      id: queryObj.userId,
      active: true,
    },
  });

  if (!userExists) {
    throw new ValidationError("Invalid User", 403);
  }

  if (!queryObj.status === "pending") {
    throw new ValidationError("Invalid Pickup Status", 403);
  }

  const pickup = await Pickup.create({ ...queryObj });

  if (!pickup) {
    throw new ValidationError("Unable to create a new pickup", 500);
  }

  return pickup;
};
