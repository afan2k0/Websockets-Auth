const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const cors = require("cors");
const cookie = require("cookie");
app.use(cors());

const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    console.log(`token: ${token}`)
  });

io.on("connection", (socket) => {
    console.log(`new connection! ${socket.id}`);
})
server.listen(3001, () => {
    console.log("server running");
})
//sada