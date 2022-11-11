const pickupService = require("../../../../services/v1/admin/pickup");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "pickup.get";

    if (req.decoded.permissions.includes(reqPermission)) {
      const pickup = await pickupService.getPickup(req.params.pickupId);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: pickup,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
