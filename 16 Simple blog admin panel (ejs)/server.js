// server.js
const app = require('./app');
const PORT = 3000;
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts'); // ← bu eklendi

app.use(expressLayouts); // ← bu eklendi
app.set('view engine', 'ejs');


app.listen(PORT, () => {
    console.log(`Blog admin paneli çalışıyor: http://localhost:${PORT}`);
});