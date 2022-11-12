const { Pickup } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Pickup
 * It will delete a Pickup.
 * @param PickupId
 * @returns {Promise<Pickup>}
 */
module.exports = async (queryObj) => {
  const pickup = await Pickup.findOne({
    where: {
      id: queryObj.pickupId,
    },
  });

  if (!pickup) {
    throw new ValidationError("Unable to find the pickup.", 404);
  }

  if (pickup.userId !== queryObj.userId) {
    throw new ValidationError(
      "You are not authorized to delete this pickup.",
      403
    );
  }

  pickup.status = "cancelled";

  await pickup.save();

  return pickup;
};
