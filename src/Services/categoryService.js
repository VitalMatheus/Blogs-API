const Joi = require('joi');
const model = require('../database/models');

const insertCategory = async (name) => {
  const Schema = Joi.object({
    name: Joi.string().required(),
  });
  const validate = Schema.validate(name);
  const { error } = validate;

  if (error) return { status: 400, message: { message: error.message } };
  
  const category = await model.Category.create(name);
  return category;
};

const getAll = async () => {
  const data = await model.Category.findAll();
  return data;
};

module.exports = {
  insertCategory,
  getAll,
};