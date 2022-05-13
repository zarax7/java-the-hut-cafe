var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
var logger = require("morgan");
var methodOverride = require("method-override");

require("dotenv").config();
require("./config/passport");

var indexRouter = require("./routes/index");
var productRouter = require("./routes/products");
var cartRouter = require("./routes/cart");
var userRouter = require("./routes/users");
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
  session({
    secret: "JAVAHUT!",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", userRouter);
app.use("/", indexRouter);
app.use("/", productRouter);
app.use("/", cartRouter);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
app.get("/menu", function (req, res) {
  res.render("/user");
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
