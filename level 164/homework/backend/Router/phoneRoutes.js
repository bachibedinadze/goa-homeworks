const express = require("express");

const {
  getPhones,
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
  .patch(updatePhone)
  .delete(deletePhone);

module.exports = router;