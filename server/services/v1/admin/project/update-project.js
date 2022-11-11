const { Project } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Project
 * It will update a Project.
 * @param queryObj
 * @returns {Promise<Project>}
 */
module.exports = async (projectId, queryObj) => {
  const project = await Project.findOne({
    where: {
      id: projectId,
      active: true,
    },
  });

  if (!project) {
    throw new ValidationError("Unable to find the project.", 404);
  }

  const duplicateProject = await Project.findOne({
    where: {
      name: queryObj.name,
      active: true,
      id: {
        [Op.ne]: project.dataValues.id,
      },
    },
  });

  if (duplicateProject) throw new ValidationError("Duplicate Project Name", 403);

  project.name = queryObj.name;
  await project.save();

  return project;
};
