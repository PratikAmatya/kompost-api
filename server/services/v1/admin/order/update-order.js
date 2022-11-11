const { Order } = require("../../../../models");
const { ValidationError } = require("../../../../errors");

/**
 * Update a Order
 * It will update a Order.
 * @param queryObj
 * @returns {Promise<Order>}
 */
module.exports = async (orderId, queryObj) => {
  const order = await Order.findOne({
    where: {
      id: orderId,
    },
  });

  if (!order) {
    throw new ValidationError("Unable to find the Order.", 404);
  }

  const validOrderStatus = ["pending", "delivered", "cancelled"];

  if (!validOrderStatus.includes(queryObj.status)) {
    throw new ValidationError("Invalid Order Status", 403);
  }

  const { userId, ...rest } = queryObj;
  await order.update({ ...rest });

  return order;
};
