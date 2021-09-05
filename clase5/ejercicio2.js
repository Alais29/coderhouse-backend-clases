let productos = [
  { id: 1, nombre: 'Escuadra', precio: 323.45 },
  { id: 2, nombre: 'Calculadora', precio: 234.56 },
  { id: 3, nombre: 'Globo Terráqueo', precio: 45.67 },
  { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
  { id: 5, nombre: 'Reloj', precio: 67.89 },
  { id: 6, nombre: 'Agenda', precio: 78.90 }
]

const productsNames = productos.map(product => product.nombre).join(', ')
const totalPrice = parseFloat(productos.reduce((total, product) => total + product.precio, 0)).toFixed(2)
const meanPrice = parseFloat(totalPrice / productos.length).toFixed(2)
const cheaper = productos.sort((a, b) => a.precio - b.precio)[0]
const mostExpensive = productos.sort((a, b) => b.precio - a.precio)[0]

const summary = {
  productos: productsNames,
  precio_total: totalPrice,
  precio_promedio: meanPrice,
  prod_menos_costoso: cheaper,
  prod_mas_costoso: mostExpensive,
}

console.log(summary)