const categoryService = require('../Services/postService');

const getAll = async (_req, res, next) => {
  try {
    const data = await categoryService.getAll();
    if (data.status) {
      return res.status(data.status).json(data.message);
    }
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
};
