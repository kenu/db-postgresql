const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('land_item_backup', {
    pk: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    img_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    geom: {
      type: DataTypes.GEOMETRY('GEOMETRY', 0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'land_item_backup',
    schema: 'land',
    timestamps: false
  });
};
