const router = require("express").Router();
const projectController = require('../../../controllers/v1/admin/project');

router
  .route("/")
  .get(projectController.listProject)
  .post(projectController.createProject);

router
  .route("/:projectId")
  .get(projectController.getProject)
  .delete(projectController.deleteProject)
  .patch(projectController.updateProject);

module.exports = router;
