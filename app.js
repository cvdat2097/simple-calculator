const express = require('express');
const PORT = process.env.PORT || 3000;
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

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`[PORT:${PORT}] Server is running...`);
    }
});
