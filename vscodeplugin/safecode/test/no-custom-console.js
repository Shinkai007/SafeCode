'use strict';

const RuleTester = require('eslint').RuleTester;
const tester = new RuleTester();

const ruleName = 'no-custom-console';
const Rule = require(`../rules/news/${ruleName}`);

tester.run(ruleName, Rule, {
    valid: [
        {
            code: `console.log('This is allowed');`
        },
        {
            code: `let logMessage = function() { console.log('This is also allowed'); };`
        }
    ],
    invalid: [
        {
            code: `customConsole.log('This should trigger an error');`,
            errors: [
                { message: /Custom console usage is not allowed/i, line: 1, endLine: 1, column: 1, endColumn: 15 }
            ]
        },
        {
            code: `let logger = customConsole.log; logger('This should also trigger an error');`,
            errors: [
                { message: /Custom console usage is not allowed/i, line: 1, endLine: 1, column: 14, endColumn: 28 }
            ]
        }
    ]
});
