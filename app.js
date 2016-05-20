
'use strict'; // enable let

// DEPENDENCIES

const express = require('express');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// CONSTANTS

const DEFUALT_PORT = 3000;
const PORT = process.env.PORT || DEFUALT_PORT;
const SERVER_MSG = 'REST-ful Blog now running on port ' + PORT;

// SETTINGS

app.set('view engine', 'ejs');
app.use(express.static('public'));
ejs.delimiter = '?';

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
