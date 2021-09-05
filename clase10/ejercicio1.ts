import express, { Request, Response } from "express";
import { Server } from "http";

const app: express.Application = express();

const PORT = 8080;

app.use(express.static("/public"));

const server: Server = app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en el servidor: ${error}`));

app.get("/", (req: Request, res: Response): void => {
  res.sendFile(__dirname + "/public/ejercicio1.html");
});
