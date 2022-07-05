const { validationResult } = require("express-validator");

module.exports.exception = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const status = error.status;
  const message = error.message;
  const data = error.data;
  res.status(statusCode).json({ status: status, message: message, data: data });
};

module.exports.handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error();
    error.status = "fail";
    error.statusCode = 400;
    errors.errors.forEach(element => {
      error.message += `${element.msg} \n\r`
    });
    throw error;
  }
  else 
    next();
};
