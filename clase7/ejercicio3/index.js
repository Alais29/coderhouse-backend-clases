// Crear un proyecto de servidor http en node.js que utilice la dependencia express, escuche en el puerto 8080 y tenga tres rutas get configuradas:
// A) '/' en esta ruta raíz, el servidor enviará un elemento de título nivel 1 (un h1 en formato HTML) que contenga el mensaje: 'Bienvenidos al servidor express' en color azul.
// B) '/visitas' donde con cada request, el servidor devolverá un mensaje con la cantidad de visitas que se hayan realizado a este endpoint. Por ej. 'La cantidad de visitas es 10'
// C) '/fyh' donde se devolverá la fecha y hora actual en formato objeto: 
// {fyh: '11/1/2021 11:36:04'}

// Mostrar por consola el puerto de escucha del servidor al momento de realizar el listen. En caso de error, representar el detalle.

// Aclaración:
// importar express con require (CommonJS)

const express = require('express')
const moment = require('moment')

const app = express()

let visitas = 0

const server = app.listen(8080, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`)
})
server.on('error', (error) => console.log(`Error en el servidor: ${error}`))

app.get('/', ((req, res) => {
  const h1 = '<h1 style="color: blue">Bienvenido al servidor express</h1>'
  res.send(h1)
}))

app.get('/visitas', ((req, res) => {
  visitas++
  res.send(`La cantidad de visitas es ${visitas}`)
}))

app.get('/fyh', ((req, res) => {
  const date = moment().format('DD/MM/YYYY h:mm:ss')
  res.json({ fyh: date })
}))