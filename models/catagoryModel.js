const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category is required"],
      unique: [true, "Category must be unique"],
      minlength: [3, "Category name is too short"],
      maxlength: [33, "Category name is too long"],
    },
    slug: {
      type: String,
      lowercase: true,
      required: [true, "Slug is required"],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("Category", categorySchema);

module.exports = CategoryModel;
