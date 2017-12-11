const express = require('express');
const models = require('./DB/models');
const bodyParser = require('body-parser');
const path = require('path');
const expressGraphQL = require('express-graphql');
const session = require('express-session');
const passport = require('passport');
const passportService = require('./services/auth');
const MongoStore = require('connect-mongo')(session);
const Router = require('./router');
const conn = require('./DB');
const schema = require('./schema/schema');
const { DB_URL, PASSPORT_SECRET } = process.env;

const app = express();

conn.on('error', console.error.bind(console, 'connection error:'));
conn.once('open', () => {
  console.log("Connected to the DB!");
});

app.use(express.static(path.join(__dirname, '../client/public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: PASSPORT_SECRET,
  store: new MongoStore({
    url: DB_URL,
    autoReconnect: true
  })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message });
});

app.use('/api', Router);

module.exports = app;
