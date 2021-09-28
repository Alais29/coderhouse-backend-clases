import express from 'express';
import cookieParser from 'cookie-parser';

const app = express()

app.use(cookieParser());
app.use(express.json());

const mySecret = 'mysecret';

app.get('/', (req, res) => {
  console.log(req.cookies)
  const mensaje = req.cookies.idioma === 'ingles' ? 'Hello!' : 'Hola!'
  res.send({msg: mensaje})
})

app.get('/set', (req, res) => {
  res.cookie('idioma', 'ingles').json({'msg': 'ok'})
})

app.get('/set3', (req, res) => {
  res.cookie('server3', 'express3', { maxAge: 30000, signed: true}).send({msg: 'ok'})
})

const server = app.listen(8080, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`)
})
server.on('error', (error) => console.log(`Error en el servidor: error`))