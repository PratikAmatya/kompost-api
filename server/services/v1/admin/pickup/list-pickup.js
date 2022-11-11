const { Pickup } = require("../../../../models");

/**
 * List all Pickups
 * It will list all Pickups.
 * @returns {Promise<Array<Pickup>>}
 */
module.exports = async () => {
  const pickups = await Pickup.findAll();

  return pickups;
};
