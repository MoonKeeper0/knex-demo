const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('knex')(require('path/to/knexfile.js')[process.env.NODE_ENV||'development']);

app.use(express.json());

app.get('/', (req, res) => res.send('Is Running!'));

app.listen(PORT, () => {
    console.log(`The server is running on ${PORT}`);
  });