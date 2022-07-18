const loginService = require('../Services/loginService');

const loginController = async (req, res, next) => {
  try {
    const data = await loginService.loginService(req.body);
    if (data.status) {
      return res.status(data.status).json(data.message);
    }
    const validateUser = await loginService.validateUser(req.body);
    if (validateUser.status) {
      return res.status(validateUser.status).json(validateUser.message);
    }
    const token = await loginService.generateToken(validateUser);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
};
