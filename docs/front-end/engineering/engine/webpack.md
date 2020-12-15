---
sidebarDepth: 2
---

## 简介

+ [webpack](https://www.webpackjs.com/) 是一个 JavaScript 应用程序的静态模块打包器(module bundler)
+ 其通过模块之间的依赖，将这些模块打包成一个或多个 bundle
+ 在打包过程中，可使用 loader 代码进行压缩、提取等，或使用 plugin 配置开发服务器等

+ 前端构建工具有很多，看一下他们的对比：

|工具|描述|
|-|-|
|Webpack|专注于处理模块化的构建工具，有丰富的插件，开箱即用又可以高度配置
|Rollup|最早提出 Tree Shaking 的构建工具，常用与构建库
|Gulp|基于流的构建工具
|Grunt|灵活且插件丰富的构建工具

> 另外，Webpack 不同于 Babel，后者专注于 ES 代码转译，而前者则是处理模块加载、压缩和构建


+ webpack 虽然配置项很多，但主要围绕以下几个基本概念：

  + 入口(`entry`)：解析模块依赖的入口，至少要配置一个入口

  + 出口(`output`)：输出代码的位置(默认为 `./dist` 目录)，以及如何输出(输出几个 `chunk` 等)

  + 转换器(`loader`)：将非 js 文件当作模块处理(这就是为什么在 webpack 中所有文件都可识别为模块)

  + 插件(`plugins`)：扩展 webpack 用于处理各种任务(做一些 loader 不能做的)

  + 代码块(`chunk`)：webpack 打包后的代码块，一般由多个模块组合而成


::: tip 备注：
+ 官方提供很多的 loader 和 plugin，可以通过 npm 安装使用
+ 要注意 webpack 版本配置文件的变化，它们有可能有所变动，甚至被移除
+ 要注意 webpack 版本与 loader/plugin 的依赖关系，它们的配置方法可能会有所变化，甚至被移除
+ PS：中文官方文档中很多配置没有完全更新，当遇到问题是要善用搜索引擎或查看英文文档
:::




## 配置简介

+ Webpack 提供了非常完整的配置[配置](https://www.webpackjs.com/configuration/)，可以根据去求选择相应的配置
+ 一般在项目根目录下创建 `webpack.config.js` 来配置 webpack，其暴露一个对象：
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
+ development 下会启用插件：
  + `NamedChunksPlugin`
  + `NamedModulesPlugin`
+ production 下会启用插件：
  + `FlagDependencyUsagePlugin`
  + `FlagIncludedChunksPlugin`
  + `ModuleConcatenationPlugin`
  + `NoEmitOnErrorsPlugin`
  + `OccurrenceOrderPlugin`
  + `SideEffectsFlagPlugin`
  + `UglifyJsPlugin`
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
  publicPath: '',           // 默认，使用相对路径
  publicPath: '/assets/',   // 
  publicPath: 'https://cdn.example.com/',   // CDN

  // string，输出文件的名称，能使用 [id], [name], [hash], [chunkhash] 等变量
  filename: 'bundle.js',    // 只有一个输出文件时，也可以用 [name] 指定
  filename: '[name].js',    // 有多个入口时，[name] 对应入口文件名
  filename: '[chunkhash].js',     // 用于长效缓存

  // 类似 filename，但用于配置无入口的 chunk 的输出文件名
  chunkFilename: '[id].js',

  // 指定运行时如何发出跨域请求问题(仅当 'target: web' 且使用 JSONP 方式按需加载时有效)
  crossOriginLoading: false,             // 禁用跨域加载(默认)
  crossOriginLoading: 'anonymous',       // 不带用户 Cookies
  crossOriginLoading: 'use-credentials', // 带上用户 Cookies
}
```


+ 可供使用的模版变量：

|模板|描述|
|-|-|
|`[name]`|chunk 名称
|`[id]`|chunk 标识，从 0 开始
|`[hash]`|chunk 的唯一标识的 hash 值
|`[chunkhash]`|chunk 内容的 hash 值
|`[query]`|模块的查询字符串
  

::: tip 说明：
+ `[hash]`/`[chunkhash]` 的长度(默认20)可以使用 `[hash:16]` 的方式来指定
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
+ `test` 和 `include` 是必须匹配选项，`exclude` 是不匹配选项(优先于 `test`/`include`)
+ 最佳实践：
  + 尽量使用 `include` 代替 `exclude`
  + 只在 test 和 文件名匹配 中使用正则表达式，在 `include` 和 `exclude` 中使用绝对路径数组
:::



### plugins

+ 使用非 webpack 默认插件，都需要导入
+ 插件是一个数组，每个需要使用的插件都要实例化
```js
const webpack = require('webpack')
// 导入非 webpack 自带默认插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')

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
  extensions: ['.ts', '.js', '.json'],

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



## 配置参考

### 开始之前

+ 尽量使用规范的项目目录：
```sh
|- project/
  |- dist/                # 打包后文件目录，自动生成
  |- public/              # 公共资源
    |- index.html
  |- src/
    |- assets/            # 静态资源
    |- styles/            # css 样式
    |- main.js            # 入口文件
  |- webpack.config.js    # webpack 配置文件
  |- package.json
```

+ 先安装 webpack 和 webpack-cli
```sh
$ yarn add webpack webpack-cli -D
```

+ 配置 `package.json`，添加一条构建命令，以后在项目根目录下使用 `yarn build` 即可构建
```json
"scripts": {
  "build": "webpack"
}
```

+ 简单配置 `webpack.config.js` 的入口和出口
```js
const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
```


### 处理 js

+ 通常会使用 Babel 和 ESLint 来处理 js，添加相关 loader
```sh
$ yarn add -D @babel/core babel-loader eslint-loader

# @babel/core：babel 核心
# babel-loader：解析 babel
# eslint-loader：解析 eslint
```

+ 然后按照需要配置 `babel.config.json`
```json
{
  "presets": ["@babel/env"]
}
```

::: details webpack.config.js
```js
module.exports = {
  // ...
  modules: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,      // 排除目录
        use: [
          'babel-loader',
          {
            loader: 'eslint-loader',  // 由于有其他配置项，可使用对象形式配置 loader
            enforce: 'pre',           // 在所有 loader 之前，还可使用 post
          }
        ]
      }
    ]
  },
  devtool: 'source-map'               // 生成 source-map 用于调试
}
```
:::


+ 或配置 TypeScript，安装相关依赖：
```sh
$ yarn add -D typescript ts-loader
```

+ 再根据需要配置 `tsconfig.json`：
```json
{
  "compilerOptions": {
    "outDir": "./dist/",
    "noImplicitAny": true,
    "module": "es6",
    "target": "es5",
    "jsx": "react",
    "allowJs": true
  }
}
```

::: details webpack.config.js
```js

```
:::




### 静态资源

+ 安装 css 相关
```sh
yarn add -D sass-loader css-loader style-loader postcss-loader
# 若没有安装 node-sass 则手动安装（PS：sass-loader 依赖 node-sass）
yarn add -D node-sass

# style-loader：
# css-loader：
# sass-loader：加载 sass/scss 文件，同类型的还有 less-loader
# postcss-loader：加载 postcss 配置
```

::: details webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      { 
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  }
}
```
:::

+ 其他情况，安装需要使用的 loader：
```sh
yarn add -D file-loader url-loader csv-loader xml-loader

