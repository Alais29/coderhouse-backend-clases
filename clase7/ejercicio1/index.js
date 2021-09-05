// Realizar un proyecto en node.js que permita calcular cuantos años y días totales transcurrieron desde la fecha de tu nacimiento.Para ello utilizar la dependencia moment instalándola en forma local desde npm.Imprimir los resultados por consola.

// Un ejemplo de salida:
// Hoy es 11 / 01 / 2021
// Nací el 29 / 11 / 1968
// Desde mi nacimiento han pasado 52 años.
// Desde mi nacimiento han pasado 19036 días.

// Aclaración:
// Importar moment con require (CommonJS)

// Ayuda:
// Utilizar los métodos diff y format de moment

const moment = require('moment')

const getDaysYearsFromBirth = () => {
  const today = moment()
  const birthDate = moment('29/09/1990', 'DD/MM/YYYY', true)
  const yearsFromBirth = today.diff(birthDate, 'years')
  const daysFromBirth = today.diff(birthDate, 'days')

  console.log(`Hoy es ${today.format('DD/MM/YYYY')}`)
  console.log(`Naci el ${birthDate.format('DD/MM/YYYY')}`)
  console.log(`Desde mi nacimiento han pasado ${yearsFromBirth} años`)
  console.log(`Desde mi nacimiento han pasado ${daysFromBirth} días`)
}

getDaysYearsFromBirth()