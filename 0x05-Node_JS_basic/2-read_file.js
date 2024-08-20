const fs = require('fs');
const path = require('path');

function countStudents(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const lines = data.trim().split('\n');
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const studentsByField = {};
    const headers = lines[0].split(',');

    for (let i = 1; i < lines.length; i++) {
      const studentData = lines[i].split(',');
      if (studentData.length === headers.length) {
        const field = studentData[headers.indexOf('field')];
        const firstName = studentData[headers.indexOf('firstname')];

        if (!studentsByField[field]) {
          studentsByField[field] = [];
        }

        studentsByField[field].push(firstName);
      }
    }

    const totalStudents = Object.values(studentsByField).reduce((acc, students) => acc + students.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, students] of Object.entries(studentsByField)) {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

