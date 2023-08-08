# 5th week-0719

solved two problems

1.   Wrote the customized eslint rules
2.   give feedback  with cwe

## eslint- Customized rules

https://eslint.org/docs/latest/extend/custom-rules

>   This rule extends the base rule, which means that multiple security extensions can be used. 

Here’s the basic format of a custom rule:

```
// customRule.js

module.exports = {
    meta: {
        type: "suggestion"
        docs: {
            description: "Description of the rule",
        },
        fixable: "code",
        schema: [] // no options
    },
    create: function(context) {
        return {
            // callback functions
        };
    }
};
```

return message

```js
context.report({
    node: node,
    message: "Unexpected identifier"
});
```

fixing part code

The following example replaces `node` and also ensures that no other fixes will be applied in the range of `node.parent` in the same pass:

```js
context.report({
    node,
    message,
    *fix(fixer) {
        yield fixer.replaceText(node, replacementText);

        // extend range of the fix to the range of `node.parent`
        yield fixer.insertTextBefore(node.parent, "");
        yield fixer.insertTextAfter(node.parent, "");
    }
});

```

how to give suggestion

```js
context.report({
    node: node,
    message: "Unnecessary escape character: \\{{character}}.",
    data: { character },
    suggest: [
        {
            desc: "Remove the `\\`. This maintains the current functionality.",
            fix: function(fixer) {
                return fixer.removeRange(range);
            }
        },
        {
            desc: "Replace the `\\` with `\\\\` to include the actual backslash character.",
            fix: function(fixer) {
                return fixer.insertTextBeforeRange(range, "\\");
            }
        }
    ]
});
```

### source code api

