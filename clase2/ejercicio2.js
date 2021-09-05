// Realizaremos una función que reciba un objeto, y muestre cada dos segundos sus claves y valores en este formato: [clave, valor].

// El proceso no debe ser bloqueante.

const resolveAfter2Seconds = (x) => {
  return new Promise((resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000)
  }))
}

const showKeysValues = async (obj) => {
  let keysValues = Object.entries(obj)
  for (keyvalue of keysValues) {
    const showkeyvalue = await resolveAfter2Seconds(keyvalue)
    console.log('2sec', showkeyvalue)
  }
}

let newobj = {
  nombre: 'Alfonsina',
  apellido: 'Lizardo',
  edad: 30
}

showKeysValues(newobj)

// resolucion en clase
const func = (obj) => {
  setInterval(() => {
    console.log(Object.entries(obj))
  }, 2000)
}

func(newobj)