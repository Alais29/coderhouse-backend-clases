const socket = io(); // Ya podemos empezar a usar los sockets desde el cliente :)
socket.on('mi mensaje', data => {
  alert(data)
  socket.emit('notificacion', 'Mensaje recibido exitosamente')
})
