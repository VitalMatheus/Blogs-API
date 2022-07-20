const express = require('express');
const userController = require('../Controllers/userController');
const validateToken = require('../helpers/middleware');

const User = express.Router();

User.post('/', userController.userController);
User.get('/:id', validateToken, userController.findById);
User.get('/', validateToken, userController.getAll);

module.exports = User;