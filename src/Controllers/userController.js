const userService = require('../Services/userService');

const userController = async (req, res) => {
  try {
    const data = await userService.validateUser(req.body);
    if (data.status) {
      return res.status(data.status).json(data.message);
    }
    const validateEmail = await userService.validateEmail(req.body);
    if (validateEmail.status) {
      return res.status(validateEmail.status).json(validateEmail.message);
    }
    await userService.createUser(req.body);
    const token = await userService.generateToken(validateEmail);
    return res.status(201).json({ token });
  } catch (error) {
    res.status(400).end();
  }
};

const getAll = async (_req, res) => {
  const data = await userService.getAll();
  return res.status(200).json(data);
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await userService.findById(id);
    const { status, message } = data;

    if (status) return res.status(status).json(message);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  userController,
  getAll,
  findById,
};