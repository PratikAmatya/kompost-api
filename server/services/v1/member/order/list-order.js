const { Order } = require("../../../../models");

/**
 * List all Orders
 * It will list all Orders.
 * @returns {Promise<Array<Order>>}
 */
module.exports = async (queryObj) => {
  const orders = await Order.findAll({
    where: {
      userId: queryObj.userId,
    },
  });

  return orders;
};
