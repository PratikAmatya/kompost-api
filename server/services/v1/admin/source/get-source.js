const { Source } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Source
 * It will get a Source.
 * @param queryObj
 * @returns {Promise<Source>}
 */
module.exports = async (sourceId) => {
  const source = await Source.findOne({
    where: {
      id: sourceId,
      active: true,
    },
  });
  if (!source) {
    throw new ValidationError("Unable to find the source", 404);
  }

  return source;
};
