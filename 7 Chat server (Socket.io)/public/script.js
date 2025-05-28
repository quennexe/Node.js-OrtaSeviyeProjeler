const socket = io();

const form = document.getElementById("form");
const input = document.getElementById("input");
const messages = document.getElementById("messages");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (input.value.trim()) {
        socket.emit("chatMessage", input.value);
        input.value = "";
    }
});

socket.on("chatMessage", function(msg) {
    const item = document.createElement("div");
    item.textContent = msg;
    messages.appendChild(item);
    messages.scrollTop = messages.scrollHeight;
});