const { ProjectSource } = require("../../../../models");
const { Op } = require("sequelize");
const { ValidationError } = require("../../../../errors");

/**
 * Update a ProjectSource
 * It will update a ProjectSource.
 * @param queryObj
 * @returns {Promise<ProjectSource>}
 */
module.exports = async (projectSourceId, queryObj) => {
  const projectSource = await ProjectSource.findOne({
    where: {
      id: projectSourceId,
      active: true,
    },
  });

  if (!projectSource) {
    throw new ValidationError("Unable to find the projectSource.", 404);
  }

  const duplicateProjectSource = await ProjectSource.findOne({
    where: {
      name: queryObj.name,
      active: true,
      id: {
        [Op.ne]: projectSource.dataValues.id,
      },
    },
  });

  if (duplicateProjectSource) throw new ValidationError("Duplicate ProjectSource Name", 403);

  projectSource.name = queryObj.name;
  await projectSource.save();

  return projectSource;
};
