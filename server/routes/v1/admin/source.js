const router = require("express").Router();
const sourceController = require("../../../controllers/v1/admin/source");

router
  .route("/")
  .get(sourceController.listSource)
  .post(sourceController.createSource);

router
  .route("/:sourceId")
  .get(sourceController.getSource)
  .delete(sourceController.deleteSource)
  .patch(sourceController.updateSource);

module.exports = router;
