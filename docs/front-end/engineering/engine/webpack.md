---
sidebarDepth: 2
---

## 简介

+ [webpack](https://www.webpackjs.com/) 是一个 JavaScript 应用程序的静态模块打包器(module bundler)
+ 当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle


### 基本概念

+ `entry`：webpack 解析模块依赖的入口，需要至少配置一个入口
+ `output`：配置输出代码的位置以及如何输出，默认输出在 `./dist` 目录
+ `loader`：转换器用于处理非 javascript 文件，将它们都当作模块处理
+ `plugins`：插件，能够扩展 webpack 用于处理各种任务


### 常用 loader

+ 参考[awesome webpack](https://github.com/webpack-contrib/awesome-webpack#loaders)
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
  + `haml-loader`：将 `HAML` 代码转换成 `HTML`
  + `markdown-loader`：将 `Markdown` 文件转换成 `HTML`
  + `pug-loader`：将 `Pug` 模板转换成 `Javascript` 函数
  + `ejs-loader`：将 `EJS` 模板转换成 `Javascript` 函数
  + `handlebars-loader`：将 `Handlebars` 模板转换成 `Javascript` 函数
+ 转换脚本语言：
  + `babel-loader`：将 `ES6` 转换成 `ES5`
  + `ts-loader`：将 `TypeScript` 转换成 `Javascript`
  + `awesome-typescript-loader`：将 `TypeScript` 转换成 `Javascript`，性能优于 `ts-loader`
  + `coffee-loader`：将 `CoffeeScript` 转换成 `Javascript`
+ 转换样式文件：
  + `css-loader`：加载 `CSS`，支持模块化、压缩、文件导入等
  + `style-loader`：将 `CSS` 代码注入 `Javascript`，通过 `DOM` 操作去加载 `CSS`
  + `less-loader`：将 `Less` 代码转换成 `CSS`
  + `sass-loader`：将 `Scss/Sass` 代码转换成 `CSS`
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



### 常用 plugin

+ 参考[awesome webpack](https://github.com/webpack-contrib/awesome-webpack#webpack-plugins)
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
  + `i18n-webpack-plugin`：国际化支持
  + `stylelint-webpack-plugin`：将 `stylelint` 集成到项目中
  + `serviceworker-webpack-plugin`：为网页应用增加离线缓存功能
  + `provide-plugin`：从环境中提供的全局变量中加载模块，而不用导入对应文件
  + `web-webpack-plugin`：为单页应用输出 `HTML`，比 `html-webpack-plugin` 好用









## 配置简介

+ 参考[完整配置](https://www.webpackjs.com/configuration/)


### mode

+ 不同模式下 webpack 会默认启用不同的插件
```js
// string
mode: 'none', // 不启用任何插件
mode: 'production',
mode: 'development',
```

::: tip 备注
+ development 下会启用插件：`NamedChunksPlugin`, `NamedModulesPlugin`
+ production 下会启用插件：`FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin`, `OccurrenceOrderPlugin`, `SideEffectsFlagPlugin`, `UglifyJsPlugin`
:::



### entry

+ 入口可以有多个，可以是字符串、数组、对象的形式，可以使用相对路径
```js
// 单个入口
entry = './app/entry'
// 多个入口
entry = ['./app/entry1', './app/entry2']
// 多个入口，并生成多个 chunk
entry = {
  a: './app/entry-a',
  b: ['./app/entry-b1', './app/entry-b2']
}
// 动态：同步
entry: () => {
  return ['./app/entry1', './app/entry2']
}
// 动态：异步
entry: () => {
  return new Promise(resolve => {
    resolve(['./app/entry1', './app/entry2'])
  })
}
```

::: tip 备注
+ entry 是 string 或 array 时，只会生成一个 chunk，名称为 main
+ entry 是 object 时才可能生成多个 chunk，名称为 object 对应键
+ entry 是 array 时要搭配 `output.library` 使用，这时只有数组最后一个入口文件的模块会被导出
:::


### output

+ 配置 webpack 如何输出结果
```ts
output: {
  // string，所有输出文件的目标路径，必须是绝对路径
  path: path.resolve(__dirname, 'dist'),

  // string，输出文件的名称，可以使用 [id], [name], [hash], [chunkhash] 等变量
  filename: 'bundle.js', // 只有一个输出文件时，也可以用 [name] 指定
  filename: '[name].js', // 有多个入口时，[name] 对应入口文件名
  filename: '[chunkhash].js', // 用于长效缓存

  // 和 filename 类似，但用于配置无入口的 chunk 的输出文件名
  chunkFilename: '[id].js',
  chunkFilename: '[chunkhash].js', // 长效缓存

  // string，配置发布到线上资源的 URL 前缀，只能使用 [hash]变量
  publicPath: '', // 默认，使用相对路径
  publicPath: '/assets/',
  publicPath: 'https://cdn.example.com/',

  // string，导出库的名称
  library: 'MyLibrary',

  // string，导出库的类型
  libraryTarget: "umd", // 通用模块定义
  libraryTarget: "umd2", // 通用模块定义
  libraryTarget: "commonjs2", // exported with module.exports
  libraryTarget: "commonjs-module", // 使用 module.exports 导出
  libraryTarget: "commonjs", // 作为 exports 的属性导出
  libraryTarget: "amd", // 使用 AMD 定义方法来定义
  libraryTarget: "this", // 在 this 上设置属性
  libraryTarget: "var", // 变量定义于根作用域下
  libraryTarget: "assign", // 盲分配(blind assignment)
  libraryTarget: "window", // 在 window 对象上设置属性
  libraryTarget: "global", // property set to global object
  libraryTarget: "jsonp", // jsonp wrapper

  // 在生成代码时，引入相关的模块、导出、请求等有帮助的路径信息
  pathinfo: true, // boolean

  // 用于加载分块的 JSONP 函数名
  jsonpFunction: "myWebpackJsonp", // string

  // 「source map 位置」的文件名模板
  sourceMapFilename: "[file].map", // string
  sourceMapFilename: "sourcemaps/[file].map", // string

  // 「devtool 中模块」的文件名模板
  devtoolModuleFilenameTemplate: "webpack:///[resource-path]", // string

  // 「devtool 中模块」的文件名模板（用于冲突）
  devtoolFallbackModuleFilenameTemplate: "webpack:///[resource-path]?[hash]", // string

  // 在 UMD 库中使用命名的 AMD 模块
  umdNamedDefine: true, // boolean

  // 指定运行时如何发出跨域请求问题
  crossOriginLoading: "anonymous", // 默认，不带上用户 Cookies
  crossOriginLoading: "use-credentials", // 带上用户 Cookies
  crossOriginLoading: false,

  // 为这些模块使用 1:1 映射 SourceMaps（快速）
  devtoolLineToLine: {
    test: /\.jsx$/
  },

  // 「HMR 清单」的文件名模板
  hotUpdateMainFilename: "[hash].hot-update.json", // string

  // 「HMR 分块」的文件名模板
  hotUpdateChunkFilename: "[id].[hash].hot-update.js", // string

  // 包内前置式模块资源具有更好可读性
  sourcePrefix: "\t", // string
}
```




### module

+ 配置处理模块的规则
```js
module: {
  // 模块规则（配置 loader、解析器等选项）
  rules: [
    {
      // 匹配条件，每个选项都接收一个正则表达式或字符串
      // test 和 include 都是必须匹配选项，exclude 是必不匹配选项（优先于 test 和 include）
      // 最佳实践：
      // - 只在 test 和 文件名匹配 中使用正则表达式
      // - 在 include 和 exclude 中使用绝对路径数组
      // - 尽量避免 exclude，更倾向于使用 include
      test: /\.jsx?$/,
      include: [path.resolve(__dirname, 'app')],
      exclude: [path.resolve(__dirname, 'app/demo-files')],

      // issuer 条件（导入源）
      issuer: { test, include, exclude },

      // 标识应用这些规则，即使规则覆盖（高级选项）
      enforce: 'pre',
      enforce: 'post',

      // 应该应用的 loader，它相对上下文解析
      // 为了更清晰，`-loader` 后缀在 webpack 2 中不再是可选的
      // 查看 webpack 1 升级指南。
      loader: 'babel-loader',

      // loader 的选项
      options: {
        presets: ['es2015']
      },
    },

    {
      test: /\.html$/,
      test: '\.html$'

      // 使用数组应用多个 loader 和选项
      use: [
        'htmllint-loader',
        {
          loader: 'html-loader',
          options: {
            /* ... */
          }
        }
      ]
    },

    // 只使用这些嵌套规则之一
    { oneOf: [ /* rules */ ] },

    // 使用所有这些嵌套规则（合并可用条件）
    { rules: [ /* rules */ ] },

    // 仅当所有条件都匹配时才匹配
    { resource: { and: [ /* 条件 */ ] } },

    // 任意条件匹配时匹配（默认为数组）
    { resource: { or: [ /* 条件 */ ] } },
    { resource: [ /* 条件 */ ] },

    // 条件不匹配时匹配
    { resource: { not: /* 条件 */ } }
  ],

  // 不解析的模块，当某些模块没采用模块化时可以跳过，能提高构建性能
  noParse: [
    /special-library\.js$/
  ],

  // specifies default behavior for dynamic requests
  unknownContextRequest: '.',
  unknownContextRecursive: true,
  unknownContextRegExp: /^\.\/.*$/,
  unknownContextCritical: true,
  exprContextRequest: '.',
  exprContextRegExp: /^\.\/.*$/,
  exprContextRecursive: true,
  exprContextCritical: true,
  wrappedContextRegExp: /.*/,
  wrappedContextRecursive: true,
  wrappedContextCritical: false,
}
```


### plugins

+ 插件列表 
```js

```


### resolve

+ 解析模块请求的选项（不适用于对 loader 解析）
```js
resolve: {
  // 用于查找模块的目录
  modules: [
    "node_modules",
    path.resolve(__dirname, "app")
  ],

  // 使用的扩展名
  extensions: [".js", ".json", ".jsx", ".css"],

  // 模块别名列表：对象格式
  alias: {
    "module": "new-module",
    // 起别名："module" -> "new-module" 和 "module/path/file" -> "new-module/path/file"
    "only-module$": "new-module",
    // 起别名 "only-module" -> "new-module"，但不匹配 "only-module/path/file" -> "new-module/path/file"
    "module": path.resolve(__dirname, "app/third/module.js"),
    // 起别名 "module" -> "./app/third/module.js" 和 "module/file" 会导致错误
    // 模块别名相对于当前上下文导入
  },

  // 模块别名列表：数组格式
  alias: [
    {
      name: "module",
      // 旧的请求

      alias: "new-module",
      // 新的请求

      onlyModule: true
      // 如果为 true，只有 "module" 是别名
      // 如果为 false，"module/inner/path" 也是别名
    }
  ],

  // 遵循符号链接(symlinks)到新位置
  symlinks: true,

  // 从 package 描述中读取的文件
  descriptionFiles: ["package.json"],

  // 从描述文件中读取的属性
  // 当请求文件夹时
  mainFields: ["main"],

  // 从描述文件中读取的属性
  // 以对此 package 的请求起别名
  aliasFields: ["browser"],

  // 如果为 true，请求必不包括扩展名
  // 如果为 false，请求可以包括扩展名
  enforceExtension: false,

  // 类似 extensions/enforceExtension，但是用模块名替换文件
  moduleExtensions: ["-module"],
  enforceModuleExtension: false,

  // 为解析的请求启用缓存
  // 这是不安全，因为文件夹结构可能会改动
  // 但是性能改善是很大的
  unsafeCache: true,
  unsafeCache: {},

  // predicate function which selects requests for caching
  cachePredicate: (path, request) => true,

  // 应用于解析器的附加插件
  plugins: [
    // ...
  ]
}
```


### devServer

+ 
```js
devServer: {
  proxy: { // proxy URLs to backend development server
    '/api': 'http://localhost:3000'
  },
  contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
  compress: true, // enable gzip compression
  historyApiFallback: true, // true for index.html upon 404, object for multiple paths
  hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  https: false, // true for self-signed, object for cert authority
  noInfo: true, // only errors & warns on hot reload
  // ...
}
```


### 其他

```js
// 遵循符号链接(symlinks)到新位置
symlinks: true,

// 从 package 描述中读取的文件
descriptionFiles: ["package.json"],

// 从描述文件中读取的属性
// 当请求文件夹时
mainFields: ["main"],

// 从描述文件中读取的属性
// 以对此 package 的请求起别名
aliasFields: ["browser"],

// 如果为 true，请求必不包括扩展名
// 如果为 false，请求可以包括扩展名
enforceExtension: false,

// 类似 extensions/enforceExtension，但是用模块名替换文件
moduleExtensions: ["-module"],
enforceModuleExtension: false,

// 为解析的请求启用缓存
// 这是不安全，因为文件夹结构可能会改动
// 但是性能改善是很大的
unsafeCache: true,
unsafeCache: {},

// predicate function which selects requests for caching
cachePredicate: (path, request) => true,

performance: {
  hints: "warning", // 枚举
  hints: "error", // 性能提示中抛出错误
  hints: false, // 关闭性能提示
  maxAssetSize: 200000, // 整数类型（以字节为单位）
  maxEntrypointSize: 400000, // 整数类型（以字节为单位）
  assetFilter: function(assetFilename) {
    // 提供资源文件名的断言函数
    return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
  }
},

// 通过在浏览器调试工具(browser devtools)中添加元信息(meta info)增强调试
// 牺牲了构建速度的 `source-map' 是最详细的。
devtool: "source-map", // enum
devtool: "inline-source-map", // 嵌入到源文件中
devtool: "eval-source-map", // 将 SourceMap 嵌入到每个模块中
devtool: "hidden-source-map", // SourceMap 不在源文件中引用
devtool: "cheap-source-map", // 没有模块映射(module mappings)的 SourceMap 低级变体(cheap-variant)
devtool: "cheap-module-source-map", // 有模块映射(module mappings)的 SourceMap 低级变体
devtool: "eval", // 没有模块映射，而是命名模块。以牺牲细节达到最快。

// webpack 的主目录
// entry 和 module.rules.loader 选项
// 相对于此目录解析
context: __dirname, // string（绝对路径！）

// 包(bundle)应该运行的环境
// 更改 块加载行为(chunk loading behavior) 和 可用模块(available module)
target: "web", // 枚举
target: "webworker", // WebWorker
target: "node", // node.js 通过 require
target: "async-node", // Node.js 通过 fs and vm
target: "node-webkit", // nw.js
target: "electron-main", // electron，主进程(main process)
target: "electron-renderer", // electron，渲染进程(renderer process)
target: (compiler) => { /* ... */ }, // 自定义

externals: ["react", /^@angular\//],
externals: "react", // string（精确匹配）
externals: /^[a-z\-]+($|\/)/, // 正则
externals: { // 对象
  angular: "this angular", // this["angular"]
  react: { // UMD
    commonjs: "react",
    commonjs2: "react",
    amd: "react",
    root: "React"
  }
},

// 不要遵循/打包这些模块，而是在运行时从环境中请求他们
externals: (request) => { /* ... */ return "commonjs " + request }

// 精确控制要显示的 bundle 信息
stats: "errors-only",
stats: { //object
  assets: true,
  colors: true,
  errors: true,
  errorDetails: true,
  hash: true,
  // ...
},

// 独立解析选项的 loader
resolveLoader: { /* 等同于 resolve */ }

// 限制并行处理模块的数量
parallelism: 1, // number

// 捕获时机信息
profile: true, // boolean

// 在第一个错误出错时抛出，而不是无视错误。
bail: true, //boolean

// 禁用/启用缓存
cache: false, // boolean

// 启用观察
watch: true, // boolean

watchOptions: {
  // 将多个更改聚合到单个重构建(rebuild)
  aggregateTimeout: 1000, // in ms

  // 启用轮询观察模式
  // 必须用在不通知更改的文件系统中
  // 即 nfs shares（译者注：Network FileSystem，最大的功能就是可以透過網路，讓不同的機器、不同的作業系統、可以彼此分享個別的檔案 ( share file )）
  poll: true,
  poll: 500, // 间隔单位 ms
},

node: {
  // Polyfills and mocks to run Node.js-
  // environment code in non-Node environments.
  console: false, // boolean | "mock"
  global: true, // boolean | "mock"
  process: true, // boolean
  __filename: "mock", // boolean | "mock"
  __dirname: "mock", // boolean | "mock"
  Buffer: true, // boolean | "mock"
  setImmediate: true // boolean | "mock" | "empty"
},

recordsPath: path.resolve(__dirname, "build/records.json"),
recordsInputPath: path.resolve(__dirname, "build/records.json"),
recordsOutputPath: path.resolve(__dirname, "build/records.json"),
```





## 配置实战

+ [起步](https://www.webpackjs.com/guides/getting-started/)：安装 lodash 并简单配置打包
```js
// webpack.config.js
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: { . 
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```





## QAQ

### 模块化解决的痛点

+ 全局变量污染
+ 引入 `js` 库时依赖模糊
+ 项目壮大时 `js` 代码难以维护
+ 不能做到代码分离和按需加载


### 构建工具的区别

+ `Webpack`：专注于处理模块化的构建工具，有丰富的插件，开箱即用又可以高度配置
+ `Rollup`：新兴的构建工具，有 `Tree Shaking` 等功能，但功能不如 `Webpack` 完善
+ `Gulp`：基于流的构建工具
+ `Grunt`：灵活且插件丰富的构建工具


### loader 和 plugin 区别

+ `loader` 是转译模块源代码的转换规则，以源代码作为参数并返回转换后的代码，可以同时使用多个 `loader`
+ `plugin` 将处理函数(`handler`)注册到 `Webpack` 编译过程中的生命周期钩子函数上；当执行每个钩子时插件能够完全访问到编译(`compilation`)的当前状态



### 编写 loader

+ 简单来说，`loader` 是一个函数，它接受源代码或上一个 `loader` 返回的结果代码作为参数，最后返回一个结果代码
```js
function someSyncOperation(content) {
  // do some operation
}

module.exports = function (source) {
  return someSyncOperation(source)
}
```


### 编写 plugin

+ 简单来说，`plugin` 是一个类，它初始化实例后会执行类的 `apply()` 方法为插件实例传入 `compiler` 对象，该对象内定义了回调钩子监听 `Webpack` 的变化
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



### 创建多个入口/出口



### 打包的过程

1. 读取文件，分析模块依赖
2. 对模块进行解析执行（深度遍历）
3. 针对不同的模块使用不同的 `loader`
4. 编译模块，生成抽象语法树（`AST`）
5. 遍历 `AST`，输出 `JS`



### 打包生成哪些文件



### 热部署的原理



### 编译原理


### 构建流程


### 热更新原理



### chunk、bundle、module








## 性能优化

### 打包的文件体积过大

+ 异步加载模块
+ 提取第三库
+ 代码压缩
+ 去除不必要的插件



### 打包速度过慢

+ 减少代码体积 
  + 使用 `CommonsChunksPlugin` 提取多个 `chunk` 之间的通用模块，减少总体代码体积
	+ 把部分依赖转移到 `CDN` 上，避免每次编译过程都由 `Webpack` 处理
	+ 对一些组件库采用按需加载，避免无用的代码
+ 减少目录检索范围：在使用 `loader` 的时候，通过制定 `exclude` 和 `include` 选项，减少 `loader` 遍历的目录范围，从而加快 `Webpack` 编译速度
+ 减少检索路经：`resolve.alias` 可以配置 `Webpack` 模块解析的别名，对于比较深的解析路经，可以对其配置 `alias`