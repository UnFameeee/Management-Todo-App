const UserService = require('../services/user.service');

module.exports.register = async(req, res) => {
  const dataCreate = req.body;
  res.json(await UserService.addUser(dataCreate));
}

module.exports.login = async(req, res) => {
  const dataCreate = req.body;
  res.json(await UserService.checkUser(dataCreate));
}

module.exports.updateUserInfo = async(req, res) => {
  const userId = parseInt(req.params.id);
  const userData = req.body;

  res.json(await UserService.updateUserInfo(userId, userData));
}

module.exports.updatePassword = async(req, res) => {
  const userId = parseInt(req.params.id);
  const userData = req.body;

  res.json(await UserService.updateUserPassword(userId, userData));
}

module.exports.viewUsersWithTask = async(req, res) => {
  res.json(await UserService.viewUsersWithTask());
}

module.exports.getAllUser = async(req, res) => {
  res.json(await UserService.getAllUser());
}