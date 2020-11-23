'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('follower', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    follower: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    follower_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'id',
      },
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE',
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },

  }),


  down: async (queryInterface) => queryInterface.dropTable('follower')
};
