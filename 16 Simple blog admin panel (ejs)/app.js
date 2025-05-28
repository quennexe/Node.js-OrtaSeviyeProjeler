// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const blogRoutes = require('./routes/blog');

const app = express();
const express = require('express');

const expressLayouts = require('express-ejs-layouts'); // ← bu eklendi

app.use(expressLayouts); // ← bu eklendi
app.set('view engine', 'ejs');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', blogRoutes);

module.exports = app;