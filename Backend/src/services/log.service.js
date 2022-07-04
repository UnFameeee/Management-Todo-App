const UserService = require('../services/user.service');
const dataResponse = require("../utils/dataResponse.utils");
const LogRepository = require('../repository/log.repository');

module.exports.createLog = async(userId, logInfo) => {
  let dataReturn = {};
  try {
    const user = await UserService.getUserInfo(userId);
    if (!user) throw new Error("User does not exist");

    const log = await LogRepository.createLog(userId, logInfo);
    dataReturn = dataResponse(201, 'Success', 'success', log);
  } catch (err) {
    dataReturn = dataRespons(400, 'Fail', `Cann't create`);
  } finally {
    return dataReturn;
  }
}