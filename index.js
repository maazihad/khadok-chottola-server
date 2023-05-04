const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

const chefs = require('./data/data.json');
const dishes = require('./data/dishes.json');

app.use(cors());

app.get('/', (req, res) => {
   res.send("Chef Nahid Osman Bangladesh is Running....",);
});

app.get('/chefs', (req, res) => {
   res.send(chefs);
});

app.get('/dishes', (req, res) => {
   res.send(dishes);
});

app.get('/chefs/:id', (req, res) => {
   const id = req.params.id;
   console.log(id);
   const findChef = chefs.find(chef => chef._id === id);
   res.send(findChef);
});

app.listen(port, () => {
   console.log(`The Chef Nahid Osman Bd running on port : ${port}`);
});