const orderRoute = require("./order");
const pickupRoute = require("./pickup");

const router = new require("express").Router();

router.use((req, res, next) => {
  const roles = req.decoded.roles;

  if (roles.includes("member")) {
    next();
  } else {
    res.status(403).json({
      message: "Action not permitted",
    });
  }
});

router.use("/order", orderRoute);
router.use("/pickup", pickupRoute);

module.exports = router;
