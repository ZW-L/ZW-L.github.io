---
sidebarDepth: 2
---

## [assert](http://nodejs.cn/api/assert.html)

+ 提供一组简单的断言测试，可用于测试不变量
+ 抛出的所有错误都将是 `assert.AssertionError` 类的实例
+ 该模块提供了建议的严格模式和更宽松的遗留模式

**API：**

+ `new assert.AssertionError(options)`：
+ `assert(value[, message])`：
+ `assert.deepEqual(actual, expected[, message])`：
+ `assert.deepStrictEqual(actual, expected[, message])`：
+ `assert.doesNotReject(asyncFn[, error][, message])`：
+ `assert.doesNotThrow(fn[, error][, message])`：
+ `assert.equal(actual, expected[, message])`：
+ `assert.fail([message])`：
+ `assert.fail(actual, expected[, message[, operator[, stackStartFn]]])`：
+ `assert.ifError(value)`：
+ `assert.notDeepEqual(actual, expected[, message])`：
+ `assert.notDeepStrictEqual(actual, expected[, message])`：
+ `assert.notEqual(actual, expected[, message])`：
+ `assert.notStrictEqual(actual, expected[, message])`：
+ `assert.ok(value[, message])`：
+ `assert.rejects(asyncFn[, error][, message])`：
+ `assert.strictEqual(actual, expected[, message])`：
+ `assert.throws(fn[, error][, message])`：


## [crypto](http://nodejs.cn/api/crypto.html)

+ Certificate 类
+ Cipher 类
+ Decipher 类
+ DiffieHellman 类
+ DiffieHellmanGroup 类
+ Hash 类
+ Hmac 类
+ KeyObject 类
+ Sign 类
+ Verify 类



## [inspector](http://nodejs.cn/api/inspector.html)

+ inspector.close()
+ inspector.console
+ inspector.open([port[, host[, wait]]])
+ inspector.url()
+ inspector.waitForDebugger()
+ inspector.Session 类



## url

