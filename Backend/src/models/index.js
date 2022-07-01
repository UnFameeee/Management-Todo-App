const Sequelize = require("sequelize");

const dbConfig = require("../config/database.config.js");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  logging: false,
});

const database = {};
database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.users= require("./user.model.js")(sequelize, Sequelize); 
database.tasks= require("./task.model.js")(sequelize, Sequelize); 
database.logs = require("./log.model.js")(sequelize, Sequelize); 

database.users.hasMany(database.tasks, { foreignKey: "UserId", as: "tasks" });
database.tasks.belongsTo(database.users);

database.users.hasMany(database.logs, { foreignKey: "UserUpdate", as: "logs"});
database.tasks.hasMany(database.logs, { foreignKey: "TaskId", as: "logs"});

module.exports = database;