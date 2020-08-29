const express = require ('express');
const mongoose = require('mongoose');

// Iniciando o Server
const app = express();

// Iniciando o BD
mongoose.connect('mongodb://localhost:27017/')

//Primeira rota
app.get('/', (req,res)=>{
    res.send("Tudo ok!")
})

app.listen(3001);