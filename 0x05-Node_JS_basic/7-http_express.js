const express = require('express');
const app = express();
const countStudents = require('./3-read_file_async')

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});
app.get('/students', async (req, res) => {
  res.status(200).write('This is the list of our students\n');
  try {
    const results = await countStudents(process.argv[2]);
    res.end(results);
  } catch (error) {
    res.status(500).end(error.message);
  }
});


const port = 1245;
app.listen(port, () => {
  console.log(`${port}`);
});

module.exports = app;
