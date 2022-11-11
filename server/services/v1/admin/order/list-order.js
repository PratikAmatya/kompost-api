const { Order } = require("../../../../models");

/**
 * List all Orders
 * It will list all Orders.
 * @returns {Promise<Array<Order>>}
 */
module.exports = async () => {
  const orders = await Order.findAll();

  return orders;
};
