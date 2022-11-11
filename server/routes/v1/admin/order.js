const router = require("express").Router();
const orderController = require("../../../controllers/v1/admin/order");

router
  .route("/")
  .get(orderController.listOrder)
  .post(orderController.createOrder);

router
  .route("/:orderId")
  .get(orderController.getOrder)
  .delete(orderController.deleteOrder)
  .patch(orderController.updateOrder);

module.exports = router;
