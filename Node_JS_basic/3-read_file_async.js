const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error(`Cannot load the database`));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        let startIndex = 0;
        if (
          lines.length > 0
          && lines[0].startsWith('firstname,lastname,age,field')
        ) {
          startIndex = 1;
        }

        const counters = {};

        for (let i = startIndex; i < lines.length; i += 1) {
          const [firstName, , , field] = lines[i].split(',');
          if (field) {
            counters[field] = counters[field] || { count: 0, names: [] };
            counters[field].count += 1;
            counters[field].names.push(firstName.trim());
          }
        }

        console.log(`Number of students: ${lines.length - startIndex}`);
        for (const field in counters) {
          if (Object.prototype.hasOwnProperty.call(counters, field)) {
            console.log(
              `Number of students in ${field}: ${
                counters[field].count
              }. List: ${counters[field].names.join(', ')}`,
            );
          }
        }

        resolve();
      }
    });
  });
}

module.exports = countStudents;
