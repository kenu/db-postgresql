const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('notifications', {
    pk: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false
    },
    userPk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    toUserPk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    relationPk: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    json: {
      type: DataTypes.JSON,
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'notifications',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "notifications_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
      {
        name: "notifications_userpk",
        fields: [
          { name: "userPk" },
        ]
      },
    ]
  });
};
