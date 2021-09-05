"use strict";

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Modificar el proyecto anterior para importar moment con import (ES Modules)
// Representar la fecha de nacimiento y la actual en formato americano MM/DD/YY
// Ejemplo de salida:
// Hoy es 01/11/21
// Nací el 11/29/68
// Desde mi nacimiento han pasado 52 años.
// Desde mi nacimiento han pasado 19036 días.
// Además: el proyecto deberá admitir sólo actualizaciones patches de su dependencia moment
var getDaysYearsFromBirth = function getDaysYearsFromBirth() {
  var today = (0, _moment["default"])();
  var birthDate = (0, _moment["default"])('29/09/1990', 'DD/MM/YYYY', true);
  var yearsFromBirth = today.diff(birthDate, 'years');
  var daysFromBirth = today.diff(birthDate, 'days');
  console.log("Hoy es ".concat(today.format('MM/DD/YY')));
  console.log("Naci el ".concat(birthDate.format('MM/DD/YY')));
  console.log("Desde mi nacimiento han pasado ".concat(yearsFromBirth, " a\xF1os"));
  console.log("Desde mi nacimiento han pasado ".concat(daysFromBirth, " d\xEDas"));
};

getDaysYearsFromBirth();