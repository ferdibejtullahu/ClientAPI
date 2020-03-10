const express = require('express');
const router = express();
const clienti = require('../models/clientModel');
const clientController = require('../controllers/clientController')

router.use(express.json());

router.get('/', (req, res) => {
    res.send(clienti);
});

router.get('/:id', (req, res) =>{
    const client  = clientController.getById(req.params.id)
    if(!client){
        res.status(404).send('Nuk eshte gjendur asnje klient me ID e dhene');
    }
    res.send(client);
});

router.post('/', (req, res) => {
    const klient = {
        id: clienti.length + 1,
        name : req.body.name,
        adress : req.body.adress,
        city : req.body.city,
        state : req.body.state
    }
    const result = clientController.create(klient);
    res.send(result);
});

router.put('/:id' , (req, res) => {
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

router.delete('/:id' , (req,res) => {
    const client = clienti.find(c => c.id === parseInt(req.params.id));
    if(!client){
        res.status(404).send('Nuk eshte gjetur klienti me ID e dhene'); 
    }

    const index = clienti.indexOf(client);

    clienti.splice(index , 1);

    res.send(client);
})

router.get('/:id/address', (req, res) =>{
    const client  = clientController.getById(req.params.id)
    console.log(client)
    const address = clientController.getAddress(client.address_id)
    if(!address){
        res.status(404).send('Nuk eshte gjendur asnje klient me ID e dhene');
    }
    res.send(address);
});

module.exports = router;