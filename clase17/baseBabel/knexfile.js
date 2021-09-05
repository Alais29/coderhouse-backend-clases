// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'Argenis1990',
      database: 'my_test',
      port: '3307'
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    //scripts para inyectar datos de prueba
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },
};

//comando para crear las carpetas de migración
//npx knex migrate:make [NombreCualquiera]
