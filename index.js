const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const clientRouter = require('./src/routes/clientRoute');


app.use('/client' , clientRouter);



app.get('/', (req,res) => {
    res.send('Hello worldddddd');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

