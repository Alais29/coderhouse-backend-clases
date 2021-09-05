// en up se inicializan las tablas
exports.up = function (knex) {
  return knex.schema
    .createTable('categorias', (categoriasTable) => {
      //primero creamos la tabla categoría ya que productos depende de esta
      //se crea una tabla llamada categorías
      categoriasTable.increments();
      categoriasTable.string('nombre').notNullable();
      //knex.fn.now() es como el Date.now()
      categoriasTable.timestamp('createdAt').defaultTo(knex.fn.now());
    })
    .createTable('productos', (productosTable) => {
      //se crea una tabla llamada productos
      productosTable.increments();
      productosTable.string('nombre').notNullable();
      productosTable.string('descripcion').notNullable();
      productosTable.integer('stock').notNullable();
      //decimal(4,2) significa que son 4 digitos, y 2 de ellos seran decimales
      productosTable.decimal('precio', 4, 2);
      productosTable.timestamp('createdAt').defaultTo(knex.fn.now());
      //se crea una relación con la tabla categorías
      //relación 1 a muchos, un producto solo puede tener una categoría
      //una categoría puede tener muchos productos
      //cuando se hace referencia a la key de otra tabla se llama FOREIGN KEY
      productosTable
        .integer('category_id')
        .unsigned()
        .references('id')
        .inTable('categorias');
    });
};
//en down se limpian o borran las tablas
exports.down = function (knex) {
  //borrar la tabla productos y la tabla categorías
  //borramos primero la tabla productos que depende de categorías, si se intenta borrar primero categorías lanzara un error ya que hay items en productos que dependen de categoría
  return knex.schema.dropTable('productos').dropTable('categorias');
};

// para iniciar y crear las tablas (up)
//npx knex migrate:latest

// para borrar las tablas (down)
//npx knex migrate:rollback

//para crear el archivo de seeds 
//npx knex seed:make alimentar