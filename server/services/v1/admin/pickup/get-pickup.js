const { Pickup } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Pickup
 * It will get a Pickup.
 * @param queryObj
 * @returns {Promise<Pickup>}
 */
module.exports = async (pickupId) => {
  const pickup = await Pickup.findOne({
    where: {
      id: pickupId,
    },
  });
  if (!pickup) {
    throw new ValidationError("Unable to find the source", 404);
  }

  return pickup;
};
