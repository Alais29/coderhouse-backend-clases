// Realizar un programa que ejecute las siguientes tareas:
// A) Lea el archivo info.txt generado en el desafío anterior deserializándolo en un objeto llamado info.
// B) Representar este objeto info en la consola.
// C) Modifique el author a "Coderhouse" y guarde el objeto serializado en otro archivo llamado package.json.coder
// D) Mostrar los errores por consola.

// Aclaraciones:
// 1) Usar import para acceder al módulo fs
// 2) Trabajar con fs.promises (then/catch).

// Ayuda:
// Para el punto 3 considerar usar JSON.stringify(info.contenidoObj, null, '\t') para preservar el formato de representación del objeto en el archivo.

const fsPromises = require('fs').promises

const readAndEditFile = async () => {
  try {
    const file = await fsPromises.readFile('./info.txt', 'utf-8')
    const info = JSON.parse(file)
    const contenidoStr = JSON.parse(info.contenidoStr)
    contenidoStr.author = 'Coderhouse'
    info.contenidoObj.author = 'Coderhouse'
    info.contenidoStr = JSON.stringify(contenidoStr, null, '\t')
    console.log(info)
    await fsPromises.writeFile('./package.json.coder', JSON.stringify(info.contenidoObj, null, '\t'))
  } catch (e) {
    console.log('ERROR: ', e)
  }
}

const readAndEditFilePromises = () => {
  fsPromises.readFile('./info.txt', 'utf-8')
    .then(file => {
      const info = JSON.parse(file)
      const contenidoStr = JSON.parse(info.contenidoStr)
      contenidoStr.author = 'Coderhouse'
      info.contenidoObj.author = 'Coderhouse'
      info.contenidoStr = JSON.stringify(contenidoStr, null, '\t')
      console.log(info)
      return info
    })
    .then((info) => {
      fsPromises.writeFile('./package.json.coder', JSON.stringify(info.contenidoObj, null, '\t'))
    })
    .catch(e => {
      console.log('ERROR: ', e)
    })
}

readAndEditFile()
// readAndEditFilePromises()