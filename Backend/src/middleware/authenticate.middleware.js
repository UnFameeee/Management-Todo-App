const jwt = require('jsonwebtoken');

const UserRepository = require("../repository/user.repository");

exports.isAuthenticatedUser = async (req, res, next) => {
    const token = req.headers.token;
    if (!token){
      res.status(401).json("You are not authenticated");
    }
    else {
      const accessToken = token.split(' ')[1];
      console.log("access Token", accessToken);
      jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, async (err, data) =>{
        if(err) {
          res.status(403).json("Token is not valid");
        }
        else {
          req.user = await UserRepository.findUserById(parseInt(data.id));
          next();
        }
      })
    }
}

exports.authorizeUserRole = (...roles) => {
  return (req, res, next) => {
      if (!roles.includes(req.user.role))
        res.status(403).json(`Role (${req.user.role}) is not allowed to access this resource`);
          //return next(new ErrorResponse(`Role (${req.user.role}) is not allowed to access this resource`, 403));
      else next();
  }
}