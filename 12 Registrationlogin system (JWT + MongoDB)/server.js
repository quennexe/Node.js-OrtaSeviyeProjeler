const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/user");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// MongoDB bağlantısı
mongoose.connect("mongodb://localhost:27017/authSystem", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB bağlantısı başarılı");
}).catch((err) => {
    console.error("MongoDB bağlantısı başarısız", err);
});

// JWT token doğrulama middleware
const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) return res.status(401).send("Access Denied");

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).send("Invalid Token");
        req.user = user;
        next();
    });
};

// Kayıt ol
app.post("/register", async(req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: "Kullanıcı adı ve şifre gereklidir" });
    }

    try {
        // Şifreyi hashle
        const hashedPassword = await bcrypt.hash(password, 10);

        // Yeni kullanıcıyı oluştur
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "Kullanıcı başarıyla oluşturuldu" });
    } catch (err) {
        res.status(500).json({ error: "Kayıt sırasında hata oluştu" });
    }
});

// Giriş yap
app.post("/login", async(req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ error: "Kullanıcı adı ve şifre gereklidir" });
    }

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(400).json({ error: "Kullanıcı bulunamadı" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Geçersiz şifre" });

        // JWT token oluştur
        const token = jwt.sign({ id: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json({ error: "Giriş sırasında hata oluştu" });
    }
});

// Protected route (Token gerektirir)
app.get("/protected", authenticateToken, (req, res) => {
    res.status(200).json({ message: "Bu alan yalnızca kimlik doğrulaması yapılmış kullanıcılar için geçerlidir" });
});

// Sunucu başlat
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});