const express = require('express');
const Router = require('./router');
const conn = require('./DB');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
  console.log("Connected to the DB!");
});



app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.use('/api', Router);

module.exports = app;
