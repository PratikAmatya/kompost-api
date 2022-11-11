const domainService = require("../../../../services/v1/admin/domain");

const httpStatus = require("http-status");

const { ValidationError } = require("../../../../errors");

module.exports = async (req, res, next) => {
  try {
    const reqPermission = "domain.create";
    if (req.decoded.permissions.includes(reqPermission)) {
      const domain = await domainService.createDomain(req.body);
      res.status(httpStatus.OK).json({
        message: "Success",
        data: domain,
      });
    } else {
      throw new ValidationError("No Permission", 403);
    }
  } catch (err) {
    next(err);
  }
};
