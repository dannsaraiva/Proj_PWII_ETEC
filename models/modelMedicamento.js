//IMPORTAÇÃO DOS PACOTES.
const Sequelize = require('sequelize');

//IMPORTAÇÃO DO ARQUIVO DE CONEXÃO COM O BANCO DE DADOS.
const connection = require('../database/database');

//CONSTRUÇÃO DA TABELA.
const modelMedicamento = connection.define(
    'tbl_remedio',
    {
        id_remedio: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_medicamento: {
            type: Sequelize.STRING(100),
            allowNull: false
        }
    }
);

//LINHA DE CÓDIGO PARA CRIAR A TABELA NO BANCO.
// modelMedicamento.sync({force:true});

module.exports = modelMedicamento;