const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

const port = 1245;
app.listen(port, () => {
  console.log(`${port}`);
});

module.exports = app;
