## Date

&emsp;&emsp;所有数据参考自 [MDN Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date)。

### 属性

|属性|描述|版本|
|-|-|-|
|`Date.length`|值是 7，这是该构造函数可接受的参数个数|-|
|`Date.prototype`|返回 `Date` 的原型对象|-|
|`Date.prototype.constructor`|返回 `Date` 的构造函数|-|

### 方法

|方法|描述|版本|
|-|-|-|
|`Date.UTC()`|接受和构造函数最长形式的参数相同的参数（从2到7），并返回从 `1970-1-1 00:00:00 UTC` 开始所经过的毫秒数|-|
|`Date.now()`|返回自 `1970-1-1 00:00:00 UTC` 至今所经过的毫秒数|-|
|`Date.parse()`|解析一个表示日期的字符串，并返回从 `1970-1-1 00:00:00 UTC` 所经过的毫秒数|-|
|`Date.prototype.getDay()`|返回星期几（0-6）|-|
|`Date.prototype.getUTCDay()`|返回 `UTC` 时区的星期几（0-6）|-|
|`Date.prototype.getTimezoneOffset()`|返回当前时区的时区偏移|-|
|`Date.prototype.getTime()`|返回从 `1970-1-1 00:00:00 UTC` 到该日期经过的毫秒数，在这之前的时间返回负值|-|
|`Date.prototype.setTime()`|通过指定从 `1970-1-1 00:00:00 UTC` 开始经过的毫秒数来设置日期对象的时间，在这之前的时间可使用负值|-|
|`Date.prototype.getFullYear()`|返回日期对象的年份（4位数）|-|
|`Date.prototype.getMonth()`|返回日期对象的月份（0-11）|-|
|`Date.prototype.getDate()`|返回日期对象的月份中的第几天（1-31）|-|
|`Date.prototype.getHours()`|返回日期对象的小时（0-23）|-|
|`Date.prototype.getMinutes()`|返回日期对象的分钟（0-59）|-|
|`Date.prototype.getSeconds()`|返回日期对象的秒数（0-59）|-|
|`Date.prototype.getMilliseconds()`|返回日期对象的毫秒（0-999）|-|
|`Date.prototype.getUTCFullYear()`|根据 `UTC` 返回日期对象所在的年份|-|
|`Date.prototype.getUTCMonth()`|根据 `UTC` 返回日期对象的月份|-|
|`Date.prototype.getUTCDate()`|根据 `UTC` 返回日期对象一个月的第几天|-|
|`Date.prototype.getUTCHours()`|根据 `UTC` 返回日期对象当前的小时|-|
|`Date.prototype.getUTCMinutes()`|根据 `UTC` 返回日期对象的分钟数|-|
|`Date.prototype.getUTCSeconds()`|根据 `UTC` 返回日期对象的秒数|-|
|`Date.prototype.getUTCMilliseconds()`|根据 `UTC` 返回日期对象的毫秒数|-|
|`Date.prototype.setFullYear()`|为日期对象设置完整年份|-|
|`Date.prototype.setMonth()`|为日期对象设置月份|-|
|`Date.prototype.setDate()`|为日期对象设置月份中的第几天|-|
|`Date.prototype.setHours()`|为日期对象设置小时数|-|
|`Date.prototype.setMinutes()`|为日期对象设置分钟数|-|
|`Date.prototype.setSeconds()`|为日期对象设置秒数|-|
|`Date.prototype.setMilliseconds()`|为日期对象设置毫秒数|-|
|`Date.prototype.setUTCFullYear()`|根据 `UTC` 设置日期对象中的年份|-|
|`Date.prototype.setUTCMonth()`|根据 `UTC` 设置日期对象中的月份|-|
|`Date.prototype.setUTCDate()`|根据 `UTC` 设置日期对象中月份的一天|-|
|`Date.prototype.setUTCHours()`|根据 `UTC` 设置日期对象中的小时|-|
|`Date.prototype.setUTCMinutes()`|根据 `UTC` 设置日期对象中的分钟|-|
|`Date.prototype.setUTCSeconds()`|根据 `UTC` 设置日期对象中的秒钟|-|
|`Date.prototype.setUTCMilliseconds()`|根据 `UTC` 设置日期对象中的毫秒|-|
|`Date.prototype.toJSON()`|等同于 `toISOString()` ，为了在 `JSON.stringify()` 方法中使用|-|
|`Date.prototype.toISOString()`|将日期对象转换为 ISO 8601 扩展格式的字符串|-|
|`Date.prototype.toUTCString()`|将日期对象转换为 UTC 时区计时的字符串|-|
|`Date.prototype.toLocaleString()`|返回一个表示该日期对象的字符串，该字符串与系统设置的地区关联|-|
|`Date.prototype.toLocaleDateString()`|`toLocaleString()` 的日期部分|-|
|`Date.prototype.toLocaleTimeString()`|`toLocaleString()` 的时间部分|-|
|`Date.prototype.toString()`|返回一个表示该日期对象的字符串|-|
|`Date.prototype.toDateString()`|`toString()` 的日期部分|-|
|`Date.prototype.toTimeString()`|`toString()` 的时间部分|-|
|`Date.prototype.valueOf()`|返回一个日期对象的原始值|-|
|`Date.prototype[@@toPrimitive]`|转换一个 `Date` 对象到一个原始值|-|

**说明：**
+ `get` 开头和 `set` 开头的方法有 15 个相互对应，但 `get` 开头有 3 个 方法没有对应的 `set`：`getDay()`, `getUTCDay()`, `getTimezoneOffset()`
+ `get/set` 开头的方法名又细分两大类：有无 `UTC` 紧跟它们，而他们都有 7 个类似的方法(省略前后缀)：FullYear(年), Month(月), Date(日), Hours(时), Minutes(分), Seconds(秒), Milliseconds(毫秒)
+ `get/set` 开头的方法有一对是不带 `UTC` 的：`getTime()`/`setTime()`
+ 将 `Date` 对象转化为字符串有 9 种方法，它们的关系如下(通过 `Date` 对象)：
  + `toUTCString()`：Fri, 15 Nov 2019 16:25:56 GMT
  + `toJSON() = toISOString()`：2019-11-15T16:25:56.353Z
  + `toLocaleString() = toLocaleDateString() + toLocaleTimeString()`：2019-11-16 00:25:56
  + `toString() = toDateString() + toTimeString()`：Sat Nov 16 2019 00:25:56 GMT+0800 (GMT+08:00)



