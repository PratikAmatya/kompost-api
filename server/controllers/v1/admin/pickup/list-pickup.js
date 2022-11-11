const pickupService = require("../../../../services/v1/admin/pickup");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "pickup.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const pickups = await pickupService.listPickup();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: pickups,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