# file-loader：加载图片资源，同时能处理 css 和 js 中引用的图片依赖
# url-loader：处理
# csv-loader：加载 CSV 文件
# xml-loader：加载 XML 文件
```

::: details webpack.config.js
```js
const path = require('path')

module.exports = {
  mode: 'none',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,       // 处理图片的加载
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,  // 处理字体的加载
        use: ['file-loader']
      },
      {
        test: /\.xml$/,       // 处理 XML 的加载
        use: ['xml-loader']
      },
      {
        test: /\.(csv|tsv)/,  // 处理 CSV 的加载
        use: ['csv-loader']
      }
    ]
  }
}
```
:::


::: tip 备注：
+ html 文件中的图片加载需要配合 `html-loader`
+ 直接使用 `import` 能将加载 JSON 文件，因此不需要使用 loader
:::


### 多入口配置

+ 将 `entry` 配置为一个对象就可以配置多入口，并且 output 可以使用 `[name]` 引用其 chunkname
+ 通常会配合两个 html 相关插件使用，以动态修改 html 中的内容
  + `clean-webpack-plugin`：构建前清空 `/dist` 目录
  + `html-webpack-plugin`：可根据模板或选项动态生成新的 index.html

::: details webpack.config.js
```js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'none',
  entry: {
    app: './src/main.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Set title in html-webpack-plugin'
    })
  ]
}
```
:::

::: tip 备注：
+ [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin) 还支持很多配置
+ [html-webpack-template](https://github.com/jaketrent/html-webpack-template) 除了默认模板之外，还提供了一些额外的功能
+ [webpack-manifest-plugin](https://github.com/shellscape/webpack-manifest-plugin) 可以直接将数据提取到一个 json 文件，以供使用
:::



### 配置不同环境

+ 由于开发环境和生产环境的配置不一样，经常会创建不同的配置文件，并通过 `webpack-merge` 合并：
```sh
|- config\
  |- webpack.common.js  # 通用配置，包含 dev 和 prod 的公用部分
  |- webpack.dev.js     # 开发环境配置
  |- webpack.prod.js    # 生产环境配置
