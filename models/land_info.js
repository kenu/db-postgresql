const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('land_info', {
    pk: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tokenID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    infoImage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    coverImage: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'land_info',
    schema: 'land',
    timestamps: false,
    indexes: [
      {
        name: "index_token_id_land_info",
        fields: [
          { name: "tokenID" },
        ]
      },
      {
        name: "land_info_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
      {
        name: "unique_token_id_land_info",
        unique: true,
        fields: [
          { name: "tokenID" },
        ]
      },
    ]
  });
};
