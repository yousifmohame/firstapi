const slugify = require("slugify");
const asyncHandler = require('express-async-handler');
const CatagoryModel = require("../models/catagoryModel");
const CategoryModel = require("../models/catagoryModel");

exports.getCategories = asyncHandler(async(req, res) => {
  const categories = await CategoryModel.find({});
  res.status(200).json({result: categories.length, data: categories});
});

exports.createCategory =asyncHandler( async (req, res) => {
  const name = req.body.name;
  const category = await CatagoryModel.create({ name, slug: slugify(name) });
  res.status(201).json({ data: category });
});
