const axios = require("axios");
const cheerio = require("cheerio");

const URL = "https://www.bbc.com/news";

async function scrapeHeadlines() {
    try {
        const { data } = await axios.get(URL);
        const $ = cheerio.load(data);

        console.log("📢 BBC Ana Sayfa Başlıkları:\n");

        $(".gs-c-promo-heading__title").each((i, element) => {
            const headline = $(element).text().trim();
            console.log(`🔹 ${headline}`);
        });
    } catch (error) {
        console.error("❌ Hata:", error.message);
    }
}

scrapeHeadlines();