const express = require('express');
const MongoClient = require('mongodb').MongoClient;
// Iniciando o Server
const app = express();

// Iniciando o BD
MongoClient.connect("mongodb://localhost:27017/nodeapi", {useUnifiedTopology: true})

//Primeira rota
app.get('/', (req, res) => {
    res.send("Tudo ok!")
})

app.listen(3001);