const express = require("express");
const mongoose = require("mongoose");
const Note = require("./models/note");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect("mongodb://localhost:27017/noteApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB bağlantısı başarılı");
}).catch((err) => {
    console.error("MongoDB bağlantısı başarısız", err);
});

// API uç noktaları

// Tüm notları listele
app.get("/notes", async(req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: "Notlar alınırken hata oluştu" });
    }
});

// Yeni not ekle
app.post("/notes", async(req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Başlık ve içerik gereklidir" });
    }

    try {
        const newNote = new Note({ title, content });
        await newNote.save();
        res.status(201).json(newNote);
    } catch (err) {
        res.status(500).json({ error: "Not eklenirken hata oluştu" });
    }
});

// Not güncelle
app.put("/notes/:id", async(req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const updatedNote = await Note.findByIdAndUpdate(id, { title, content }, { new: true });
        if (!updatedNote) return res.status(404).json({ error: "Not bulunamadı" });
        res.status(200).json(updatedNote);
    } catch (err) {
        res.status(500).json({ error: "Not güncellenirken hata oluştu" });
    }
});

// Not sil
app.delete("/notes/:id", async(req, res) => {
    const { id } = req.params;

    try {
        const deletedNote = await Note.findByIdAndDelete(id);
        if (!deletedNote) return res.status(404).json({ error: "Not bulunamadı" });
        res.status(200).json({ message: "Not başarıyla silindi" });
    } catch (err) {
        res.status(500).json({ error: "Not silinirken hata oluştu" });
    }
});

// Sunucu başlat
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});