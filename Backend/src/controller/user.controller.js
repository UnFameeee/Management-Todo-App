const { validationResult } = require("express-validator");
const UserService = require("../services/user.service");
const ErrorResponse = require("../utils/errorResponse.utils");
const JWTToken = require('../utils/JWTToken.utils');

const jwt = require('jsonwebtoken');
let tokens = []; 

module.exports.register = async (req, res, next) => {
  console.log("hello")
  let dataReturn = {};
  const dataCreate = req.body;
  dataReturn = await UserService.addUser(dataCreate);
  res.status(dataReturn.statusCode).json(dataReturn.data);
};

module.exports.login = async(req, res) => {
  let accessToken = "";
  let refreshToken = "";
  
  const dataLogin = req.body;
  const dataReturn = await UserService.checkUser(dataLogin);

  if (dataReturn.statusCode === 201){
    const userId = dataReturn.data.data.dataValues.id;
    accessToken = JWTToken.createAccessToken(userId);
    refreshToken = JWTToken.createRefreshToken(userId);
    tokens.push(refreshToken);

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    })
  }
  res.status(dataReturn.statusCode).json({data: dataReturn.data, token: accessToken});
} 

module.exports.updateUserInfo = async (req, res) => {
  let dataReturn = {};
  const userId = parseInt(req.params.id);
  const userData = req.body;
  dataReturn = await UserService.updateUserInfo(userId, userData);
  res.status(dataReturn.statusCode).json(dataReturn.data);
};

module.exports.updatePassword = async (req, res) => {
  const userId = parseInt(req.params.id);
  const userData = req.body;
  const dataReturn = await UserService.updateUserPassword(userId, userData);
  res.status(dataReturn.statusCode).json(dataReturn.data);
};

module.exports.viewUsersWithTask = async (req, res) => {
  const dataReturn = await UserService.viewUsersWithTask();
  res.status(dataReturn.statusCode).json(dataReturn.data);
};

module.exports.getAllUser = async (req, res) => {
  const dataReturn = await UserService.getAllUser();
  res.status(dataReturn.statusCode).json(dataReturn.data);
};

module.exports.getUserInfo = async (req, res) => {
  const userId = parseInt(req.params.id);
  const dataReturn = await UserService.getUserInfo(userId);
  res.status(dataReturn.statusCode).json(dataReturn.data);
}

module.exports.refreshTheToken = async(req, res) => {
  const refreshToken = req.headers.refresh;
  if (!tokens.includes(refreshToken) || !refreshToken) 
    res.status(401).json("You are not authenticated");

  jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, data) => {
    if (err){
      res.status(401).json("Refresh Token is not valid")
    }

    const newAccessToken = JWTToken.createAccessToken(data);
    const newRefreshToken = JWTToken.createRefreshToken(data);
    
    refreshToken = [newRefreshToken];

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    res.status(200).json({"accessToken": newAccessToken})
  })
}

module.exports.logout = async(req, res) => {
  refreshToken = [];
  
  var requests = new XMLHttpRequest();
  requests.setRequestHeader("refresh", "");
  res.status(200).json("Logout");
}
