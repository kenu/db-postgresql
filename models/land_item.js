const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('land_item', {
    pk: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    x: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    y: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tokenID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    size: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    geom: {
      type: DataTypes.GEOMETRY('GEOMETRY', 0),
      allowNull: true
    },
    img_url: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'land_item',
    schema: 'land',
    timestamps: false,
    indexes: [
      {
        name: "index_geom_land_item",
        fields: [
          { name: "geom" },
        ]
      },
      {
        name: "index_token_id_land_item",
        fields: [
          { name: "tokenID" },
        ]
      },
    ]
  });
};
