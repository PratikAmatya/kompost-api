const router = require("express").Router();
const pickupController = require("../../../controllers/v1/pickup");

router.route("/").post(pickupController.createPickup);

module.exports = router;
