const calendario = {
  meses: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
  mostrarMeses() {
    this.meses.forEach(mes => console.log(mes))
  },
  getNumeroMes(nombreMes) {
    return this.meses.indexOf(nombreMes) + 1
  },
  getLetrasMes() {
    return this.meses.reduce((letters, mes) => {
      return letters += mes[0]
    }, '')
  }
}

calendario.mostrarMeses()
console.log(calendario.getNumeroMes('Septiembre'))
console.log(calendario.getLetrasMes())

