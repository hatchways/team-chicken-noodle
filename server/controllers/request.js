const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.requestList = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const requests = await Request.find({ userId: userId });

  res.status(200).json({ requests: requests });
});

exports.requestCreate = asyncHandler(async (req, res, next) => {
  const { sitterId, start, end } = req.body;
  const userId = req.user.id;

  const request = await Request.create({
    userId,
    sitterId,
    start: new Date(start),
    end: new Date(end),
  });

  res.status(200).json({
    message: "request created",
    request: request,
  });
});

exports.makePaymentIntent = asyncHandler(async (req, res, next) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "cad",
    });
    res.status(200).json({
      success: { clientSecret: paymentIntent.client_secret },
    });
  } catch (error) {
    res.status(400).json({
      error: { message: error.message },
    });
  }
});

exports.requestUpdate = asyncHandler(async (req, res, next) => {
  const { status } = req.body;
  const { id } = req.params;

  const request = await Request.findById(id);
  request.status = status;
  await request.save();

  res.status(201).json({
    message: "request updated",
    request: request,
  });
});
