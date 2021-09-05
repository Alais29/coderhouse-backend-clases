let socket = io.connect();
socket.on('messages', function(data) {
  console.log(data);
});

const render = (data) => {
  let html = data.map((elem, index) => {
    return `
      <div>
        <strong>${elem.author}</strong>
        <em>${elem.text}</em>
      </div>
    `
  }).join(" ")
  document.querySelector('#messages').innerHTML = html
};

const addMessage = (e) => {
  let mensaje = {
    author: document.querySelector('#username').value,
    text: document.querySelector('#texto').value
  };
  socket.emit('new-message', mensaje);
  return false
}

socket.on('messages', data => render(data));