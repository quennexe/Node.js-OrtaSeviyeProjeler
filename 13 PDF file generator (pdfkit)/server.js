const express = require("express");
const fs = require("fs");
const PDFDocument = require("pdfkit");
const createInvoice = require("./invoice-template");

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/generate-pdf", (req, res) => {
    const data = req.body;

    const doc = new PDFDocument();
    const filePath = `outputs/${data.name}_invoice.pdf`;

    // PDF'yi dosya sistemine yaz
    doc.pipe(fs.createWriteStream(filePath));

    // PDF içeriğini oluştur
    createInvoice(doc, data);

    doc.end();

    res.json({ message: "PDF oluşturuldu", file: filePath });
});

app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});