![image-20230719131238651](http://cdn.shinkai005.com/image202307191312735.png)

>   Here are some of the officially provided api's that I've documented.



### scope type

![image-20230719131456339](http://cdn.shinkai005.com/image202307191314399.png)

detect code progress

using `TIMING=1 npm run lint`

![image-20230719132315725](http://cdn.shinkai005.com/image202307191323789.png)

## If no api is given, we need to define our own parser.

example

```javascript
// awesome-custom-parser.js
var espree = require("espree");
function parseForESLint(code, options) {
    return {
        ast: espree.parse(code, options),
        services: {
            foo: function() {
                console.log("foo");
            }
        },
        scopeManager: null,
        visitorKeys: null
    };
};

module.exports = { parseForESLint };
```
Include the custom parser in an ESLint configuration file:


```js
// .eslintrc.json
{
    "parser": "./path/to/awesome-custom-parser.js"
}
```

## my code part

```js
const dangerousBidiCharsRegexp = /[\u061C\u200E\u200F\u202A\u202B\u202C\u202D\u202E\u2066\u2067\u2068\u2069]/gu;

/**
 * Detects all the dangerous bidi characters in a given source text
 *
 * @param {object} options - Options
 * @param {string} options.sourceText - The source text to search for dangerous bidi characters
 * @param {number} options.firstLineOffset - The offset of the first line in the source text
 * @returns {Array<{line: number, column: number}>} - An array of reports, each report is an
 *    object with the line and column of the dangerous character
 */
function detectBidiCharacters({ sourceText, firstLineOffset }) {
  const sourceTextToSearch = sourceText.toString();

  const lines = sourceTextToSearch.split(/\r?\n/);

  return lines.reduce((reports, line, lineIndex) => {
    let match;
    let offset = lineIndex == 0 ? firstLineOffset : 0;

    while ((match = dangerousBidiCharsRegexp.exec(line)) !== null) {
      reports.push({ line: lineIndex, column: offset + match.index });
    }

    return reports;
  }, []);
}

function report({ context, node, tokens, message, firstLineOffset }) {
  if (!tokens || !Array.isArray(tokens)) {
    return;
  }
  tokens.forEach((token) => {
    const reports = detectBidiCharacters({ sourceText: token.value, firstLineOffset: token.loc.start.column + firstLineOffset });

    reports.forEach((report) => {
      context.report({
        node: node,
        data: {
          text: token.value,
        },
        loc: {
          start: {
            line: token.loc.start.line + report.line,
            column: report.column,
          },
          end: {
            line: token.loc.start.line + report.line,
            column: report.column + 1,
          },
        },
        // message
        message:`CWE 79: ${message}`
      });
    });
  });
}

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'error',
    docs: {
      description: 'Detects trojan source attacks that employ unicode bidi attacks to inject malicious code.',
      category: 'Possible Security Vulnerability',
      recommended: true,
      url: 'https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-bidi-characters.md',
    },
  },
  create: function (context) {
    return {
      Program: function (node) {
        report({
          context,
          node,
          tokens: node.tokens,
          firstLineOffset: 0,
          message: "Detected potential trojan source attack with unicode bidi introduced in this code: '{{text}}'.",
        });
        report({
          context,
          node,
          tokens: node.comments,
          firstLineOffset: 2,
          message: "Detected potential trojan source attack with unicode bidi introduced in this comment: '{{text}}'.",
        });
      },
    };
  },
};
```



1.  It defines a regular expression `dangerousBidiCharsRegexp` that matches Unicode bi-directional control characters. These characters can change the direction of the text flow, which can be exploited in source code to hide or disguise malicious code.
2.  It then declares a function `detectBidiCharacters` that splits the input source code text into lines and checks each line for the presence of these dangerous characters. If a dangerous character is found, it records the line number and column index of the character.
3.  Another function `report` is declared, which takes tokens (chunks of source code), checks each token for dangerous characters using `detectBidiCharacters`, and if any are found, it reports them by adding a report to the `context` object, which presumably is used by ESLint to report linting errors.
4.  The main export of the module is an object that ESLint uses to apply the rule. It includes some metadata about



### running results like

![image-20230719134609171](http://cdn.shinkai005.com/image202307191346258.png)

### test part

![image-20230719134758647](http://cdn.shinkai005.com/image202307191347738.png)



## 结合cwe 和 js的特性, 我的一些见解

>   Combining the features of cwe and js, some of my insights

1.  **内存相关问题（如使用后释放、越界读写等）**：由于JavaScript的内存管理，这些问题在Node.js中不太可能出现。
2.  **输入验证相关问题（如跨站脚本、SQL注入、命令注入等）**：这些问题在Node.js应用中非常重要，并且应该引起开发者的关注。开发者应确保所有用户输入都经过适当的清理和验证。
3.  **权限和认证相关问题（如权限管理、认证、授权等）**：这些问题在任何应用中都很重要，包括Node.js应用。开发者应确保所有敏感操作都需要适当的认证和授权。
4.  **代码注入问题**：由于JavaScript的动态性，Node.js应用可能会受到代码注入攻击。开发者应避免执行用户提供的代码，并使用相应的工具和库来处理用户输入。
5.  **不正确的错误处理**：Node.js的异步模型可能会使错误处理变得复杂。开发者需要确保所有的错误都被适当地捕获和处理


1 **Memory related issues (e.g. release after use, out-of-bounds reads and writes, etc.)**: These issues are unlikely to occur in Node.js due to JavaScript's memory management.

2 **Input validation related issues (e.g. cross-site scripting, SQL injection, command injection, etc.)**: These issues are very important in Node.js applications and should be of concern to developers. Developers should ensure that all user input is properly cleaned and validated.

3 **Permission and authentication related issues (e.g., permission management, authentication, authorization, etc.)**: These issues are important in any application, including Node.js applications. Developers should ensure that all sensitive operations require proper authentication and authorization.

4 **Code Injection Issues**: Due to the dynamic nature of JavaScript, Node.js applications may be vulnerable to code injection attacks. Developers should avoid executing user-supplied code and use appropriate tools and libraries to handle user input.

5 **Incorrect Error Handling**: the asynchronous model of Node.js may complicate error handling. Developers need to ensure that all errors are properly caught and handled

## In addition to the top 25, js has threats to watch out for

Event loop blocking, malicious npm packages, unsafe use of third-party APIs

## Here's my list of solutions to the top 25 threats, and whether or not they were solved.



in progress

| index | 威胁名字NAME                                                 | solve or not | Possible solutions                                           |
| ----- | ------------------------------------------------------------ | ------------ | ------------------------------------------------------------ |
| 1     | Out-of-bounds Write - (787)                                  | F            | 使用内存安全的编程语言或库，或者使用静态代码分析工具查找可能的溢出。Use a memory-safe programming language or library, or use a static code analysis tool to look for possible overflows. |
| 2     | Improper Neutralization of Input During Web Page Generation (Cross-site Scripting) - (79) | T            | 使用DOMPurify或其他库进行输入清理，或者使用内容安全策略（CSP）防止执行恶意脚本。Use DOMPurify or other libraries for input cleanup, or use Content Security Policy (CSP) to prevent execution of malicious scripts. |
| 3     | Improper Neutralization of Special Elements used in an SQL Command (SQL Injection) - (89) | T            | 使用参数化查询或预编译语句，避免将用户输入直接插入到SQL查询中。Use parameterized queries or precompiled statements to avoid inserting user input directly into SQL queries. |
| 4     | Use After Free - (416)                                       | F            | 使用内存安全的编程语言，或者使用静态和动态分析工具来查找潜在的使用后释放的问题。Use a memory-safe programming language, or use static and dynamic analysis tools to look for potential use-after-free problems. |
| 5     | Improper Neutralization of Special Elements used in an OS Command (OS Command Injection) - (78) | T            | 避免使用用户输入来构建操作系统命令，或者使用库来安全地处理命令。Avoid using user input to build operating system commands, or using libraries to handle commands safely. |
| 6     | Improper Input Validation - (20)                             | F            | 对所有用户输入进行清理和验证。Clean and validate all user input. |
| 7     | Out-of-bounds Read - (125)                                   | F            | 使用内存安全的编程语言或库，或者使用静态代码分析工具查找可能的溢出。Use a memory-safe programming language or library, or use a static code analysis tool to look for possible overflows. |
| 8     | Improper Limitation of a Pathname to a Restricted Directory (Path Traversal) - (22) | T            | 避免使用用户输入来构建文件路径，或者使用库来安全地处理路径。Avoid using user input to construct file paths, or using libraries to handle paths safely. |
| 9     | Cross-Site Request Forgery (CSRF) - (352)                    | F            | 使用CSRF令牌，或者在适用的情况下使用同源策略。Use CSRF tokens, or the same-origin policy where applicable. |
| 10    | Unrestricted Upload of File with Dangerous Type - (434)      | T            | 限制上传的文件类型，并对上传的文件进行扫描。Limit the types of files that can be uploaded and scan uploaded files. |
| 11    | Missing Authorization - (862)                                | F            | 确保所有功能都有适当的权限检查。Ensure that all functions have proper permission checks. |
| 12    | NULL Pointer Dereference - (476)                             | F            | 使用内存安全的编程语言，或者使用静态和动态分析工具来查找潜在的空指针解引用问题。Use a memory-safe programming language, or use static and dynamic analysis tools to find potential null pointer dereference problems. |
| 13    | ` Improper Authentication - (287)`                           | F            | 使用强大的身份验证系统，并确保所有功能都需要适当的身份验证。Use a strong authentication system and ensure that all functions require proper authentication. |
| 14    | Integer Overflow or Wraparound - (190)                       | F            | 使用内存安全的编程语言或库，或者使用静态代码分析工具查找可能的整数溢出。Use a memory-safe programming language or library, or use a static code analysis tool to look for possible integer overflows. |
| 15    | Deserialization of Untrusted Data - (502)                    | F            | 只对可信数据进行反序列化，或者使用格式如JSON这样不支持复杂对象的格式来序列化和反序列化数据。Deserialize only trusted data, or serialize and deserialize data using formats such as JSON that do not support complex objects. |
| 16    | Improper Neutralization of Special Elements used in a Command (Command Injection) - (77) | T            | 避免使用用户输入来构建命令，或者使用库来安全地处理命令。Avoid using user input to build commands, or using libraries to handle commands safely. |
| 17    | Improper Restriction of Operations within the Bounds of a Memory Buffer - (119) | F            | 使用内存安全的编程语言或库，或者使用静态代码分析工具查找可能的缓冲区溢出。Use a memory-safe programming language or library, or use a static code analysis tool to look for possible buffer overflows. |
| 18    | Use of Hard-coded Credentials - (798)                        | F            | 避免使用硬编码的凭据，而是将凭据存储在安全的地方。Avoid using hard-coded credentials and instead store them in a secure place. |
| 19    | Server-Side Request Forgery (SSRF) - (918)                   | F            | 避免使用用户输入来构建服务器端请求，或者使用库来安全地处理请求。Avoid using user input to build server-side requests, or using libraries to handle requests securely. |
| 20    | Missing Authentication for Critical Function - (306)         | F            | 确保所有功能都需要适当的身份验证。Ensure that all functions require proper authentication |
| 21    | `Concurrent Execution using Shared Resource with Improper Synchronization (Race Condition) - (362)` | F            | 使用同步原语，或者避免使用共享资源。Use synchronization primitives, or avoid using shared resources. |
| 22    | Improper Privilege Management - (269)                        | F            | 确保所有功能都有适当的权限检查。Ensure that all functions have proper permission checks. |
| 23    | Improper Control of Generation of Code (Code Injection) - (94) | T            | 避免使用用户输入来构建代码，或者使用库来安全地处理代码生成。Avoid using user input to build code, or using libraries to safely handle code generation. |
| 24    | Incorrect Authorization - (863)                              | F            | 确保所有功能都有适当的权限检查。Ensure that all functions have proper permission checks. |
| 25    | Incorrect Default Permissions - (276)                        | F            | 避免给文件、目录或其他资源设置不安全的默认权限。Avoid setting insecure default permissions on files, directories, or other resources. |





## problem

Since I'm using static analysis, the limitations of static analysis itself make it impossible to detect some security issues.



静态代码分析通常基于预定义的规则集来工作，这些规则在源代码中查找特定的模式。如果恶意或错误的代码没有匹配这些预定义模式，静态分析可能就无法检测到它。

例如，如果一个静态分析工具被配置为查找SQL注入攻击，并且它的规则是查找字符串连接用于创建SQL查询的情况，那么它可能会在如下的代码中发出警告：

Static code analysis usually works based on predefined sets of rules that look for specific patterns in the source code. If malicious or buggy code does not match these predefined patterns, static analysis may not be able to detect it.

For example, if a static analysis tool is configured to look for SQL injection attacks and its rules look for cases where string concatenation is used to create an SQL query, it may issue a warning in the following code:

```js
let query = "SELECT * FROM users WHERE name = '" + userName + "'";
```

However, if the same SQL injection problem occurs in a different way, for example using a template string, the static analysis tool may not recognize the problem:然而，如果相同的SQL注入问题以不同的方式出现，例如使用模板字符串，静态分析工具可能就无法识别出这个问题：

```js
let query = `SELECT * FROM users WHERE name = '${userName}'`;
```

So the success of the static analysis depends on whether the coder takes into account all the circumstances.

## NEXT step

1.   keep going the customized rules
2.   try to  give feedback in conjunction with the chatgpt api

>   如果这个包最终发布, 我会把api key 放到配置文件中, 让用户用自己的chatgpt key. 省钱
>
>   If the package is eventually released, I'll put the api key in the config file and let users use their own chatgpt key. Saves money.

1.   some prompt engineering