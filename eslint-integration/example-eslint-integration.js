const { ESLint } = require("eslint");

// Create an instance of ESLint with the configuration passed to the function
function createESLintInstance(overrideConfig){
  return new ESLint({ useEslintrc: false, overrideConfig: overrideConfig, fix: true });
}

// Lint the specified files and return the results
async function lintAndFix(eslint, filePaths) {
  const results = await eslint.lintFiles(filePaths);

  // Apply automatic fixes and output fixed code
  await ESLint.outputFixes(results);

  return results;
}

// Log results to console if there are any problems
function outputLintingResults(results) {
  // Identify the number of problems found
  const problems = results.reduce((acc, result) => acc + result.errorCount + result.warningCount, 0);

  if (problems > 0) {
    console.log("Linting errors found!");
    console.log(results);
  } else {
    console.log("No linting errors found.");
  }
  return results;
}

// Put previous functions all together
async function lintFiles(filePaths) {

    // The ESLint configuration. Alternatively, you could load the configuration
    // from a .eslintrc file or just use the default config.
    const overrideConfig = {
  "extends": ["eslint:recommended", "prettier", "plugin:eslint-plugin/recommended",  "plugin:security/recommended"],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "env": {
    "node": true,
    "es2020": true
  },
  "rules": {
    "eslint-plugin/prefer-message-ids": "off", // TODO: enable
    "eslint-plugin/require-meta-docs-description": ["error", { "pattern": "^(Detects|Enforces|Requires|Disallows) .+\\.$" }],
    "eslint-plugin/require-meta-docs-url": [
      "error",
      {
        "pattern": "https://github.com/eslint-community/eslint-plugin-security/blob/main/docs/rules/{{name}}.md"
      }
    ],
    "eslint-plugin/require-meta-schema": "off", // TODO: enable
    "eslint-plugin/require-meta-type": "off" // TODO: enable
  },
  "overrides": [
    {
      "files": ["test/**/*.js"],
      "globals": {
        "describe": "readonly",
        "it": "readonly"
      }
    }
  ]
}
;

    const eslint = createESLintInstance(overrideConfig);
    const results = await lintAndFix(eslint, filePaths);
    return outputLintingResults(results);
}

// Export integration
module.exports = { lintFiles }