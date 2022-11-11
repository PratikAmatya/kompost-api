const { Order } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Order
 * It will delete a Order.
 * @param OrderId
 * @returns {Promise<Order>}
 */
module.exports = async (orderId) => {
  const order = await Order.findOne({
    where: {
      id: orderId,
    },
  });

  if (!order) {
    throw new ValidationError("Unable to find the order.", 404);
  }

  order.status = "cancelled";

  await order.save();

  return order;
};
