import express, { Request, Response } from "express";
import { Server } from "http";

const app: express.Application = express();

const PORT = 8080;

const server: Server = app.listen(PORT, () => {
  console.log("Servidor inicializado en el puerto", PORT);
});
server.on("error", (error) => console.log("Error en el servidor:", error));

app.set("views", "./views");
app.set("view engine", "pug");

app.get("/datos", (req: Request, res: Response) => {
  const nivel = req.query.nivel;
  const min = req.query.min;
  const max = req.query.max;
  const titulo = req.query.titulo;
  res.render("datos.pug", { nivel, min, max, titulo });
});
