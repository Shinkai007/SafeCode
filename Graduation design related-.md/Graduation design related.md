# Graduation design related-.md



metrics 矩阵

可用性, 
可理解性
安全性等

metrics matrix

Usability, Comprehensibility 
comprehensibility
Security, etc.

---



在Vue.js开发以及涉及HTML, CSS, JS编写的前端开发中，开发者可能遇到以下常见的问题和安全隐患：

1.  **不恰当地使用`v-bind`**: 在Vue.js中，`v-bind`指令允许动态绑定属性。如果没有正确处理用户输入，这可能导致XSS攻击。
2.  **不安全的依赖包**: 当使用第三方库或依赖时，应保证这些库是安全的。运行过时或包含已知漏洞的库可能会导致应用程序受到攻击。
3.  **内联样式**: 在HTML中使用内联样式可能会限制CSS的可维护性和可扩展性。而在Vue.js中，推荐使用scoped样式或单文件组件的样式部分。
4.  **暴露敏感数据**: 在Vue实例的data对象中存储敏感信息（如API密钥）是不安全的，因为这些信息会暴露给客户端。
5.  **不恰当地使用`localStorage`或`sessionStorage`**: 将敏感数据存储在`localStorage`或`sessionStorage`中可能是不安全的，因为这些存储在浏览器中的数据容易被XSS攻击获取。
6.  **不使用Content Security Policy (CSP)**: CSP可以有效防止XSS攻击，通过制定哪些脚本和资源是可信的。在Vue.js应用中不使用CSP可能会导致额外的安全风险。
7.  **CSS攻击（比如CSS注入）**: 如果不正确地处理用户输入并将其用于样式，可能会导致CSS注入攻击。
8.  **不验证或不正确验证用户输入**: 始终在服务器端验证用户输入，因为客户端验证可以被绕过。在Vue.js应用中，要确保所有用户输入在传送到服务器之前和之后都经过适当的验证和清理。
9.  **不使用HTTPS**: 在没有加密的HTTP连接上发送数据，特别是敏感数据，是不安全的。应始终为生产环境的应用程序使用HTTPS。

为了提高Vue.js应用的安全性，开发者应关注以上问题，并采取适当的措施来规避这些问题。SafeCode插件可以包含针对这些问题的检测和建议，以帮助开发者编写更安全的代码。



In Vue.js development and front-end development involving HTML, CSS, and JS writing, developers may encounter the following common issues and security concerns:

1. **Inappropriate use of `v-bind`**: In Vue.js, the `v-bind` directive allows dynamic binding of properties. This can lead to XSS attacks if user input is not handled correctly.
2. **Unsecure dependency packages**: When using third-party libraries or dependencies, ensure that they are secure. Running libraries that are outdated or contain known vulnerabilities could lead to an attack on the application.
3. **Inline Styles**: Using inline styles in HTML may limit the maintainability and extensibility of CSS. While in Vue.js, it is recommended to use scoped styles or single-file component style sections.
4. **Exposing Sensitive Data**: Storing sensitive information (such as API keys) in the data object of a Vue instance is not safe, as this information is exposed to the client.
5. **Inappropriate use of `localStorage` or `sessionStorage`**: Storing sensitive data in `localStorage` or `sessionStorage` can be insecure as this data stored in the browser can be easily accessed by XSS attacks.
6. **Don't use Content Security Policy (CSP)**: CSP can be effective in preventing XSS attacks by dictating which scripts and resources are trusted. Not using CSP in Vue.js applications may lead to additional security risks.
7. **CSS attacks (e.g. CSS injection)**: Improperly handling user input and using it for styling may lead to CSS injection attacks.
8. **No or incorrect validation of user input**: Always validate user input on the server side, as client-side validation can be bypassed. In Vue.js applications, make sure that all user input is properly validated and cleaned up before and after it is transmitted to the server.
9. **NOT USING HTTPS**: Sending data, especially sensitive data, over an unencrypted HTTP connection is not secure. HTTPS should always be used for applications in production environments.

To improve the security of Vue.js applications, developers should pay attention to the above issues and take appropriate measures to circumvent them.The SafeCode plugin can include detections and suggestions for these issues to help developers write more secure code.



---



1.  **v-html**: 在Vue.js中，`v-html` 指令用于向DOM插入原始HTML。这样做可能是不安全的，因为它可以导致跨站脚本攻击（XSS）。如果你使用 `v-html` 插入用户提供的内容，攻击者可能会插入恶意脚本，从而控制你的应用或窃取用户数据。因此，`v-html` 应谨慎使用，并且应该避免用它来渲染用户输入的内容。
2.  **使用 this.$root 访问根实例**: 在Vue.js中，使用 `this.$root` 可以访问根实例及其数据。这可能是一个不好的做法，因为它破坏了组件之间的解耦。理想情况下，Vue组件应该是可复用和自包含的。通过使用`this.$root` 直接访问根实例，你可能会创建一个难以维护和理解的代码基础。在开发过程中，推荐使用props, events, 或Vuex来进行父子或兄弟组件之间的通信

