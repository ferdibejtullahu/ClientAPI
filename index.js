const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./src/routes/crmRoutes');


app.use('/crmRoutes' , router);



app.get('/', (req,res) => {
    res.send('Hello worldddddd');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

