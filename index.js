require('dotenv').config();

const app = require('./server/app');

const PORT = process.env.PORT || 3050;

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
