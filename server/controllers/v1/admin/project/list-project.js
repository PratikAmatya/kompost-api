const projectService = require("../../../../services/v1/admin/project");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "project.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const projects = await projectService.listProject();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: projects,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
