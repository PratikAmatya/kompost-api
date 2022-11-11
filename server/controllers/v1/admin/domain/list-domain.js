const domainService = require("../../../../services/v1/admin/domain");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "domain.list";
    if (req.decoded.permissions.includes(reqPermission)) {
      const domains = await domainService.listDomain();
      res.status(httpStatus.OK).json({
        message: "Success",
        data: domains,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
