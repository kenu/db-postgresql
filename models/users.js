const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "users",
    {
      pk: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      uniqueKey: {
        type: DataTypes.CHAR(10),
        allowNull: false,
      },
      uid: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      provider: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(250),
        allowNull: false,
      },
      nick: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      walletAddress: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      dormant: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      withdrawal: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      paused: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      disabled: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 0,
      },
      public: {
        type: DataTypes.SMALLINT,
        allowNull: false,
        defaultValue: 1,
      },
      createTime: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      profileImage: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      userID: {
        type: DataTypes.STRING(150),
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "users",
      schema: "public",
      timestamps: false,
      indexes: [
        {
          name: "index_user_address_trgm",
          fields: [{ name: "walletAddress" }],
        },
        {
          name: "users_disabled",
          fields: [{ name: "disabled" }],
        },
        {
          name: "users_dormant",
          fields: [{ name: "dormant" }],
        },
        {
          name: "users_email",
          unique: true,
          fields: [{ name: "email" }],
        },
        {
          name: "users_nick",
          unique: true,
          fields: [{ name: "nick" }],
        },
        {
          name: "users_paused",
          fields: [{ name: "paused" }],
        },
        {
          name: "users_pkey",
          unique: true,
          fields: [{ name: "pk" }],
        },
        {
          name: "users_public",
          fields: [{ name: "public" }],
        },
        {
          name: "users_uid",
          unique: true,
          fields: [{ name: "uid" }],
        },
        {
          name: "users_uniquekey",
          unique: true,
          fields: [{ name: "uniqueKey" }],
        },
        {
          name: "users_userID",
          unique: true,
          fields: [{ name: "userID" }],
        },
        {
          name: "users_withdrawal",
          fields: [{ name: "withdrawal" }],
        },
      ],
    }
  );
};
