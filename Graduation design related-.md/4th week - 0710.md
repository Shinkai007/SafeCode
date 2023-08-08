

# 4th week - 0710

Amazon CodeGuru Security 现在支持对 Amazon SageMaker Studio 和 Jupyter 笔记本进行安全和代码质量扫描。这项新功能可帮助笔记本电脑用户检测笔记本电脑单元内的安全漏洞，例如注入缺陷、数据泄漏、弱加密或缺失加密。用户还可以检测到影响计算笔记本的可读性、可重复性和正确性的许多常见问题，例如误用 ML 库 API、无效的执行顺序和不确定性。当笔记本中发现漏洞或质量问题时，CodeGuru 会生成建议，使用户能够根据 AWS 安全最佳实践修复这些问题。

SageMaker Studio 和 Jupyter 上的笔记本用户今天可以通过安装适用于笔记本的 Amazon CodeGuru 插件（目前处于预览版）来开始扫描其代码是否存在安全和质量问题。

Amazon CodeGuru Security 是一款开发人员工具，可提供智能建议以提高代码安全性和质量。CodeGuru 使用机器学习和自动推理来识别应用程序开发过程中的关键问题、安全漏洞和难以发现的错误，并提供建议以帮助用户纠正已识别的问题。

Amazon SageMaker Studio 是一个基于 Web 的机器学习集成开发环境 (IDE)，可让您构建、训练、调试、部署和监控机器学习模型。

Amazon CodeGuru Security now supports security and code quality scanning for Amazon SageMaker Studio and Jupyter notebooks. This new feature helps laptop users detect security vulnerabilities within the laptop unit, such as injection flaws, data leaks, weak or missing encryption. Users can also detect many common issues that affect the readability, repeatability and correctness of computing notebooks, such as misuse of ML library APIs, invalid execution sequences and uncertainty. When vulnerabilities or quality issues are found in notebooks, CodeGuru generates recommendations that enable users to fix these issues in accordance with AWS security best practices.

Notebook users on SageMaker Studio and Jupyter can start scanning their code for security and quality issues today by installing the Amazon CodeGuru plugin for notebooks, currently in preview.

Amazon CodeGuru Security is a developer tool that provides intelligent recommendations to improve code security and quality.CodeGuru uses machine learning and automated reasoning to identify critical issues, security vulnerabilities, and hard-to-find bugs during application development, and provides recommendations to help users correct identified issues.

Amazon SageMaker Studio is a web-based machine learning integrated development environment (IDE) that lets you build, train, debug, deploy, and monitor machine learning models.



##  如何连接vscode的aws tools

1.   登录后会显示一串代码 
2.   把这个代码放到弹出的页面
3.   进入登录页面



## How to connect vscode aws tools

1. After logging in, a string of code will be displayed 
2. Put this code on the popup page.
3. Go to the login page





## codewhisper using

https://docs.aws.amazon.com/codewhisperer/latest/userguide/whisper-full-function-generation.html



-   单行代码完成
-   全功能生成
-   区块完成
-   文档字符串和 Javadoc 完成
-   逐行推荐
-   单行注释完成

- Single line code completion
- Full-featured generation
- Block completion
- Document String and Javadoc Completion
- Line-by-line recommendations
- Single line comment completion



## CodeGuru 安全性的工作原理 How security works

https://docs.aws.amazon.com/zh_cn/codeguru/latest/security-ug/how-codeguru-security-works.html

Amazon CodeGuru Security 会扫描您的应用程序，查找安全漏洞，并提供如何在代码中解决这些漏洞的建议。更新代码后，您可以重新运行扫描以确保安全风险已得到修复。通过修改代码和重新运行扫描，您可以生成可跟踪的安全指标，以持续改善应用程序的安全状况。

CodeGuru Security 检测安全漏洞并返回结果，其中包括有关代码中的安全问题的信息、问题的位置以及如何修复这些问题的建议。如果发现的结果包括对代码的更改，CodeGuru Security 会突出显示要删除的易受攻击的代码行，并建议内联代码修复作为替换。有关更多信息，请参阅 [处理结果](https://docs.aws.amazon.com/zh_cn/codeguru/latest/security-ug/working-with-findings.html)



Amazon CodeGuru Security scans your application for security vulnerabilities and provides recommendations on how to address them in your code. After updating your code, you can rerun the scan to ensure that security risks have been fixed. By modifying the code and rerunning the scan, you can generate trackable security metrics to continuously improve the security of your application.

CodeGuru Security detects security vulnerabilities and returns results that include information about security issues in the code, the location of the issues, and recommendations on how to fix them. If the results found include changes to the code, CodeGuru Security highlights vulnerable lines of code to be removed and suggests inline code fixes as replacements. For more information, see Processing Results

### 优势

#### 在开发工作流程的任何阶段检测漏洞

基于 CodeGuru Security API 的设计提供了集成功能，可在开发工作流程的任何阶段使用。无论您的组织遵循“左移”还是“右移”的开发理念，CodeGuru Security 都会插入您的持续集成和交付（CI/CD）工具，以帮助您识别应用程序代码中的漏洞。

#### 减少误报检测

误报会导致工程资源被分散到审查后发现并非漏洞的检测结果上，因而造成资金浪费。通过进行深度语义分析，CodeGuru Security 可以高精度地检测漏洞，从而显著减少误报的数量。这使工程团队可以腾出时间，专注于为您的组织构建应用程序。

#### 自动跟踪错误关闭情况

CodeGuru Security 错误跟踪功能会自动检测错误何时关闭。错误跟踪算法可确保您无需执行额外操作即可获得有关组织安全状况的最新信息。您可以专注于重要事项，CodeGuru Security 会为您处理其余的工作。

### 无需预置 VM 即可立即启动

无需预置虚拟机（VM）即可运行 CodeGuru Security。只需将 CodeGuru Security 与您的工具集成，它就会随着您的工作负载而纵向扩展和缩减。

### Strengths

#### Detect vulnerabilities at any stage of the development workflow

The CodeGuru Security API-based design provides integrated functionality that can be used at any stage of the development workflow. Whether your organization follows a "left-shift" or "right-shift" development philosophy, CodeGuru Security plugs into your Continuous Integration and Delivery (CI/CD) tools to help you identify vulnerabilities in your application code.

#### Reduced False Alarm Detection

False positives can result in wasted funds as engineering resources are spread thin on detections that, upon review, are found not to be vulnerabilities. By performing deep semantic analysis, CodeGuru Security detects vulnerabilities with a high degree of accuracy, thereby significantly reducing the number of false positives. This frees up engineering teams to focus on building applications for your organization.

#### Automatic Bug Closure Tracking

CodeGuru Security bug tracking automatically detects when a bug is closed. The bug tracking algorithm ensures that you have up-to-date information about your organization's security status without having to perform additional actions. You can focus on what is important and CodeGuru Security will take care of the rest for you.

### Boot instantly without a VM on-premises

Run CodeGuru Security without an on-premises virtual machine (VM) Simply integrate CodeGuru Security with your tools and it scales up and down with your workload.



![image-20230719043049643](http://cdn.shinkai005.com/image202307190430735.png)