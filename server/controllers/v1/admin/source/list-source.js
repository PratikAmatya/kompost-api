const sourceService = require("../../../../services/v1/admin/source");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "source.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const sources = await sourceService.listSource();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: sources,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
