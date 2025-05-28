const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

// Token üretme fonksiyonu
const generateToken = (userId) => {
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
        expiresIn: '1h'
    });
};

// @desc   Yeni kullanıcı kaydı
// @route  POST /api/auth/register
const registerUser = async(req, res) => {
    const { username, email, password } = req.body;

    try {
        // Aynı email daha önce kullanılmış mı?
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Bu email zaten kullanılıyor.' });
        }

        const user = await User.create({ username, email, password });

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        });
    } catch (err) {
        res.status(500).json({ message: 'Sunucu hatası', error: err.message });
    }
};

// @desc   Kullanıcı girişi
// @route  POST /api/auth/login
const loginUser = async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: 'Geçersiz email veya şifre' });
        }

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            token: generateToken(user._id)
        });
    } catch (err) {
        res.status(500).json({ message: 'Sunucu hatası', error: err.message });
    }
};

module.exports = { registerUser, loginUser };