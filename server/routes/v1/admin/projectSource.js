const router = require("express").Router();
const projectSourceController = require('../../../controllers/v1/admin/projectSource');

router
  .route("/")
  .get(projectSourceController.listProjectSource)
  .post(projectSourceController.createProjectSource);

router
  .route("/:projectSourceId")
  .get(projectSourceController.getProjectSource)
  .delete(projectSourceController.deleteProjectSource)
  .patch(projectSourceController.updateProjectSource);

module.exports = router;
