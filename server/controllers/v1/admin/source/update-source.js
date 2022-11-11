const sourceService = require("../../../../services/v1/admin/source");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "source.update";
    if (req.decoded.permissions.includes(reqPermission)) {
      const source = await sourceService.updateSource(
        req.params.sourceId,
        req.body
      );

      res.status(httpStatus.OK).json({
        message: "Success",
        data: source,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
