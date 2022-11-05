/* *
 * app.js
 * Nandagopan Dilip
 * 301166925
 * 29/10/2022
 * all credits goes to prof. Júlio Vinícius Azevedo de Carvalho
 */

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
let passport = require('passport');

var indexRouter = require('../routes/index');
var userRouter = require('../routes/user');
var contactListRouter = require('../routes/contactList.router');

var app = express();

// including the modules
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Sets up passport
app.use(passport.initialize());

//routes
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/contactlist', contactListRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, "Endpoint not found."));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json(
    {
      success: false,
      message: err.message
    }
  )
});

module.exports = app;
