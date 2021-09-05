const socket = io();

const inputText = document.querySelector(".text");
const messages = document.querySelector(".messages");
const button = document.querySelector("button");

const mensajes = [];

const id = Date.now();

socket.on("mensajes", (data) => {
  messages.innerHTML=''
  data.forEach((element) => {
    const li = document.createElement("li");
    li.innerHTML = `SocketId: ${element.socketid} -> Mensaje: ${element.mensaje}`;
    messages.append(li);
  });
});

button.addEventListener("click", () => {
  const text = inputText.value;
  inputText.value = ''
  console.log(text)
  socket.emit("mensaje", text);
});
