// Realizaremos una función que reciba un array y devuelva el resultado de la operación potenciación en caso de poder realizarla.De no ser posible, devolverá null.

// Se deberá detectar si el array incluye un ** y tiene un número a cada lado.En ese caso, realizar la operación de potenciación del número localizado a la izquierda del ** elevado al exponente que indica el número de la derecha.

let arr = ['6**2', '**', '3**3', '4**', '4**5', '8**2**', '4*=5']


function pow(arr) {
  let results = []
  arr.forEach(element => {
    if (element.includes('**')) {
      let beforeExp = element.indexOf('**') - 1
      let afterExp = element.indexOf('**') + 2
      if (element[beforeExp] && element[afterExp]) {
        results.push(element[beforeExp] ** element[afterExp])
      } else {
        results.push(null)
      }
    }
  });
  return results
}

// resolucion en clase
const salida1 = arr
  .filter(value => value.includes('**'))
  .map(value => {
    const output = value.split('**')

    if (output.length != 2 || output.includes('')) return null
    if (isNaN(output[0] ** output[1])) {
      return null;
    }
    return output[0] ** output[1];
  })

console.log(pow(arr))
console.log(salida1)