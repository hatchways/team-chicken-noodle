const Profile = require('../models/Profile');
const asyncHandler = require('express-async-handler');

// @route POST /profile/create
// @desc create a profile
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const profileExists = await Profile.findOne({ userId: userId });
  if (profileExists) {
    res.status(400);
    throw new Error('A user profile already registered');
  }

  const {
    firstName,
    lastName,
    description,
    gender,
    address,
    birthDate,
    phoneNumber,
    isAvailable,
    availability,
  } = req.body;

  const profile = await Profile.create({
    userId,
    firstName,
    lastName,
    description,
    gender,
    birthDate,
    phoneNumber,
    address,
    isAvailable,
    availability,
  });

  res.status(201).json({ profile });
});

// @route GET /profile/
// @desc find all profiles
// @access Private
exports.findAllProfiles = asyncHandler(async (req, res, next) => {
  const profiles = await Profile.find();

  res.status(200).json({ profiles });
});

// @route GET /profile/:id
// @desc find a profile
// @access Private
exports.findProfileById = asyncHandler(async (req, res, next) => {
  const id = req.user.id;

  const profile = await Profile.findOne({ userId: id });

  res.status(200).json({ profile });
});

// @route PUT /profile/update
// @desc update a profile
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
  const id = req.user.id;

  const profile = await Profile.findOneAndUpdate(
    { userId: id },
    { $set: req.body },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({ profile });
});
