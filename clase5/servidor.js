const http = require('http')

const server = http.createServer((req, res) => {
  res.end('Hola')
})

server.listen(3000, function () {
  console.log(`El servidor está listo en ${this.address().port}`)
})