const { ProjectSource } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a ProjectSource
 * It will delete a ProjectSource.
 * @param projectSourceId
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
    throw new ValidationError("Unable to find the projectSource.", 404);
  }

  projectSource.active = false;

  await projectSource.save();

  return projectSource;
};
