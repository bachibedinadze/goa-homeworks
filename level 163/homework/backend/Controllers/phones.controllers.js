const fs = require("fs");
const path = require("path");

const WriteFile = require("../utils/writeFile");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const filePath = path.join(__dirname, "../data/phones.json");


// GET ALL PHONES
exports.getPhones = catchAsync(async (req, res, next) => {
  const phones = JSON.parse(fs.readFileSync(filePath));

  res.status(200).json({
    status: "success",
    results: phones.length,
    data: phones,
  });
});


// CREATE PHONE
exports.createPhone = catchAsync(async (req, res, next) => {
  const phones = JSON.parse(fs.readFileSync(filePath));

  const newPhone = req.body;

  if (!newPhone.productName || !newPhone.brand) {
    return next(
      new AppError("productName and brand are required", 400)
    );
  }

  phones.push(newPhone);

  WriteFile(filePath, phones);

  res.status(201).json({
    status: "success",
    data: newPhone,
  });
});


// UPDATE PHONE
exports.updatePhone = catchAsync(async (req, res, next) => {
  const phones = JSON.parse(fs.readFileSync(filePath));

  const { id } = req.params;

  const phoneIndex = phones.findIndex(
    (phone) => phone.id === id
  );

  if (phoneIndex === -1) {
    return next(new AppError("Phone not found", 404));
  }

  phones[phoneIndex] = {
    ...phones[phoneIndex],
    ...req.body,
  };

  WriteFile(filePath, phones);

  res.status(200).json({
    status: "success",
    data: phones[phoneIndex],
  });
});


// DELETE PHONE
exports.deletePhone = catchAsync(async (req, res, next) => {
  const phones = JSON.parse(fs.readFileSync(filePath));

  const { id } = req.params;

  const phone = phones.find(
    (phone) => phone.id === id
  );

  if (!phone) {
    return next(new AppError("Phone not found", 404));
  }

  const filteredPhones = phones.filter(
    (phone) => phone.id !== id
  );

  WriteFile(filePath, filteredPhones);

  res.status(204).json({
    status: "success",
    data: null,
  });
});