'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      content: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      // Referência: https://github.com/sequelize/sequelize/issues/4679#:~:text=Hehe%20no%20problem,Thanks%20anyways
      published: {
        defaultValue: Sequelize.fn('NOW'), 
        allowNull: false,
        type: Sequelize.DATE
      },
      updated: {
        defaultValue: Sequelize.fn('NOW'), 
        allowNull: false,
        type: Sequelize.DATE
      }
    }, { timestamps: false });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};