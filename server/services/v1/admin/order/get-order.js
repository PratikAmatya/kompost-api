const { Order } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Get a Order
 * It will get a Order.
 * @param queryObj
 * @returns {Promise<Order>}
 */
module.exports = async (orderId) => {
  const order = await Order.findOne({
    where: {
      id: orderId,
    },
  });
  if (!order) {
    throw new ValidationError("Unable to find the source", 404);
  }

  return order;
};
