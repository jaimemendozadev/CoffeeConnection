const express = require('express');
const Router = require('./router');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

mongoose.Promise = global.Promise;
const DB_URL = process.env.DB_URL;
mongoose.connect(DB_URL);

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.use('/api', Router);

module.exports = app;
