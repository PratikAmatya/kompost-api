const { Source } = require("../../../../models");

/**
 * List all Sources
 * It will list all Sources.
 * @returns {Promise<Array<Source>>}
 */
module.exports = async () => {
  const sources = await Source.findAll({
    where: {
      active: true,
    },
  });

  return sources;
};
