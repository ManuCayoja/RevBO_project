'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      latitud: {
        type: Sequelize.FLOAT
      },
      longitud: {
        type: Sequelize.FLOAT
      },
      fk_categoria: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "categorias"
          },
          key: "id",
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('empresas');
  }
};