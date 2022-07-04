const jwt = require('jsonwebtoken');

module.exports.createAccessToken = (userId) => {
  return jwt.sign({id: userId}, process.env.JWT_ACCESS_KEY, {expiresIn: "30m"});
}

module.exports.createRefreshToken = (userId) => {
  return jwt.sign({id: userId}, process.env.JWT_REFRESH_KEY, {expiresIn: "1y"});
}