'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('following', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    following: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    following_id: {
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

  down: async (queryInterface) => queryInterface.dropTable('following')
};
