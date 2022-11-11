const { Order, User } = require("../../../../models");

const { ValidationError } = require("../../../../errors");

/**
 * Create a Order
 * It will create a new Order
 * @param queryObj
 * @returns {Promise<Order>}
 */

module.exports = async (queryObj) => {
  const userExists = await User.findOne({
    where: {
      id: queryObj.userId,
      active: true,
    },
  });

  if (!userExists) {
    throw new ValidationError("Invalid User", 403);
  }

  const validPaymentMethods = ["COD", "online"];
  const validOrderStatus = ["pending", "delivered", "cancelled"];

  if (!validPaymentMethods.includes(queryObj.paymentMethod)) {
    throw new ValidationError("Invalid Payment Method", 403);
  }

  if (!validOrderStatus === "pending") {
    throw new ValidationError("Invalid Order Status", 403);
  }

  const order = await Order.create({ ...queryObj });

  if (!order) {
    throw new ValidationError("Unable to create a new order", 500);
  }

  return order;
};
