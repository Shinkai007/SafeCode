/**
 * Tries to detect crypto.pseudoRandomBytes cause it's not cryptographical strong
 * @author Adam Baldwin
 */

"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: "error",
    docs: {
      description:
        'Detects if "pseudoRandomBytes()" is in use, which might not give you the randomness you need and expect.',
      category: "Possible Security Vulnerability",
      recommended: true,
      url: "https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/detect-pseudoRandomBytes.md",
    },
  },
  create: function (context) {
    return {
      MemberExpression: function (node) {
        if (node.property.name === "pseudoRandomBytes") {
          const sourceCode = context.getSourceCode();
          const codeText = sourceCode.getText(node); // 获取当前节点的文本内容
          console.log("codeText", codeText);
          return context.report({
            node: node,
            message:
              "Found crypto.pseudoRandomBytes which does not produce cryptographically strong numbers : {{codeSnippet}}",
              data: {
                codeSnippet: codeText
            }
          });
        }
      },
    };
  },
};
