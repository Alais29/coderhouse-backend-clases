import compression from 'compression';
import express from 'express';

const app = express()

const server = app.listen(8080, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`)
})
server.on('error', (error) => console.log(`Error en el servidor: error`))

app.use(compression())

app.get('/saludo', (req, res) => {
  const data = []
  for (let i = 0; i < 1000; i++) {
    data.push('Hola que tal');
  }
  res.json({ data })
})