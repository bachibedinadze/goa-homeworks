const User = require('../models/users.model');
const crypto = require('crypto');

const createSendToken = (user, statusCode, res) => {
  const token = user.signToken();

  res.status(statusCode).json({
    success: true,
    token,
    data: {
      user
    }
  });
};


/// signup
exports.signUp = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.create({ name, email, password });

    const token = user.createEmailVerificationToken();

    await user.save({ validateBeforeSave: false });

    const url = `${req.protocol}://${req.get('host')}/api/auth/verify/${token}`;

    console.log('VERIFY URL:', url);

    res.status(201).json({
      success: true,
      message: 'User created. Check console for verify link'
    });

  } catch (err) {
    next(err);
  }
};


/// verify email
exports.verifyEmail = async (req, res, next) => {
  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

    const user = await User.findOne({
      emailVerificationToken: hashedToken,
      emailVerificationExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: 'Token invalid or expired'
      });
    }

    user.emailVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpire = undefined;

    await user.save();

    res.status(200).json({
      success: true,
      message: 'Email verified successfully'
    });

  } catch (err) {
    next(err);
  }
};


/// login
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // check email and password
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please provide email and password'
      });
    }

    // check user
    const user = await User.findOne({ email }).select('+password');

    if (
      !user ||
      !(await user.comparePassword(password, user.password))
    ) {
      return res.status(401).json({
        success: false,
        message: 'Incorrect email or password'
      });
    }

    createSendToken(user, 200, res);

  } catch (err) {
    next(err);
  }
};