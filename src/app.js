import express from 'express';
const app = express();

const Colaborador = [
    {
        id: 1,
        nome: "abacaxi"
    },
    {
        id: 2,
        nome: "dev"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Unifio node.js API");
});

app.get("/colaboradores", (req, res) => {
    res.status(200).json(Colaborador);
});

export default app;