---
sidebarDepth: 2
---

## 简介

+ [webpack](https://www.webpackjs.com/) 是一个 JavaScript 应用程序的静态模块打包器(module bundler)
+ 当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle

::: tip 模块化解决的痛点以及为什么选择 webpack：
+ 模块化解决的痛点
  + 全局变量污染
  + 引入 `js` 库时依赖模糊
  + 项目壮大时 `js` 代码难以维护
  + 不能做到代码分离和按需加载
+ 构建工具的区别
  + `Webpack`：专注于处理模块化的构建工具，有丰富的插件，开箱即用又可以高度配置
  + `Rollup`：新兴的构建工具，有 `Tree Shaking` 等功能，但功能不如 `Webpack` 完善
  + `Gulp`：基于流的构建工具
  + `Grunt`：灵活且插件丰富的构建工具
:::



### 基本概念

+ `entry`：webpack 解析模块依赖的入口，但至少需要配置一个入口
+ `output`：配置输出代码的位置以及如何输出，默认输出在 `./dist` 目录
+ `loader`：转换器用于处理非 js 文件，将它们都当作模块处理(在 webpack 中一切文件皆可识别为模块)
+ `plugins`：插件，能够扩展 webpack 用于处理各种任务
+ `chunk`：代码块，一般由多个模块组合而成

::: tip 说明
+ 尽管官方文档内容多且乱，但 webpack 的使用主要围绕上述四个方面；在了解其配置方法及熟悉 webpack 的基本原理后，掌握 webpack 也不是什么难事
+ webpack 和官方提供了很多的 loader 和 plugin，我们可以通过 npm 安装使用；但是随着 webpack 以及各 loader、plugin 的升级，配置方法可能会有所变化，因此要特别注意 loader/plugin 依赖的 webpack 版本(如 webpack4+ 中已不再支持 `extract-text-webpack-plugin`)
:::



### 常用 loader

+ 列举一些常用的 loader，更多 loader 参考 [awesome webpack](https://github.com/webpack-contrib/awesome-webpack#loaders)

|loader|描述|
|-|-|
|<font color="blue">加载文件相关</font>||
|raw-loader|加载文本文件
|file-loader|将文件输出到一个文件夹，在代码中通过相当 `url` 去引用
|url-loader|类似 `file-loader`，但能将小文件以 `base64` 的方式注入代码中
|source-map-loader|加载额外的 SourceMap 文件
|svg-inline-loader|将压缩后的 SVG 注入到代码中
|node-loader|加载 Node.js 原生模块文件
|image-loader|加载并压缩图片
|json-loader|加载 JSON 文件
|yaml-loader|加载 YAML 文件
|<font color="blue">编译模板相关</font>||
|haml-loader|将 `HAML` 代码转换成 `HTML`
|markdown-loader|将 `Markdown` 文件转换成 `HTML`
|pug-loader|将 `Pug` 模板转换成 `Javascript` 函数
|ejs-loader|将 `EJS` 模板转换成 `Javascript` 函数
|handlebars-loader|将 `Handlebars` 模板转换成 `Javascript` 函数
|<font color="blue">转换脚本语言相关</font>||
|babel-loader|将 `ES6` 转换成 `ES5`
|ts-loader|将 `TypeScript` 转换成 `Javascript`
|awesome-typescript-loader|将 `TypeScript` 转换成 `Javascript`，性能优于 `ts-loader`
|coffee-loader|将 `CoffeeScript` 转换成 `Javascript`
|<font color="blue">转换样式文件相关</font>||
|css-loader|加载 `CSS`，支持模块化、压缩、文件导入等
|style-loader|将 `CSS` 代码注入 `Javascript`，通过 `DOM` 操作去加载 `CSS`
|less-loader|将 `Less` 代码转换成 `CSS`
|sass-loader|将 `Scss/Sass` 代码转换成 `CSS`
|stylus-loader|将 `Stylus` 代码转换成 `CSS`
|postcss-loader|扩展 `CSS` 语法
|<font color="blue">检查代码相关</font>||
|eslint-loader|通过 `ESLint` 检查 `Javascript` 代码
|tslint-loader|通过 `TypeScript` 检查 `Javascript` 代码
|mocha-loader|加载 `Mocha` 测试用例代码
|coverjs-loader|计算测试的覆盖率
|<font color="blue">其他</font>||
|vue-loader|加载 `Vue` 单文件组件
|i18n-loader|加载多语言版本，支持国际化
|ignore-loader|忽略部分文件
|ui-component-loader|按需加载组件




### 常用 plugin

+ 列举一些常用的 plugin，更多 plugin 参考[awesome webpack](https://github.com/webpack-contrib/awesome-webpack#webpack-plugins)

|loader|描述|
|-|-|
|<font color="blue">用于修改行为</font>||
|`define-plugin`|定义环境变量
|`context-replacement-plugin`|修改 `require` 语句在寻找文件时的默认行为
|`ignore-plugin`|忽略部分文件
|<font color="blue">用于优化</font>||
|`commons-chunk-plugin`|提取公共代码
|`extract-text-webpack-plugin`|提取 `Javascript` 中的 `CSS` 代码到单独的文件
|`prepack-webpack-plugin`|优化输出的 `Javascript` 代码的性能
|`uglifyjs-webpack-plugin`|通过 `UblifyJS` 压缩 `ES6` 代码
|`webpack-parallel-uglify-plugin`|多线程执行 `UblifyJS` 代码压缩
|`webpack-spritesmith`|制作雪碧图
|`dll-plugin`|借鉴 DLL 思想大幅度提升构建速度
|`hot-module-replacement-plugin`|开启模块热替换功能
|`ModuleConcatenationPlugin`|开启 `WebpackScopeHoisting` 功能
|<font color="blue">其他</font>||
|`i18n-webpack-plugin`|国际化支持
|`stylelint-webpack-plugin`|将 `stylelint` 集成到项目中
|`serviceworker-webpack-plugin`|为网页应用增加离线缓存功能
|`provide-plugin`|从环境中提供的全局变量中加载模块，而不用导入对应文件
|`web-webpack-plugin`|为单页应用输出 `HTML`，比 `html-webpack-plugin` 好用




## 配置简介

+ 参考[完整配置](https://www.webpackjs.com/configuration/)
+ 一般采用在项目根目录下创建 `webpack.config.js` 的方式来配置使用 webpack，其默认暴露一个对象：
```js
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({}),
  ],
  // ...
}
```



### mode

+ 不同模式下 webpack 会默认启用不同的插件
```js
// mode: string
mode: 'none',        // 不启用任何插件
mode: 'production',
mode: 'development',
```

::: tip 备注
+ development 下会启用插件：`NamedChunksPlugin`, `NamedModulesPlugin`
+ production 下会启用插件：`FlagDependencyUsagePlugin`, `FlagIncludedChunksPlugin`, `ModuleConcatenationPlugin`, `NoEmitOnErrorsPlugin`, `OccurrenceOrderPlugin`, `SideEffectsFlagPlugin`, `UglifyJsPlugin`
:::



### entry

+ 入口可以有多个，可以使用相对路径
```js
// entry: string | array | object
// 单个入口
entry = './app/entry'

// 多个入口
entry = ['./app/entry1', './app/entry2']

// 多个入口，并生成多个 chunk
entry = {
  a: './app/entry-a',
  b: ['./app/entry-b1', './app/entry-b2']
}

// 动态入口：同步
entry: () => {
  return ['./app/entry1', './app/entry2']
}

// 动态入口：异步
entry: () => {
  return new Promise(resolve => {
    resolve(['./app/entry1', './app/entry2'])
  })
}
```

::: tip 备注
+ entry 是 `string`/`array` 时，只会生成一个 chunk，名称为 main
+ entry 是 `object` 时才可能生成多个 chunk，名称为对象对应的键名
+ entry 是 array 时要搭配 `output.library` 使用，这时只有数组最后一个入口文件的模块会被导出
:::


### output

+ 配置 webpack 如何输出结果
```ts
output: {
  // string，所有输出文件的目标路径，必须是绝对路径
  path: path.resolve(__dirname, 'dist'),

  // string，配置发布到线上资源的 URL 前缀，能使用 [hash] 变量
  publicPath: '',         // 默认，使用相对路径
  publicPath: '/assets/', // 
  publicPath: 'https://cdn.example.com/', // CDN

  // string，输出文件的名称，能使用 [id], [name], [hash], [chunkhash] 等变量
  filename: 'bundle.js', // 只有一个输出文件时，也可以用 [name] 指定
  filename: '[name].js', // 有多个入口时，[name] 对应入口文件名
  filename: '[chunkhash].js', // 用于长效缓存

  // 类似 filename，但用于配置无入口的 chunk 的输出文件名
  chunkFilename: '[id].js',

  // 指定运行时如何发出跨域请求问题(仅当 'target: web' 且使用 JSONP 方式按需加载时有效)
  crossOriginLoading: false,             // 禁用跨域加载(默认)
  crossOriginLoading: 'anonymous',       // 不带用户 Cookies
  crossOriginLoading: 'use-credentials', // 带上用户 Cookies
}
```


::: tip 说明：
+ 可供使用的模版字符串：
  + `[hash]`：chunk 的唯一标识的 hash 值
  + `[chunkhash]`：chunk 内容的 hash 值
  + `[name]`：chunk 名称
  + `[id]`：chunk 标识，从 0 开始
  + `[query]`：模块的查询字符串
+ `[hash]`/`[chunkhash]` 的长度可以使用 `[hash:16]`(默认20)来指定
:::



### module

+ 配置处理模块的规则
```js
module: {
  // 不解析的模块，当某些模块没采用模块化时可以跳过，能提高构建性能
  noParse:  /jquery|lodash/,

  // 配置处理模块的规则
  rules: [
    // 处理非文本文件
    {
      test: /\.(gif|png|jpe?g|ept|woff|ttf|svg|pdf)$/,
      use: ['file-loader'],
    },
    // 处理 js 文件
    {
      test: /\.js$/,
      use: ['babel-loader?cacheDirectory'],    // 向 babel-loader 传递选项
      include: path.resolve(__dirname, 'src'), // 只命中 src 目录下的 js 文件，提高搜素速度
    },
    // 处理 scss 文件
    {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'], // 多个 loader 的处理顺序为从后向前
      exclude: path.resolve(__dirname, 'node_modules'),   // 不处理 node_modules 目录下的文件
    },
    // 当有很多选项传入 loader 时，可用对象表示
    {
      test: /\.html$/,
      use: [
        'htmllint-loader',
        {
          loader: 'html-loader',
          options: {
            /* ... */
          }
        },
      ]
    },
  ],
}
```

::: tip 备注
+ `test` 和 `include` 都是必须匹配选项，`exclude` 是必不匹配选项(优先于 `test`/`include`)，最佳实践：
  + 只在 test 和 文件名匹配 中使用正则表达式，在 `include` 和 `exclude` 中使用绝对路径数组
  + 尽量使用 `include` 代替 `exclude`
:::



### plugins

+ 使用非 webpack 默认插件，都需要导入
+ 插件是一个数组，每个需要使用的插件都要实例化
```js
var webpack = require('webpack')
// 导入非 webpack 自带默认插件
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')

// 在配置中添加插件
plugins: [
  // 构建优化插件
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor-[hash].min.js',
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_console: false,
    }
  }),
  new ExtractTextPlugin({
    filename: 'build.min.css',
    allChunks: true,
  }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  // 编译时(compile time)插件
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"',
  }),
  // webpack-dev-server 强化插件
  new DashboardPlugin(),
  new webpack.HotModuleReplacementPlugin(),
]
```


### resolve

+ 选项用于设置模块如何被解析
```js
resolve: {
  // 解析第三方模块时应该搜索的目录，可以使用绝对路径或相对路径
  modules: ['node_modules'],  // 默认
  // 添加 src 到搜索目录，并使其优先级高于 node_modules
  modules: [path.resolve(__dirname, 'src'), 'node_modules'],

  // 模块解析时使用的扩展名，导入相关后缀的模块时可以省略后缀
  extensions: ['.js', '.json'], // 默认
  // 配置导入时优先解析 ts 文件
  extensions: ['ts', '.js', '.json'],

  // 模块别名列表
  alias: {
    // 通常用来设置长路径和短路径的映射，导入方式为 import '@css/index.css'
    '@css': './src/styles',   // 还可以使用 path.resolve() 拼接
    // 指定结尾的精准匹配，缩小匹配范围，导入方式为 import 'dom'
    'dom$': './src/util/dom.js',
  },

  // 缓存模块，能增加性能，但并不安全(文件夹会改变)，应只缓存不会发生改变的目录/模块
  unsafeCache: true,  // 缓存所有
  unsafeCache: /src\/utils/,    // 正则
  unsafeCache: [/src\/utils/],  // 正则数组
}
```


### devServer

+ 配置本地开发服务器
```js
devServer: {
  // 配置 devServer http 服务器的根目录，默认为当前执行目录，必须是静态的
  contentBase: false, // 关闭暴露本地文件
  contentBase: path.join(__dirname, 'public'), // 暴露 '/public' 目录
  contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'assets')], // 暴露多个目录

  proxy: {
    // 请求 /api/user 相当于请求 http://localhost:3000/user
    '/api': 'http://localhost:3000',
    // 请求可不带 /api 前缀
    '/api': {
      target: 'http://localhost:3000',
      pathRewrite: { '^/api': '' }
    },
  },
 
  headers: {},        // 注入响应头
  compress: false,    // 默认 false，禁用 Gzip 压缩
  hot: false,         // 默认 false，关闭模块热替换
  inline: true,       // 默认 true，开启网页实时预览
  https: false,       // 默认 false，关闭 https
  // ...
}
```




## 配置参考

### ES6 & ESLint

+ 在 webpack 中配置 ES6 需要预先 [配置 babel]()
+ 安装依赖：
```sh
npm i -D babel-core babel-loader eslint-loader
```
+ webpack.dev.js：
```js
module.exports = {
  modules: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,      // 排除目录
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',
            enforce: 'pre',           // 在所有 loader 之前
          }
        ]
      }
    ]
  },
  devtool: 'source-map'               // 生成 source-map 用于调试
}
```

### Scss && PostCSS

+ 安装依赖：
```sh
npm i -D sass-loader css-loader style-loader postcss-loader
npm i -D node-sass    # sass-loader 依赖 node-sass
```
+ webpack.dev.js：
```js
module.exports = {
  module: {
    rules: [
      { 
        test: /.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  }
}
```


### 单页应用
### 同构应用
### 构建 npm 模块
### 构建离线应用
### 结合 npm script
### 加载图片
### 加载 SVG
### 加载 Source Map



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

### 缩小文件搜索范围
### 使用 DllPlugin
### 使用 HappyPack
### 使用 ParallelUglifyPlugin
### 自动刷新
### 模块热替换
### 区分环境
### 压缩代码
### CDN 加速
### Tree Shaking
### 提取公共代码
### 按需加载
### Scope Hoisting
### 分析输出


## 原理

### 编译流程

1. **初始化**：从配置文件和 shell 语句中读取并合并参数，通过参数实例化 `Compiler` 对象，加载配置的插件，再调用 `run()` 方法开始编译
2. **编译**：根据配置中的 `entry` 找出所有入口，并从入口文件出发，调用所有的配置的 loader 对模块进行编译(期间会找到模块依赖的模块，重复执行本步骤直至所有依赖的模块编译完成)
3. **输出**：根据入口和模块间的依赖关系，将模块组合成 chunk，最后将 chunk 转换成文件输出

::: tip 备注
+ 广播：在上述编译的各个过程中，webpack 会广播特点的事件，plugin 可以通过监听事件执行响应的操作
+ 区分 loader/plugin：
  + `loader` 是转译模块源代码的转换规则，以源代码作为参数并返回转换后的代码，可以同时使用多个
  + `plugin` 将处理函数(`handler`)注册到 webpack 编译过程中的生命周期钩子函数上；当执行每个钩子时插件能够完全访问到编译(`compilation`)的当前状态
:::


### 打包的过程

1. 读取文件，分析模块依赖
2. 对模块进行解析执行（深度遍历）
3. 针对不同的模块使用不同的 `loader`
4. 编译模块，生成抽象语法树（`AST`）
5. 遍历 `AST`，输出 `JS`


::: tip 说明：
+ 打包生成哪些文件?
+ chunk、bundle、module?
:::


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


### 热部署
### 热更新