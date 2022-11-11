const domainRoute = require("./domain");
const sourceRoute = require("./source");
const projectRoute = require("./project");

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

router.use("/domain", domainRoute);
router.use("/source", sourceRoute);
router.use("/project", projectRoute);

module.exports = router;
