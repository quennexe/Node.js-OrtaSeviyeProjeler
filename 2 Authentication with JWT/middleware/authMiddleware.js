const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protect = async(req, res, next) => {
    let token;

    // Authorization başlığında token var mı?
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            // Token'ı al
            token = req.headers.authorization.split(' ')[1];

            // Token'ı çöz
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Token'dan gelen ID ile kullanıcıyı bul (şifre hariç)
            req.user = await User.findById(decoded.id).select('-password');

            next();
        } catch (err) {
            res.status(401).json({ message: 'Yetkisiz. Token geçersiz.' });
        }
    }

    if (!token) {
        res.status(401).json({ message: 'Yetkisiz. Token yok.' });
    }
};

module.exports = { protect };