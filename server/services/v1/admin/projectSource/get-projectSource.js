const { ProjectSource } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a ProjectSource
 * It will get a ProjectSource.
 * @param queryObj
 * @returns {Promise<ProjectSource>}
 */
module.exports = async (projectSourceId) => {
  const projectSource = await ProjectSource.findOne({
    where: {
      id: projectSourceId,
      active: true,
    },
  });
  if (!projectSource) {
    throw new ValidationError("Unable to find the projectSource", 404);
  }

  return projectSource;
};
