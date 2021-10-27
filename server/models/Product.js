const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  stock: mongoose.Number,
  price: mongoose.Number,
  company: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "company",
  },
  timestamps: {
    createdAt: { type: Date, default: Date.now() },
    updatedAt: Date,
  },
});

module.exports = Product = mongoose.model("product", productSchema);
