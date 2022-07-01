const jwt = require('jsonwebtoken');

const fillToken = (user) => {
    
  const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE_TIME
  })

  const options = {
      expires: new Date(
          Date.now() + process.env.COOKIE_EXPIRE_TIME * 24 * 60 * 60 * 1000
      ), 
      httpOnly: true
  }

  return {
    token: token,
    options: options
  }
}

module.exports = fillToken;