const Phone = require("../models/phone.model");

const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");


// GET ALL PHONES
exports.getPhones = catchAsync(async (req, res, next) => {
  const phones = await Phone.find();

  res.status(200).json({
    status: "success",
    results: phones.length,
    data: phones,
  });
});


// GET SINGLE PHONE
exports.getPhone = catchAsync(async (req, res, next) => {
  const phone = await Phone.findById(req.params.id);

  if (!phone) {
    return next(new AppError("Phone not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: phone,
  });
});


// CREATE PHONE
exports.createPhone = catchAsync(async (req, res, next) => {
  const newPhone = await Phone.create(req.body);

  res.status(201).json({
    status: "success",
    data: newPhone,
  });
});


// UPDATE PHONE
exports.updatePhone = catchAsync(async (req, res, next) => {
  const updatedPhone = await Phone.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedPhone) {
    return next(new AppError("Phone not found", 404));
  }

  res.status(200).json({
    status: "success",
    data: updatedPhone,
  });
});


// DELETE PHONE
exports.deletePhone = catchAsync(async (req, res, next) => {
  const deletedPhone = await Phone.findByIdAndDelete(
    req.params.id
  );

  if (!deletedPhone) {
    return next(new AppError("Phone not found", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});