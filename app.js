var express = require('express');
var path = require('path');
var fs = require('fs');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var book = require('./server/routes/book');
// var user = require('./routes/api/user');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/book', book);
//API routes
require('./server/routes')(app);

var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost/housekeepbao', { promiseLibrary: require('bluebird') })
mongoose.connect('mongodb://heroku_g4mqlp4n:b2fuh42r8dvlnaofkcrv97sv93@ds225010.mlab.com:25010/heroku_g4mqlp4n')
  .then(() => console.log('connection succesful'))
  .catch((err) => console.error(err));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(express.static(path.resolve(__dirname, '../dist')));

module.exports = app;