1. **v-html**: In Vue.js, the `v-html` directive is used to insert raw HTML into the DOM, which can be unsafe because it can lead to cross-site scripting attacks (XSS). If you use `v-html` to insert user-supplied content, an attacker could insert malicious scripts that could take control of your app or steal user data. Therefore, `v-html` should be used with caution and you should avoid using it to render user input.
2. **Using this.$root to access the root instance**: In Vue.js, the root instance and its data can be accessed using `this.$root`. This can be a bad practice as it breaks the decoupling between components. Ideally, Vue components should be reusable and self-contained. By using `this.$root` to access the root instance directly, you may create a code base that is difficult to maintain and understand. During development, it is recommended to use props, events, or Vuex to communicate between parent-child or sibling components

---

### 问题 1: 开发者在使用框架时往往忽视安全问题，只专注于业务需求。

**可能的解决方案**: SafeCode 插件可以包含一个实时代码分析引擎，它能够在开发者编写代码时自动检测潜在的安全问题，并在IDE中生成实时的警告和建议。此外，它还可以提供有关如何修复这些问题的建议，以及为什么修复它们是重要的。

### 问题 2: 现有的专业工具提供的数据不够友好，对初学者或非专业人士来说不易理解。

**可能的解决方案**: SafeCode 可以提供一个直观的用户界面，其中包含图表和可视化工具，以清晰地展示代码中的安全问题。此外，插件可以使用简单的语言来解释问题，并提供易于理解的示例和解决方案。

### 问题 3: 希望提供在IDE里的用户界面，增强可用性和可理解性。

**可能的解决方案**: SafeCode 可以整合到开发者常用的IDE（如VSCode，Eclipse等）中，并提供一个简洁的仪表板，让开发者可以轻松访问和配置插件的功能。仪表板可以包含一个概述部分，显示代码的安全评分，以及一个详细部分，列出检测到的具体问题和建议的修复方法。

### 问题 4: JavaScript在处理前端时，开发者往往忽视安全问题。

**可能的解决方案**: SafeCode 可以特别针对JavaScript常见的安全问题进行优化，如跨站脚本攻击（XSS）、跨站请求伪造（CSRF）等，并提供特定于JavaScript的建议和解决方案。插件也可以包含针对Node.js等后端JavaScript环境的安全建议。

### 问题 5: 需要自定义检测规则。

**可能的解决方案**: SafeCode 可以允许开发者根据自己的需求和项目规范来自定义安全检测规则。这可以通过提供一个配置面板来实现，开发者可以在其中启用或禁用特定的检测规则，或者添加自己的自定义规则。

这些解决方案可以作为SafeCode插件的核心功能，并帮助它成为一个强大的工具，以协助JavaScript开发者编写更加安全的代码。



### Problem 1: Developers tend to ignore security issues when using frameworks and focus only on business requirements.

**Possible solution**: The SafeCode plugin can include a real-time code analysis engine that automatically detects potential security issues as developers write code and generates real-time warnings and recommendations in the IDE. In addition, it can provide recommendations on how to fix these issues and why it is important to fix them.

### Problem 2: Existing specialized tools do not provide user-friendly data that is easy to understand for beginners or non-professionals.

**Possible solution**: SafeCode can provide an intuitive user interface with charts and visualization tools to clearly show security issues in code. In addition, the plug-in can explain the problem in simple language and provide easy to understand examples and solutions.

### Problem 3: Would like to provide a user interface in the IDE that enhances usability and understandability.

**Possible Solution**: SafeCode can be integrated into IDEs commonly used by developers (e.g. VSCode, Eclipse, etc.) and provide a clean dashboard where developers can easily access and configure the plugin's functionality. The dashboard can contain an overview section showing the security score of the code, as well as a detailed section listing specific problems detected and suggested fixes.

### Issue 4: JavaScript When dealing with front-ends, developers tend to overlook security issues.

**Possible Solution**: SafeCode can be optimized specifically for common JavaScript security issues such as Cross-Site Scripting Attacks (XSS), Cross-Site Request Forgery (CSRF), etc. and provide JavaScript-specific recommendations and solutions. Plugins can also include security recommendations for back-end JavaScript environments such as Node.js.

### Issue 5: Need to customize detection rules.

**Possible solution**: SafeCode allows developers to customize security detection rules based on their needs and project specifications. This can be done by providing a configuration panel where developers can enable or disable specific detection rules, or add their own custom rules.

These solutions can be used as the core functionality of the SafeCode plugin and help make it a powerful tool to assist JavaScript developers in writing more secure code.

---

