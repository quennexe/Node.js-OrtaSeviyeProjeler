const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

// Ortam değişkenlerini yükle
dotenv.config();

// Veritabanına bağlan
connectDB();

const app = express();

// JSON body parse
app.use(express.json());

// Ana route
app.get('/', (req, res) => {
    res.send('CRUD API çalışıyor');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor...`));