import fs from 'fs';

export const readDatabase = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }
      const lines = data.split('\n').filter((line) => line !== '');
      const students = {};

      for (const line of lines.slice(1)) {
        const [firstname, , , field] = line.split(',');
        if (field in students) {
          students[field].push(firstname);
        } else {
          students[field] = [firstname];
        }
      }
      resolve(students);
    });
  });
};
