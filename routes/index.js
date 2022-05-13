var express = require("express");
var router = express.Router();
const javahutCtrl = require("../controllers/javahut");
const db = require("../config/database");
const passport = require("passport");

router.get("/home", javahutCtrl.home);

router.get("/menu", javahutCtrl.menu);

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/oauth2callback",
  passport.authenticate("google", {
    successRedirect: "/user",
    failureRedirect: "/user",
  })
);
router.get("/logout", function (req, res) {
  req.logOut();
  res.redirect("/user");
});

module.exports = router;
