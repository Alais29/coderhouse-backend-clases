// Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual:
// Si la hora actual se encuentra entre las 6 y las 12 hs será 'Buenos días!'.
// Entre las 13 y las 19 hs será 'Buenas tardes!'.
// De 20 a 5 hs será 'Buenas noches!'.

// Se mostrará por consola cuando el servidor esté listo para operar y en que puerto lo está haciendo.


const http = require('http')

const server = http.createServer((req, res) => {
  const date = new Date
  const hours = date.getHours()
  const msg = hours <= 12
    ? 'Buenos días'
    : hours <= 19
      ? 'Buenas tardes'
      : 'Buenas noches'
  res.end(msg)
})

server.listen(8080, function () {
  console.log(`El servidor está listo en ${this.address().port}`)
})