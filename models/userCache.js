const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userCache', {
    userPk: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'userCache',
    schema: 'admin',
    timestamps: false,
    indexes: [
      {
        name: "usercache_userpk",
        unique: true,
        fields: [
          { name: "userPk" },
        ]
      },
    ]
  });
};

