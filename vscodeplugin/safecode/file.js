
// input validation, parameterized queries and appropriate data escaping

var filePath = '/path/to/file/' + userInput;
fs.readFile(filePath, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
