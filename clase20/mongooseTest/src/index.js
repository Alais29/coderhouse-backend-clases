import mongoose from 'mongoose';
import * as model from './models/usuario.js';

const CRUD = async () => {
  try {
    // Conexión hacia la base de datos
    const URL = 'mongodb://0.0.0.0:27017/ecommerce'
    let rta = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Base de datos conectada')

    console.log('CREATE')
    const usuario = { nombre: 'Juan', apellido: 'Perez', email: 'jp@g.com', password: 123456 }
    const usuarioSaveModel = new model.usuarios(usuario)
    let usuarioSave = await usuarioSaveModel.save()
    console.log(usuarioSave)

    console.log('READ ALL')
    let usuarios = await model.usuarios.find({})
    console.log(usuarios)

    console.log('UPDATE')
    let usuarioUpdate = await model.usuarios.updateOne({ nombre: 'Juan' }, {
      $set: { password: 654321 }
    })
    console.log(usuarioUpdate)

    console.log('DELETE')
    let usuarioDelete = await model.usuarios.deleteOne({ nombre: 'Juan' })
    console.log(usuarioDelete)

    console.log('READ')
    usuarios = await model.usuarios.find({ nombre: 'Juan' })
    console.log(usuarios)
  } catch (error) {
    console.log(error)
  }
}

CRUD();