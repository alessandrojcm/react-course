const fs = require('fs');

fs.writeFile('./db.json', '{"streams": []}', () =>
  console.log('Wrote db.json'),
);
