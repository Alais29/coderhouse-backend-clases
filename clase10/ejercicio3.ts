import express, { Request, Response } from "express";
import { Server } from "http";
// cargar handlebars
import handlebars from "express-handlebars";

const app: express.Application = express();
const PORT = 8080;

const server: Server = app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en el servidor: ${error}`));

app.engine(
  // si no se coloca este argumento, los archivos tendrían que utilizarse con extensión handlebars
  "hbs",
  handlebars({
    extname: ".hbs",
    defaultLayout: "index.hbs",
    layoutsDir: __dirname + "/views/layouts/",
    partialsDir: __dirname + "/views/partials/",
  })
);

//establecemos el motor de plantilla
app.set("view engine", "hbs");
// establcemos el directorio donde se encuentran los archivos de plantilla
app.set("views", "./views");
// espacio público del servidor
app.use(express.static("public"));

const fakeApi = () => {
  return {
    nombre: "Alfonsina",
    apellido: "Lizardo",
    edad: "30",
    email: "alfonsina.l@gmail.com",
    telefono: "973413854",
  };
};

app.get("/", (req: Request, res: Response): void => {
  // como opción se puede pasar también {layout: nnombreLayoutAUtilizar} si no se pasa, se usará el default establecido en la configuración de app.engine
  res.render("main", { data: fakeApi() });
});
