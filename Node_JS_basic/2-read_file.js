const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n');
    const students = lines.map((line) => line.split(',')).slice(1);

    console.log(`Number of students: ${students.length}`);

    const fieldCount = {};
    students.forEach((student) => {
      const field = student[3];
      fieldCount[field] = (fieldCount[field] || 0) + 1;
    });
    for (const field in fieldCount) {
      const studentsInField = students.filter(
        (student) => student[3] === field,
      );
      console.log(
        `Number of students in ${field}: ${
          fieldCount[field]
        }. List: ${studentsInField.map((student) => student[0]).join(', ')}`,
      );
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
