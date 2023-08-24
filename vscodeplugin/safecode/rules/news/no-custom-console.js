module.exports = {
  // 创建规则
  create(context) {
    return {
      // 当 ESLint 解析器遇到一个 CallExpression（即函数或方法调用）时，以下的函数会被触发
      CallExpression(node) {
        // 检查调用是否是一个成员表达式（例如 object.property 的形式）
        // 并确保 object 的名字是 "console"
        if (
          node.callee.type === "MemberExpression" &&
          node.callee.object.name === "console"
        ) {

          console.log('匹配到了console错误')
          // 报告错误
          context.report({
            node,
            message: "Custom console usage is not allowed",
          });
        }
      },
    };
  },
};
