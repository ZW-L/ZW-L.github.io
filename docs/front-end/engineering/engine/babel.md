---
sidebarDepth: 2
---

## 简介

+ [Babel](https://www.babeljs.cn/docs/)是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法
+ 也就是说可以使用未正式纳入 TC39 标准的语法，经 Babel 转译后可以运行到旧版本浏览器或其他环境
+ 构建在插件之上，使用现有的或编写的插件组成一个转换管道，通过 `presets` 即可轻松使用一组插件


::: tip TC39 提案的几个阶段：
+ Stage 0 - 设想（Strawman）：只是一个想法，可能有 Babel 插件
+ Stage 1 - 建议（Proposal）：这是值得跟进的
+ Stage 2 - 草案（Draft）：初始规范
+ Stage 3 - 候选（Candidate）：完成规范并在浏览器上初步实现
+ Stage 4 - 完成（Finished）：将添加到下一个年度版本发布中
:::



## 配置

### 简介

+ [官方](https://www.babeljs.cn/setup)提供了不同环境的配置
+ 支持多种配置方式：`.babelrc`, `babel.config.json`, `babel.config.js`, 内置 `package.json`
+ 插件(plugins)：告诉 babel 代码中有哪些是需要转译的
+ 预设(presets)：一系列插件的集合，官方对常用环境提供了一些预设
  + @babel/preset-env
  + @babel/preset-flow
  + @babel/preset-react
  + @babel/preset-typescript


::: tip 说明
+ presets 和 plugins 的配置方式是很相似的，他们都允许配置选项，但要注意：
  + plugins 在 presets 之前运行
  + plugins 是从前到后作用的，而 presets 刚好相反
:::


### 其他

```js
{
"presets": [
  [
  "@babel/env",
    {
      "targets": {
        "edge": "17",
        "firefox": "60",
        "chrome": "67",
        "safari": "11.1"
        }
      }
    ]
  ]
}
```




## 编写插件

+ 插件就是一个函数，来自官方的例子：
```js
export default function() {
  return {
    visitor: {
      Identifier (path) {
        const name = path.node.name
        // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name.split('').reverse().join('')
      },
    },
  }
}
```




## 深入原理

### 处理步骤

1. 解析(parse)：通过 `babel-babylon` 将代码解析生成 `AST`
2. 转换(transform)：通过 `babel-traverse` 遍历 `AST`，进行添加、更新及移除等操作
3. 生成(generate)：通过 `babel-generator` 将 `AST` 转换为 `Javascript` 代码


### 核心插件

+ `@babel/cli`：编译文件的命令行工具
+ `@babel/core`：转译器，提供 babel 转译的 API
+ `@babel/babylon`：Javascript 词法解析器
+ `@babel/traverse`：用于遍历 `AST`
+ `@babel/generator`：根据 `AST` 生成 Javascript 代码
+ `@babel/node`：和 `babel-cli` 捆绑安装，是一个支持 ES6 的 REPL
+ `@babel/register`：注册器，底层改写 `require()`，引入后所有以 `.es6`/`.es`/`.jsx`/`.js` 结尾的模块引入前都会被转译
+ `@babel/polyfill`：简单来说，就是提供 ES6+ 的 API 的 polyfill
