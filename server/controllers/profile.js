const Profile = require("../models/Profile");
const asyncHandler = require("express-async-handler");

// @route POST /profile/create
// @desc create a profile
// @access Private
exports.createProfile = asyncHandler(async (req, res, next) => {
    const {
        userId,
        firstName,
        lastName,
        description,
        gender,
        address,
        birthDate,
        email,
        phoneNumber,
        isAvailable,
        availability
    } = req.body
    
    const profile = await Profile.create({
        userId,
        firstName,
        lastName,
        description,
        gender,
        birthDate,
        email,
        phoneNumber,
        address,
        isAvailable,
        availability,
    })

    if(!profile) {
        res.status(400);
        throw new Error("Invalid request data");
    }
    
     res.status(201).json({
        success: true,
        data: profile
    });
  });

// @route GET /profile/
// @desc find all profiles
// @access Private
exports.findAllProfiles= asyncHandler(async (req, res, next) => {
    const profiles = await Profile.find();

    if(!profiles) {
        res.status(404);
        throw new Error(`Cannot find user profile.`);
    }  

    res.status(200).json({
      success: true,
      data: profiles
    });
});

// @route GET /profile/:id
// @desc find a profile
// @access Private
exports.findProfileById = asyncHandler(async (req, res, next) => {
    const id = req.params.id;

    const profile = await Profile.findOne({ userId:id });

    if(!profile) {
        res.status(404);
        throw new Error(`Cannot find a user profile with this ${id} id.`);
    }  

    res.status(200).json({
        success: true,
        data: profile
    });
});
  
// @route PUT /profile/update
// @desc update a profile
// @access Private
exports.updateProfile = asyncHandler(async (req, res, next) => {
    const query = req.query;
    const userId = query.id;
    delete query['id'];
    
    const profiles = await Profile.findOneAndUpdate(userId, query, {new: true});
    
    if(!profiles) {
        res.status(404);
        throw new Error(`Cannot find a user profile.`);
    }

    res.status(200).json({
        success: true,
        data: profiles
    });
});