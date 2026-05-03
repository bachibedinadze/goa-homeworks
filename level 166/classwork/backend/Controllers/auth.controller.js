const Users = require("../models/users.model");

const catchAsync = require("../utils/catchAsync");


// SIGN UP
exports.signUp = catchAsync(async (req, res, next) => {
  const newUser = await Users.create({
    fullname: req.body.fullname,
    email: req.body.email,
    password: req.body.password,
  });

  res.status(201).json({
    status: "success",
    data: {
      user: newUser,
    },
  });
});