const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userLog', {
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
    type: {
      type: DataTypes.SMALLINT,
      allowNull: false
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
    tableName: 'userLog',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "userlog_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
      {
        name: "userlog_userpk",
        fields: [
          { name: "userPk" },
        ]
      },
    ]
  });
};
