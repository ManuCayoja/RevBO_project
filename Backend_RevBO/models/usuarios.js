"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const usuario = sequelize.define(
    "usuario",
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
      apellido: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING(100),
      },
    },
    {
      timestamps: false,
      tableName: "usuarios",
    }
  );

  usuario.getUsuarios = async (params) => {
    
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  usuario.associate = function (models) {
    // profesor.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return usuario;
};

