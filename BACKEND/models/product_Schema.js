const mongoose = require("mongoose");

var product_Schema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    productImage: {
      type: String,
    },
    color: {
      type: String,
    },
    rating: {
      type: Number,
    },
    mrp: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("product_Schema", product_Schema);
