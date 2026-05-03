const mongoose = require("mongoose");

const phoneSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: [true, "Phone id is required"],
      unique: true,
    },

    productName: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
    },

    brand: {
      type: String,
      required: [true, "Brand is required"],
      trim: true,
    },

    model: {
      type: String,
      required: [true, "Model is required"],
      trim: true,
    },

    releaseYear: {
      type: Number,
      required: [true, "Release year is required"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },

    currency: {
      type: String,
      default: "USD",
    },

    specs: {
      display: String,

      processor: String,

      ram: Number,

      storage: Number,

      camera: Number,

      battery: Number,
    },

    options: [String],

    inStock: {
      type: Boolean,
      default: true,
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

const Phone = mongoose.model("Phone", phoneSchema);

module.exports = Phone;