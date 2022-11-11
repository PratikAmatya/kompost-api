const domainService = require("../../../../services/v1/admin/domain");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "domain.delete";
    if (req.decoded.permissions.includes(reqPermission)) {
      const deleteStatus = await domainService.deleteDomain(
        req.params.domainId
      );

      if (deleteStatus) {
        res.status(httpStatus.OK).json({
          message: "Success",
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
