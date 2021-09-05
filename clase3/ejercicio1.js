// Definiremos una función llamada operacion que reciba como parámetro dos valores y una función con la operación que va a realizar.Deberá retornar el resultado.

// Definiremos las siguientes funciones: suma, resta, multiplicación, división y módulo.Estas recibirán dos valores y devolverán el resultado.Serán pasadas como parámetro en la llamada a la función operacion

// Todas las funciones tendrán que ser realizadas con sintaxis flecha.

const operacion = (valor1, valor2, cb) => {
  return cb(valor1, valor2)
}

const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const multiplicacion = (num1, num2) => num1 * num2
const division = (num1, num2) => num1 / num2
const modulo = (num1, num2) => num1 % num2

console.log(operacion(6, 2, suma))
console.log(operacion(6, 2, resta))
console.log(operacion(6, 2, multiplicacion))
console.log(operacion(6, 2, division))
console.log(operacion(6, 2, modulo))