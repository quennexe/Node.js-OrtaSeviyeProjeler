const express = require('express');
const router = express.Router();
const { uploadFile, downloadFile, deleteFile } = require('../controllers/fileController');
const upload = require('../middleware/uploadMiddleware');

// Dosya yükle
router.post('/upload', upload.single('file'), uploadFile);

// Dosya indir
router.get('/download/:filename', downloadFile);

// Dosya sil
router.delete('/:filename', deleteFile);

module.exports = router;