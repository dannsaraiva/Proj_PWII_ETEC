//IMPORTAÇÃO DOS PACOTES.
const Sequelize = require('sequelize');

//IMPORTAÇÃO DO ARQUIVO DE CONEXÃO COM O BANCO DE DADOS.
const connection = require('../database/database');

//CONSTRUÇÃO DA TABELA.
const modelMedicamento = connection.define(
    'tbl_remedio',
    {
        id_medicamento: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome_medicamento: {
            type: Sequelize.STRING(100),
            allowNull: false
        }
        ,
        descricao_medicamento: {
            type: Sequelize.STRING(100),
            allowNull: true
        },
        validade_medicamento: {
            type: Sequelize.DATEONLY,
            allowNull: true
        },
        horario_medicamento: {
            type: Sequelize.TIME,
            allowNull: true
        },
        duracao_medicamento: {
            type: Sequelize.FLOAT,
            allowNull: true
        },
        quant_medicamento: {
            type: Sequelize.FLOAT,
            allowNull: true
        }
    }
);

//LINHA DE CÓDIGO PARA CRIAR A TABELA NO BANCO.
// modelMedicamento.sync({force:true});

module.exports = modelMedicamento;