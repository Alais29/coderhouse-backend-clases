// Definir un método 'mostrar' dentro de una clase Mensaje que reciba dos parámetros: el mensaje a representar por consola y el retardo de tiempo en segundos luego del cual se mostrará el mensaje.
// El retardo podrá ser cero y en el caso de no definirlo se usará el valor de un segundo.
// Para el caso de no definir ni el retardo ni el mensaje mostrar la frase: 'defina mensaje'.
// Permitir que ingresen mensajes como un 0 o false y que puedan ser representados.
// Si el mensaje posee espacios al inicio dejarlos tal cual, sólo remover los espacios al final.
// Verificar que la operación anterior sea válida para todos los casos, caso contrario no realizarla.


class Mensaje {
  mostrar(mensaje, segs) {
    let realsegs = segs >= 0 ? segs * 1000 : 1000
    let msg = mensaje ?? null
    let msgToShow
    if (msg === null && !segs) {
      console.log('defina el mensaje')
    } else {
      try {
        msgToShow = msg.trimEnd()
      } catch {
        msgToShow = msg
      }
      setTimeout(() => {
        console.log(msgToShow)
      }, realsegs);
    }
  }
}

const test = new Mensaje()
test.mostrar()
test.mostrar(0, 0)
test.mostrar(false, 1)
test.mostrar('    mensaje    ', 2)
