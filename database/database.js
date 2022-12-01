//IMPORTAÇÃO DOS PACOTES.
const Sequelize = require('sequelize');

//CONEXÃO AO BANCO DE DADOS.
const connection = new Sequelize(
    'bd_malit',
    'root',
    '',
    {
        host: 'localhost',
        dialect: 'mysql',
        timezone: '-03:00'
    }
);

module.exports = connection;


