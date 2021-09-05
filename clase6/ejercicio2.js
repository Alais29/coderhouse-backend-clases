// Escribir un programa ejecutable bajo node.js que realice las siguientes acciones:
// A) Lea el archivo package.json y declare un objeto con el siguiente formato y datos:

// let info = {
//   contenidoStr: (contenido del archivo leído en formato string),
//   contenidoObj: (contenido del archivo leído en formato objeto),
//   size: (tamaño en bytes del archivo)
// }

// B) Muestre por consola el objeto info luego de leer el archivo
// C) Guardar el objeto info en un archivo llamado info.txt dentro de la misma carpeta de package.json
// D) Incluir el manejo de errores(con throw new Error)

// Aclaraciones:
// - Utilizar la lectura y escritura de archivos en modo asincrónico con callbacks.
// - Consigna B): Para deserializar un string con contenido JSON utilizar JSON.parse(convierte string en object).
// - Consigna C): Para serializar un objeto(convertirlo a string) y guardarlo en un archivo utilizar JSON.stringify.

//   Ayuda:
// Para el Punto 3 considerar usar JSON.stringify(info, null, '\t') para preservar el formato de representación del objeto en el archivo.

const fsPromises = require('fs').promises;

const readPackageJson = async () => {
  try {
    const packageJsonData = await fsPromises.readFile('./package.json', 'utf-8')
    const stats = await fsPromises.stat('./package.json')
    const fileSizeInBytes = stats.size;
    const info = {
      contenidoStr: packageJsonData,
      contenidoObj: JSON.parse(packageJsonData),
      size: fileSizeInBytes
    }
    await fsPromises.writeFile('./info.txt', JSON.stringify(info, null, '\t'))
    console.log(info)
  } catch (e) {
    throw new Error(e)
  }
}

readPackageJson()