//  sql injection
var userInput = "admin' OR '1'='1";
console.log('userInput',userInput)  
var query = "SELECT * FROM users WHERE username='" + userInput + "' AND password='secret'";