import express, { Request, Response } from "express";
import fs from "fs";
import { Server } from "http";

type options = {
  titulo: string;
  mensaje: string;
  autor: string;
  version: string;
};

const app: express.Application = express();

const PORT = 8080;

const server: Server = app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en el servidor: ${error}`));

app.engine("cte", function (filePath, options, callback) {
  // define el motor de plantilla
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(new Error(err.toString()));
    let rendered = content.toString();
    let optionsEntries = Object.entries(options);
    optionsEntries.forEach((item) => {
      if (rendered.indexOf(item[0]) !== -1) {
        rendered = rendered.replace(`^^${item[0]}$$`, item[1]);
      }
    });
    return callback(null, rendered);
  });
});
app.set("views", "./views"); // especifica el directorio de vistas
app.set("view engine", "cte");

app.get("/cte1", (req: Request, res: Response) => {
  res.render("plantilla1", {
    titulo: "Harry Potter",
    mensaje: "Avada Kedavra",
    autor: "JK Rowling",
    version: "1.0.0",
  });
});

app.get("/cte2", (req: Request, res: Response) => {
  res.render("plantilla2", {
    nombre: "Alfonsina",
    apellido: "Lizardo",
    fyh: new Date(),
  });
});
