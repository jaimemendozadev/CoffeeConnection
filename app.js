const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://CupOfJoesCoffeeConnection:coffeeisgood1@ds119306.mlab.com:19306/coffeeconnection');


app.use(bodyParser.json());
routes(app);

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

module.exports = app;
