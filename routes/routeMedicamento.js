//IMPORTAÇÃO DOS PACOTES.
const express = require('express');
const router = express.Router();

//IMPORTAÇÃO DO ARQUIVO PARA CONEXÃO COM A ROTA.
const modelMedicamento = require('../models/modelMedicamento');

//ROTAS DE CRUD PARA OS MEDICAMENTOS.
//ROTA PARA CADASTRAR MEDICAMENTO.
router.post('/cadastrarMedicamento', (req, res) => {
    let { nome_medicamento, descricao_medicamento,
        validade_medicamento, horario_medicamento,
        duracao_medicamento, quant_medicamento } = req.body;

    modelMedicamento.create(
        {
            nome_medicamento, descricao_medicamento,
            validade_medicamento, horario_medicamento,
            duracao_medicamento, quant_medicamento
        }
    ).then(() => {
        return res.status(201).json({
            erroStatus: false,
            mensagemStatus: "Medicamento cadastrado !"
        })
    }).catch((error) => {
        return res.status(400).json({
            erroStatus: true,
            mensagemStatus: "Erro ao cadastrar medicamento !",
            errorObject: error
        })

    });
});

//ROTA PARA LISTAR MEDICAMENTO SEM CRITÉRIO.
router.get('/listarMedicamento', (req, res) => {
    modelMedicamento.findAll(
    ).then((response) => {
        return res.status(200).json({
            erroStatus: false,
            mensagemStatus: "Medicamentos listados !",
            data: response
        })
    }).catch((error) => {
        return res.status(400).json({
            erroStatus: true,
            mensagemStatus: "Erro ao listar os medicamentos !",
            errorObject: error
        })
    });
});

//ROTA PARA LISTAR MEDICAMENTO POR ID.
router.get('/listarMedicamentoPK/:id_medicamento', (req, res) => {

    let { id_medicamento } = req.params;

    modelMedicamento.findByPk(id_medicamento)
        .then((response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: "Listado medicamento por ID !",
                data: response
            })
        }).catch((error) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: "Erro ao listar medicamento por ID !",
                errorObject: error
            })
        });
});

//ROTA PARA LISTAR MEDICAMENTO POR NOME.
router.get('/listarMedicamentoNome/:nome_medicamento', (req, res) => {

    let { nome_medicamento } = req.params;

    modelMedicamento.findOne({ attributes: ['id_medicamento', 'nome_medicamento'], where: { nome_medicamento } })
        .then((response) => {
            return res.status(200).json({
                erroStatus: false,
                mensagemStatus: "Listado medicamento por ID !",
                data: response
            })
        }).catch((error) => {
            return res.status(400).json({
                erroStatus: true,
                mensagemStatus: "Erro ao listar medicamento por ID !",
                errorObject: error
            })
        });
});

//ROTA PARA ALTERAR MEDICAMENTO.
router.put('/atualizarMedicamento', (req, res) => {
    let { id_medicamento, nome_medicamento } = req.body;

    modelMedicamento.update(
        { nome_medicamento },
        { where: { id_medicamento } }
    ).then(() => {
        return res.status(200).json({
            erroStatus: false,
            mensagemStatus: "Medicamento alterado !"
        })
    }).catch((error) => {
        return res.status(400).json({
            erroStatus: true,
            mensagemStatus: "Erro ao alterar medicamento !",
            errorObject: error
        })
    });
});

//ROTA PARA EXCLUIR MEDICAMENTO.
router.delete('/excluirMedicamento/:id_medicamento', (req, res) => {
    let { id_medicamento } = req.params;

    modelMedicamento.destroy(
        { where: { id_medicamento } }
    ).then(() => {
        return res.status(200).json({
            erroStatus: false,
            mensagemStatus: "Medicamento excluído !"
        })
    }).catch((error) => {
        return res.status(400).json({
            erroStatus: true,
            mensagemStatus: "Erro ao excluír medicamento !",
            errorObject: error
        })
    })
});

module.exports = router;


