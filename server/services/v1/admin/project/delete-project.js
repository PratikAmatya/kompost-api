const { Project } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Project
 * It will delete a Project.
 * @param projectId
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
    throw new ValidationError("Unable to find the project.", 404);
  }

  project.active = false;

  await project.save();

  return project;
};
