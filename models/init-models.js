const DataTypes = require("sequelize").DataTypes;
const _config = require("./config");
const _land_base = require("./land_base");
const _land_info = require("./land_info");
const _land_item = require("./land_item");
const _land_item_backup = require("./land_item_backup");
const _land_log = require("./land_log");
const _notifications = require("./notifications");
const _userAuth = require("./userAuth");
const _userCache = require("./userCache");
const _userLog = require("./userLog");
const _userNotificationSet = require("./userNotificationSet");
const _users = require("./users");

function initModels(sequelize) {
  const config = _config(sequelize, DataTypes);
  const land_base = _land_base(sequelize, DataTypes);
  const land_info = _land_info(sequelize, DataTypes);
  const land_item = _land_item(sequelize, DataTypes);
  const land_item_backup = _land_item_backup(sequelize, DataTypes);
  const land_log = _land_log(sequelize, DataTypes);
  const notifications = _notifications(sequelize, DataTypes);
  const userAuth = _userAuth(sequelize, DataTypes);
  const userCache = _userCache(sequelize, DataTypes);
  const userLog = _userLog(sequelize, DataTypes);
  const userNotificationSet = _userNotificationSet(sequelize, DataTypes);
  const users = _users(sequelize, DataTypes);

  return {
    config,
    land_base,
    land_info,
    land_item,
    land_item_backup,
    land_log,
    notifications,
    userAuth,
    userCache,
    userLog,
    userNotificationSet,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
