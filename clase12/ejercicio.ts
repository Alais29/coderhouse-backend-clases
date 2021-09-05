// Desarrollar un servidor basado en express que tenga integrado Websocket. Con cada conexión de cliente, el servidor debe emitir por consola en mensaje: '¡Nuevo cliente conectado!'
// Sobre la estructura anteriormente creada, agregar en la vista de cliente un elemento de entrada de texto donde al introducir texto, el mensaje se vea reflejado en todos los clientes conectados en un párrafo por debajo del input.
// El texto debe ser enviado caracter a caracter y debe reemplazar el mensaje previo.
// Basado en el ejercicio que venimos realizando, ahora los mensajes enviados por los clientes deberán ser almacenados en el servidor y reflejados por debajo del elemento de entrada de texto cada vez que el usuario haga un envío. La estructura de almacenamiento será un array de objetos, donde cada objeto tendrá la siguiente estructura:
// { socketid: (el socket.id del que envió el mensaje), mensaje: (texto enviado)}

// Cada cliente que se conecte recibirá la lista de mensajes completa.
// Modificar el elemento de entrada en el cliente para que disponga de un botón de envío de mensaje.
// Cada mensaje de cliente se representará en un renglón aparte, anteponiendo el socket id.

import { Socket } from "dgram";
import express, { Request, Response } from "express";
const app = express(), // Inicializamos express
  http = require("http").Server(app), // Le pasamos la constante app que creamos arriba
  io = require("socket.io")(http);

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

http.listen(8080, () => console.log("SERVER ON"));

let mensajes: any[] = [];
let newMensajes: any[] = [];

io.on("connection", (socket: any) => {
  console.log("Nuevo cliente conectado!");
  socket.emit("mensajes", mensajes);

  socket.on("mensaje", (data: any) => {
    mensajes.push({ socketid: socket.id, mensaje: data });
    io.sockets.emit("mensajes", mensajes);
  });
});
