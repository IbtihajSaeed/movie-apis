const errorHandler = (error, req, res, next) => {
    error.statusCode = error.statusCode || 500;
    error.message = error.message || "Unexpected Error";
    res.status(error.statusCode).send({ message: error.message });
  };
 module.exports= errorHandler;
  