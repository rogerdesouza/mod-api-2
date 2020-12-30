'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('servibilidade', {
      id: {
        field: 'id',
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        field: 'descricao',
        type: Sequelize.STRING(50)
      },
      ativo: {
        field: 'ativo',
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        field: 'updated_at',
        allowNull: false,
        type: Sequelize.DATE
      }
    },
      {
        tableName: 'servibilidade',
        modelName: 'servibilidade'
      }
    )
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('servibilidade', null, {
      tableName: 'servibilidade'
    })
  }
};