# SafeCode Extension README

SafeCode is a security-focused extension for Visual Studio Code, designed to assist developers in identifying and rectifying potential security vulnerabilities in their codebase. By integrating SafeCode into your development workflow, you can ensure your code is more secure, resilient, and free from common security threats.

## Features

- To use the SafeCode extension, first get your API key. Then, in VSCode, open Settings (File > Preferences > Settings), search for safecode, and enter your API key in the safecode.apiKey field.
- **Real-time Security Analysis**: As you code, SafeCode performs real-time analysis to detect potential security vulnerabilities.
- **Detailed Reports**: Upon detecting a vulnerability, SafeCode provides a detailed report explaining the issue and suggesting possible fixes.
- **Integration with ChatGPT**: For complex issues, SafeCode can consult ChatGPT to provide in-depth explanations and code modification suggestions.
- **Customizable**: SafeCode allows users to customize the types of security checks based on their project needs.

![SafeCode in action](images/safecode-action.png)

## Requirements

- Visual Studio Code v1.60 or higher.
- An active internet connection for ChatGPT integration.

## Extension Settings

SafeCode offers several settings to customize its behavior:

- `safecode.enable`: Enables or disables the SafeCode extension.
- `safecode.securityLevel`: Adjusts the level of security checks (e.g., `low`, `medium`, `high`).

## Known Issues

- Some false positives might occur for highly obfuscated code.
- Real-time analysis might slow down the editor for very large files.

## Release Notes

### 1.0.0

- Initial release of SafeCode.
- Real-time security analysis feature added.
- Integration with ChatGPT for advanced security advice.

### 1.0.1

- Fixed minor bugs related to real-time analysis.
- Improved integration with ChatGPT.

### 1.1.0

- Added support for customizable security checks.
- Enhanced performance for large files.

---

## Working with Markdown

If you're new to writing markdown, here are some quick tips:

- Use `#` for headers. More `#` symbols mean a smaller header.
- To create a bullet list, start lines with `-` or `*`.
- Wrap text with `*` or `_` for italics, and `**` or `__` for bold.

For more markdown tips:

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Stay Secure with SafeCode!**
