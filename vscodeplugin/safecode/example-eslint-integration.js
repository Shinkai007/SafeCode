
const { ESLint } = require("eslint");

// Create an instance of ESLint with the configuration passed to the function
// 创建eslint实例.并且自动修复
function createESLintInstance() {
  return new ESLint({
    useEslintrc: true,
    fix: false,
  });
}

// Lint the specified files and return the results
// 接受eslint实例, 文件路径.
async function lintAndFix(eslint, filePaths) {
  // 使用eslint实例检查该路径
  const results = await eslint.lintFiles(filePaths);
  // 自动修复
  await ESLint.outputFixes(results);
  return results;
}

// Log results to console if there are any problems
// 负责显示结果
async function outputLintingResults(eslint,results) {
  // Identify the number of problems found
  const problems = results.reduce(
    (acc, result) => acc + result.errorCount + result.warningCount,
    0
  );
  const formatter = await eslint.loadFormatter("stylish");
  const formattedResults = formatter.format(results);

  if (problems > 0) {
    console.log("Linting errors found!");
    console.log('results', results);
    console.log('formattedResults',formattedResults);
  } else {
    console.log("No linting errors found.");
  }
  return  results;
}

// Put previous functions all together
async function lintFiles(filePaths) {
  // The ESLint configuration. Alternatively, you could load the configuration
  // from a .eslintrc file or just use the default config.
  const eslint = createESLintInstance();
  const results = await lintAndFix(eslint, filePaths);
  return outputLintingResults(eslint, results);
}

// Export integration
module.exports = { lintFiles };
