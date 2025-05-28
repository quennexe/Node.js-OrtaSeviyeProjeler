const express = require('express');
const dotenv = require('dotenv');
const fileRoutes = require('./routes/fileRoutes');
const path = require('path');

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/files', fileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));