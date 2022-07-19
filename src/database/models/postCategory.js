module.exports = (sequelize, DataTypes) => {
  const tablePostCategory = sequelize.define('PostCategory',
    {
      postId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      },
      categoryId: {
        type: DataTypes.INTEGER,
        foreignKey: true
      }
    },
    { timestamps: false },
  );

  tablePostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'blogPost',
      through: tablePostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: tablePostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return tablePostCategory;
};

