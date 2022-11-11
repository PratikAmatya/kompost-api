const {
  Project,
  Domain,
  ProjectSource,
  sequelize
} = require("../../../../models");

const {
  ValidationError
} = require("../../../../errors");

/**
 * Create a Project
 * It will create a new Project
 * @param createObj
 * @returns {Promise<Project>}
 */

module.exports = async (createObj) => {
  console.log(createObj.name);

  const tr = await sequelize.transaction({
    autocommit: true
  });


 // Checking validity of Project
 const duplicateProjectName = await Project.findOne({
  where: {
    name: createObj.name,
    active: true
  },
});

if (duplicateProjectName) {
  throw new ValidationError("Duplicate Project Name", 403);
}

 
  // Checking validity of Domain Id
  const domainExists = await Domain.findOne({
    where: {
      id: createObj.domainId,
      active: true
    },
  });

  if (!domainExists) {
    throw new ValidationError("Invalid Domain Id.", 403);
  }



  let project = await Project.create(createObj, {
    transaction: tr,
  });

  if (!project) {
    await tr.rollback();
    throw new ValidationError("Unable to create new project.", createObj);
  }

  if (!createObj.sources) {
    await tr.rollback();
    throw new ValidationError("Project sources not provided", createObj);

  }
  const projectSources = createObj.sources.map((projectSource) => {
    projectSource.projectId = project.dataValues.id;
    return projectSource;
  });
  const createdProjectSource = await ProjectSource.bulkCreate(projectSources, {
    transaction: tr,
  });

  if (!createdProjectSource) {
    await tr.rollback();
    throw new ValidationError("Unable to create new projectSource.", createObj);
  }

  await tr.commit();
  return {
    project,
    projectSource: createdProjectSource
  };
};