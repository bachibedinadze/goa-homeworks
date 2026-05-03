const User = require("../models/user.model");

const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");


// SIGN UP
exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    role: req.body.role,
  });

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});