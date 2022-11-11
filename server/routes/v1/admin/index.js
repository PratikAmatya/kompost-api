const orderRoute = require("./order");

const router = new require("express").Router();

router.use((req, res, next) => {
  const roles = req.decoded.roles;

  if (roles.includes("administrator")) {
    next();
  } else {
    res.status(403).json({
      message: "Action not permitted",
    });
  }
});

router.use("/order", orderRoute);

module.exports = router;
