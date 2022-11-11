const pickupService = require("../../../../services/v1/admin/pickup");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "pickup.update";
    if (req.decoded.permissions.includes(reqPermission)) {
      const pickup = await pickupService.updatePickup(
        req.params.pickupId,
        req.body
      );

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
