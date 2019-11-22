## loader 简介

参考自官方 [loader API](https://www.webpackjs.com/api/loaders)。

+ `loader` 只是一个导出为函数的 `JavaScript` 模块；`loader runner` 会调用这个函数，然后把上一个 `loader` 产生的结果或者资源文件(`resource file`)传入进去；
+ 函数的 `this` 上下文由 `webpack` 填充，并且 `loader runner` 具有一系列方法，可以使 `loader` 改变为异步调用方式，或者获取 `query` 参数等；
+ `compiler` 需要得到最后一个 `loader` 产生的处理结果；这个处理结果应该是 `String` 或者 `Buffer`(被转换为一个 `string`)，代表了模块的 `JavaScript` 源码；另外还可以传递一个可选的 `SourceMap`(格式为 `JSON` 对象)；
+ 如果是单个处理结果，可以在同步模式中直接返回；如果有多个处理结果，则必须调用 `this.callback()`；
+ 在异步模式中，必须调用 `this.async()`，来指示 `loader runner` 等待异步结果，它会返回 `this.callback()` 回调函数，随后 `loader` 必须返回 `undefined` 并且调用该回调函数。


## loader API

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
|`this.emitFile()`|产生一个文件|


## 编写 loader

**说明：**

+ 因为 `Webpack` 是一个 `Node.js` 应用，所以编写 `loader` 时可以调用 `Node.js API` 或安装第三方模块并引入使用
+ 需要加载本地 `loader` 时可以使用 `npm` 的 `link` 命令或 `Webpack` 的 `resolveLoader` 选项来实现


## 一个简单的 loader

&emsp;&emsp;简单来说，loader 是一个函数，它接受源代码或上一个 loader 返回的结果代码作为参数，最后返回一个结果代码。

```js
function someSyncOperation(content) {
  // do some operation
}

module.exports = function (source) {
  return someSyncOperation(source)
}
```


## plugin 简介

+ plugin 初始化实例后会执行类的 `apply()` 方法为插件实例传入 `compiler` 对象，该对象内定义了回调钩子监听 `Webpack` 的变化


## 编写 plugin

**说明：**
+ `compiler`：该对象包含了 `Webpack` 环境的所有配置信息(`options`, `loaders`, `plugins` 等)，在 `Webpack` 启动时就被实例化
+ `compilation`：该对象包含了当前的模块资源、编译生成资源、变化的文件等信息，每当检测到一个文件变化，就会生成一个新的该对象，它还能读取到 `compiler` 对象
+ `resolver`：
+ `parser`：

## 一个简单的 plugin

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