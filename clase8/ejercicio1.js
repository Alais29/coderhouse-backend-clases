// Dada la siguiente constante: const frase = 'Hola mundo como están'
// Realizar una aplicación de servidor node.js con express que contenga los siguientes endpoints get:

// 1) '/api/getFrase' -> devuelve la frase en forma completa
// 2) '/api/getLetra/:num  -> devuelve por número de orden la letra dentro de esa frase (1 es la primera letra)
// 3) '/api/getPalabra/:num  -> devuelve por número de orden la palabra dentro de esa frase (1 es la primera palabra)

// Aclaraciones:
// - En el caso de las consignas 2) y 3), si se ingresa un parámetro no numérico o que esté fuera del rango de la cantidad total de letras o palabras (según el caso), el servidor debe devolver un objeto con la descripción de dicho error. Por ejemplo:
// { error: "El parámetro está fuera de rango" } cuando no está entre 1 y el total de letras/palabras
// { error: "El parámetro está fuera de rango" } cuando el parámetro no es numérico

// - El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.

const express = require('express');

const app = express()

const PORT = 8000
const server = app.listen(PORT, () => {
  console.log(`Servidor inicializado en el puerto ${PORT}`)
})
server.on('error', (error) => console.log(`Error en el servidor: ${error}`))

const frase = 'Hola mundo como están'

app.get('/api/getFrase', (req, res) => {
  res.json({ data: frase })
})

app.get('/api/getLetra/:num', (req, res) => {
  let letterPos = req.params.num
  if (isNaN(letterPos)) {
    res.status(400).json({ error: 'El parámetro debe ser un número' })
  } else if (letterPos > frase.length || letterPos < 0) {
    res.status(400).json({ error: 'El parámetro está fuera de rango' })
  } else {
    res.json({ data: frase[letterPos - 1] })
  }
})

app.get('/api/getPalabra/:num', (req, res) => {
  const fraseArray = frase.split(' ')
  const wordPos = req.params.num
  if (isNaN(wordPos)) {
    res.status(400).json({ error: 'El parámetro debe ser un número' })
  } else if (wordPos > fraseArray.length || wordPos < 0) {
    res.status(400).json({ error: 'El parámetro está fuera de rango' })
  } else {
    res.json({ data: fraseArray[wordPos - 1] })
  }
})
