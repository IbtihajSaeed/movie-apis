const createError = require('http-errors');
const express = require('express');
const path = require('path');
const logger = require('morgan');
const db=require("./app/models/index.js");
const errorHandler=require("./app/middlewares/errorHandler.js");

var indexRouter = require('./app/routes/index');

var app = express();

db.sequelize.sync();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
app.use(errorHandler);
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


/**
 * Listen on provided port, on all network interfaces.
 */

 const PORT = process.env.PORT || 8080;

 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}.`);
 });

module.exports = app;
