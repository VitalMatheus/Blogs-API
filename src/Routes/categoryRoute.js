const express = require('express');
const categoryController = require('../Controllers/categoryController');

const Category = express.Router();

Category.post('/', categoryController.categoryController);

module.exports = Category;