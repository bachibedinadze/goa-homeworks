const express = require("express");

const {
  getPhones,
  createPhone,
} = require("../controllers/phoneController");

const router = express.Router();

router
  .route("/")
  .get(getPhones)
  .post(createPhone);

module.exports = router;