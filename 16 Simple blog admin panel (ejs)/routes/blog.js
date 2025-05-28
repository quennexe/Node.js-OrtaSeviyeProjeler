// routes/blog.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const dataPath = path.join(__dirname, '../data/posts.json');

// Anasayfa (blog listesi)
router.get('/', (req, res) => {
    const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    res.render('index', { posts });
});

// Yeni blog yazısı formu
router.get('/new', (req, res) => {
    res.render('new');
});

// Blog yazısı ekleme
router.post('/add', (req, res) => {
    const { title, content } = req.body;
    const posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    posts.unshift({ id: Date.now(), title, content });
    fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2));
    res.redirect('/');
});

// Silme
router.post('/delete/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let posts = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    posts = posts.filter(p => p.id !== id);
    fs.writeFileSync(dataPath, JSON.stringify(posts, null, 2));
    res.redirect('/');
});

module.exports = router;