// Realizaremos una función que reciba una cantidad indeterminada de argumentos de entrada y devuelva la suma de ellos en un array de un sólo elemento.

// Obtendremos un array que contenga el resultado de 3 operaciones de suma con argumentos varios.

const testFunction = (...argumentos) => {
  const arr = [...argumentos]
  const getRandNumber = () => Math.floor(Math.random() * ((arr.length - 1) - 0) + 0)
  let results = 0
  for (i = 0; i < 3; i++) {
    const randNumber = getRandNumber()
    const randNumber2 = getRandNumber()
    results += (arr[randNumber] + arr[randNumber2])
  }
  console.log(results)
}

testFunction(1, 2, 3, 4)

//respuesta en clase
const func = (...argumentos) => {
  let salida = 0;

  argumentos
    .filter(a => typeof a == 'number')
    .forEach(value => {
      salida += value
    })

  return [salida];
}

const resultado = func(1, 2, 3, 'pepe', 'juan')
console.log(resultado)