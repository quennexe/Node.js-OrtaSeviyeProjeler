const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

let onlineUsers = 0;

// Public klasörünü statik olarak sun
app.use(express.static(path.join(__dirname, 'public')));

// Socket bağlantısı
io.on('connection', socket => {
    onlineUsers++;
    io.emit('updateUsers', onlineUsers);

    socket.on('disconnect', () => {
        onlineUsers--;
        io.emit('updateUsers', onlineUsers);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});