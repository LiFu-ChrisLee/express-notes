import express = require('express');
import path = require('path');

import cookieParser = require('cookie-parser');
import lessMiddleware = require('less-middleware');
import logger = require('morgan');

const indexRouter = require('./routes');
const usersRouter = require('./routes/users');
const errorRouter = require('./routes/error');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'tsx');
app.engine('tsx', require('express-react-views').createEngine());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(errorRouter);

module.exports = app;
