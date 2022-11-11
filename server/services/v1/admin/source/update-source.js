const { Source } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Source
 * It will update a Source.
 * @param queryObj
 * @returns {Promise<Source>}
 */
module.exports = async (sourceId, queryObj) => {
  const source = await Source.findOne({
    where: {
      id: sourceId,
      active: true,
    },
  });

  if (!source) {
    throw new ValidationError("Unable to find the Source.", 404);
  }

  const duplicateSource = await Source.findOne({
    where: {
      name: queryObj.name,
      active: true,
      id: {
        [Op.ne]: source.dataValues.id,
      },
    },
  });

  if (duplicateSource) throw new ValidationError("Duplicate Source Name", 403);

  source.name = queryObj.name;
  await source.save();

  return source;
};
