const pickupService = require("../../../../services/v1/admin/pickup");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "pickup.create";
    if (req.decoded.permissions.includes(reqPermission)) {
      const pickup = await pickupService.createPickup(req.body);
      res.status(httpStatus.OK).json({
        message: "success",
        data: pickup,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
