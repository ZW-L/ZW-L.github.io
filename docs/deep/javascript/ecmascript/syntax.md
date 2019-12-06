## 全局函数 & 全局属性

**全局属性：** `null`, `undefined`, `NaN`, `Infinity`
**全局方法：** 
+ `parseInt()`/`parseFloat()`
+ `encodeURI()`/`decodeURI()`
+ `encodeComponentURI()`/`decodeComponentURI()`
+ `eval()`/`uneval()`
+ `isNaN()`/`isFinite()`，同时作为 `Number` 对象的静态方法



## 正则 API & 解决常见问题

**API：**
+ `regex.exec(str)`：在目标字符串中执行一次正则匹配操作
+ `regex.test(str)`：测试当前正则是否能匹配目标字符串，返回布尔值
+ `regex[Symbol.match](str)`：相当于 `str.match(regex)`，全局匹配时返回匹配结果数组，非全局匹配时返回包含匹配信息的数组
+ `regex[Symbol.replace](str, newStr|function)`：相当于 `str.replace(regex, newStr|function)`，返回结果字符串
+ `regex[Symbol.search](str)`：相当于 `str.search(regex)`，返回符合搜索的首个索引或 `-1`
+ `regex[Symbol.split](str[, limit])`：相当于 `str.split(regex)`，返回结果数组
+ `regex.toString()`：返回正则对象的字面量形式的字符串

**解决问题：**
+ 邮箱验证
+ URL 解析
+ 去重



## 数组常用 API

**变异方法：**
+ `sort()`：数组排序，可接受一个排序函数(排序函数接受两个参数)，返回排序后的数组
+ `reverse()`：反转数组，无参数，返回反转后的数组
+ `pop()`, `push()`, `shift()`, `unshift()`：栈和队列相关方法，返回值为传入的参数或弹出的值
+ `splice()`：删除、插入或替换(可接受三个参数：起始下标、删除的项数、插入的项)，返回修改后的数组
+ `forEach()`：接受一个函数，将数组值逐个传入该函数，返回修改后的数组
+ `copyWithin()`：将一段元素序列拷贝到另一段元素序列上，覆盖原有的值

**非变异方法：**
+ 静态方法：
  + `Array.isArray()`：判断是否是数组
  + `Array.from()`：从类数组对象或者可迭代对象中创建一个新的数组实例
  + `Array.of()`：根据一组参数来创建新的数组实例，支持任意的参数数量和类型
+ 查找过滤：
  + `every()`：接受函数为参数，用于测试数组每一个值，都通过测试时返回 `true`
  + `some()`：接受函数为参数，用于测试数组每一个值，至少有一个通过测试时返回 `true`
  + `includes()`：数组包含指定值时，返回 `true`
  + `filter()`：接受函数为参数，对数组进行过滤，返回过滤后的数组
  + `find()`：接受函数为参数，返回第一个通过测试函数的元素或 `undefined`
  + `findIndex()`：接受函数为参数，返回第一个通过测试函数的元素下标或 `-1`
  + `indexOf()`：返回第一个与指定值相等的元素的下标或 `-1`
  + `lastIndexOf()`：返回最后一个与指定值相等的元素的下标或 `-1`
+ 迭代方法：
  + `map()`：接受函数为参数，与 `forEach()` 类似，但是不会修改原数组，而是创建新数组
  + `reduce()`：接受函数参数和迭代初值，从左到右为每个数组元素执行一次回调函数，把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
  + `reduceRight()`：接受函数参数和迭代初值，与 `reduce()` 类似，但是从数组尾部开始迭代
+ 其他：
  + `concat()`：拼接数组，返回新数组
  + `fill()`：使用固定值填充数组，返回新数组
  + `slice()`：提取数组的部分元素，返回新数组
  + `keys()`：返回数组的所有键的可迭代对象(`Iterator`)
  + `values()`：返回数组的所有值的可迭代对象(`Iterator`)
  + `entries()`：返回数组的所有键值数组的可迭代对象(`Iterator`)
  + `join()`：通过指定字符连接数组元素，返回一个字符串
  + `toLocaleString()`：返回一个由所有数组元素组合而成的本地化后的字符串
  + `toString()`：返回一个由所有数组元素组合而成的字符串，默认为 `join(',')`
  + `valueOf()`：返回数组对象的原始值



