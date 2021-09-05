import express, { Request, Response } from "express";

const personas = [{ nombre: "Alfonsina", apellido: "Lizardo", edad: 30 }];

export const routesPersonas = express.Router();

routesPersonas.get("/listar", (req: Request, res: Response) => {
  res.json({ personas });
});

routesPersonas.post("/guardar", (req: Request, res: Response) => {
  const persona = req.body;
  personas.push(persona);
  res.json({ personas });
});
