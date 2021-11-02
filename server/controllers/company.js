const Company = require("../models/Company");
const Product = require("../models/Product");
const Review = require("../models/Review");
const asyncHandler = require("express-async-handler");

// @route Post /company/create
// @desc create company
// @access Private
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

// @route Post /company/:id/add-review
// @desc add review to the company
// @access Private
exports.addReview = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;

  const { review, rating } = req.body;
  const { id } = req.params;

  const company = await Company.findById(id);
  if (company) {
    const newReview = await Review.create({
      review,
      rating,
      userId,
    });
    company.reviews.push(newReview);
    await company.save();
    res.status(201).json({ message: "review added", newReview });
  } else {
    res.status(201).json({ message: "invalid company" });
  }
});

// @route Post /company/:id/update
// @desc update company info
// @access Private
exports.updateCompany = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const { name } = req.body;
  const { id } = req.params;

  const company = await Company.findById(id);

  if (company.owner != userId) {
    res.status(200).json({
      message: "cannot update company of other owner",
      company,
    });
  } else {
    company.name = name;
    await company.save();
    res.status(200).json({ message: "company updated", company });
  }
});

// @route Post /company/:id/add-product
// @desc add product to the company
// @access Private
exports.addProduct = asyncHandler(async (req, res, next) => {
  const userId = req.user.id;
  const { name, description, stock, price } = req.body;
  const { id } = req.params;

  const company = await Company.findById(id);
  if (company && company.owner == userId) {
    const product = await Product.create({
      name,
      description,
      stock,
      price,
      company: id,
    });
    company.products.push(product);
    await company.save();
    res.status(201).json({ message: "product added", product });
  } else {
    res.status(201).json({ message: "invalid company" });
  }
});

// @route Post /company/:id/list-products
// @desc list products of specified company
// @access Private
exports.listProducts = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const company = await Company.findById(id);
  if (company) {
    await company.populate("products").execPopulate();
    res.status(200).json({
      message: "populated products",
      products: company.products,
    });
  } else {
    res.status(200).json({ message: "invalid company" });
  }
});
