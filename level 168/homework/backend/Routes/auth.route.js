const express = require('express');
const router = express.Router();

const {
  signUp,
  verifyEmail,
  login
} = require('../controllers/auth.controller');

router.post('/signup', signUp);

router.get('/verify/:token', verifyEmail);

router.post('/login', login);

module.exports = router;