const express = require('express');

const app = express();

const PORT = 8080;

const container1 = require ('./class-desafioC6.js');
   new container1('first-file-products.txt')

   container1.createFile();
   container1.save({item:'azucar',price:150});
   container1.save({item:'fideos',price:80});
   container1.save({item:'gaseosa',price:110});


const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});

server.on("error", error => console.log(`Error en servidor ${error}`));

app.get('/', (req, res) => {
    res.send('Desafio clase 6')
 });

 app.get('/products', (req, res) => {
   
    res.send(container1.getAll());
 });

 app.get('/productsRandom', (req, res) => {
    res.send(container1.getRandomItem);
 });
 