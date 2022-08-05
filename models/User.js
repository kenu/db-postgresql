const { Model, DataTypes, sequelize } = require("../config/db");

class User extends Model {}
User.init(
  {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { sequelize, modelName: "user" }
);

module.exports = { User, sequelize };
