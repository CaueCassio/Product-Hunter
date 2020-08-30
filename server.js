const express = require('express');
const mongoose = require('mongoose');
// Agrupando Models
const requireDir = require('require-dir');


// Iniciando o Server
const app = express();
// Iniciando o BD
mongoose.connect("mongodb://localhost:27017/nodeapi", { userNewParser: true });
requireDir("./src/models");

//Rotas
app.use('/', require('./src/routes'))

app.listen(3001);   