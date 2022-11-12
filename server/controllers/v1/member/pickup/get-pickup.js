const pickupService = require("../../../../services/v1/member/pickup");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "pickup.get";

    if (req.decoded.permissions.includes(reqPermission)) {
      const pickup = await pickupService.getPickup({
        pickupId: req.params.pickupId,
        userId: req.decoded.id,
      });
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
