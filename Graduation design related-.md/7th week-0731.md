# 7th week-0731



I've spent the last week expanding my rules, and expanding my test set.

-   ruls
-   test set
-   // rules + eslint => vscode plugin





JEST unit test. 

```js
const { lintFiles } = require('eslint-integration');

describe('lintFiles function', () => {
  it('should lint files correctly', async () => {
    // check testFile.js
    const filePaths = ['./testFile.js'];

    // get res
    const results = await lintFiles(filePaths);

    // Assert
    expect(results).toBeDefined();
    expect(results.length).toBe(1);
    expect(results[0].filePath).toBe('./testFile.js');
    expect(results[0].errorCount).toBe(0);
    expect(results[0].warningCount).toBe(0);
  });
});

```



### example(compliance&&non-compliance)

![image-20230731104440905](http://cdn.shinkai005.com/image202307311044035.png)

```js
module.exports = {
  meta: {
    type: 'error',
    docs: {
      description: 'Detects the use of helmet.permittedCrossDomainPolicies with a policy of "all"',
      category: 'Possible Security Vulnerability',
      recommended: true,
      url: 'https://eslint.org/docs/rules/no-unsafe-helmet-policy',
    },
  },
  create: function (context) {
    return {
      CallExpression: function (node) {
        // Check if this is a call to helmet.permittedCrossDomainPolicies
        if (
          node.callee.type === 'MemberExpression' &&
          node.callee.object.name === 'helmet' &&
          node.callee.property.name === 'permittedCrossDomainPolicies'
        ) {
          // Check the first argument of the call
          const firstArg = node.arguments[0];
          if (
            firstArg &&
            firstArg.type === 'ObjectExpression' &&
            firstArg.properties.some(
              (prop) =>
                prop.key.name === 'permittedPolicies' &&
                prop.value.type === 'Literal' &&
                prop.value.value === 'all'
            )
          ) {
            context.report({
              node: node,
              message: 'The permittedPolicies option should not be set to "all".',
            });
          }
        }
      },
    };
  },
};

```





## finding

>   Give me some inspiration to write custom rules

https://github.com/import-js/eslint-plugin-import

![image-20230731082603452](http://cdn.shinkai005.com/image202307310826494.png)

>   This piece mainly rejects absolute paths. Some examples are given, which cases pass the test and which do not. 
>
>   I can then follow this example to write regular expressions, or static analysis

https://docs.aws.amazon.com/codeguru/detector-library/javascript/



![image-20230731082440698](http://cdn.shinkai005.com/image202307310824741.png)

https://docs.aws.amazon.com/codeguru/detector-library/javascript/path-traversal/

![image-20230731082855652](http://cdn.shinkai005.com/image202307310828703.png)

## Let's see how to clean up the import part using ESLint's eslint-plugin-import.

https://dev-yakuza.posstree.com/en/code_quality/eslint/eslint-plugin-import/  20230526 blog 

// 这部分是告诉开发者, eslint如何引用其他的检测插件和自定义规则来进行检测和反馈. 

This section tells developers how eslint references other detection plugins and custom rules for detection and feedback. 

(eslint + plugin + My customized rules) => my vscode plugin

## eslint itself is designed to be used on the command line, but also provides an api to be called by plugins.

https://eslint.org/docs/latest/integrate/nodejs-api

This document shows developers how to write a node.js project, use eslint to inspect the project and return results. 

```js
const { lintFiles } = require('eslint-integration');


const filePaths = ['./some-file.js', './some-other-file.js'];
lintFiles(filePaths)
  .then(results => {
    // 处理结果 handle results
    console.log(results);
  })
  .catch(err => {
    // 处理错误 handle err
    console.error(err);
  });
```



我只需要写好vscode插件, 然后就可以这样去引用我的包的结果. 给用户进一步的可视化,直观的反馈. 

All I had to do was write the vscode plugin, and then I could refer to the results of my package that way. Giving the user further visualization and intuitive feedback. 

最好的点, 用户只需要下载我的插件, 不需要下载我的依赖, package.json 也就是npm会自动处理依赖关系, 

Users only need to download my plugin, do not need to download my dependencies, package.json that is, npm will automatically handle the dependency. 



## problem

1.   Amazon CodeWhisperer 没有提供api(我没有找到), 也就是我没有办法将他引入到我的插件当中, 我只能目前把他当做我的规则的对比, 我用我的规则来反馈一组代码, 然后用它来反馈一组代码, 然后进行比对.Amazon CodeWhisperer doesn't provide an api (that I could find), which means I have no way to bring him into my plugin, I can only use him as a comparison to my rules for now, where I use my rules to feed a set of code, and then use it to feed a set of code, and then compare them.
2.   Webview API  可以生成可视化的结果. 这是一个内嵌在vscode中的web页面. 可以使用html, js css来进行样式设计.结合charts库可以很好的展示出结果. The Webview API generates visualizations. This is a web page embedded in vscode. It can be styled using html, js css. Combined with the charts library can be very good to show the results.
3.   ` 关于论文部分, 我们应该保持将论文也跟着进度,  我害怕时间会不够. Regarding the dissertation part, we should keep the dissertation on track as well, I'm afraid we'll run out of time. `



### search process

>   This is an interface provided by codeguru, but there is no way to call it with code.

![image-20230731082305230](http://cdn.shinkai005.com/image202307310823487.png)

## progress

-   准备把自己写的自定义规则发布npm包. 正在测试. 这样可以不让插件非常的大. 可以看看线上环境的bug
-   Getting ready to publish npm package with custom rules I wrote. Testing now. This will keep the plugin from getting very large. You can see the bugs in the online environment
-   思考一下如何将反馈做的更直观一些. 考虑用户友好.  Think about how to make feedback more intuitive. Think about user-friendliness. 
-   希望可以逐渐开始写论文. 自己在之前看的很多论文没有记录, 所以可能需要花一些时间重新找. I hope to start writing papers gradually. A lot of the papers I read earlier in the year were not recorded, so it may take some time to find them again. 





## 参考

https://code.visualstudio.com/api/get-started/your-first-extension vscode doc

https://eslint.org/docs/latest/extend/custom-parsers eslint parsers doc

https://docs.aws.amazon.com/codeguru/detector-library/index.html codeguru doc