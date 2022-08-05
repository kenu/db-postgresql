const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('land_log', {
    pk: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tokenID: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    json: {
      type: DataTypes.JSON,
      allowNull: true
    },
    ip: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'land_log',
    schema: 'land',
    timestamps: false,
    indexes: [
      {
        name: "land_log_pk",
        fields: [
          { name: "tokenID" },
        ]
      },
      {
        name: "land_log_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
};
