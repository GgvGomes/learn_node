const express = require('express');
const app = express();

// Path: express_server\server.js

// Pasta da req e function(dados da requisicao, resposta)
app.get("/", (req, res) => {
    res.send("Seja bem vindo")
    
});

// retornando uma pasta html
app.get("/pagehmtl", (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get("/param/:param/:param2", (req, res) => {
    res.send(req.params.param + " " + req.params.param2)
    // return res.sendFile(__dirname + '/index.html')
});

// Pede apenas a porta -> ela deve ser a última linha do cod
app.listen(3000, ()=> { 
    // function de callback (sempre q acontece algo ela é chamada)
    console.log("Servidor rodando");
})