## 简介

+ [util](http://nodejs.cn/api/util.html) 模块主要用于支持 Node.js 内部 API 的需求，内置了一些的实用 API
+ `util API`
+ `util.TextDecoder` 类：解码
+ `util.TextEncoder` 类：编码
+ `util.types` 类：提供给 `TextEncoder` 实例使用的一系列类型判断函数 



## API

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



## TextDecoder

在 WHAT WG 编码标准上实现的 API，用于文本解码：
+ `new TextDecoder([encoding[, options]])`:
+ `textDecoder.decode([input[, options]])`:
+ `textDecoder.encoding`:
+ `textDecoder.fatal`:
+ `textDecoder.ignoreBOM`:




## TextEncoder

在 WHAT WG 编码标准上实现的 API，只支持 `UTF-8` 编码，用于文本编码：
+ `textEncoder.encode([input])`：
+ `textEncoder.encodeInto(src, dest)`：
+ `textEncoder.encoding`：




## types

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


