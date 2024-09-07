import { colaborador, buscarColaborador } from '../models/colaboradorModel.js';

export const getColaboradores = (req, res) => {
    res.status(200).json(colaborador);
};

export const getColaboradorById = (req, res) => {
    const index = buscarColaborador(req.params.id);
    if (index === -1) {
        return res.status(404).send("Colaborador não encontrado");
    }
    res.status(200).json(colaborador[index]);
};

export const createColaborador = (req, res) => {
    colaborador.push(req.body);
    res.status(201).send("Inserido com sucesso");
};

export const updateColaborador = (req, res) => {
    const index = buscarColaborador(req.params.id);
    if (index === -1) {
        return res.status(404).send("Colaborador não encontrado");
    }

    colaborador[index] = {
        id: Number(req.params.id),
        nome: req.body.nome
    };

    res.status(200).send("Colaborador atualizado com sucesso");
};

export const deleteColaborador = (req, res) => {
    const index = buscarColaborador(req.params.id);
    if (index === -1) {
        return res.status(404).send("Colaborador não encontrado");
    }

    colaborador.splice(index, 1);
    res.status(200).send("Colaborador deletado com sucesso");
};