+ [url](http://nodejs.cn/api/url.html) 模块用于处理与解析 URL。包含两个类（`URL`, `URLSearchParams`）和一些方法。



### URL

+ **简介：**
  + 浏览器兼容的 URL 类，根据 WHATWG URL 标准实现。

+ **构造函数**：
  + `new URL(input: string, base?: string): URL`：创建一个 URL 对象，当 `input` `是相对路径是，base` 是必须的
+ **属性**：
  + `url.hash: string`：获取/设置的哈希片段
  + `url.host: string`：获取/设置的主机名和端口
  + `url.hostname: string`：获取/设置的主机名
  + `url.origin: string`：获取/设置的源
  + `url.username: string`：获取/设置的用户名
  + `url.password: string`：获取/设置的密码
  + `url.pathname: string`：获取/设置的路径名
  + `url.port: string`：获取/设置的端口号
  + `url.protocol: string`：获取/设置的协议名称
  + `url.search: string`：获取/设置的查询字符串
  + `url.href: string`：获取/设置 URL，等同于 `url.toString()`
  + `url.searchParams: readonly URLSearchParams`：表示 URL 查询参数的 `URLSearchParams` 对象
+ **方法**：
  + `url.toString()`：返回序列化的 URL
  + `url.toJSON()`：返回序列化的 URL

::: tip 说明：
+ `url.href`/`url.toString()`/`url.toJSON()` 三者是一样的
+ 一些协议的默认端口号如下：
  + `ftp`: 21
  + `file`: 无
  + `gopher`: 70
  + `http`/`ws`: 80
  + `https`/`wss`: 443
:::




### URLSearchParams

+ **简介：**
  + 提供对 URL 查询部分的读写权限，有四个不同的构造函数，并且可以在全局对象上使用。

+ **构造函数**：
  + `new URLSearchParams(): URLSearchParams`：创建一个空的查询字符串
  + `new URLSearchParams(str: string): URLSearchParams`：将字符串解析成一个查询字符串
  + `new URLSearchParams(obj: object): URLSearchParams`：将对象解析成一个查询字符串
  + `new URLSearchParams(iter: iterator): URLSearchParams`：将迭代器解析成一个查询字符串
+ **方法**：
  + `urlSearchParams.append(name: string, value: string)`：在查询字符串中添加一个新的键值对
  + `urlSearchParams.delete(name: string)`：删除所有指定名字的字符串
  + `urlSearchParams.keys(): Iterator`：返回一个所有键名的迭代器
  + `urlSearchParams.values(): Iterator`：返回一个所有键对应的值的迭代器
  + `urlSearchParams.entries(): Iterator`：返回一个键值对的迭代器
  + `urlSearchParams[Symbol.iterator]()`：相当于 `urlSearchParams.entries()`
  + `urlSearchParams.forEach(fn: function, thisArg?: object)`：在查询字符串中迭代每个键值对
  + `urlSearchParams.has(name: string): boolean`：判断是否包含指定键名
  + `urlSearchParams.get(name: string): string | null`：返回指定键名的第一个值
  + `urlSearchParams.getAll(name: string): []`：返回指定键名的所有值
  + `urlSearchParams.set(name: string, value: string)`：设置匹配的键对应的值；不存在时会新建；若存在多个匹配的键，会设置第一对并删除其他对
  + `urlSearchParams.sort()`：按现有名称就地排列所有的键值对（稳定排序）
  + `urlSearchParams.toString(): string`：返回查询参数序列化后的字符串

::: tip 说明：
+ `URLSearchParams` 类和 `querystring` 模块类似，但是 `querystring` 模块更加通用，因为它可以定制分隔符（`&`, `=`）

:::



### 其他

+ `url.domainToASCII(domain: string): string`：返回 Punycode ASCII 序列化后的域名
+ `url.domainToUnicode(domain: string): string`：返回 Unicode 序列化后的的域名
+ `url.format(url: URL, options?: object): string`：返回自定义序列化的 URL
+ `url.fileURLToPath(url: URL | string): string`：返回文件 URL 对象对应的路径
+ `url.pathToFileURL(path: string): URL`：返回文件路径对应的 URL 对象

::: tip 说明：
+ `domainToASCII()`/`domainToUnicode()` 是一对逆运算
+ `fileURLToPath()`/`pathToFileURL()` 也算是一对逆运算
:::


## util

+ [util](http://nodejs.cn/api/util.html) 模块主要用于支持 Node.js 内部 API 的需求，内置了一些的实用 API
+ `util API`
+ `util.TextDecoder` 类：解码
+ `util.TextEncoder` 类：编码
+ `util.types` 类：提供给 `TextEncoder` 实例使用的一系列类型判断函数 



### API

+ `util.callbackify(original: function): function`：将 async 异步函数（或者一个返回值为 Promise 的函数）转换成异常优先的回调风格的函数
+ `util.promisify(original: function): function`：将异常优先的回调风格的函数转换成一个 Promise 版本的函数
+ `util.inherits(sub: function, super: function)`：原型继承（现在建议使用 ES6 的 `extends` 语法）
+ `util.getSystemErrorName(err): string`：
+ `util.debuglog(section: string): function`：创建基于 NODE_DEBUG 环境变量调试函数
+ `util.deprecate(fn, msg[, code])`：
+ `util.format(format, ...arg?: any)`：返回一个格式化后的字符串
+ `util.formatWithOptions(inspectOptions, format[, ...args])`：
+ `util.inspect(object[, options])`：
+ `util.inspect(object[, showHidden[, depth[, colors]]])`：
+ `util.isDeepStrictEqual(val1, val2)`：



### TextDecoder

在 WHAT WG 编码标准上实现的 API，用于文本解码：
+ `new TextDecoder([encoding[, options]])`:
+ `textDecoder.decode([input[, options]])`:
+ `textDecoder.encoding`:
+ `textDecoder.fatal`:
+ `textDecoder.ignoreBOM`:




### TextEncoder

在 WHAT WG 编码标准上实现的 API，只支持 `UTF-8` 编码，用于文本编码：
+ `textEncoder.encode([input])`：
+ `textEncoder.encodeInto(src, dest)`：
+ `textEncoder.encoding`：




### types

提供各种类型的内置对象的类型检查，调用方式为 `util.types.methodName`：
+ `isAnyArrayBuffer(value)`：
+ `isArgumentsObject(value)`：
+ `isArrayBuffer(value)`：
+ `isAsyncFunction(value)`：
+ `isBigInt64Array(value)`：
+ `isBigUint64Array(value)`：
+ `isBooleanObject(value)`：
+ `isBoxedPrimitive(value)`：
+ `isDataView(value)`：
+ `isDate(value)`：
+ `isExternal(value)`：
+ `isFloat32Array(value)`：
+ `isFloat64Array(value)`：
+ `isGeneratorFunction(value)`：
+ `isGeneratorObject(value)`：
+ `isInt8Array(value)`：
+ `isInt16Array(value)`：
+ `isInt32Array(value)`：
+ `isMap(value)`：
+ `isMapIterator(value)`：
+ `isModuleNamespaceObject(value)`：
+ `isNativeError(value)`：
+ `isNumberObject(value)`：
+ `isPromise(value)`：
+ `isProxy(value)`：
+ `isRegExp(value)`：
+ `isSet(value)`：
+ `isSetIterator(value)`：
+ `isSharedArrayBuffer(value)`：
+ `isStringObject(value)`：
+ `isSymbolObject(value)`：
+ `isTypedArray(value)`：
+ `isUint8Array(value)`：
+ `isUint8ClampedArray(value)`：
+ `isUint16Array(value)`：
+ `isUint32Array(value)`：
+ `isWeakMap(value)`：
+ `isWeakSet(value)`：
+ `isWebAssemblyCompiledModule(value)`：

