// app.js:  Main Application
var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
app.use('/user', UserController);

module.exports = app;
