const orderService = require("../../../../services/v1/member/order");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "order.create";
    if (req.decoded.permissions.includes(reqPermission)) {
      const order = await orderService.createOrder({
        ...req.body,
        userId: req.decoded.id,
      });
      res.status(httpStatus.OK).json({
        message: "success",
        data: order,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
