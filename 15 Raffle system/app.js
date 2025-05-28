// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const raffleRoutes = require('./routes/raffle');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', raffleRoutes);

module.exports = app;