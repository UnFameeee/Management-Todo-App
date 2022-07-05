const Log = require('../models/log.model');
const sequelize = require("../repository/connection")

module.exports.createLog = async(userId, logInfo) => {
  return await Log.create({
    info: logInfo.info,
    userUpdate: userId,
    taskId: logInfo.taskId
  })
}

module.exports.showLog = async() => {
  const dataQueryLog = await sequelize.query("select A.id, info, A.createdAt, A.userUpdate, username, email, taskId, title, description, status, isArchived from (select Logs.id, info, Logs.createdAt, Logs.userUpdate, taskId, title, description, status, isArchived from logs left join Tasks on logs.taskId = Tasks.id) as A left join Users on A.userUpdate = Users.id order by A.id desc");

  return dataQueryLog[0];
}