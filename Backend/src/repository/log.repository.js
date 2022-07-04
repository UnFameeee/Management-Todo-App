const Log = require('../models/log.model');

module.exports.createLog = async(userId, logInfo) => {
  return await Log.create({
    info: logInfo.info,
    userUpdate: userId,
    taskId: logInfo.taskId
  })
}