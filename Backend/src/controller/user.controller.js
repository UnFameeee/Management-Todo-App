const UserService = require('../services/user.service');

module.exports.register = async(req, res) => {
  const dataCreate = req.body;
  const dataReturn = await UserService.addUser(dataCreate);
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.login = async(req, res) => {
  const dataCreate = req.body;
  const dataReturn = await UserService.checkUser(dataCreate);
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.updateUserInfo = async(req, res) => {
  const userId = parseInt(req.params.id);
  const userData = req.body;

  const dataReturn = await UserService.updateUserInfo(userId, userData);
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.updatePassword = async(req, res) => {
  const userId = parseInt(req.params.id);
  const userData = req.body;

  const dataReturn = await UserService.updateUserPassword(userId, userData);
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.viewUsersWithTask = async(req, res) => {
  const dataReturn = await UserService.viewUsersWithTask();
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.getAllUser = async(req, res) => {
  const dataReturn = await UserService.getAllUser();
  res.status(dataReturn.statusCode).json(dataReturn.data);
}