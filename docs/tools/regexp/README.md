## 什么是正则表达式

+ 正则表达式（）是一种模糊匹配的匹配范式，简而言之，它用于匹配/检测具有 “同一种类型” 的字符串；如我们要匹配 136 开头的手机号码，可以编写正则 `/136\d{8}/`
+ 正则可以提高编程的效率/可读性，我们不用封装多个函数去实现一个匹配功能，只需使用一个正则表达式即可
+ 正则的底层是一个正则表达式引擎，它的核心是 `自动机` 和 `回溯算法`
+ 当然，正则也不是万能的，既要会使用也要防止滥用，以及写出高性能的正则



## 关于

本文档以 JavaScript 为例，其他语言可参考自有 API

### 正则实例

+ 正则字面量对象
```js
const regex = /136\d{8}/;
```

+ 正则实例
```js
const regex = new RegExp("136\\d{8}");
```


### 内置 API

+ `RegExp.prototype.test(str: string): boolean`
+ `RegExp.prototype.exec(str: string)`
+ `String.prototype.match(regexp: RegExp): []`
+ `String.prototype.search(regexp: RegExp): boolean`
+ `String.prototype.replace(regexp: RegExp, string | function): string`
+ `String.prototype.split(regexp: RegExp, separator: string): []`