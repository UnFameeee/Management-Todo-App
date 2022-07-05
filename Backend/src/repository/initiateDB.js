const mysql = require("mysql2");
const sequelize = require("./connection");
const dbConfig = require("../config/database.config.js");
const Users = require("../models/user.model");
const Tasks = require("../models/task.model");
const Logs = require("../models/log.model");
const User = require("../models/user.model");
const Bcrypt = require("../utils/bcrypt.utils")
const ROLE = require("../constants/role.constant");
const UserRepository = require("./user.repository");

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

      Users.hasMany(Tasks, { foreignKey: "userId", as: "tasks" });
      Tasks.belongsTo(Users);
 
      Users.hasMany(Logs, { foreignKey: "userUpdate", as: "logs" });
      Tasks.hasMany(Logs, { foreignKey: "taskId", as: "logs" });
      
      await sequelize.sync();

      if(!await UserRepository.findUserById(1))
        await User.create({username: "admin", password: await Bcrypt.encode("admin"), email: "admin@gmail.com", role: ROLE.LEADER})
    }
  );
  connection.end();
};

module.exports = { initalize };