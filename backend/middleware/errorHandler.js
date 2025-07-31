// Error handling middleware
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Default error
  let error = {
    message: err.message || "Internal Server Error",
    statusCode: err.statusCode || 500,
  };

  // Mongoose validation error
  if (err.name === "ValidationError") {
    error.message = Object.values(err.errors)
      .map((val) => val.message)
      .join(", ");
    error.statusCode = 400;
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    error.message = "Duplicate field value entered";
    error.statusCode = 400;
  }

  // Mongoose cast error
  if (err.name === "CastError") {
    error.message = "Resource not found";
    error.statusCode = 404;
  }

  res.status(error.statusCode).json({
    success: false,
    message: error.message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};

module.exports = errorHandler;
