const router = require("express").Router();
const domainController = require("../../../controllers/v1/admin/domain");

router
  .route("/")
  .get(domainController.listDomain)
  .post(domainController.createDomain);

router
  .route("/:domainId")
  .get(domainController.getDomain)
  .delete(domainController.deleteDomain)
  .patch(domainController.updateDomain);

module.exports = router;
