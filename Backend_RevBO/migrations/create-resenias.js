'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('resenias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      puntuacion: {
        type: Sequelize.STRING
      },
      comentario: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.STRING
      },
      fk_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuario"
          },
          key: "id",
        }
      },
      fk_empresa: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "empresas"
          },
          key: "id",
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('resenias');
  }
};