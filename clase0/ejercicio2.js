let valores = [true, 5, false, "hola", "adios", 2]

function longestString(arr) {
  const stringsArr = arr.filter(item => typeof item === 'string')
  return stringsArr.sort((a, b) => b.length - a.length)[0]
}

function indexOfFalse(arr) {
  return arr.indexOf(false)
}

function mathOperation(arr, operation) {
  const [numero1, numero2] = arr.filter(item => typeof item === 'number')
  switch (operation) {
    case '+':
      return numero1 + numero2
    case '-':
      return numero1 - numero2
    case '*':
      return numero1 * numero2
    case '/':
      return numero1 / numero2
    default:
      return 'Recuerda ingresar que tipo de operación deseas realizar (suma, resta, mult, div)'
  }
}

console.log(longestString(valores))
console.log(indexOfFalse(valores))
console.log(mathOperation(valores, '/'))