import express from 'express';
const app = express();
app.use(express.json());

const colaborador = [
    {
        id: 1,
        nome: "elefante"
    },
    {
        id: 2,
        nome: "dev"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Unifio node.js API");
});

app.get("/colaborador", (req, res) => {
    res.status(200).json(colaborador);
});

app.post("/colaborador", (req, res)=> {
    colaborador.push(req.body);
    res.status(201).send("Inserido com sucesso")
});

app.get("/colaborador/:id", (req, res) => {
    const index = buscarColaborador(req.params.id);
    res.status(200).json(colaborador[index]);
});

export default app;