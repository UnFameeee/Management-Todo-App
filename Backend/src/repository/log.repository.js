const Log = require('../models/log.model');
const Task = require('../models/task.model');
const TaskRepository = require("../repository/task.repository")
const sequelize = require("../repository/connection")

module.exports.createLog = async(userId, logInfo) => {
  return await Log.create({
    info: logInfo.info,
    userUpdate: userId,
    taskId: logInfo.taskId
  })
}

module.exports.showLog = async() => {
  const dataQueryLog = await sequelize.query("SELECT Logs.id, info, Logs.createdAt, userUpdate, Users.username, Users.email, taskId, title, description, status, isArchived FROM Logs, Tasks, Users WHERE Logs.taskId = Tasks.id AND Users.id = Logs.userUpdate ORDER BY Logs.id;");

  return dataQueryLog;
}