const pickupService = require("../../../../services/v1/admin/pickup");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "pickup.delete";
    if (req.decoded.permissions.includes(reqPermission)) {
      const deleteStatus = await pickupService.deletePickup(
        req.params.pickupId
      );

      if (deleteStatus) {
        res.status(httpStatus.OK).json({
          message: "success",
        });
      } else {
        res.status(500).json({
          message: "Something went wrong",
        });
      }
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
