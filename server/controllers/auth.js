const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc      Register user
// @route     POST /api/auth/register
// @access    Public
exports.register = asyncHandler(async (req, res, next) => {
  const { name, email, password, phone, age, gender } = req.body;

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    phone,
    age,
    gender,
    membershipStatus: 'pending',
  });

  sendTokenResponse(user, 200, res);
});

// @desc      Login user
// @route     POST /api/auth/login
// @access    Public
exports.login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  // Validate email & password
  if (!email || !password) {
    return next(new ErrorResponse('Please provide an email and password', 400));
  }

  // Check for user
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  // Check if password matches
  const isMatch = await user.matchPassword(password);

  if (!isMatch) {
    return next(new ErrorResponse('Invalid credentials', 401));
  }

  sendTokenResponse(user, 200, res);
});

// @desc      Get current logged in user
// @route     GET /api/auth/me
// @access    Private
exports.getMe = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    data: user,
  });
});

// @desc      Update membership
// @route     PUT /api/auth/membership
// @access    Private
exports.updateMembership = asyncHandler(async (req, res, next) => {
  const { goal, plan } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      membershipInfo: {
        goal,
        plan,
      },
      membershipStatus: 'active',
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: user,
  });
});

// Get token from model, create cookie and send response
const sendTokenResponse = (user, statusCode, res) => {
  // Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }

  res
    .status(statusCode)
    .cookie('token', token, options)
    .json({
      success: true,
      token,
    });
};

// @desc      Update user details
// @route     PUT /api/auth/update
// @access    Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const { height, weight, fitnessGoal } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user.id,
    {
      height,
      weight,
      fitnessGoal,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    success: true,
    data: user,
  });
});
