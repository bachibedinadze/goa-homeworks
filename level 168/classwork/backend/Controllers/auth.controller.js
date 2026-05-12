const User = require('../models/users.model');
const crypto = require('crypto');

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