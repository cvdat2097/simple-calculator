const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const basicOperators = require('./routes/basicOperators');

app.get('/', (req, res) => {
    res.send('DevOps pipeline has been set up successfully');
});

app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json());

// APIs
app.use(basicOperators);

module.exports = app;
