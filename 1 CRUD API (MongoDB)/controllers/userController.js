const User = require('../models/userModel');

// Tüm kullanıcıları getir
const getUsers = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Tek kullanıcıyı getir
const getUserById = async(req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Yeni kullanıcı oluştur
const createUser = async(req, res) => {
    try {
        const { name, email, age } = req.body;
        const newUser = await User.create({ name, email, age });
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Kullanıcıyı güncelle
const updateUser = async(req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!updatedUser) return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Kullanıcıyı sil
const deleteUser = async(req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) return res.status(404).json({ message: 'Kullanıcı bulunamadı' });
        res.status(200).json({ message: 'Kullanıcı silindi' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};