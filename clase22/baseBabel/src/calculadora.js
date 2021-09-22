class CalculadoraClass {
  chequearValores(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) throw new Error('Argumentos no validos');
  }

  suma(num1, num2) {
    this.chequearValores(num1, num2)
    return num1 + num2;
  }

  resta(num1, num2) {
    this.chequearValores(num1, num2)
    return num1 - num2;
  }
}

export const calculadora = new CalculadoraClass();