// routes/raffle.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, '../data/participants.json');

router.get('/', (req, res) => {
    res.render('index', { winner: null });
});

router.post('/join', (req, res) => {
    const name = req.body.name;
    if (!name) return res.redirect('/');

    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    data.push(name);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

    res.redirect('/');
});

router.post('/draw', (req, res) => {
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    if (data.length === 0) return res.render('index', { winner: "Katılımcı yok!" });

    const randomIndex = Math.floor(Math.random() * data.length);
    const winner = data[randomIndex];
    fs.writeFileSync(dataPath, JSON.stringify([], null, 2)); // sıfırla

    res.render('index', { winner });
});

module.exports = router;