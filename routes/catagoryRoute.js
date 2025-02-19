const express = require('express');
const { getCategories, createCategory } = require('../services/catagoryService');

const router = express.Router();

router.route('/').get(getCategories).post(createCategory);

module.exports = router;
