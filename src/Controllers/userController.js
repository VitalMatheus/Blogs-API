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

module.exports = {
  userController,
};