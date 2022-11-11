const projectSourceSourceService = require("../../../../services/v1/admin/projectSourceSource");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "projectSourceSource.delete";
    if (req.decoded.permissions.includes(reqPermission)) {
      const deleteStatus = await projectSourceSourceService.deleteProjectSourceSource(
        req.params.projectSourceSourceId
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
