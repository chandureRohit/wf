var fs = require('fs');

fs.appendFile('input.txt', 'Hello contentnew!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});