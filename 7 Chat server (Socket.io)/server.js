const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Statik dosyalar (index.html vs.)
app.use(express.static("public"));

io.on("connection", (socket) => {
    console.log("🟢 Yeni kullanıcı bağlandı");

    socket.on("chatMessage", (msg) => {
        io.emit("chatMessage", msg); // Herkese gönder
    });

    socket.on("disconnect", () => {
        console.log("🔴 Kullanıcı ayrıldı");
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`🚀 Sunucu çalışıyor: http://localhost:${PORT}`);
});