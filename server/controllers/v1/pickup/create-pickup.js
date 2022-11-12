const pickupService = require("../../../services/v1/pickup");

const httpStatus = require("http-status");

module.exports = async (req, res, next) => {
  try {
    const pickup = await pickupService.createPickup(req.body);
    res.status(httpStatus.OK).json({
      message: "success",
      data: pickup,
    });
  } catch (err) {
    next(err);
  }
};
