// Modificar el proyecto anterior para importar moment con import (ES Modules)
// Representar la fecha de nacimiento y la actual en formato americano MM/DD/YY

// Ejemplo de salida:
// Hoy es 01/11/21
// Nací el 11/29/68
// Desde mi nacimiento han pasado 52 años.
// Desde mi nacimiento han pasado 19036 días.

// Además: el proyecto deberá admitir sólo actualizaciones patches de su dependencia moment

import moment from 'moment'

const getDaysYearsFromBirth = () => {
  const today = moment()
  const birthDate = moment('29/09/1990', 'DD/MM/YYYY', true)
  const yearsFromBirth = today.diff(birthDate, 'years')
  const daysFromBirth = today.diff(birthDate, 'days')

  console.log(`Hoy es ${today.format('MM/DD/YY')}`)
  console.log(`Naci el ${birthDate.format('MM/DD/YY')}`)
  console.log(`Desde mi nacimiento han pasado ${yearsFromBirth} años`)
  console.log(`Desde mi nacimiento han pasado ${daysFromBirth} días`)
}

getDaysYearsFromBirth()