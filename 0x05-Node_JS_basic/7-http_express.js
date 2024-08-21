const express = require('express');
const app = express();
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.status(200).write('This is the list of our students\n');
  try {
    const filePath = process.argv[2];
    if (!filePath) {
      throw new Error('File path is missing');
    }
    const results = await countStudents(filePath);
    res.end(results);
  } catch (error) {
    res.status(500).end(`Error: ${error.message}`);
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});

module.exports = app;
