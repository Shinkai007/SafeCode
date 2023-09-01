const vscode = require("vscode");
const { lintFiles } = require("./example-eslint-integration");
const axios = require("axios");
// import axios from 'axios';

let diagnostics;
function activate(context) {
  if (!checkAPIKey()) {
    return;
  }
  console.log('Congratulations, your extension "safecode" is now active!');

  // 创建一个诊断集合
  diagnostics = vscode.languages.createDiagnosticCollection("safecode");

  // 将ESLint的错误转换为VSCode的诊断消息
  function createDiagnostics(errors) {
    return errors.map((error) => {
      const range = new vscode.Range(
        error.line - 1,
        error.column - 1,
        error.endLine - 1,
        error.endColumn - 1
      );
      const diagnostic = new vscode.Diagnostic(
        range,
        error.message,
        vscode.DiagnosticSeverity.Error
      );
      return diagnostic;
    });
  }

  vscode.workspace.onDidSaveTextDocument(async (document) => {
    if (document.languageId !== "javascript") return;

    let filePaths = [document.fileName];
    try {
      let results = await lintFiles(filePaths);
      console.log("result", results);

      // 如果有错误，将它们高亮显示在VSCode中
      if (
        results &&
        results.length > 0 &&
        results[0].messages &&
        results[0].messages.length > 0
      ) {
        const uri = vscode.Uri.file(results[0].filePath);
        const diagnosticsForFile = createDiagnostics(results[0].messages);
        diagnostics.set(uri, diagnosticsForFile);
      }
      // 获取codeText
      let errorWithCodeText = results[0].messages.map((msg) => msg.message);
      console.log("errorWithCodeText", errorWithCodeText[1]);
      let chatGPTResponse;
      //  temp
      errorWithCodeText = errorWithCodeText[0];

      if (errorWithCodeText) {
        console.log("11111", errorWithCodeText);
        const regex = /:\s*(.+)/;
        const match = errorWithCodeText.match(regex);
        let codeText = "";
        if (match && match[1]) {
          codeText = match[1];

        }

        console.log("codeText", codeText);

        chatGPTResponse = await getChatGPTResponse(codeText);
        vscode.window.showInformationMessage(chatGPTResponse);
      } else {
        console.log("errorWithCodeText", errorWithCodeText);
      }
      console.log("chatGPTResponse", chatGPTResponse);
      vscode.window.showInformationMessage("SafeCode worked");
    } catch (error) {
      console.error("Error linting the file:", error);
      vscode.window.showErrorMessage(
        "Error linting the file: " + error.message
      );
    }
  });
}
// 用户更改设置重新激活
vscode.workspace.onDidChangeConfiguration(event => {
  if (event.affectsConfiguration('safecode.apiKey')) {
      // The user changed the API key. You can re-check it here.
      checkAPIKey();
  }
});

function deactivate() {
  // 当插件被停用时，清除所有诊断信息
  diagnostics.clear();
}
// 检查apikey
function checkAPIKey() {
  const config = vscode.workspace.getConfiguration("safecode");
  const apiKey = config.get("apiKey");

  if (!apiKey) {
    vscode.window.showWarningMessage(
      "Please set your API key for the SafeCode extension in the VSCode settings first."
    );
    return false;
  }
  vscode.window.showWarningMessage(
    "You have successfully set up the SafeCodeAPI key!"
  );
  return true;
}

async function getChatGPTResponse(code) {
  const data = {
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content:
          "You will be provided with a piece of Javascript code, and your task is to find the security threat and modify it. Reply in json format {threat,fix}. (The fix content must be modified so that the source code can be used directly)\n",
      },
      {
        role: "user",
        content: code,
      },
    ],
    temperature: 0,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  };
  const config = vscode.workspace.getConfiguration("safecode");
  const apiKey = config.get("apiKey");
  
  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };

  const response = await axios({
    method: "post",
    url: "https://api.openai.com/v1/chat/completions",
    data: data,
    headers: headers,
  });
  // return response.data.choices[0].message.content;
  console.log("response.data", response.data);
  return response.data.choices[0].message.content;
}

module.exports = {
  activate,
  deactivate,
};
