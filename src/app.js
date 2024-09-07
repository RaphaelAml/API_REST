// src/app.js
import express from 'express';
import colaboradorRoutes from './routes/colaboradorRoutes.js';

const app = express();
app.use(express.json());

// Rotas
app.use('/colaborador', colaboradorRoutes);

app.get("/", (req, res) => {
    res.status(200).send("Unifio node.js API");
});

export default app;
