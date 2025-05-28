const express = require("express");
const Parser = require("rss-parser");
const path = require("path");

const app = express();
const parser = new Parser();

app.use(express.static("public"));
app.use(express.json());

app.post("/parse", async(req, res) => {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", async() => {
        try {
            const { url } = JSON.parse(body);
            const feed = await parser.parseURL(url);
            res.json(feed.items.slice(0, 10)); // İlk 10 haberi dön
        } catch (err) {
            res.status(500).json({ error: "RSS alınamadı", detail: err.message });
        }
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 http://localhost:${PORT}`);
});