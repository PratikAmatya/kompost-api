const { Pickup } = require("../../../../models");

/**
 * List all Pickups
 * It will list all Pickups.
 * @returns {Promise<Array<Pickup>>}
 */
module.exports = async (queryObj) => {
  const pickups = await Pickup.findAll({
    where: {
      userId: queryObj.userId,
    },
  });

  return pickups;
};
