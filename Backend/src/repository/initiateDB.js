const mysql = require("mysql2");
const sequelize = require("./connection");
const dbConfig = require("../config/database.config.js");
const Users = require("../models/user.model");
const Tasks = require("../models/task.model");
const Logs = require("../models/log.model");
const User = require("../models/user.model");

const initalize = function() {
  const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
  });
  connection.query(
    `CREATE DATABASE IF NOT EXISTS \`${dbConfig.DB}\`;`,
    async (err, results) => {
      results ? console.log(`Create Database ${dbConfig.DB} complete!`) : console.log(err);

      Users.hasMany(Tasks, {
        foreignKey: "userId",
        as: "tasks",
      });
      Tasks.belongsTo(Users);

      Users.hasMany(Logs, {
        foreignKey: "UserUpdate",
        as: "logs",
      });
      Tasks.hasMany(Logs, {
        foreignKey: "TaskId",
        as: "logs",
      });

      

      await sequelize.sync();

      // await User.create({username: "admin", password: ""})
    }
  );
  connection.end();
};

module.exports = { initalize };