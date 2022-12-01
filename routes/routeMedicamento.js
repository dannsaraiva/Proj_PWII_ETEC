//IMPORTAÇÃO DOS PACOTES.
const express = require('express');
const router = express.Router();

//IMPORTAÇÃO DO ARQUIVO PARA CONEXÃO COM A ROTA.
const modelMedicamento = require('../models/modelMedicamento');

//ROTAS DE CRUD PARA OS MEDICAMENTOS.
router.post('/cadastrarMedicamento', (req, res) => {
    res.send('Cadastro')
});

router.get('/listarMedicamento', (req, res) => {
    res.send('Listar')
});

router.put('/atualizarMedicamento', (req, res) => {
    res.send('Atualizar')
});

router.delete('/excluirMedicamento', (req, res) => {
    res.send('Deletar')
});

module.exports = router;


