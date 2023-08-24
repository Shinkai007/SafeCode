// xss
var userInput = '<script>alert("XSS");</script>';
document.getElementById('myDiv').innerHTML = userInput;
