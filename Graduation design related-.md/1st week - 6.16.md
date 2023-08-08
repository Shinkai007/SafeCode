# First week-Determine if the idea is feasible





-   我们的项目方向是: 研究软件工程工具和实践, 关注如何提高软件开发和管理的效率和质量, 包括软件开发工具, 测试工具, 质量保证和项目管理等方面.(GLASS Glasgow System)
-   Our program focuses on software engineering tools and practices that improve the efficiency and quality of software development and management, including software development tools, testing tools, quality assurance, and project management. (GLASS Glasgow System)





评分标准: 

15% 对所涉及问题的理解和分析. 

40% 研究结果, 成果分析评判.

10% 批判性分析和反思能力. 对项目的结果进行反思评判

25% 论文质量. 

10% 上进心. 



Grading Criteria. 

15% Understanding and analysis of the issues involved. 

40% Analysis and critique of research findings and outcomes.

10% Critical analysis and reflection skills. Reflective critique of the results of the project.

25% Quality of the thesis. 

10% Ambition. 





## 每周学习内容- 

我的想法是:  想要一个在程序员日常开发过程中, 不断指出可能的安全威胁的工具.1. 包括: 为什么这么写代码会比那么写更优秀? 潜在的安全问题等. //

-   开发工具的用户是开发者. 也需要user-friend. 

1.   因为很多开发工程师在使用框架的过程中, 经常不考虑安全只是单纯的在解决业务需求.  
2.   很多的开发框架实际上已经帮助开发者解决了一些安全问题. 1方面, 比如vue.js 他自定义了父子传值的方法,也定义了 不允许在子组件更改传送过来值的规定, 但是实际上比如this.ref用法, 还是会暴露这部分安全问题...但是实际上如果忽略代码评审的小公司, 尤其是使用敏捷开发流程的中小企业, 他们会有非常多的安全隐患(数据支撑一下)
3.   我的这个插件, 就是想解决这部分开发者的安全思维, 帮助一些转专业的, 没有系统计算机安全意识的开发者来补足这部分盲区, 补充这部分知识点. 一方面可以帮助他们避免, 另一方面还可以帮助他们解释. 如何从更安全的角度去写代码. 写出更安全的代码.

My idea: I wanted a tool that would constantly point out possible security threats to programmers as they go about their day-to-day development.1. Including: why is this code better than this? Potential security issues, etc. //

- The user of the tool is the developer. They also need user-friends. 1. 

1. because many development engineers use frameworks without thinking about security but simply to address business needs. 2. many development frameworks have actually been used for a long time.  
2. Many development frameworks have actually helped developers solve some security problems. 1, such as vue.js he customized the parent-child pass method, also defined in the child component is not allowed to change the value of the transmitted rules, but in fact, such as this.ref usage, will still expose this part of the security problem... But in fact if you ignore the code review of small companies, especially the use of agile development process of small and medium-sized enterprises, they will have a very large number of security risks (data to support it)
3. my plugin, is to address this part of the developer's security thinking, to help some of the transfer of professional, not systematic computer security awareness of the developer to fill this part of the blind spot, to supplement this part of the knowledge. On the one hand, it can help them avoid, on the other hand, it can also help them explain. How to write code from a more secure perspective. Write more secure code.



拿我遇到过的问题举例就是: sql注入风险. v-html的使用. 等. 不做输入校验



正如common  weakness enumeration 写到的 https://cwe.mitre.org/top25/archive/2022/2022_cwe_top25.html



通过这个插件来提高他们的安全性

1.   一些插件, 专业的工具给出的数据不是很友好. 给定一个直观的可视化结果. 
2.   为了应付转专业的开发者, 提供可用性更好的信息提示.提升可理解性.understandability
3.   然后提供在ide里的UI界面.

Examples of problems I've encountered are: sql injection risks. Use of v-html. etc. No input validation



As common weakness enumeration writes https://cwe.mitre.org/top25/archive/2022/2022_cwe_top25.html



Improve their security with this plugin

1. Some plugins, specialized tools give not very friendly data. Give an intuitive visualization of the results. 2. 

2. to cope with the turn of professional developers, to provide better usability of the information prompts. Improve the understandability.

3. and then provide a UI in ide.





>    (intuitive直观的)





