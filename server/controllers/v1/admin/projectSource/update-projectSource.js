const projectSourceService = require("../../../../services/v1/admin/projectSource");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "projectSource.update";
    if (req.decoded.permissions.includes(reqPermission)) {
      const projectSource = await projectSourceService.updateProjectSource(
        req.params.projectSourceId,
        req.body
      );

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
