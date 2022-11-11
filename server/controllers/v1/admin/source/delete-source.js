const sourceService = require("../../../../services/v1/admin/source");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "source.delete";
    if (req.decoded.permissions.includes(reqPermission)) {
      const deleteStatus = await sourceService.deleteSource(
        req.params.sourceId
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
