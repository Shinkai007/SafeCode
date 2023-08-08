//  sql injection
var userInput = "admin' OR '1'='1";
var query = "SELECT * FROM users WHERE username='" + userInput + "' AND password='secret'";