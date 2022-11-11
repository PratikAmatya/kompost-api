const { Order, User } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Delete a Order
 * It will delete a Order.
 * @param queryObj
 * @returns {Promise<Order>}
 */
module.exports = async (queryObj) => {
  const validUser = await User.findOne({
    where: {
      id: queryObj.userId,
      active: true,
    },
  });

  if (!validUser) {
    throw new ValidationError("Invalid User", 403);
  }

  const order = await Order.findOne({
    where: {
      id: queryObj.orderId,
      userId: queryObj.userId,
      active: true,
    },
  });

  if (!order) {
    throw new ValidationError("Unable to find the order.", 404);
  }

  order.status = "cancelled";

  await order.save();

  return order;
};
