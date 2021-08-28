const express = require('express');
const app = express();
const router = express.Router();
//Rotas
const index = require('./src/routes');
const personRoute = require('./src/routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);
module.exports = app;