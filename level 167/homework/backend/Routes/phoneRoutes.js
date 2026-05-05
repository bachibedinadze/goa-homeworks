const express = require("express");

const {
  getPhones,
  getPhone,
  createPhone,
  updatePhone,
  deletePhone,
} = require("../controllers/phones.controller");

const router = express.Router();

router
  .route("/")
  .get(getPhones)
  .post(createPhone);

router
  .route("/:id")
  .get(getPhone)
  .patch(updatePhone)
  .delete(deletePhone);

module.exports = router;