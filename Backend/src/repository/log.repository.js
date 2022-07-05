const Log = require('../models/log.model');
const Task = require('../models/task.model');
const TaskRepository = require("../repository/task.repository")

module.exports.createLog = async(userId, logInfo) => {
  return await Log.create({
    info: logInfo.info,
    userUpdate: userId,
    taskId: logInfo.taskId
  })
}

module.exports.showLog = async() => {
  // return await Log.findAll({ include: { model: Task }  });
  const logs = await Log.findAll({});

  const data = await Promise.all(logs.map(async(log)=> {

    if (log.dataValues.taskId === null) return log;
    else {
      const task = await TaskRepository.findTaskById(log.dataValues.taskId);
      return {
        ...log,
        taskId: task
      }
    } 
  }))
  return logs;
}