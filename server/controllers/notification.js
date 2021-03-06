const asyncHandler = require("express-async-handler");
const Notification = require("../models/Notification");

// @route POST /notification/
// @desc create a notification
// @access Private
exports.createNotification = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { type, title, description, context } = req.body;
    const notification = await Notification.create({
      userId,
      type,
      title,
      description,
      context,
    });
    res.status(201).json({ message: "Notification created", notification });
  } catch (err) {
    res.status(500).json({
      message: "Failed to create a notification",
      error: err,
    });
  }
});

// @route GET /notification/
// @desc get all notification
// @access Private
exports.getAllNotification = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const notifications = await Notification.find({ userId: userId });
  res.status(200).json({
    message: "Successful in getting all notifications",
    success: notifications,
  });
});

// @route POST /notification/unread
// @desc get unread notification
// @access Private
exports.getUnreadNotification = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const unreadNotifications = await Notification.find({
    userId,
    read: false,
  });
  res.status(200).json({
    message: "Successful in getting unread notifications",
    success: unreadNotifications,
  });
});

// @route PATCH /notification/:id
// @desc update a notification
// @access Private
exports.updateNotification = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const id = req.params.id;
    const updatedNotification = await Notification.findOneAndUpdate(
      { userId, _id: id },
      { $set: req.body },
      { new: true, runValidators: true }
    );
    res.status(200).json({
      message: "Successfully updated the notification",
      updatedNotification,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to update a notification",
      error: err,
    });
  }
});

// @route PUT /notification/
// @desc update all unread notification of a user
// @access Private
exports.updateAllUnreadNotification = asyncHandler(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const update = req.body;
    const numberOfNotificationUpdated = await Notification.updateMany(
      { userId, read: false },
      { $set: update },
      { new: true }
    );
    res.status(200).json({
      message: "Successfully updated the notification",
      numberOfNotificationUpdated,
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to update unread notification",
      error: err,
    });
  }
});
