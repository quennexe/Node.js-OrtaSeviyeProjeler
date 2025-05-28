const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Desteklenen diller
const supportedLanguages = ['en', 'tr', 'es'];

// Çeviri dosyalarını yükle
const translations = {};
supportedLanguages.forEach(lang => {
    const filePath = path.join(__dirname, 'locales', `${lang}.json`);
    translations[lang] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
});

// Dil seçimini yapacak middleware
app.use((req, res, next) => {

    let lang = req.query.lang;

    if (!lang || !supportedLanguages.includes(lang)) {
        const acceptLang = req.headers['accept-language'];
        if (acceptLang) {
            lang = acceptLang.split(',')[0].split('-')[0]; // örn: "tr-TR" -> "tr"
        }
    }

    if (!lang || !supportedLanguages.includes(lang)) {
        lang = 'en'; // default dil
    }

    req.lang = lang;
    next();
});

// Örnek endpoint
app.get('/greet', (req, res) => {
    const lang = req.lang;
    res.json({
        message: translations[lang].greeting,
    });
});

app.get('/farewell', (req, res) => {
    const lang = req.lang;
    res.json({
        message: translations[lang].farewell,
    });
});

app.get('/', (req, res) => {
    const lang = req.lang;
    res.json({
        message: translations[lang].welcome_message,
    });
});

app.listen(PORT, () => {
    console.log(`Çoklu dil destekli API ${PORT} portunda çalışıyor.`);
});