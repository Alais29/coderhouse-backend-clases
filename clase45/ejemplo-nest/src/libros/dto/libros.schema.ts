import { Schema } from 'mongoose';
import { libroDTO } from './libros.dto';

export const LibroSchema = new Schema<libroDTO>({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  precio: { type: Number, required: true },
});
