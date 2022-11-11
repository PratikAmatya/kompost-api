const router = require("express").Router();
const pickupController = require("../../../controllers/v1/admin/pickup");

router
  .route("/")
  .get(pickupController.listPickup)
  .post(pickupController.createPickup);

router
  .route("/:pickupId")
  .get(pickupController.getPickup)
  .delete(pickupController.deletePickup)
  .patch(pickupController.updatePickup);

module.exports = router;
