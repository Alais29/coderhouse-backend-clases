import express, { Request, Response } from "express";
import * as http from "http";
import * as socketio from "socket.io";
import path from "path";

let messages = [
  { author: "Juan", text: "¡Hola! ¿Que tal?" },
  { author: "Pedro", text: "¡Muy bien! ¿Y vos?" },
  { author: "Ana", text: "¡Genial!" },
];

const app: express.Application = express();
const PORT = 8080;

const server: http.Server = http.createServer(app);
const io: socketio.Server = new socketio.Server();
io.attach(server);

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

server.listen(PORT, () => {
  console.log(`Servidor inicializado en http://localhost:${PORT}`);
});
server.on("error", (error) => console.log(`Error en el servidor: ${error}`));

io.on("connection", (socket) => {
  console.log("Un cliente se ha conectado");
  socket.emit("messages", messages);

  socket.on("new-message", (data) => {
    messages.push(data);
    io.sockets.emit("messages", messages);
  });
});
