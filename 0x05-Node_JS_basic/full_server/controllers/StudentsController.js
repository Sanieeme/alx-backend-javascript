import { readDatabase } from '../utils';

class StudentsController {
  static async getAllStudents(req, res) {
    const filePath = process.argv[2];  // Retrieve the database file path

    try {
      const students = await readDatabase(filePath);
      const fields = Object.keys(students).sort();

      let response = 'This is the list of our students\n';
      for (const field of fields) {
        const numStudents = students[field].length;
        const listStudents = students[field].join(', ');
        response += `Number of students in ${field}: ${numStudents}. List: ${listStudents}\n`;
      }

      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    const filePath = process.argv[2];  // Retrieve the database file path

    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }

    try {
      const students = await readDatabase(filePath);
      const studentList = students[major];

      if (!studentList) {
        return res.status(500).send('Major not found');
      }

      const listStudents = studentList.join(', ');
      res.status(200).send(`List: ${listStudents}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

export default StudentsController;
