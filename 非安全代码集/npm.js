/*
 * @Author: Shinkai007 499565606@qq.com
 * @Date: 2023-07-31 08:53:15
 * @LastEditors: Shinkai007 499565606@qq.com
 * @LastEditTime: 2023-07-31 08:53:19
 * @FilePath: /非安全代码集/npm.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { lintFiles } = require('eslint-integration');

lintFiles(['./sql.js']);
