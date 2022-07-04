const UserService = require('../services/user.service');

module.exports.register = async(req, res) => {
  let dataReturn = {};
  try{
    // if (isNaN(req.body.email)) throw new Error('Id not recognize');
    const dataCreate = req.body;
    dataReturn = await UserService.addUser(dataCreate);
  }catch(err){

  }
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.login = async(req, res) => {
  const dataCreate = req.body;
  const dataReturn = await UserService.checkUser(dataCreate);
  res.status(dataReturn.statusCode).json(dataReturn.data);
} 

module.exports.updateUserInfo = async(req, res) => {
  let dataReturn = {};
  try{
    // if (isNaN(req.params.id)) throw new Error('Id not recognize');
    const userId = parseInt(req.params.id);
    const userData = req.body;
    dataReturn = await UserService.updateUserInfo(userId, userData);
  }catch(err){

  }
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

module.exports.getUserInfo = async(req, res) => {
  const userId = parseInt(req.params.id);
  const dataReturn = await UserService.getUserInfo(userId);
  res.status(dataReturn.statusCode).json(dataReturn.data);
}