```

+ 更新 package.json，serve 为启用 devServer，再通过 `--config` 参数指定配置文件
```json
"scripts": {
  "dev": "webpack serve --config ./config/webpack.dev.js",
  "build": "webpack --config ./config/webpack.prod.js"
}
```

+ 开发环境一般配备 devServer(安装 `webpack-dev-server`)，和开启模块热加载(HMR)
+ 生产环境会自动启用部分插件，也可安装配置更多插件

+ 更新各配置文件：

::: details webpack.*.js
+ webpack.common.js
```js
const path = require('path')

module.exports = {
  mode: 'none',
  entry: {
    app: './src/main.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
}
```

+ webpack.dev.js
```js
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',  // 开发环境
  devServer: {
    contentBase: './dist',
    hot: true,          // 启用 HMR
    port: 9000
  }
})
```

+ webpack.prod.js
```js
const merge = require('webpack-merge')
// 以下两个插件需要手动安装
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',         // 生产环境，自动启用部分插件，如 UglifyJsPlugin
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin(), // 构建前删除 /dist 目录
    new HtmlWebpackPlugin({   // 根据已有模板生成 index.html
      title: 'Production'
    })
  ]
})
```
:::



::: tip 备注：
+ 如果保存后 webpack 没有工作，应该关闭编辑器的安全写入(safe write)功能
+ `webpack-dev-middleware` 适用于自由度更高的 devServer 配置
+ `NamedModulesPlugin` 插件用于在浏览器显示更新的文件名而不是一个 ID
+ 模块热替换(HMR)：webpack 会根据文件的依赖来 patch 部分更新，不会刷新整个页面
:::




### PWA

+ 安装 `workbox-webpack-plugin`
```sh
$ yarn add -D workbox-webpack-plugin
```

::: details webpack.config.js
```js
const merge = require('webpack-merge')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true
    })
  ]
})
```
:::

+ 在 main.js 注册 `service-worker`
```js
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('service-worker registered: ', registration)
    }).catch(error => {
      console.log('service-worker registered failed: ', error)
    })
  })
}
```



### 单页应用


### 同构应用




## 性能优化

### 优化打包体积

+ 去除不必要的插件
+ 提取公共代码：配置 `optimization.splitChunks` 将多个入口的公共代码提取到单独的文件
+ 压缩代码：压缩 js(`UglifyJsPlugin`)
+ 懒加载：使用 `import()` 按需加载模块
+ 异步加载模块
+ TreeShaking：“摇树”，Rollup 首先推出，Webpack 4 实现了该功能，现已默认开启该功能
+ 使用 DllPlugin
+ 使用 HappyPack
+ 使用 ParallelUglifyPlugin
+ Scope Hoisting
+ 分析输出



### 优化打包速度

+ 减少 loader 的检索范围：合理使用 `exclude` / `include`(推荐)
+ 减少检索路经：对于比较深的解析路经，配置 `resolve.alias`
+ 减少代码体积
  + 使用 `CommonsChunksPlugin` 提取多个 `chunk` 之间的通用模块
	+ 对一些组件库采用按需加载，避免无用的代码

+ 使用 `DllPlugin` 将更改不频繁的代码进行单独编译
+ 使用 `cache-loader` 启用持久化缓存，使用 package.json 的 `postinstall` 清除缓存目录
+ 使用 `parallel-webpack` 启用多核编译
+ 不需要 source-map 时可取消



### 优化开发环境

+ 增量编译
+ 在内存中编译：使用 `webpack-dev-server` / `webpack-dev-middleware` / `webpack-hot-middleware`
+ 修改 `devtool`：`eval-source-map` 性能最好，通常选择 `cheap-module-eval-source-map`
+ 避免使用开发环境下才使用的工具，如代码压缩等
+ 最小化入口 chunk



## 深入

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



### Tree Shaking

+ 原理是通过 ES6 模块的静态特性，去除上下文中未用到的代码，如使用 lodash 时只会打包用到的函数


### HMR




## 附录

### 常用 loader

+ 列举一些常用的 loader，更多 loader 参考 [awesome webpack](https://github.com/webpack-contrib/awesome-webpack#loaders)

::: details 常用 loader
|loader|描述|
|-|-|
|<Badge>加载文件</Badge>||
|raw-loader|加载文本文件
|file-loader|将文件输出到一个文件夹，在代码中通过 `url` 引用
|url-loader|类似 `file-loader`，但能将小文件以 `base64` 注入代码中
|source-map-loader|加载额外的 SourceMap 文件
|svg-inline-loader|将压缩后的 SVG 注入到代码中
|node-loader|加载 Node.js 原生模块文件
|image-loader|加载并压缩图片
|json-loader|加载 JSON 文件
|yaml-loader|加载 YAML 文件
|<Badge>编译模板</Badge>||
|haml-loader|将 `HAML` 代码转换成 `HTML`
|markdown-loader|将 `Markdown` 文件转换成 `HTML`
|pug-loader|将 `Pug` 模板转换成 `Javascript` 函数
|ejs-loader|将 `EJS` 模板转换成 `Javascript` 函数
|handlebars-loader|将 `Handlebars` 模板转换成 `Javascript` 函数
|<Badge>转换脚本</Badge>||
|babel-loader|将 `ES6` 转换成 `ES5`
|ts-loader|将 `TypeScript` 转换成 `Javascript`
|awesome-typescript-loader|将 `TypeScript` 转换成 `Javascript`，性能优于 `ts-loader`
|coffee-loader|将 `CoffeeScript` 转换成 `Javascript`
|<Badge>转换样式</Badge>||
|css-loader|加载 `CSS`，支持模块化、压缩、文件导入等
|style-loader|将 `CSS` 代码注入 `Javascript`，通过 `DOM` 操作去加载 `CSS`
|less-loader|将 `Less` 代码转换成 `CSS`
|sass-loader|将 `Scss/Sass` 代码转换成 `CSS`
|stylus-loader|将 `Stylus` 代码转换成 `CSS`
|postcss-loader|扩展 `CSS` 语法
|<Badge>检查代码</Badge>||
|eslint-loader|通过 `ESLint` 检查 `Javascript` 代码
|tslint-loader|通过 `TypeScript` 检查 `Javascript` 代码
|mocha-loader|加载 `Mocha` 测试用例代码
|coverjs-loader|计算测试的覆盖率
|<Badge>其他</Badge>||
|vue-loader|加载 `Vue` 单文件组件
|i18n-loader|加载多语言版本，支持国际化
|ignore-loader|忽略部分文件
|ui-component-loader|按需加载组件
:::


### 常用 plugin

+ 列举一些常用的 plugin，更多 plugin 参考[awesome webpack](https://github.com/webpack-contrib/awesome-webpack#webpack-plugins)

::: details 常用 plugin
|loader|描述|
|-|-|
|<Badge>用于修改行为</Badge>||
|define-plugin|定义环境变量
|context-replacement-plugin|修改 `require` 语句在寻找文件时的默认行为
|ignore-plugin|忽略部分文件
|<Badge>用于优化</Badge>||
|commons-chunk-plugin|提取公共代码
|extract-text-webpack-plugin|提取 `Javascript` 中的 `CSS` 代码到单独的文件
|prepack-webpack-plugin|优化输出的 `Javascript` 代码的性能
|uglifyjs-webpack-plugin|通过 `UblifyJS` 压缩 `ES6` 代码
|webpack-parallel-uglify-plugin|多线程执行 `UblifyJS` 代码压缩
|webpack-spritesmith|制作雪碧图
|dll-plugin|借鉴 DLL 思想大幅度提升构建速度
|hot-module-replacement-plugin|开启模块热替换功能
|ModuleConcatenationPlugin|开启 `WebpackScopeHoisting` 功能
|<Badge>其他</Badge>||
|i18n-webpack-plugin|国际化支持
|stylelint-webpack-plugin|将 `stylelint` 集成到项目中
|serviceworker-webpack-plugin|为网页应用增加离线缓存功能
|provide-plugin|从环境中提供的全局变量中加载模块，而不用导入对应文件
|web-webpack-plugin|为单页应用输出 `HTML`，比 `html-webpack-plugin` 好用
:::



### 编写 loader

参考自官方 [loader API](https://www.webpackjs.com/api/loaders)
+ `loader` 是一个函数；`loader runner` 会调用这个函数，然后把上一个 `loader` 产生的结果或者资源文件(`resource file`)传入进去
+ 函数的 `this` 上下文由 `webpack` 填充，并且 `loader runner` 具有一系列方法
+ `compiler` 需要得到最后一个 `loader` 产生的处理结果；这个处理结果应该是 `String` 或者 `Buffer`(被转换为一个 `String`)，代表了模块的 `JavaScript` 源码
+ 如果是单个处理结果，可以在同步模式中直接返回；如果有多个处理结果，则必须调用 `this.callback()`
+ 异步模式中必须调用 `this.async()`，指示 `loader runner` 等待异步结果，它会返回 `this.callback()`


+ `loader` 是一个函数，接受源代码或上一个 `loader` 返回的结果代码为参数，最后返回一个结果代码
```js
function someSyncOperation(content) {
  // do some operation
}

