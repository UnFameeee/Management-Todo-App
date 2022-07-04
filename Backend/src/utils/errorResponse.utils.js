class ErrorResponse extends Error{
  constructor(message, statusCode) {
      super(message);
      this.statusCode = statusCode;

      // Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = ErrorResponse;


// function ErrorResponse(statusCode = 500, message) {
//   const error = new Error(message);
//   error.statusCode = statusCode;
//   throw error;
// }

// module.exports = ErrorResponse();