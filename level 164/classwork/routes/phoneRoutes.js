const express = require("express");
const router = express.Router();
const deletePhone = require("./phoneRoutes");

router.delete("phone/:id", deletePhone)

module.exports = router;