但是我这部分会把 所有的威胁都着重注意在js的安全性能上. 因为如今node.js也比较火, js当初只处理前端的时候, 更多的考虑性能问题, 但是由于浏览器的性能过剩, 导致前端程序员忽略了非常多的安全问题. 我非常想做这部分内容, 对我未来帮助很大不知道老师觉得是否符合msc的标准? 

But this part of me will put all the threats focus on js security. Because nowadays node.js is also more hot, js when only deal with the front-end, more considerations of performance, but due to the browser's excessive performance, leading to the front-end programmers ignored a lot of security issues. I really want to do this part of the content, to help me a lot in the future I do not know whether the teacher think it meets the msc standards? 









1.   查看了 code-fitness 代码
2.   将其论文转换成可读格式.
3.   overleaf 在线laTex编辑器

1. viewed code-fitness code
2. Converted his paper into a readable format.
3. overleaf online laTex editor



codeQL 的github

-   看一些开源代码
-   了解一下功能
-   作为终端用户去使用
-   体验UI界面
-   ????对其的提升点有什么?

codeQL's github

- Look at some of the open source code
- Learn about the functionality
- Use it as an end-user
- Experience the UI
- ???? What are the enhancements?







我的目标用户: 1. 非计算机专业学生 2. 没有把安全放在重要位置的开发者. 3. 想要学习安全开发的初级开发者.

My target users: 1. non-computer science majors 2. developers who don't take security seriously. 3. junior developers who want to learn about secure development. 3. Beginner developers who want to learn about secure development.









>   忽略性能问题

结果:

专注于JavaScript中常见的安全漏洞，如跨站脚本攻击（XSS）、跨站请求伪造（CSRF）、不安全的直接对象引用等

需要自定义检测规则. 后续需要了解: 不正确的输入验证、安全的数据存储、安全的网络通信

允许自定义配置

> Ignore performance issues

Results.

Focuses on common security vulnerabilities in JavaScript, such as cross-site scripting attacks (XSS), cross-site request forgery (CSRF), insecure direct object references, etc.

Requires customized detection rules. Follow-up needs to know: incorrect input validation, secure data storage, secure network communication

Allows for custom configurations







## content



For next week, could you please write half a page  (maximum one page ) proposal



The porpoposal should include:

(1) The definition of the topic you want to work on

(2) The problem you achieve to oslve

(3) A draft methodology about how you will conduct the study

(4) references to papers you've searched and skimmed so far related to the topic



在下一次表述的过程中要围绕

1.   是否能完成这部分/ 我不确定? / 或者表述自己的编码水平让老师评判

In the next presentation, it should be centered around

1. whether you can complete this section / I'm not sure? / or state your level of coding for the teacher to judge.







## 提及

### 概述

软件工程实验室研究用于构建和（更重要的是）维护大规模复杂软件系统的工具、方法和实践。

我们的研究包括：

-   保护信息流的安全，以 保护 社交网络、物联网、云和移动计算等*分布式软件平台中的隐私。*
-   *用于缓解互联社会中**隐私悖论的* 方法和工具 ，将用户隐私偏好的不精确性与隐私要求满足的推理技术之间建立联系。
-   对大规模复杂、不断发展的社会技术系统进行建模和模拟，以预测突发特性。
-   *用于敏捷软件工程新方法*的工具和方法，包括行为驱动开发、基于人群的软件评估以及团队协调和沟通。
-   *软件工程教育*，与研究生学徒团队密切合作。

我们的大部分工作都是从从业者的角度出发，使用心理学和社会科学的方法，然后继续构建和验证工具和方法来应对我们研究发现的挑战。

我们的工作得到了多种来源的资助，包括 EPSRC、InnovateUK、苏格兰资助委员会、私营企业和英国政府。

### Overview

The Software Engineering Lab researches tools, methods, and practices for building and (more importantly) maintaining large-scale complex software systems.

Our research includes:

- Securing information flows to protect privacy in * distributed software platforms such as social networks, the Internet of Things, cloud and mobile computing. *
- * Methods and tools for mitigating the **privacy paradox in the connected society ** by making connections between the imprecision of users' privacy preferences and inference techniques for privacy requirement fulfillment.
- Modeling and simulation of large-scale complex, evolving socio-technical systems to predict emergent properties.
- *Tools and methods for new approaches to agile software engineering*, including behavior-driven development, crowd-based software evaluation, and team coordination and communication.
- *Software engineering education*, working closely with the graduate apprenticeship team.

