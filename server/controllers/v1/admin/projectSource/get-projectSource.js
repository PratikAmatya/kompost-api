const projectSourceService = require("../../../../services/v1/admin/projectSource");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "projectSource.get";

    if (req.decoded.permissions.includes(reqPermission)) {
      const projectSource = await projectSourceService.getProjectSource(req.params.projectSourceId);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: projectSource,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
