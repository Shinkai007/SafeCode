// test-bidi-attack.js

// 正常的 console.log 语句，不应该触发规则
console.log("This is a normal log statement.");

// 包含危险的双向字符的字符串
var maliciousStr = "user‮ ⁦// Check if admin⁩ ⁦";

// 另一个包含危险的双向字符的字符串，但在注释中
//‮ } ⁦if (isAdmin)⁩ ⁦ begin admins only 
console.log("You are an admin.");
// end admins only ‮
// end admins only ‮ { ⁦

// 正常的代码块，不应该触发规则
if (true) {
    console.log("All good here.");
}