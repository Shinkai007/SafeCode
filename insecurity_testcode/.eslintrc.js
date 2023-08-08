/*
 * @Author: Shinkai007 499565606@qq.com
 * @Date: 2023-07-19 04:41:26
 * @LastEditors: Shinkai007 499565606@qq.com
 * @LastEditTime: 2023-07-19 05:03:02
 * @FilePath: /非安全代码集/.eslintrc.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["plugin:security/recommended"],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "security/detect-buffer-noassert": "error",
        "security/detect-child-process": "error",
        "security/detect-disable-mustache-escape": "error",
        "security/detect-eval-with-expression": "error",
        "security/detect-no-csrf-before-method-override": "error",
        "security/detect-non-literal-fs-filename": "error",
        "security/detect-non-literal-regexp": "error",
        "security/detect-non-literal-require": "error",
        "security/detect-object-injection": "error",
        "security/detect-possible-timing-attacks": "error",
        "security/detect-pseudoRandomBytes": "error",
        "security/detect-unsafe-regex": "error"
    }
}
