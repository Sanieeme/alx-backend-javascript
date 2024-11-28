const readDatabase = require('./readDatabase');

// Call the function with a file path
readDatabase('database.csv')
  .then((studentsByField) => {
    console.log(studentsByField);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