# 需要完成的内容

1.   研究现有的ide和可能的ai集成-确定问题领域
2.   市场调研, 竞品分析
     1.   功能对比表
3.   如何解决现有工具的不足
4.   关于漏洞的信息解析(如何识别安全问题)

# What needs to be accomplished

1. research existing ide and possible ai integrations - identify problem areas
2. market research, competitor analysis
     1. functionality comparison table
3. how to address gaps in existing tools
4. information parsing on vulnerabilities (how to identify security issues)







## weekly record 

### readme

每周内容包括

1. 每周的主题(写在第几周的后面)
1. 简述大概做了什么
1. 记录重要操作.(留痕)

## Weekly formation records

## Readme

Weekly content includes

1. the weekly theme (written after the first week)
2. a brief description of what was done
3. a record of important actions. (leave a trace)



### 1st week - 6.16-ideas

1.   说自己关于毕设的ideas, 然后老师补充信息, 来总结出自己想做的项目

-   Tell me your ideas about your graduation project, and then the teacher will add information to summarize what you want to do.

### 2nd week - 6.23-proposal草案

1.   写proposal, 完成项目草案.
2.   梳理项目中的难点, 规定项目时间表

1. Write proposal, complete the draft project. 2.
2. organize the difficulties in the project, set the project timetable

https://www.overleaf.com/project/6494d5af95458c8b051b086b 这是我的overleaf 文档和github已经链接了

https://eslint.org/docs/latest/extend/ways-to-extend 这是eslint doc

https://cwe.mitre.org/top25/archive/2022/2022_cwe_top25.html#cwe_top_25   CWE doc

### 3rd week - 7.03-presentation

https://gamma.app/docs/SafeCode-bgiaa71po4zmi1p?mode=present#card-vf8xsne2pev8x2y slide designed by gamma

https://github.com/github/codeql codeQL github homepage

Make a presentation based on your proposal.

- Characterize your project
- Present the difficulties of the project



#### 重点- CodeGuru插件

老师给我发了一个Amazon CodeGuru这个插件. 我需要研究他的工作原理, 了解他如何帮助开发者提高代码的安全性. 

完成如下几步:

1.  下载并安装Amazon CodeGuru安全插件，了解它的功能和操作方式。
2.  深入了解插件的工作原理，包括它如何实时检测代码中的安全漏洞，以及它是如何给出解决方案的。
3.  比较CodeGuru和其他IDE安全插件的优点和缺点。
4.  分析和记录这个插件可能对你的毕业设计有哪些启示和影响。

https://studiolab.sagemaker.aws/users/Shinkai 这是SageMaker Studio lab的网页



#### Highlights - CodeGuru Plugin

My teacher sent me an Amazon CodeGuru plugin. I need to find out how it works and how it can help developers improve the security of their code. 

The steps to do this are as follows: 1.

1. Download and install the Amazon CodeGuru security plugin and learn what it does and how it works.
2. Deepen your understanding of how the plugin works, including how it detects security holes in your code in real time and how it provides solutions.
3. compare the pros and cons of CodeGuru with other IDE security plug-ins.
4. analyze and document what insights and implications this plug-in may have for your final project.

https://studiolab.sagemaker.aws/users/Shinkai This is the SageMaker Studio lab web page



-   搞了一个amazon SageMaker Studio lab的账户

Got an amazon SageMaker Studio lab account.

### 代办

把coderuru和vscode连接起来

aws账户完成, 获得密钥和私钥

然后把jupyter.ai使用一下, 看看是否可以当做一个扩展回复工具. 



### TODOs

-   Connect coderuru to vscode.

-   aws account, get the key and the private key.

-   Then use jupyter.ai to see if it can be used as an extended reply tool. 

### 4th week - 0710

Amazon CodeGuru Security 现在支持对 Amazon SageMaker Studio 和 Jupyter 笔记本进行安全和代码质量扫描。这项新功能可帮助笔记本电脑用户检测笔记本电脑单元内的安全漏洞，例如注入缺陷、数据泄漏、弱加密或缺失加密。用户还可以检测到影响计算笔记本的可读性、可重复性和正确性的许多常见问题，例如误用 ML 库 API、无效的执行顺序和不确定性。当笔记本中发现漏洞或质量问题时，CodeGuru 会生成建议，使用户能够根据 AWS 安全最佳实践修复这些问题。

SageMaker Studio 和 Jupyter 上的笔记本用户今天可以通过安装适用于笔记本的 Amazon CodeGuru 插件（目前处于预览版）来开始扫描其代码是否存在安全和质量问题。

Amazon CodeGuru Security 是一款开发人员工具，可提供智能建议以提高代码安全性和质量。CodeGuru 使用机器学习和自动推理来识别应用程序开发过程中的关键问题、安全漏洞和难以发现的错误，并提供建议以帮助用户纠正已识别的问题。

