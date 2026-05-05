const express = require('express');
const router = express.Router();

const {
  signUp,
  verifyEmail
} = require('../controllers/auth.controller');

router.post('/signup', signUp);
router.get('/verify/:token', verifyEmail);

module.exports = router;