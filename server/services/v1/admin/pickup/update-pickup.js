const { Pickup } = require("../../../../models");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Pickup
 * It will update a Pickup.
 * @param queryObj
 * @returns {Promise<Pickup>}
 */
module.exports = async (pickupId, queryObj) => {
  const pickup = await Pickup.findOne({
    where: {
      id: pickupId,
    },
  });

  if (!pickup) {
    throw new ValidationError("Unable to find the Pickup.", 404);
  }

  const validPickupStatus = ["pending", "picked", "cancelled"];

  if (!validPickupStatus.includes(queryObj.status)) {
    throw new ValidationError("Invalid Pickup Status", 403);
  }

  const { userId, ...rest } = queryObj;
  await pickup.update({ ...rest });

  return pickup;
};
