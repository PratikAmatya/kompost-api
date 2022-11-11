const { Project } = require("../../../../models");

/**
 * List all Projects
 * It will list all Projects.
 * @returns {Promise<Array<Project>>}
 */
module.exports = async () => {
  const projects = await Project.findAll({
    where: {
      active: true,
    },
  });

  return projects;
};
