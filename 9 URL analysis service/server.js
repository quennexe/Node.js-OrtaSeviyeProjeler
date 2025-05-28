const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/analyze", async(req, res) => {
    const url = req.query.url;

    if (!url) return res.status(400).json({ error: "URL gerekli" });

    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const title = $("title").text();
        const description = $('meta[name="description"]').attr("content");
        const ogTitle = $('meta[property="og:title"]').attr("content");
        const ogDesc = $('meta[property="og:description"]').attr("content");

        res.json({
            title: title || null,
            description: description || null,
            ogTitle: ogTitle || null,
            ogDescription: ogDesc || null,
        });
    } catch (error) {
        res.status(500).json({ error: "Analiz başarısız", details: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
});