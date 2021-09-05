import express from "express";
import { Server } from "http";
import { routesPersonas } from "./routes/personas";
import { routesMascotas } from "./routes/mascotas";
import path from "path";

const app: express.Application = express();
const PORT = 8080;

const server: Server = app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto ${PORT}`);
});
server.on("error", (error) => console.log(`Error en el servidor: ${error}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", express.static(path.resolve(__dirname, "./public")));
app.use("/mascotas", routesMascotas);
app.use("/personas", routesPersonas);