Much of our work starts from a practitioner's perspective, using psychological and social science methods, and then goes on to build and validate tools and methods to address the challenges our research has identified.

Our work is funded by a variety of sources including EPSRC, InnovateUK, the Scottish Funding Council, private industry and the UK government.

## 目标:

当你计划开发一个小型的安全检测插件时，以下是一些建议和想法：

1.  确定目标：明确你的插件的主要目标是什么。是检测常见的安全漏洞，还是特定类型的漏洞？你的插件是为了帮助开发人员进行静态代码分析还是动态运行时检测？
2.  选择技术栈：确定你要使用的技术栈和语言。考虑使用适合你插件目标的编程语言和相关框架，例如JavaScript、Python、Java等。此外，你可能还需要了解相关的安全检测工具和库，如OWASP Top 10漏洞、CVE漏洞数据库等。
3.  定义检测规则：根据你的目标，定义一组检测规则。这些规则可以基于代码模式、漏洞签名、安全最佳实践等。规则应该能够识别潜在的安全问题，并提供相关的警告或建议。
4.  插件集成：选择一个适合的IDE或编辑器，比如WebStorm、Visual Studio Code等，并了解其插件开发框架。研究如何将你的检测规则集成到该IDE或编辑器中，以便在开发过程中实时检测代码。
5.  用户界面：设计一个简洁而直观的用户界面，以便开发人员可以方便地查看和处理安全问题。界面可以提供问题的详细描述、代码示例、建议的修复方法等。
6.  自定义配置：允许用户根据其需求进行插件的自定义配置。例如，他们可以选择启用或禁用特定类型的检测，调整警告级别等。
7.  测试和验证：对你的插件进行全面的测试和验证，确保它能够准确地检测安全问题并提供正确的建议。创建一组测试用例，覆盖各种可能的代码情况。
8.  文档和示例：提供清晰的文档和示例代码，以帮助用户理解和使用你的插件。文档可以包括插件的安装说明、使用指南和常见问题解答等。
9.  持续改进：随着时间的推移，根据用户反馈和新的安全漏洞，持续改进和更新你的插件。保持对最新安全问题的敏感，并及时修复和更新你的插件。



Here are some suggestions and ideas when you plan to develop a small security detection plugin:

1. Define the goal: Define what the main goal of your plugin is. Is it to detect common security vulnerabilities or specific types of vulnerabilities? Is your plugin designed to help developers with static code analysis or dynamic runtime detection?
2. Choose a technology stack: Determine the technology stack and language you want to use. Consider using a programming language and related frameworks that are appropriate for your plugin's goals, such as JavaScript, Python, Java, and so on. In addition, you may also need to know about relevant security detection tools and libraries, such as OWASP Top 10 Vulnerabilities, CVE Vulnerability Database, etc.
3. Define detection rules: Based on your goal, define a set of detection rules. These rules can be based on code patterns, vulnerability signatures, security best practices, and so on. The rules should be able to identify potential security issues and provide relevant warnings or recommendations.
4. Plug-in integration: Choose a suitable IDE or editor, such as WebStorm, Visual Studio Code, etc., and learn about its plug-in development framework. Study how to integrate your inspection rules into that IDE or editor to inspect the code in real time during development.
5. User Interface: Design a clean and intuitive user interface so that developers can easily view and work with security issues. The interface can provide a detailed description of the problem, code examples, suggested fixes, etc.
6. Custom Configuration: Allow users to customize the configuration of the plug-in according to their needs. For example, they can choose to enable or disable specific types of detection, adjust the warning level, and so on.
7. Testing and validation: Perform thorough testing and validation of your plugin to ensure that it accurately detects security issues and provides correct recommendations. Create a set of test cases that cover every possible code situation.
8. Documentation and examples: Provide clear documentation and sample code to help users understand and use your plug-in. Documentation can include plug-in installation instructions, usage guidelines and FAQs.
9. Continuous Improvement: Continuously improve and update your plugin over time based on user feedback and new security vulnerabilities. Stay sensitive to the latest security issues and fix and update your plugin in a timely manner.







## 我需要的帮助

1.   开发过程中遇到的问题我应该找哪一位助教来帮助
2.   关于我们的时间表的一些意见
3.   文献资源. 文献资源, vscode插件开发技术资源等.
4.   市场分析报告, 竞品分析报告等. 采用什么方式