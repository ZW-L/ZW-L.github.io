## Webpack 和其他自动化构建工具(Gulp, Grunt, Rollup)有哪些区别

+ `Webpack`：专注于处理模块化的构建工具，有丰富的插件，开箱即用又可以高度配置
+ `Rollup`：新兴的构建工具，有 `Tree Shaking` 等功能，但功能不如 `Webpack` 完善
+ `Gulp`：基于流的构建工具
+ `Grunt`：灵活且插件丰富的构建工具

## 模块化解决了前端的哪些痛点

+ 全局变量污染
+ 引入 `js` 库时依赖模糊
+ 项目壮大时 `js` 代码难以维护
+ 不能做到代码分离和按需加载

## loader 和 plugin 区别，常用的 loader 和 plugin

**区别：**
+ `loader` 是转译模块源代码的转换规则，以源代码作为参数并返回转换后的代码，可以同时使用多个 `loader`。
+ `plugin` 将处理函数(`handler`)注册到 `Webpack` 编译过程中的生命周期钩子函数上；当执行每个钩子时插件能够完全访问到编译(`compilation`)的当前状态。

**常用 loader：**

+ 加载文件：
+ `raw-loader`：加载文本文件
+ `file-loader`：将文件输出到一个文件夹，在代码中通过相当 `url` 去引用
+ `url-loader`：类似 `file-loader`，但能在文件很小的情况下以 `base64` 方式将文件内容注入代码中
+ `source-map-loader`：加载额外的 SourceMap 文件
+ `svg-inline-loader`：将压缩后的 SVG 注入到代码中
+ `node-loader`：加载 Node.js 原生模块文件
+ `image-loader`：加载并压缩图片
+ `json-loader`：加载 JSON 文件
+ `yaml-loader`：加载 YAML 文件
+ 编译模板：
+ `pug-loader`：将 `Pug` 模板转换成 `Javascript` 函数
+ `handlebars-loader`：将 `Handlebars` 模板转换成 `Javascript` 函数
+ `ejs-loader`：将 `EJS` 模板转换成 `Javascript` 函数
+ `haml-loader`：将 `HAML` 代码转换成 `HTML`
+ `markdown-loader`：将 `Markdown` 文件转换成 `HTML`
+ 转换脚本语言：
+ `babel-loader`：将 `ES6` 转换成 `ES5`
+ `ts-loader`：将 `TypeScript` 转换成 `Javascript`
+ `awesome-typescript-loader`：将 `TypeScript` 转换成 `Javascript`，性能优于 `ts-loader`
+ `coffee-loader`：将 `CoffeeScript` 转换成 `Javascript`
+ 转换样式文件：
+ `css-loader`：加载 `CSS`，支持模块化、压缩、文件导入等
+ `style-loader`：将 `CSS` 代码注入 `Javascript`，通过 `DOM` 操作去加载 `CSS`
+ `sass-loader`：将 `Scss/Sass` 代码转换成 `CSS`
+ `less-loader`：将 `Less` 代码转换成 `CSS`
+ `stylus-loader`：将 `Stylus` 代码转换成 `CSS`
+ `postcss-loader`：扩展 `CSS` 语法
+ 检查代码：
+ `eslint-loader`：通过 `ESLint` 检查 `Javascript` 代码
+ `tslint-loader`：通过 `TypeScript` 检查 `Javascript` 代码
+ `mocha-loader`：加载 `Mocha` 测试用例代码
+ `coverjs-loader`：计算测试的覆盖率
+ 其他：
+ `vue-loader`：加载 `Vue` 单文件组件
+ `i18n-loader`：加载多语言版本，支持国际化
+ `ignore-loader`：忽略部分文件
+ `ui-component-loader`：按需加载组件

**常用 plugin：**

+ 用于修改行为：
+ `define-plugin`：定义环境变量
+ `context-replacement-plugin`：修改 `require` 语句在寻找文件时的默认行为
+ `ignore-plugin`：忽略部分文件
+ 用于优化：
+ `commons-chunk-plugin`：提取公共代码
+ `extract-text-webpack-plugin`：提取 `Javascript` 中的 `CSS` 代码到单独的文件
+ `prepack-webpack-plugin`：优化输出的 `Javascript` 代码的性能
+ `uglifyjs-webpack-plugin`：通过 `UblifyJS` 压缩 `ES6` 代码
+ `webpack-parallel-uglify-plugin`：多线程执行 `UblifyJS` 代码压缩
+ `webpack-spritesmith`：制作雪碧图
+ `dll-plugin`：借鉴 DLL 思想大幅度提升构建速度
+ `hot-module-replacement-plugin`：开启模块热替换功能
+ `ModuleConcatenationPlugin`：开启 `WebpackScopeHoisting` 功能
+ 其他：
+ `serviceworker-webpack-plugin`：为网页应用增加离线缓存功能
+ `stylelint-webpack-plugin`：将 `stylelint` 集成到项目中
+ `i18n-webpack-plugin`：国际化支持
+ `provide-plugin`：从环境中提供的全局变量中加载模块，而不用导入对应文件
+ `web-webpack-plugin`：为单页应用输出 `HTML`，比 `html-webpack-plugin` 好用


## 编写 loader 和 plugin

**编写 loader：**

&emsp;&emsp;简单来说，`loader` 是一个函数，它接受源代码或上一个 `loader` 返回的结果代码作为参数，最后返回一个结果代码。

```js
function someSyncOperation(content) {
  // do some operation
}

module.exports = function (source) {
  return someSyncOperation(source)
}
```

**编写 plugin：**

&emsp;&emsp;简单来说，`plugin` 是一个类，它初始化实例后会执行类的 `apply()` 方法为插件实例传入 `compiler` 对象，该对象内定义了回调钩子监听 `Webpack` 的变化。

```js
class FirstPlugin {
  constructor (successHandler, failHandler) {
    this.successHandler = successHandler
    this.failHandler = failHandler
  }
  
  apply(compiler) {
    compiler.plugin('done', state => {
      this.successHandler()
    })

    compiler.plugin('failed', err => {
      this.failHandler()
    })
  }
}

module.exports = FirstPlugin
```


## 怎样创建多个入口，多个出口



## Webpack 打包的过程

1. 读取文件，分析模块依赖
2. 对模块进行解析执行（深度遍历）
3. 针对不同的模块使用不同的 `loader`
4. 编译模块，生成抽象语法树（`AST`）
5. 遍历 `AST`，输出 `JS`

## Webpack 打包之后生成哪些文件



## Webpack 打包出来的文件体积过大怎么办

+ 异步加载模块
+ 提取第三库
+ 代码压缩
+ 去除不必要的插件

## Webpack 热部署的原理



## Webpack 的编译原理、构建流程、热更新原理，chunk、bundle、module 的区别和使用



## Webpack 打包速度过慢怎么办

+ 减少代码体积 
  + 使用 `CommonsChunksPlugin` 提取多个 `chunk` 之间的通用模块，减少总体代码体积
	+ 把部分依赖转移到 `CDN` 上，避免每次编译过程都由 `Webpack` 处理
	+ 对一些组件库采用按需加载，避免无用的代码
+ 减少目录检索范围：在使用 `loader` 的时候，通过制定 `exclude` 和 `include` 选项，减少 `loader` 遍历的目录范围，从而加快 `Webpack` 编译速度
+ 减少检索路经：`resolve.alias` 可以配置 `Webpack` 模块解析的别名，对于比较深的解析路经，可以对其配置 `alias`





