## 简介

+ [babel](https://www.babeljs.cn/docs/)是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便可以运行到旧版本浏览器或其他环境中
+ 构建在插件之上，使用现有的或者自己编写的插件可以组成一个转换管道，通过使用或创建一个 preset 即可轻松使用一组插件
+ 处理步骤：
  1. 解析(parse)：通过 `babel-babylon` 将代码解析生成 `AST`
  2. 转换(transform)：通过 `babel-traverse` 遍历 `AST`，进行添加、更新及移除等操作
  3. 生成(generate)：通过 `babel-generator` 将 `AST` 转换为 `Javascript` 代码
+ 核心插件
  + `babel-babylon`：Javascript 词法解析器
  + `babel-traverse`：用于遍历 `AST`
  + `babel-generator`：根据 `AST` 生成 `Javascript` 代码
  + `babel-core`：转译器，提供 babel 转译的 API
  + `babel-cli`：编译文件的命令行工具
  + `babel-node`：和 `babel-cli` 捆绑安装，是一个支持 ES6 的 REPL
  + `babel-register`：注册器，在底层改写了 require 方法，引入后所有以 `.es6`/`.es`/`.jsx`/`.js` 结尾的模块引入前都会被转译
  + `babel-polyfill`：简单来说，就是提供 ES6+ 的 API 的 polyfill




## 配置

+ [官方](https://www.babeljs.cn/setup)提供了不同环境的配置
+ 配置文件支持多种格式：`.babelrc`, `babel.config.json`, `babel.config.js`, 内置于 `package.json`
+ 配置选项
  + 预设(presets)：一系列插件的集合
  + 插件(plugins)：告诉 babel 代码中有哪些是需要转译的

```js

```



::: tip 说明
+ presets 和 plugins 的配置方式是很相似的，有一点除外：plugins 是从左到右作用的，而 presets 是从右到左作用的
+ 
:::




## 编写插件





