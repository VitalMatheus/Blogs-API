const express = require('express');
const login = require('../Controllers/loginController');

const loginUser = express.Router();

loginUser.post('/', login.loginController);

module.exports = loginUser;