const express = require("express");
const router = express.Router();
const authControllers = require("../controllers/auth/authControllers");
const joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");

const registerSchema = joi.object({
  username: joi.string().min(3).max(12).required(),
  mail: joi.string().email().required(),
  password: joi.string().min(6).max(12).required(),
});

const loginSchema = joi.object({
  mail: joi.string().email().required(),
  password: joi.string().min(6).max(12).required(),
});

router.post(
  "/register",
  validator.body(registerSchema),
  authControllers.postRegister
);

router.post("/login", validator.body(loginSchema), authControllers.postLogin);

//test route to verify if our middleware is working
router.get("/test", auth, (req, res) => {
  res.send("request passed");
});

module.exports = router;
