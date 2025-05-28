const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// GET → Tüm kullanıcıları getir
router.get('/', getUsers);

// GET → Belirli bir kullanıcıyı ID ile getir
router.get('/:id', getUserById);

// POST → Yeni kullanıcı oluştur
router.post('/', createUser);

// PUT → Kullanıcıyı güncelle
router.put('/:id', updateUser);

// DELETE → Kullanıcıyı sil
router.delete('/:id', deleteUser);

module.exports = router;