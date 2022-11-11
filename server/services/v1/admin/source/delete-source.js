const { Source } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Source
 * It will delete a Source.
 * @param SourceId
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
    throw new ValidationError("Unable to find the source.", 404);
  }

  source.active = false;

  await source.save();

  return source;
};
