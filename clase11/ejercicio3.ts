import express, { Request, Response } from "express";
import { Server } from "http";

const app: express.Application = express();

const PORT = 8080;

const server: Server = app.listen(PORT, () => {
  console.log("Servidor inicializado en el puerto", PORT);
});
server.on("error", (error) => console.log("Error en el servidor:", error));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");

const data: { nombre: string; apellido: string; edad: number }[] = [];

app.get("/", (req: Request, res: Response) => {
  res.render("pages/index1", { data, isData: data.length !== 0 });
});

app.post("/datos", (req: Request, res: Response) => {
  let newUser = {
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    edad: Number(req.body.edad),
  };
  data.push(newUser);
  res.redirect("/");
});
