const express = require('express');
const userController = require('../Controllers/userController');

const User = express.Router();

User.post('/', userController.userController);
User.get('/', userController.getAll);
User.get('/:id', userController.findById);

module.exports = User;