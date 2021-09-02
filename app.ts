
// const express = require('express');
import express from 'express';
const app = express();
const router = express.Router();

import somar from './src/helper';
console.log(somar(1,2))    

//Rotas
const index = require('./src/routes');
const personRoute = require('./src/routes/personRoute');
app.use('/', index);
app.use('/persons', personRoute);

module.exports = app;


