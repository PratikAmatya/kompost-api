const { Pickup } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Pickup
 * It will get a Pickup.
 * @param queryObj
 * @returns {Promise<Pickup>}
 */
module.exports = async (queryObj) => {
  const pickup = await Pickup.findOne({
    where: {
      id: queryObj.pickupId,
    },
  });
  if (!pickup) {
    throw new ValidationError("Unable to find the pickup record", 404);
  }
  if (pickup.userId !== queryObj.userId) {
    throw new ValidationError(
      "You are not authorized to view this pickup record",
      403
    );
  }

  return pickup;
};
