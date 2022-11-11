const { Project } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Project
 * It will get a Project.
 * @param queryObj
 * @returns {Promise<Project>}
 */
module.exports = async (projectId) => {
  const project = await Project.findOne({
    where: {
      id: projectId,
      active: true,
    },
  });
  if (!project) {
    throw new ValidationError("Unable to find the project", 404);
  }

  return project;
};
