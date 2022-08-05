const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userNotificationSet', {
    userPk: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    noti_all: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'userNotificationSet',
    schema: 'admin',
    timestamps: false,
    indexes: [
      {
        name: "usernotificationset_userpk",
        fields: [
          { name: "userPk" },
        ]
      },
    ]
  });
};

