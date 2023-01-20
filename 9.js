var fs = require('fs');
fs.readFile('a.txt', function(err, data){

fs.appendFile('b.txt', data, function (err) {
  if (err) throw err;
  console.log('Saved!');
});
});