## 如何中断 forEach

+ 使用 `try...catch` 监视代码块，在需要终端的地方抛出异常
+ 使用其他方法代替 `forEach`



## 将 arguments 转化为数组

+ `Array.prototype.slice.call(arguments)`
+ `Array.prototype.concat.apply([], arguments)`
+ `Array.from(arguments)`
+ `[...arguments]`



## 解释以下代码的输出

```js
var y = 1
if (function f(){}) {
  y += typeof f
}
console.log(y)

var y = 1
if (f = function() {}) {
  y += typeof f
}
console.log(y)
```

**输出:** `1undefined` 和 `1function`

**解析：** 

+ 只要条件语句返回的值不是六个假值(`false`：`0`, `undefined`, `null`, `NaN`, `''`, `false`)之一，`if` 语句块内的代码都会执行
+ 在 if 语句中使用赋值语句时，它相当于创建一个变量：

```js
var y = 1
if (1) {
  f = function() {}
  y += typeof f
}
console.log(y) // 1function
```



## 异常处理的方式 & 异常处理的方案

**异常处理说明：**
+ `try...catch...finally` 语句块，其中 `try` 语句时必需的，`catch` 和 `finally` 应至少有一个
+ 当 `try` 语句块中执行出现异常时，`try` 语句块中剩余的代码均不会执行
+ `catch` 语句块必须接受一个表示异常类型的名称(任意一个命名都可以)，即使在语句块中不需要使用
+ 不管有没有发生异常，`finally` 语句块在最后都会执行，在 `try` 或 `catch` 中添加 `return` 语句也不能逃离 `finally` 
+ 当 `finally` 语句块中包含 `return` 语句时，它一定会返回，此时会覆盖 `try` 或 `catch` 中的 `return` 语句

**异常处理方案：**




## 解释 try 的 return 语句不能终止 finally

**说明：** `finally` 块用于包含清理代码(关闭文件等)，因此始终执行 `finally` 语句块是有必要的



## 宏任务 & 微任务

**宏任务：**
+ `I/O`
+ `setTimeout/setInterval`
+ `requestAnimationFrame`
+ `setImmediate`(Node.js)

**微任务：**
+ `Promise.then/.catch/.finally`
+ `MutationObserver`
+ `process.nextTick`(Node.js)



## 实现异步编程

+ 回调函数
  + 优点：简单、容易理解和部署
  + 缺点：代码高度耦合，且每个人物只能指定一个回调
+ 事件监听
  + 优点：代码解耦且能绑定多个事件、每个事件可指定多个回调
  + 缺点：整个程序变成事件驱动，运行流程变得不清晰
+ 发布/订阅模式
  + 优点：类似事件监听，但更优
  + 缺点：
+ Promise
  + 优点：
  + 缺点：



## EventLoop

在 `Javascript` 中，任务分为宏任务(`macrotask`)和微任务(`microtask`)，这两个任务分别维护一个队列(均采用先进先出的策略执行)，同步执行的任务都在宏任务上执行。具体的操作步骤如下(前四步构成了一个事件的循环检测机制(`EventLoop`))：

1. 从宏任务的头部取出一个任务执行
2. 执行过程中若遇到微任务则将其添加到微任务的队列中
3. 宏任务执行完毕后，若微任务的队列中存在任务，则逐个执行至全部完成
4. `GUI` 渲染
5. 回到步骤 1，直到宏任务执行完毕



## Node EventLoop & 浏览器 EventLoop





## 如何分析复杂的异步嵌套逻辑

1. 复杂的异步写法转换为简单写法(`async/await`) 
2. 按照事件的循环机制进行分析