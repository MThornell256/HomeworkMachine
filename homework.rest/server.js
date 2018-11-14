const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth.route');
const userRoutes = require('./routes/user.route');

mongoose.connect('mongodb://localhost/testdb', { useNewUrlParser: true });

const app = express();

// AUTH

// CORS
// Cors are enforced by the browser when reciving a response from a server
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, PATCH, DELETE');
        res.status(200).json({});
    }
    next();
});

// Body Parser
// to pull out params req.body.parmaName...
// app.use(bodyParser.urlencoded({
//     extend: false,
// }));
app.use(bodyParser.json());

app.post('/login', authRoutes.logIn);
app.post('/signup', userRoutes.createUser);

// All other routes are protected
app.use('/', authRoutes.validateTokenMiddleware);

// Users Route
app.post('/users', userRoutes.createUser); // This is a duplicate of /signup it is here purely for completeness
app.get('/users', userRoutes.getUser);
app.patch('/users', userRoutes.updatePassword);
app.delete('/users', userRoutes.deleteUser);


// Starts the server
app.listen(3000, () => {
    console.log('Listening on port 3000');
});


// app.get('/sample/:id', routes.sample);
// req.params.id

// GET /something?color1=red&color2=blue
// req.query.color1 === "red";  //true