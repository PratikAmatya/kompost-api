const { Pickup } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Pickup
 * It will delete a Pickup.
 * @param PickupId
 * @returns {Promise<Pickup>}
 */
module.exports = async (pickupId) => {
  const pickup = await Pickup.findOne({
    where: {
      id: pickupId,
    },
  });

  if (!pickup) {
    throw new ValidationError("Unable to find the pickup.", 404);
  }

  pickup.status = "cancelled";

  await pickup.save();

  return pickup;
};
