const model = require('../database/models');

const getAll = async () => {
  const data = await model.BlogPost.findAll({
    include: [{
      model: model.User, as: 'user', attributes: { exclude: ['password'] },
    }, {
      model: model.Category, as: 'categories', through: { attributes: [] },
    }],
  });
  // referência: https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/#:~:text=User.findAll(%7B%0A%20%20include%3A%20%7B%0A%20%20%20%20model%3A%20Task%2C%0A%20%20%20%20required%3A%20true%0A%20%20%7D%0A%7D)%3B
  // console.log(data);
  return data;
};

const findById = async (id) => {
  const data = await model.BlogPost.findOne({
    include: [{
      model: model.User, as: 'user', attributes: { exclude: ['password'] },
    }, {
      model: model.Category, as: 'categories', through: { attributes: [] },
    }],
    where: { id },
  });

  if (!data) return { status: 404, message: { message: 'Post does not exist' } };
  return data;
};

module.exports = {
  getAll,
  findById,
};