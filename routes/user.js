const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync =  require("../utils/wrapAsync.js");
const ExpressError =  require("../utils/ExpressError.js");
const User = require("../models/user.js");
const e = require("connect-flash");
const passport = require("passport");

const userController = require("../controllers/users.js");
//singup

router.get("/signup", userController.renderSignupForm );

router.post("/signup", wrapAsync(userController.signup));

//login

router.get("/login", userController.renderLoginForm);

router.post("/login",
    passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}),
    userController.login);

router.get("/logout", userController.logout);

module.exports = router;