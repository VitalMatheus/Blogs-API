const Joi = require('joi');
const jwt = require('jsonwebtoken');
const model = require('../database/models');

const validateUser = async (infos) => {
  const Schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string(),
  });
  const validate = Schema.validate(infos);
  const { error, value } = validate;
  
  if (error) {
    return { status: 400, message: { message: error.message } };
  }

  return value;
};

const validateEmail = async (infos) => {
  const { email } = infos;
  const data = await model.User.findOne({
    where: { email },
    raw: true,
  });
  if (!data) {
    const { password: ANY, ...object } = infos;
    return object;
  }
  return { status: 409, message: { message: 'User already registered' } };
};

const createUser = async (newUser) => {
  const user = await model.User.create(newUser);
  return user;
};

const generateToken = async (infos) => {
  const token = jwt.sign({ data: infos }, process.env.JWT_SECRET);
  return token;
};

module.exports = {
  validateUser,
  validateEmail,
  createUser,
  generateToken,
};