Amazon SageMaker Studio 是一个基于 Web 的机器学习集成开发环境 (IDE)，可让您构建、训练、调试、部署和监控机器学习模型。



Amazon CodeGuru Security now supports security and code quality scanning for Amazon SageMaker Studio and Jupyter notebooks. This new feature helps laptop users detect security vulnerabilities within the laptop unit, such as injection flaws, data leaks, weak or missing encryption. Users can also detect many common issues that affect the readability, repeatability and correctness of computing notebooks, such as misuse of ML library APIs, invalid execution sequences and uncertainty. When vulnerabilities or quality issues are found in notebooks, CodeGuru generates recommendations that enable users to fix these issues in accordance with AWS security best practices.

Notebook users on SageMaker Studio and Jupyter can start scanning their code for security and quality issues today by installing the Amazon CodeGuru plugin for notebooks, currently in preview.

Amazon CodeGuru Security is a developer tool that provides intelligent recommendations to improve code security and quality.CodeGuru uses machine learning and automated reasoning to identify critical issues, security vulnerabilities, and hard-to-find bugs during application development, and provides recommendations to help users correct identified issues.

Amazon SageMaker Studio is a web-based machine learning integrated development environment (IDE) that lets you build, train, debug, deploy, and monitor machine learning models.

### 5th-0719

### 6th- 0724(missed)

### 7th-0731

### 8th- 0808

## 重要

### web

This is a project from the teacher's student's year-- code-fitness

https://github.com/ineshbose/code-fitness

![image-20230710010715782](http://cdn.shinkai005.com/image202307100107837.png)

vscode插件, 可以直接作为终端用户使用.vscode plugin, can be used directly as an end user.



## 非安全代码unsafe code

1.  OWASP Juice Shop: OWASP Juice Shop 是一个用于学习 Web 应用程序安全的开源项目，提供了一个包含多个安全漏洞的示例应用程序。你可以在 GitHub 上找到它：https://github.com/bkimminich/juice-shop
2.  WebGoat: WebGoat 是另一个用于学习 Web 应用程序安全的开源项目，它提供了一系列有意制造的安全漏洞，以供学习和测试。你可以在 GitHub 上找到它：https://github.com/WebGoat/WebGoat
3.  Damn Vulnerable Web Application (DVWA): DVWA 是一个专门设计用于测试和练习 Web 应用程序漏洞的教育项目。它提供了多个漏洞和安全挑战，供开发人员和安全专家使用。你可以在 GitHub 上找到它：https://github.com/digininja/DVWA

1. OWASP Juice Shop: OWASP Juice Shop is an open source project for learning web application security, providing a sample application with multiple security vulnerabilities. You can find it on GitHub: https://github.com/bkimminich/juice-shop
2. WebGoat: WebGoat is another open source project for learning Web application security, it provides a series of intentionally created security vulnerabilities for learning and testing. You can find it on GitHub: https://github.com/WebGoat/WebGoat
3. Damn Vulnerable Web Application (DVWA): DVWA is an educational project designed specifically to test and practice Web application vulnerabilities. It provides multiple vulnerabilities and security challenges for developers and security experts. You can find it on GitHub: https://github.com/digininja/DVWA



## notes

I began by exploring the information provided in the links you sent. I found that the plugin is primarily designed for Jupyter notebooks and a workspace called SageMaker Studio.
Upon further investigation, I noticed the mention of Jupyter.ai and learned that the Guru plugin is designed to be used with AWS (Amazon Web Services).
Following these findings, I created accounts for both SageMaker Studio and AWS to gain hands-on experience with the plugin.
I then proceeded to attempt the integration of the Guru plugin with Visual Studio Code (VS Code) before planning to integrate it with Jupyter.
However, during the VS Code integration process, I encountered a hurdle when asked to authorize my request through AWS Tools. This required an authentication code, which I'm currently trying to resolve.
Moving forward, I will focus on resolving this authorization issue to successfully integrate the Guru plugin with VS Code. After that, I plan to work on its integration with Jupyter.



因为文档里只提供了jupyter.ai和jupyternotebook的结合.  如果今后没办法对这个预览版的guru插件进行扩展, 我可以直接将用户代码发送到云端结合guru插件检测和jupyter.ai进行用户反馈. 

Because the documentation only provides the combination of jupyter.ai and jupyternotebook.  If there is no way to extend this preview version of the guru plugin in the future, I can send the user code directly to the cloud in combination with the guru plugin detection and jupyter.ai for user feedback. 



但是没办法事实反馈, 我觉得如果要实时反馈, 只能像eslint那样, 进行一些简单的规则要求, 比如当检测到特定用法, 比如像硬编码, 比如用户输入后没加校验, 这种.  速度是个大问题. 但是eslint确实很快, 这个需要花很长时间去解决. 
