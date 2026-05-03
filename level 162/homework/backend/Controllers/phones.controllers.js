const fs = require("fs");
const path = require("path");

const WriteFile = require("../utils/writeFile");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const filePath = path.join(__dirname, "../data/phones.json");


// GET ALL PHONES
exports.getPhones = catchAsync(async (req, res, next) => {
  const data = JSON.parse(fs.readFileSync(filePath));

  res.status(200).json({
    status: "success",
    results: data.length,
    data,
  });
});


// CREATE PHONE
exports.createPhone = catchAsync(async (req, res, next) => {
  const phones = JSON.parse(fs.readFileSync(filePath));

  const newPhone = req.body;

  if (!newPhone.productName || !newPhone.brand) {
    return next(new AppError("productName and brand are required", 400));
  }

  phones.push(newPhone);

  WriteFile(filePath, phones);

  res.status(201).json({
    status: "success",
    data: newPhone,
  });
});