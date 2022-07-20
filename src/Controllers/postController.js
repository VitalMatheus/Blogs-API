const postService = require('../Services/postService');

const getAll = async (_req, res, next) => {
  try {
    const data = await postService.getAll();
    if (data.status) {
      return res.status(data.status).json(data.message);
    }
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await postService.findById(id);
    const { status, message } = data;

    if (status) return res.status(status).json(message);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  findById,
};
