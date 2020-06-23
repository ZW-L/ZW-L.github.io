## 简介

+ 参考 [MDN Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)
+ UTC：世界标准时间
+ 初始时间：`1970-1-1 00:00:00 UTC`
+ Unix 时间戳：自标准时间以来的毫秒数



## 构造函数

+ 使用 new 调用：多种方式，最多接受 7 个参数，并返回一个 Date 对象
```js
new Date()            // 默认为当前时刻的时间
new Date(value)       // 传入 Unix 时间戳
new Date(dateString)  // 传入时间戳字符串
new Date(year, monthIndex [, day [, hours [, minutes [, seconds [, milliseconds]]]]]) // 传入更多
```
+ 直接调用：返回一个字符串
```js
console.log(typeof Date())  // 'string'
```




## 属性

+ 它们都是在 `Date` 上定义的

|属性/方法|描述|
|-|-|-|
|`name`|值为 `'Date'`|
|`length`|值为 `7`|
|`prototype`|返回原型对象|
|`now()`|返回当前时间与初始时间相差的毫秒数|
|`UTC()`|接受和构造函数最多参数时相同的参数，并返回其与初始时间相差的毫秒数|
|`parse()`|解析一个日期字符串，并返回其与初始时间相差的毫秒数|

::: tip
+ 假设现在的时间：2020-06-23T12:55:22.514Z
```js
console.log(Date.now())   // 1592916922514
console.log(Date.parse('2020-06-23T12:55:22.514Z')) // 1592916922514
console.log(Date.UTC(2020, 6, 23, 12, 55, 22, 514)) // 1592916922514
```
+ 以下两种方式是一样的，`Date.now()` 比较受欢迎
```js
console.log(Date.now() === new Date().getTime())    // true
```
:::




## 原型

+ 它们都是在 `Date.prototype` 上定义的
+ 通常来说 `get`/`getUTC` 开头的方法返回的结果相同
+ 需要特别注意的是：**星期日用数值 0 表示，12月份用数值 0 表示**
+ 普通时间：

|获取|设置|附加|
|-|-|-|
|`getDay()`|-|返回/设置星期几（0-6）|
|`getFullYear()`|`setFullYear()`|返回/设置年份（4位数）|
|`getMonth()`|`setMonth()`|返回/设置月份（0-11）|
|`getDate()`|`setDate()`|返回/设置几号（1-31）|
|`getHours()`|`setHours()`|返回/设置小时（0-23）|
|`getMinutes()`|`setMinutes()`|返回/设置分钟（0-59）|
|`getSeconds()`|`setSeconds()`|返回/设置秒数（0-59）|
|`getMilliseconds()`|`setMilliseconds()`|返回/设置毫秒（0-999）|-|


+ UTC 时间：

|获取|设置|附加|
|-|-|-|
|`getUTCDay()`|-|根据 UTC 返回/设置星期几（0-6）|
|`getUTCFullYear()`|`setUTCFullYear()`|根据 UTC 返回/设置年份（4位数）|
|`getUTCMonth()`|`setUTCMonth()`|根据 UTC 返回/设置月份（0-11）|
|`getUTCDate()`|`setUTCDate()`|根据 UTC 返回/设置几号（1-31）|
|`getUTCHours()`|`setUTCHours()`|根据 UTC 返回/设置小时（0-23）|
|`getUTCMinutes()`|`setUTCMinutes()`|根据 UTC 返回/设置分钟（0-59）|
|`getUTCSeconds()`|`setUTCSeconds()`|根据 UTC 返回/设置秒数（0-59）|
|`getUTCMilliseconds()`|`setUTCMilliseconds()`|根据 UTC 返回/设置毫秒（0-999）|


+ 其他属性/方法

|属性/方法|描述|
|-|-|-|
|`constructor`|返回 `Date` 的构造函数|
|`getTimezoneOffset()`|返回当前时区的时区偏移|
|`getTime()`/`setTime()`|返回/设置时间的毫秒数|
|`toUTCString()`|将日期对象转换为 UTC 时区计时的字符串|
|`toISOString()`|将日期对象转换为 ISO 8601 扩展格式的字符串|
|`toJSON()`|等同于 `toISOString()` ，为了在 `JSON.stringify()` 方法中使用|
|`toLocaleDateString()`|`toLocaleString()` 的日期部分|
|`toLocaleTimeString()`|`toLocaleString()` 的时间部分|
|`toLocaleString()`|`toLocaleDateString()` + `toLocaleTimeString()`|
|`toDateString()`|`toString()` 的日期部分|
|`toTimeString()`|`toString()` 的时间部分|
|`toString()`|`toDateString()` + `toTimeString()`|
|`valueOf()`|返回一个日期对象的原始值|
|`[Symbol.toPrimitive]()`|转换一个 `Date` 对象到一个原始值|

::: tip 对比
```js
const date = new Date()

date.toJSON()          // 2020-06-23T13:11:03.453Z
date.toISOString()     // 2020-06-23T13:11:03.453Z
date.toUTCString()     // Tue, 23 Jun 2020 13:11:03 GMT

date.toDateString()    // Tue Jun 23 2020
date.toTimeString()    // 21:11:03 GMT+0800 (China Standard Time)
date.toString()        // Tue Jun 23 2020 21:11:03 GMT+0800 (China Standard Time)

date.toLocaleDateString()  // 6/23/2020
date.toLocaleTimeString()  // 9:11:03 PM
date.toLocaleString()      // 6/23/2020, 9:11:03 PM
```
:::