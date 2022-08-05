const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('config', {
    pk: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    googleVersion: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    iosVersion: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'config',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "config_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
};
