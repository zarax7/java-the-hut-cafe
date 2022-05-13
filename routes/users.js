var router = require("express").Router();
var usersCtrl = require("../controllers/users");
const passport = require("passport");

router.get("/user", usersCtrl.index);

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

module.exports = router;
