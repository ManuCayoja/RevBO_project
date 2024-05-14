"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const empresa = sequelize.define(
    "empresa",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      direccion: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      descripcion: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      latitud: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      longitud: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      fk_categoria: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "categorias",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      tableName: "empresas",
    }
  );

  empresa.getEmpresas = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  empresa.associate = function (models) {
    // estudiante.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return empresa;
};
