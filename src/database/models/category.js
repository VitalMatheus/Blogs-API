const Category = (sequelize, DataTypes) => {
  const tableCategory = sequelize.define("Category", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
  }, { timestamps: false });

  return tableCategory;
};

module.exports = Category;
