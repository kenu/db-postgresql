const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userAuth', {
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
      type: DataTypes.CHAR(1),
      allowNull: false
    },
    userToken: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    secretKey: {
      type: DataTypes.CHAR(36),
      allowNull: true
    },
    pushToken: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    os: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    versionCode: {
      type: DataTypes.SMALLINT,
      allowNull: true
    },
    versionName: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    language: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    timezone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    createTime: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'userAuth',
    schema: 'admin',
    timestamps: false,
    indexes: [
      {
        name: "userAuth_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
      {
        name: "userauth_userpk",
        fields: [
          { name: "userPk" },
        ]
      },
      {
        name: "userauth_usertoken",
        unique: true,
        fields: [
          { name: "userToken" },
        ]
      },
    ]
  });
};

