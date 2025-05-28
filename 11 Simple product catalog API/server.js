const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect("mongodb://localhost:27017/productCatalog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB bağlantısı başarılı");
}).catch((err) => {
    console.error("MongoDB bağlantısı başarısız", err);
});

// API uç noktaları

// Tüm ürünleri listele
app.get("/products", async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: "Ürünler alınırken hata oluştu" });
    }
});

// Yeni ürün ekle
app.post("/products", async(req, res) => {
    const { name, price, description, stock } = req.body;
    if (!name || !price || !description || !stock) {
        return res.status(400).json({ error: "Tüm alanlar gereklidir" });
    }

    try {
        const newProduct = new Product({ name, price, description, stock });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: "Ürün eklenirken hata oluştu" });
    }
});

// Ürün güncelle
app.put("/products/:id", async(req, res) => {
    const { id } = req.params;
    const { name, price, description, stock } = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            id, { name, price, description, stock }, { new: true }
        );
        if (!updatedProduct) return res.status(404).json({ error: "Ürün bulunamadı" });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: "Ürün güncellenirken hata oluştu" });
    }
});

// Ürün sil
app.delete("/products/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) return res.status(404).json({ error: "Ürün bulunamadı" });
        res.status(200).json({ message: "Ürün başarıyla silindi" });
    } catch (err) {
        res.status(500).json({ error: "Ürün silinirken hata oluştu" });
    }
});

// Sunucu başlat
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});