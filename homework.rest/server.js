const path = require('path');
const express = require('express');
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const thingRoutes = require('./routes/thing.route');

mongoose.connect('mongodb://localhost/testdb');

const app = express();

app.get('/thing', thingRoutes.post);

// Starts the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});