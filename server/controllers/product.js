const Product = require("../models/Product");
const asyncHandler = require("express-async-handler");

exports.createProduct = asyncHandler(async (req, res, next) => {
  const { name, description, stock, price, company } = req.body;

  const product = await Product.create({
    name,
    description,
    stock,
    price,
    company,
  });

  res.status(201).json({ message: "product created", product });
});

exports.updateProduct = asyncHandler(async (req, res, next) => {
  const { id, name, description, stock, price, company } = req.body;

  const product = await Product.findById(id);

  product.name = name;
  product.description = description;
  product.stock = stock;
  product.price = price;
  product.company = company;
  await product.save();

  res.status(200).json({ message: "product updated", product });
});
