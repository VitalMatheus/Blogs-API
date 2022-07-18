const express = require('express');
const userController = require('../Controllers/userController');

const User = express.Router();

User.post('/', userController.userController);
User.get('/', userController.getAll);

module.exports = User;