const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync =  require("../utils/wrapAsync.js");
const ExpressError =  require("../utils/ExpressError.js");
const User = require("../models/user.js");
const e = require("connect-flash");
const passport = require("passport");

const userController = require("../controllers/users.js");

router.route("/signup")
        .get(userController.renderSignupForm)   // signup form render
        .post(wrapAsync(userController.signup));  //sign up

router.route("/login")
        .get(userController.renderLoginForm)   // login from render
        .post(passport.authenticate("local",   // login
            {failureRedirect: '/login', failureFlash: true}),userController.login);

router.get("/logout", userController.logout);


//signup
// router.get("/signup", userController.renderSignupForm );
// router.post("/signup", wrapAsync(userController.signup));

//login
// router.get("/login", userController.renderLoginForm);
// router.post("/login",
//     passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}),
//     userController.login);

module.exports = router;