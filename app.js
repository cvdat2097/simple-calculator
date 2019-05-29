const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const basicOperators = require('./routes/basicOperators');
const squareOperator = require('./routes/squareOperator');

// HOMEPAGE
app.get('/', (req, res) => {
    res.send('WORKING VERSION');
});

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// APIs
app.use(basicOperators);
app.use(squareOperator);

module.exports = app;
