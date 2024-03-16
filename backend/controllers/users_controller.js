const asyncHandler = require("express-async-handler");
const user = require("../models/users_model");
const bcrypt = require("bcryptjs");
const passport = require("passport")

exports.sign_up = asyncHandler(async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const hashed_password = await bcrypt.hash(password, 10);

  const is_username = await user.find({ username: username });
  if (is_username.length > 0) {
    return res.status(400)
  }

  const added_user = new user({
    username: username,
    password: hashed_password,
  });

  const result = await added_user.save();
  res.redirect("/login");
});

exports.login = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true,
});
