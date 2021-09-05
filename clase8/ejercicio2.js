// Desarrollar un servidor que permita realizar la suma entre dos números utilizando tres rutas en estos formatos(Ejemplo con números 5 y 6)
// a) Ruta get '/api/sumar/5/6
// b) Ruta get '/api/sumar?num1=5&:num2=62) 
// c) Ruta get '/api/operacion/5+6
// No hace falta validar los datos a sumar, asumimos que los ingresamos correctamente.
// Implementar las rutas post, put y delete en la dirección '/api' respondiendo 'ok' + (post / put / delete) según corresponda.Probar estas rutas con Postman, verificando que el servidor responda con el mensaje correcto.
// El servidor escuchará en el puerto 8080 y mostrará todos los mensajes de conexión / error que correspondan.

const express = require('express')

const app = express()

const server = app.listen(8080, () => {
  console.log(`Servidor inicializado en el puerto ${server.address().port}`)
})
server.on('error', (error) => console.log(`Error en el servidor: ${error}`))

app.get('/api/sumar/:num1/:num2', (req, res) => {
  const num1 = Number(req.params.num1)
  const num2 = Number(req.params.num2)
  res.json({ data: (num1 + num2) })
})

app.get('/api/sumar', (req, res) => {
  const num1 = Number(req.query.num1)
  const num2 = Number(req.query.num2)
  res.json({ data: num1 + num2 })
})

app.get('/api/operacion/:op', (req, res) => {
  const result = eval(req.params.op)
  res.json({ data: result })
})

app.post('/api', (req, res) => {
  res.json({ data: 'ok post' })
})

app.put('/api', (req, res) => {
  res.json({ data: 'ok put' })
})

app.delete('/api', (req, res) => {
  res.json({ data: 'ok delete' })
})