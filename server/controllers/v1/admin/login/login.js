const jwt = require("jsonwebtoken");
const loginService = require("../../../../services/v1/admin/login");

module.exports = async (req, res, next) => {
  try {
    const { user, roles, permission } = await loginService.login(req.body);

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

    return res.status(200).json({
      message: "success",
      data: {
        admin: restMember,
        permissions,
        token,
      },
    });
  } catch (err) {
    next(err);
  }
};
