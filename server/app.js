var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var index = require('./routes/index');
var eventos = require('./routes/eventos');

var app = express();

/**
 * Starting Cors Middleware
 */
app.use(cors());
/**
 * View Engine
 */
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);

/**
 * Set Static Folder
 */
app.use(express.static(path.join(__dirname, 'client')));

/**
 * Body Parser Middleware
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Url
 */
app.use('/', index);
app.use('/api', eventos);

module.exports = app;