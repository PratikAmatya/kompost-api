const projectSourceService = require("../../../../services/v1/admin/projectSource");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "projectSource.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const projectSources = await projectSourceService.listProjectSource();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: projectSources,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
