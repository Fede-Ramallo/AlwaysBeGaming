const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('../routes/routes');

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


//rutas
app.use('/home', router);

module.exports ={app};