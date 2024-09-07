import express from 'express';
const app = express();
app.use(express.json());

const colaborador = [
    {
        id: 1,
        nome: "azul"
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

function buscarColaborador(id) {
    return colaborador.findIndex((colaborador) => {
        return colaborador.id === Number(id);
    });
}

app.put("/colaborador/:id", (req, res) => {
    const index = buscarColaborador(req.params.id);

    if(index === -1) {
        return res.status(404).send("Colaborador não encontrado");
    }

    colaborador[index] = {
        id: Number(req.params.id),
        nome: req.body.nome
    };

    res.status(200).send("Colaborador atualizado com sucesso");
});


export default app;