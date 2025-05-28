const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB'ye başarıyla bağlanıldı.");
    } catch (err) {
        console.error('Veritabanı bağlantı hatası:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;