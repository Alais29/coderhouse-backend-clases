import mongoose from 'mongoose'

const estudiantesCollection = 'estudiantes';

const EstudianteSchema = new mongoose.Schema({
  nombre: { type: String, require: true, max: 100 },
  apellido: { type: String, require: true, max: 100 },
  edad: { type: Number, require: true, max: 100 },
  dni: { type: String, require: true, unique: true },
  curso: { type: String, require: true, max: 100 },
  nota: { type: Number, require: true },
  ingreso: { type: Boolean }
})

export const estudiantes = mongoose.model(estudiantesCollection, EstudianteSchema);