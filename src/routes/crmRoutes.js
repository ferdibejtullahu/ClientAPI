const express = require('express');
const router = express();
const clienti = require('../models/crmModels');

router.use(express.json());

router.get('/', (req, res) => {
    res.send(clienti);
});

router.get('/client/:id', (req, res) =>{


    const client = clienti.find(c => c.id === parseInt(req.params.id));
    if(!client){
        res.status(404).send('Nuk eshte gjendur asnje klient me ID e dhene');
    }
    res.send(client);
});

router.post('/client', (req, res) => {
    const klient = {
        id: clienti.length + 1,
        name : req.body.name,
        adress : req.body.adress,
        city : req.body.city,
        state : req.body.state
    }
    clienti.push(klient);
    res.send(klient);
});

router.put('/client/:id' , (req, res) => {
    const client = clienti.find(c => c.id === parseInt(req.params.id));
    if(!client){
        res.status(404).send(' Nuk eshte gjetur klienti me Id e dhene');
    }

    client.name = req.body.name;
    client.adress = req.body.adress;
    client.city = req.body.city;
    client.state = req.body.state;

    res.send(client);
});

router.delete('/client/:id' , (req,res) => {
    const client = clienti.find(c => c.id === parseInt(req.params.id));
    if(!client){
        res.status(404).send('Nuk eshte gjetur klienti me ID e dhene'); 
    }

    const index = clienti.indexOf(client);

    clienti.splice(index , 1);

    res.send(client);
})

module.exports = router;