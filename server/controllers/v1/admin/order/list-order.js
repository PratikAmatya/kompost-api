const orderService = require("../../../../services/v1/admin/order");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "order.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const orders = await orderService.listOrder();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: orders,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
