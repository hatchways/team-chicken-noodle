const Company = require("../models/Company");
const asyncHandler = require("express-async-handler");

exports.createCompany = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const { name, products } = req.body;

  const company = await Company.create({
    name,
    products,
    owner: userId,
  });

  res.status(201).json({ message: "company created", company });
});

exports.updateCompany = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const { id, name, owner } = req.body;

  const company = await Company.findById(id);

  if (company.owner !== userId) {
    res.status(200).json({
      message: "cannot update company of other owner",
      company,
    });
  }

  company.name = name;
  company.owner = owner;
  await company.save();

  res.status(200).json({ message: "company updated", company });
});
