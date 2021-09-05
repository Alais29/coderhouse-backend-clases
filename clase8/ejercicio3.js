// Dada la siguiente constante: const frase = 'Frase inicial'
// Realizar una aplicación de servidor node.js con express que incorpore las rutas get, post, put y delete necesarias para:
// 1. Listar la frase completa: ruta get '/api/leer'
// 2. Listar un palabra por su posición: ruta get '/api/leer/:pos'(considerar que la primera palabra tiene posición 1)
// 3. Incorporar una palabra al final: ruta post '/api/guardar' con formato de envío: { palabra: (nueva palabra) }
// 4. Actualizar una palabra por su posición: ruta put '/api/actualizar/:pos'(considerar que la primera palabra tiene posición 1) con formato de envío: { palabra: (palabra a actualizar) }
// 5. Borrar una palabra por su posición: ruta delete '/api/borrar/:pos'(considerar que la primera palabra tiene posición 1)

// Aclaraciones:
// En el caso del post, put y delete, el servidor debe responder con la palabra incorporada, actualizada y eliminada respectivamente.
// Utilizar Postman para probar la funcionalidad.
// El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

const express = require('express')

const app = express()

const server = app.listen(8080, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`)
})
server.on('error', (error) => console.log(`Error en el servidor: error`))

let frase = 'Frase inicial'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/api/leer', (req, res) => {
  res.json({ data: frase })
})

app.get('/api/leer/:pos', (req, res) => {
  const fraseArray = frase.split(' ')
  const wordPos = req.params.pos
  res.json({ data: fraseArray[wordPos - 1] })
})

app.post('/api/guardar', (req, res) => {
  const newWord = req.body.palabra
  frase += (' ' + newWord)
  res.json({ data: frase })
})

app.put('/api/actualizar/:pos', (req, res) => {
  const wordPos = req.params.pos
  const fraseArr = frase.split(' ')
  fraseArr[wordPos - 1] = req.body.palabra
  frase = fraseArr.join(' ')
  res.json({ data: frase })
})

app.delete('/api/borrar/:pos', (req, res) => {
  const wordPos = req.params.pos
  const fraseArr = frase.split(' ')
  fraseArr.splice(wordPos - 1, 1)
  frase = fraseArr.join(' ')
  res.json({ data: frase })
})

