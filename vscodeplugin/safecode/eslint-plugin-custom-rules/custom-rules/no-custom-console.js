
module.exports = {
  create(context) {
    return {
      CallExpression(node) {
        
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.name === "console"
        ) {
          const sourceCode = context.getSourceCode();
          const codeText = sourceCode.getText(node); // 获取当前节点的文本内容
          console.log("codeText", codeText);
          context.report({
            node,
            message: "Custom console usage is not allowed: {{ codeText }}",
            data:{
              codeText
            }
          });
        }
      },
    };
  },
};