module.exports = function (source) {
  return someSyncOperation(source)
}
```


::: tip 备注：
+ 因为 `Webpack` 是一个 `Node.js` 应用，所以编写 `loader` 时可以调用 `Node.js API` 或安装第三方模块并引入使用
+ 需要加载本地 `loader` 时可以使用 `npm` 的 `link` 命令或 `Webpack` 的 `resolveLoader` 选项来实现
:::


<!-- + API

|语法|说明|
|-|-|
|`this.version`|`loader API` 版本号|
|`this.context`|模块所在的目录|
|`this.request`|被解析出来的 `request` 字符串|
|`this.async`|`loader` 将会异步地回调，返回 `this.callback`|
|`this.data`|在 `pitch` 阶段和正常阶段之间共享的 `data` 对象|
|`this.loaders`|所有 `loader` 组成的数组|
|`this.loaderIndex`|当前 `loader` 在 `loaders` 中的索引|
|`this.resource`|`request` 中的资源部分，包括 `query` 参数|
|`this.resourcePath`|资源文件的路径|
|`this.resourceQuery`|资源的 `query` 参数|
|`this.target`|编译的目标。从配置选项中传递过来的|
|`this.webpack`|如果是由 `webpack` 编译的，这个布尔值会被设置为真|
|`this.sourceMap`|生成一个 `source map`|
|`this.fs`|用于访问 `compilation` 的 `inputFileSystem` 属性|
|`this.callback()`|一个可以同步或者异步调用的可以返回多个结果的函数|
|`this.cacheable()`|设置是否缓存|
|`this.emitWarning()`|发出一个警告|
|`this.emitError()`|发出一个错误|
|`this.loadModule()`|解析 `request` 到一个模块，应用所有配置的 `loader`|
|`this.resolve()`|解析一个 `request`|
|`this.addDependency()`|加入一个文件作为产生 `loader` 结果的依赖，使它们的任何变化可以被监听到|
|`this.addContextDependency()`|把文件夹作为 `loader` 结果的依赖加入|
|`this.clearDependencies()`|移除 `loader` 结果的所有依赖|
|`this.emitFile()`|产生一个文件| -->



### 编写 plugin

+ `plugin` 是一个类，初始化实例后会执行其 `apply()` 方法为插件实例传入 `compiler` 对象，该对象内定义了回调钩子监听 `Webpack` 的变化
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

::: tip 备注：
+ `compiler`：该对象包含了 `Webpack` 环境的所有配置信息(`options`, `loaders`, `plugins` 等)，在 `Webpack` 启动时就被实例化
+ `compilation`：该对象包含了当前的模块资源、编译生成资源、变化的文件等信息，每当检测到一个文件变化，就会生成一个新的该对象，它还能读取到 `compiler` 对象
+ `resolver`：
+ `parser`：
:::

