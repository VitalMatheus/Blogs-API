const Joi = require('joi');
const jwt = require('jsonwebtoken');
const loginModel = require('../database/models');

const loginService = async (user) => {
  const Schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
  const validate = Schema.validate(user);
  if (validate.error) {
    return { status: 400, message: { message: 'Some required fields are missing' } };
  }
  return true;
};

const validateUser = async (user) => {
  const { email, password } = user;
  const data = await loginModel.User.findOne({
    where: { email },
    raw: true,
  });
  if (!data || password !== data.password) {
    return { status: 400, message: { message: 'Invalid fields' } };
  }
  const { password: ANY, ...object } = data;
  return object;
};

const generateToken = async (infos) => {
  const token = jwt.sign({ data: infos }, process.env.JWT_SECRET);
  return token;
};

module.exports = {
  loginService,
  validateUser,
  generateToken,
};
