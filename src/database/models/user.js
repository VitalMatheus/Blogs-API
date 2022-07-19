const User = (sequelize, DataTypes) => {
  const tableUser = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  }, { timestamps: false });

  tableUser.associate = (models) => {
    tableUser.hasMany(models.BlogPost,
      { foreignKey: 'userId', as: 'posts' });
    };


  return tableUser;
};

module.exports = User;