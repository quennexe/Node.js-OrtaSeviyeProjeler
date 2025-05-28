const path = require('path');
const fs = require('fs');

exports.uploadFile = (req, res) => {
    if (!req.file) {
        return res.status(400).json({ message: 'Dosya yüklenemedi!' });
    }
    res.status(200).json({ message: 'Dosya başarıyla yüklendi', filename: req.file.filename });
};

exports.downloadFile = (req, res) => {
    const filePath = path.join(__dirname, '../uploads', req.params.filename);
    if (fs.existsSync(filePath)) {
        res.download(filePath);
    } else {
        res.status(404).json({ message: 'Dosya bulunamadı' });
    }
};

exports.deleteFile = (req, res) => {
    const filePath = path.join(__dirname, '../uploads', req.params.filename);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        res.status(200).json({ message: 'Dosya silindi' });
    } else {
        res.status(404).json({ message: 'Dosya bulunamadı' });
    }
};