const { ProjectSource, Project, Source } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a ProjectSource
 * It will create a new ProjectSource
 * @param queryObj
 * @returns {Promise<ProjectSource>}
 */

module.exports = async (queryObj) => {
  const projectExists = await Project.findOne({
    where: {
      id: queryObj.domainId
    },
  });

  if (!projectExists) {
    throw new ValidationError("The project with provided ID does not exist", queryObj);
  }

  const sourceExists = await Source.findOne({
    where: {
      id: queryObj.domainId
    },
  });

  if (!sourceExists) {
    throw new ValidationError("The source with provided ID does not exist", queryObj);
  }

  const projectSource = await ProjectSource.create({ ...queryObj });

  if (!projectSource) {
    throw new ValidationError("Unable to create a new projectSource", 500);
  }

  return projectSource;
};
