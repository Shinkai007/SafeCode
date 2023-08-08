/*
 * @Author: Shinkai007 499565606@qq.com
 * @Date: 2023-07-19 05:00:53
 * @LastEditors: Shinkai007 499565606@qq.com
 * @LastEditTime: 2023-07-19 05:00:59
 * @FilePath: /非安全代码集/detect-non-literal-fs-filename.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs');
let userinput = "/etc/passwd";
fs.readFile(userinput);