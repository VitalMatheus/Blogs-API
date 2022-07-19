const express = require('express');
const categoryController = require('../Controllers/categoryController');

const Category = express.Router();

Category.post('/', categoryController.categoryController);
Category.get('/', categoryController.getAll);

module.exports = Category;