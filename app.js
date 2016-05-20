
'use strict'; // enable let

// DEPENDENCIES

const pjson = require('./package.json');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose = require('mongoose');

// CONSTANTS

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT || DEFAULT_PORT;
const SERVER_MSG = `Serving ${pjson.name} on port ${PORT}`;
const DEFAULT_MONGO_URL = 'mongodb://localhost/restful_blog';
const MONGO_URL = process.env.MONGO_URL || DEFAULT_MONGO_URL;
const blogSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});
const Blog = mongoose.model('blog', blogSchema);

// SETTINGS

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
ejs.delimiter = '?';
mongoose.connect(MONGO_URL);

// VARIABLES

// SERVER

app.listen(PORT, function() {
  console.log(SERVER_MSG);
});

// ROUTES

app.get('/', function(req, res) {
  res.send('REST-ful Blog App Root Route!');
});

// FUNCTIONS

// MAIN stuff
