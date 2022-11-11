const { Source } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Source
 * It will create a new Source
 * @param queryObj
 * @returns {Promise<Source>}
 */

module.exports = async (queryObj) => {
  const nameExists = await Source.findOne({
    where: {
      name: queryObj.name,
      active: true,
    },
  });

  if (nameExists) {
    throw new ValidationError("Duplicate Source Name", 403);
  }

  const source = await Source.create({ ...queryObj });

  if (!source) {
    throw new ValidationError("Unable to create a new source", 500);
  }

  return source;
};
