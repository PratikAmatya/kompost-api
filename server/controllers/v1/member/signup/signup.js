const httpStatus = require("http-status");

const jwt = require("jsonwebtoken");

const memberService = require("../../../../services/v1/member/signup");

module.exports = async (req, res, next) => {
  try {
    const { user, roles, permission } = await memberService.signup(req.body);

    const permissions = [];

    for (let i = 0; i < permission.length; i++) {
      permissions.push(permission[i].dataValues.permissionId);
    }

    const token = jwt.sign(
      {
        id: user.id,
        phone: user.phone,
        roles,
        permissions,
      },
      process.env.SECRET,
      { expiresIn: "24h" }
    );

    const { password, ...restMember } = user.dataValues;

    res.status(httpStatus.OK).json({
      message: "Success",
      member: restMember,
      permissions,
      token,
    });
  } catch (err) {
    next(err);
  }
};
