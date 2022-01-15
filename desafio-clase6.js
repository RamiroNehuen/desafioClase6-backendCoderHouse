const express = require('express');

const app = express();

const PORT = 8080;

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});

server.on("error", error => console.log(`Error en servidor ${error}`));

app.get('/', (req, res) => {
    res.send('Desafio clase 6')
 });

 app.get('/products', (req, res) => {
    res.send('Desafio clase 6')
 });

 app.get('/productsRandom', (req, res) => {
    res.send('Desafio clase 6')
 });
 