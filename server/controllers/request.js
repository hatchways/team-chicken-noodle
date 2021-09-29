const Request = require("../models/Request");
const asyncHandler = require("express-async-handler");

exports.requestList = asyncHandler(async (req, res, next) => {
  let requests;

  requests = await Request.find({});

  if (!requests) {
    res.status(404);
    throw new Error("No requests found");
  }

  res.status(200).json({ requests: requests });
});

exports.requestCreate = asyncHandler(async (req, res, next) => {
  const { userId, sitterId, start, end } = req.body

  Request.create({
    userId,
    sitterId,
    start: new Date(start),
    end: new Date(end),
  },(err, result)=>{
    if (err) {
      res.status(404).json({ error: 'Error occurred'});
      throw new Error(`Error occurred: ${err}`);
    }
  });

  res.status(200).json({ message: 'request created'});
});

exports.requestUpdate = asyncHandler(async (req, res, next) => {
  const { userId,
    sitterId,
    start,
    end,
    status
  } = req.body

  query = await Request.updateOne({
    userId,
    sitterId,
    start: new Date(start),
    end: new Date(end),
  },{
    status
  }, (err, result)=>{
    if(err){
      res.status(404).json({ error: 'Error occurred'});
      throw new Error("Error occurred")
    }
  });

  res.status(200).json({ message: `request updated` });
});
