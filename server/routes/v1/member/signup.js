const express = require("express");

const router = new express.Router();

const signupController = require("../../../controllers/v1/member/signup");

router.post("/signup", signupController.signup);

module.exports = router;
