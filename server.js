const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')

// Agrupando Models
const requireDir = require('require-dir');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

// Iniciando o BD
mongoose.connect("mongodb://localhost:27017/nodeapi", { userNewParser: true });
requireDir("./src/models");

//Rotas
app.use('/', require('./src/routes'))

app.listen(3001);   