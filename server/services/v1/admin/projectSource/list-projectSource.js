const { ProjectSource } = require("../../../../models");

/**
 * List all ProjectSources
 * It will list all ProjectSources.
 * @returns {Promise<Array<ProjectSource>>}
 */
module.exports = async () => {
  const projectSources = await ProjectSource.findAll({
    where: {
      active: true,
    },
  });

  return projectSources;
};
