const clientModel = require('../models/clientModel');
exports.getById = function (id) {
    const client = clientModel.clienti.find(c => c.id === parseInt(id));
    if (client) {
        return client;
    }
    return null;
}
exports.create = function (client) {
    if(!client.name){
        return "Name is required"
    }
    clientModel.push(client)
    return client;
}
exports.update = function (id, client) {
    const oldClient = clientModel.clienti.find(a => a.id === id)
    if (oldClient) {
        oldClient.name = client.name;
        oldClient.adress = client.adress;
        oldClient.city = client.city;
        oldClient.state = client.state;
    }
    return oldClient;
}
exports.getAddress = function(addressId){
   const address = clientModel.addresses.find(a=>a.id===addressId)
   return address
}