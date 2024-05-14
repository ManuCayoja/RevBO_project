"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const resenia = sequelize.define(
    "resenia",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      puntuacion: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      comentario: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
      fecha: {
        allowNull: false,
        type: DataTypes.STRING(10),
      },
      fk_usuario: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "usuario",
          key: "id",
        },
      },
      fk_empresa: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "empresas",
          key: "id",
        },
      },
    },
    {
      timestamps: false,
      tableName: "resenias",
    }
  );

  resenia.getResenia = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  resenia.associate = function (models) {
    // materia.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return resenia;
};

