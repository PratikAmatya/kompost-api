const { Order } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Order
 * It will get a Order.
 * @param queryObj
 * @returns {Promise<Order>}
 */
module.exports = async (queryObj) => {
  const order = await Order.findOne({
    where: {
      id: queryObj.orderId,
    },
  });

  if (!order) {
    throw new ValidationError("Unable to find the order", 404);
  }

  if (order.userId !== queryObj.userId) {
    throw new ValidationError("You are not authorized to view this order", 403);
  }
  return order;
};
