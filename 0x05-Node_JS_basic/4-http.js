const http = require('http');

const app  = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('content-Type','text/plain');
  res.end('Hello Holberton School!');
});


const port = 1245;
app.listen(port, () => {
  console.log(`${port}`);
});


module.exports = app;
