const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
    stock: Number,
    price: Number,
    company: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "company",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Product = mongoose.model("product", productSchema);
