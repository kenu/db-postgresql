const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('land_base', {
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
    geom: {
      type: DataTypes.GEOMETRY('GEOMETRY', 0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'land_base',
    schema: 'land',
    timestamps: false,
    indexes: [
      {
        name: "index_geom_land_base",
        fields: [
          { name: "geom" },
        ]
      },
      {
        name: "index_x_y_land_base",
        fields: [
          { name: "x" },
          { name: "y" },
        ]
      },
    ]
  });
};
