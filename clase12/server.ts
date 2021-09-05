import { Socket } from "dgram";
import express, { Request, Response } from "express";
import * as http from "http";
import * as socketio from "socket.io";
import path from "path";

const app: express.Application = express();
const PORT = 8080;

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

const server: http.Server = http.createServer(app);
const io: socketio.Server = new socketio.Server();
io.attach(server);

server.listen(8080, () => console.log("SERVER ON"));

io.on("connection", (socket: socketio.Socket) => {
  // "connection" se ejecuta la primera vez que se abre una nueva conexión
  console.log("Nuevo conectado");
  // Se imprimirá solo la primera vez que se ha abierto la conexión
  socket.emit("mi mensaje", "Este es mi mensaje desde el servidor");
  socket.on("notificacion", (data: any) => {
    console.log(data);
  });
});
