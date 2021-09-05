// Realizaremos una función que nos devuelva números aleatorios entre un mínimo y un máximo configurable y que muestre la cantidad de valores que vamos solicitando junto a la fecha y hora del pedido.

// El retorno será un objeto con el siguiente formato:
// { orden: 1, número: 5, fyh: dd / mm / yy hh: mm: ss }

// Aclaracion: No se pueden usar variables globales ni closures para mantener el contador.

function createOrder(minNum, maxNum) {
  let orden = 0

  return {
    next: function () {
      return {
        value: {
          orden: orden++,
          numero: Math.floor(Math.random() * (maxNum - minNum) + minNum),
          fyh: new Date()
        },
        done: false
      }
    }
  }
}

let order = createOrder(1, 20)

console.log(order.next().value)
console.log(order.next().value)
console.log(order.next().value)
console.log(order.next().value)
console.log(order.next().value)

// EJERCICIO EN CLASE
function* numeroRandom(min, max) {
  let contador = 0;
  while (true) {
    // console.log(`CONTEXTO => Contador = ${contador}`);
    contador++;
    const output = {
      fyh: new Date(),
      counter: contador,
      result: Math.floor(Math.random() * (max - min) + min),
    };
    yield output;
  }
}

const numRandomObj = numeroRandom(0, 1000);

for (let call of numRandomObj) {
  const data = call;
  console.log(data);
  if (data.result > 800 || data.counter >= 10) break;
}

console.log('Fin');