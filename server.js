// import http from 'http'

// const PORT = 3000;

//  const rotas = {
//     "/": "UNIFIO API",
//     "/demandas": "entrei na rota Demandas",
//      "/colaboradores": "entrei na rota de Colaboradores" 
//  };

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain"});
//     res.end(rotas[req.url]);
// });

// server.listen(PORT, () => {
//     console.log("Server is listening..")
// });

import app from "./src/app.js";

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server is listening...")
});