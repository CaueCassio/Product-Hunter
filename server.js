const express = require('express');

const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

// Agrupando Models
const requireDir = require('require-dir');
requireDir("./src/models");

// Iniciando o Server
const app = express();
// Iniciando o BD
mongoose.connect("mongodb://localhost:27017/nodeapi");

//Primeira rota
app.get('/', (req, res) => {
        Product.create({
            title: "React Naterwerive",
            description: "Build Nwerwerative apps witch React",
            url: "http://github.com/fawerwercebook/react-native"
        });
        return res.send("Tudo ok!");
})

app.listen(3001);