import mongoose from 'mongoose';
import * as model from './models/estudiantes.js';

const CRUD = async () => {
  try {
    // Conexión hacia la base de datos
    const URL = 'mongodb://0.0.0.0:27017/colegio'
    let rta = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Base de datos conectada')

    console.log('CREATE')
    const estudiantes = [
      { nombre: 'Pedro', apellido: 'Mei', edad: 21, dni: '31155898', curso: '1A', nota: 7 },
      { nombre: 'Ana', apellido: 'Gonzalez', edad: 32, dni: '27651878', curso: '1A', nota: 8 },
      { nombre: 'José', apellido: 'Picos', edad: 29, dni: '34554398', curso: '2A', nota: 6 },
      { nombre: 'Lucas', apellido: 'Blanco', edad: 22, dni: '30355874', curso: '3A', nota: 10 },
      { nombre: 'María', apellido: 'García', edad: 36, dni: '29575148', curso: '1A', nota: 9 },
      { nombre: 'Federico', apellido: 'Perez', edad: 41, dni: '320118321', curso: '2A', nota: 5 },
      { nombre: 'Tomas', apellido: 'Sierra', edad: 19, dni: '38654790', curso: '2B', nota: 4 },
      { nombre: 'Carlos', apellido: 'Fernández', edad: 33, dni: '26935670', curso: '3B', nota: 2 },
      { nombre: 'Fabio', apellido: 'Pieres', edad: 39, dni: '4315388', curso: '1B', nota: 9 },
      { nombre: 'Daniel', apellido: 'Gallo', edad: 25, dni: '37923460', curso: '3B', nota: 2 }
    ]
    // const estudiantesSaveModel = estudiantes.map(estudiante => new model.estudiantes(estudiante))
    // const estudianteSave = await estudiantesSaveModel.map(saveModel => saveModel.save())
    // estudianteSave.map(estudiante => estudiante.then((res) => console.log(res)))

    console.log('READ')
    //Los estudiantes ordenados por orden alfabético según sus nombres.
    const estudiantesOrdenAlfabetico = await model.estudiantes.find({}).sort({ nombre: 1 })
    // console.log(estudiantesOrdenAlfabetico)

    //El estudiante más joven.
    const estudianteMasJoven = await model.estudiantes.find({}).sort({ edad: 1 }).limit(1)
    // console.log(estudianteMasJoven)

    //Los estudiantes que pertenezcan al curso '2A'.
    const estudiantes2A = await model.estudiantes.find({ curso: '2A' })
    // console.log(estudiantes2A)

    //El segundo estudiante más joven.
    const estudianteMasJoven2 = await model.estudiantes.find({}).sort({ edad: 1 }).skip(1).limit(1)
    // console.log(estudianteMasJoven2)

    //Sólo los nombres y apellidos de los estudiantes con su curso correspondiente, ordenados por apellido descendente (z a a).
    const apellidosDescendente = await model.estudiantes.find({}, { nombre: 1, apellido: 1, curso: 1 }).sort({ apellido: -1 })
    // console.log(apellidosDescendente)

    //Los estudiantes que sacaron 10.
    const estudiantes10 = await model.estudiantes.find({ nota: 10 })
    // console.log(estudiantes10)

    //El promedio de notas del total de alumnos.
    const promedioNotas = await model.estudiantes.aggregate([
      {
        $group: {
          _id: null,
          promedio: { $avg: "$nota" }
        }
      }
    ])
    // console.log(promedioNotas)

    //El promedio de notas del curso '1A'.
    const promedioNotas1A = await model.estudiantes.aggregate([
      {
        $match: { curso: '1A' }
      },
      {
        $group: {
          _id: null,
          promedio: { $avg: "$nota" }
        }
      }
    ])
    // console.log(promedioNotas1A)

    console.log('UPDATE')
    // Actualizar el dni del estudiante Lucas Blanco a 20355875
    // const updateDni = await model.estudiantes.updateOne({ nombre: 'Lucas' }, { $set: { dni: 20355875 } })
    // console.log(updateDni)

    // Agregar un campo 'ingreso' a todos los documentos con el valor false
    // const addIngreso = await model.estudiantes.updateMany({}, { $set: { ingreso: false } })
    // console.log(addIngreso)

    // Modificar el valor de 'ingreso' a true para todos los estudiantes que pertenezcan al curso 1A
    // const ingresoTrue = await model.estudiantes.updateMany({ curso: '1A' }, { $set: { ingreso: true } })
    // console.log(ingresoTrue)

    // Listar los estudiantes que aprobaron(hayan sacado de 4 en adelante) sin los campos de _id y __v
    // const estudiantesPassed = await model.estudiantes.find({ nota: { $gte: 4 } }, { _id: 0, __v: 0 })
    // console.log(estudiantesPassed)

    // Listar los estudiantes que posean el campo 'ingreso' en true sin los campos de _id y __v
    // const estudiantesIngreso = await model.estudiantes.find({ ingreso: true }, { _id: 0, __v: 0 })
    // console.log(estudiantesIngreso)

    // Borrar de la colección de estudiantes los documentos cuyo campo 'ingreso' esté en true
    // const estudiantesDeleted = await model.estudiantes.deleteMany({ ingreso: true })
    // console.log(estudiantesDeleted)

  } catch (error) {
    console.log(error)
  }
}

CRUD();