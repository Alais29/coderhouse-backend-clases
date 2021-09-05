import express, { Request, Response } from "express";

const mascotas = [{ nombre: "Peluche", raza: "Poodle", edad: 5 }];

export const routesMascotas = express.Router();

routesMascotas.get("/listar", (req: Request, res: Response) => {
  res.json({ mascotas });
});

routesMascotas.post("/guardar", (req: Request, res: Response) => {
  const mascota = req.body;
  mascotas.push(mascota);
  res.json({ mascotas });
});
