const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const basicOperators = require('./routes/basicOperators');

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// APIs
app.use(basicOperators);


module.exports = app;
