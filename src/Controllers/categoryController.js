const categoryService = require('../Services/categoryService');

const categoryController = async (req, res) => {
  try {
    const data = await categoryService.insertCategory(req.body);
      if (data.status) {
        return res.status(data.status).json(data.message);
      }
      return res.status(201).json(data);
  } catch (error) {
    return res.status(400).end();
  }
};

module.exports = {
  categoryController,
};