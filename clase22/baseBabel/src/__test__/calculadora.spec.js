import { calculadora } from "../calculadora";

describe('mi conjunto de pruebas de la calculadora Suma', () => {
  it('debería sumar bien dos números', () => {
    const num1 = 4;
    const num2 = 8;
    const resultadoEsperado = 12;

    const salida = calculadora.suma(num1, num2);

    expect(salida).toBe(resultadoEsperado);
  })

  it('si sumo argumentos no numéricos, debe tirarme un error', () => {
    const num1 = 4;
    const num2 = ['pepe'];

    const funcionDisparadora = () => calculadora.suma(num1, num2);

    expect(funcionDisparadora).toThrow('Argumentos no validos');
  })
})

describe('mi conjunto de pruebas de calculadora Resta', () => {
  it('debería restar bien dos números', () => {
    const num1 = 4;
    const num2 = 6.5;
    const resultadoEsperado = -2.5;

    const salida = calculadora.resta(num1, num2);

    expect(salida).toBe(resultadoEsperado);
  })
})