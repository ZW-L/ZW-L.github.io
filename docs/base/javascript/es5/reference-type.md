## Function

&emsp;&emsp;所有数据参考自 [MDN Function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function)。

### 属性

|属性|描述|版本|
|-|-|-|
|`Function.length`|获取函数的形参个数|-|
|`Function.name`|获取函数的名称|-|
|`Function.prototype`|获取声明函数的原型构造方法|-|

### 方法

|方法|描述|版本|
|-|-|-|
|`Function.prototype.call()`|将函数的调用绑定至另一个对象|-|
|`Function.prototype.bind()`|从已有函数生成一个新的函数，并将它的调用绑定至另一个对象|-|
|`Function.prototype.apply()`|将函数的调用绑定至另一个对象|-|
|`Function.prototype.toSource()`|获取函数的实现源码的字符串|-|
|`Function.prototype.toString()`|获取函数的实现源码的字符串|-|



## Object

&emsp;&emsp;所有数据参考自 [MDN Object](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)。

### 属性

|属性|描述|版本|
|-|-|-|
|`prototype`|特定的函数，用于创建一个对象的原型-|
|`__proto__`|指向当对象被实例化的时候，用作原型的对象-|
|`Object.prototype.constructor`|返回创建实例对象的 `Object` 构造函数的引用-|

### 方法

|方法|描述|版本|
|-|-|-|
|`Object.assign()`|通过复制一个或多个对象来创建一个新的对象|-|
|`Object.create()`|使用指定的原型对象和属性创建一个新对象|-|
|`Object.defineProperty()`|给对象添加一个属性并指定该属性的配置|-|
|`Object.defineProperties()`|给对象添加多个属性并分别指定它们的配置|-|
|`Object.getOwnPropertyDescriptor()`|返回对象指定的属性配置|-|
|`Object.getOwnPropertyDescriptors()`|返回对象所有的属性配置|-|
|`Object.freeze()`|冻结对象，不能删除或更改任何属性|-|
|`Object.seal()`|密封对象，不能删除对象的属性|-|
|`Object.preventExtensions()`|禁止对象扩展，不能进行任何扩展|-|
|`Object.isFrozen()`|判断对象是否已经冻结|-|
|`Object.isSealed()`|判断对象是否已经密封|-|
|`Object.isExtensible()`|判断对象是否可扩展|-|
|`Object.getOwnPropertyNames()`|返回包含了指定对象所有的可枚举或不可枚举的属性名的数组|-|
|`Object.getOwnPropertySymbols()`|返回包含了指定对象自身所有的符号属性的数组|-|
|`Object.getPrototypeOf()`|返回指定对象的原型对象|<font color="orange">ES6</font>|
|`Object.setPrototypeOf()`|设置对象的原型（即内部 `[[Prototype]]` 属性）|<font color="orange">ES6</font>|
|`Object.is()`|比较两个值是否相同所有 `NaN` 值都相等（这与 `==` 和 `===` 不同）|<font color="orange">ES6</font>|
|`Object.keys()`|返回包含所有给定对象自身可枚举属性名称的数组|<font color="orange">ES6</font>|
|`Object.values()`|返回给定对象自身可枚举值的数组|<font color="orange">ES6</font>|
|`Object.entries()`|返回给定对象自身可枚举属性的键值对列表|<font color="orange">ES6</font>|
|`Object.fromEntries()`|把键值对列表转换为一个对象|<font color="orange">ES6</font>|
|`Object.prototype.hasOwnProperty()`|判断某个对象是否含有指定的属性，而且此属性非原型链继承的|-|
|`Object.prototype.isPrototypeOf()`|判断指定的对象是否在本对象的原型链中|-|
|`Object.prototype.propertyIsEnumerable()`|判断指定属性是否可枚举|-|
|`Object.prototype.toLocaleString()`|直接调用 `toString()`|-|
|`Object.prototype.toString()`|返回对象的字符串表示|-|
|`Object.prototype.valueOf()`|返回指定对象的原始值|-|



## Array

&emsp;&emsp;所有数据参考自 [MDN Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)。

### 属性

|属性|描述|版本|
|-|-|-|
|`Array.length`|设置或返回数组的长度|-|
|`Array.prototype`|返回返回数组的原型对象|-|
|`Array.prototype.constructor`|返回数组的构造函数|-|

### 方法

|方法|描述|版本|
|-|-|-|
|`Array.isArray()`|判断某个变量是否是一个数组对象|ES5|-|
|`Array.from()`|从类数组对象或者可迭代对象中创建一个新的数组实例|<font color="orange">ES6</font>|
|`Array.of()`|根据一组参数来创建新的数组实例，支持任意的参数数量和类型|<font color="orange">ES6</font>|
|`Array.prototype.concat()`|返回一个由当前数组和其它若干个数组或者若干个非数组值组合而成的新数组|-|
|`Array.prototype.join()`|连接所有数组元素组成一个字符串|-|
|`Array.prototype.reverse()`|颠倒数组中元素的排列顺序|-|
|`Array.prototype.slice()`|抽取当前数组中的一段元素组合成一个新数组|-|
|`Array.prototype.splice()`|在任意的位置给数组添加或删除任意个元素|-|
|`Array.prototype.sort()`|对数组元素进行排序，并返回当前数组|-|
|`Array.prototype.pop()`|删除数组的最后一个元素，并返回这个元素|-|
|`Array.prototype.push()`|在数组的末尾增加一个或多个元素，并返回数组的新长度|-|
|`Array.prototype.shift()`|删除数组的第一个元素，并返回这个元素|-|
|`Array.prototype.unshift()`|在数组的开头增加一个或多个元素，并返回数组的新长度|-|
|`Array.prototype.toLocaleString()`|返回一个由所有数组元素组合而成的本地化后的字符串|-|
|`Array.prototype.toSource()`|返回一个表示当前数组字面量的字符串|-|
|`Array.prototype.toString()`|返回一个由所有数组元素组合而成的字符串|-|
|`Array.prototype.every()`|如果数组中的每个元素都满足测试函数，则返回 `true`，否则返回 `false`|ES5|-|
|`Array.prototype.filter()`|将所有在过滤函数中返回 `true` 的数组元素放进一个新数组中并返回|ES5|-|
|`Array.prototype.forEach()`|为数组中的每个元素执行一次回调函数|ES5|-|
|`Array.prototype.indexOf()`|返回数组中第一个与指定值相等的元素的索引，找不到这样的元素则返回 -1|ES5|-|
|`Array.prototype.lastIndexOf()`|返回数组中最后一个与指定值相等的元素的索引，找不到这样的元素则返回 -1|ES5|-|
|`Array.prototype.map()`|返回一个由回调函数的返回值组成的新数组|ES5|-|
|`Array.prototype.reduce()`|从左到右为每个数组元素执行一次回调函数，把上次回调函数的返回值放在一个暂存器中传给下次回调函数，<br>并返回最后一次回调函数的返回值|ES5|-|
|`Array.prototype.reduceRight()`|从右到左为每个数组元素执行一次回调函数，把上次回调函数的返回值放在一个暂存器中传给下次回调函数，<br>并返回最后一次回调函数的返回值|ES5|-|
|`Array.prototype.some()`|如果数组中至少有一个元素满足测试函数，则返回 `true`，否则返回 `false`|ES5|-|
|`Array.prototype.copyWithin()`|将一段元素序列拷贝到另一段元素序列上，覆盖原有的值|<font color="orange">ES6</font>|
|`Array.prototype.find()`|找到第一个满足测试函数的元素并返回那个元素的值，找不到则返回 `undefined`|<font color="orange">ES6</font>|
|`Array.prototype.findIndex()`|找到第一个满足测试函数的元素并返回那个元素的索引，找不到则返回 -1|<font color="orange">ES6</font>|
|`Array.prototype.fill()`|将数组中指定区间的所有元素的值，都替换成某个固定的值|<font color="orange">ES6</font>|
|`Array.prototype.includes()`|判断当前数组是否包含某指定的值|<font color="orange">ES6</font>|
|`Array.prototype.entries()`|返回一个数组迭代器对象，该迭代器会包含所有数组元素的键值对|<font color="orange">ES6</font>|
|`Array.prototype.keys()`|返回一个数组迭代器对象，该迭代器会包含所有数组元素的键|<font color="orange">ES6</font>|
|`Array.prototype.values()`|返回一个数组迭代器对象，该迭代器会包含所有数组元素的值|<font color="orange">ES6</font>|
|`Array.prototype.flat()`|按照指定的数值对数组进行递归降维|ES10|
|`Array.prototype.flatMap()`|相当于在 `map()` 的结果上降低一层数组嵌套|ES10|
|`Array.prototype[@@iterator]()`|等同于 `values()`|-|

**其中，以下方法会影响原数组：**
+ `Array.prototype.copyWithin()`
+ `Array.prototype.fill()`
+ `Array.prototype.pop()`
+ `Array.prototype.push()`
+ `Array.prototype.reverse()`
+ `Array.prototype.shift()`
+ `Array.prototype.sort()`
+ `Array.prototype.splice()`
+ `Array.prototype.unshift()`



## String

&emsp;&emsp;所有数据参考自 [MDN String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)。

### 属性

|属性|描述|版本|
|-|-|-|
|`String.length`|返回字符串的长度|-|
|`String.prototype`|返回返回字符串的原型对象|-|
|`Array.prototype.constructor`|返回字符串的构造函数|-|

### 方法

|方法|描述|版本|
|-|-|-|
|`String.fromCharCode()`|通过一串 Unicode 创建字符串|-|
|`String.raw()`|通过模板字符串创建字符串|<font color="orange">ES6</font>|
|`String.fromCodePoint()`|通过一串码点创建字符串|<font color="orange">ES6</font>|
|`String.prototype.charCodeAt()`|返回表示给定索引的字符的 Unicode 的值|-|
|`String.prototype.charAt()`|返回特定位置的字符|-|
|`String.prototype.match()`|使用正则表达式与字符串相比较|-|
|`String.prototype.replace()`|被用来在正则表达式和字符串直接比较，然后用新的子串来替换被匹配的子串|-|
|`String.prototype.search()`|对正则表达式和指定字符串进行匹配搜索，返回第一个出现的匹配项的下标|-|
|`String.prototype.concat()`|连接两个字符串文本，并返回一个新的字符串|-|
|`String.prototype.indexOf()`|从字符串中返回首个被发现的给定值的索引值，没有找到则返回 -1|-|
|`String.prototype.lastIndexOf()`|从字符串中返回最后一个被发现的给定值的索引值，没有找到则返回 -1|-|
|`String.prototype.localeCompare()`|返回一个数字表示是否引用字符串在排序中位于比较字符串的前面，后面，或者二者相同|-|
|`String.prototype.slice()`|摘取一个字符串区域，返回一个新的字符串|-|
|`String.prototype.split()`|通过分离字符串成字串，将字符串对象分割成字符串数组|-|
|`String.prototype.substr()`|通过指定字符数返回在指定位置开始的字符串中的字符|-|
|`String.prototype.substring()`|返回在字符串中指定两个下标之间的字符|-|
|`String.prototype.toLocaleLowerCase()`|根据当前区域设置，将符串中的字符转换成小写|-|
|`String.prototype.toLocaleUpperCase()`|根据当前区域设置，将字符串中的字符转换成大写|-|
|`String.prototype.toLowerCase()`|将字符串转换成小写并返回|-|
|`String.prototype.toUpperCase()`|将字符串转换成大写并返回|-|
|`String.prototype.trim()`|去除字符串首尾的空格|-|
|`String.prototype.trimRight()`|去除字符串右侧的空格|-|
|`String.prototype.trimLeft()`|去除字符串左侧的空格|-|
|`String.prototype.valueOf()`|返回特定对象的原始值|-|
|`String.prototype.toSource()`|返回一个对象文字代表着特定的对象|-|
|`String.prototype.toString()`|返回用字符串表示的特定对象|-|
|`String.prototype.codePointAt()`|返回创建字符串的码点|<font color="orange">ES6</font>|
|`String.prototype.includes()`|判断一个字符串里是否包含其他字符串|<font color="orange">ES6</font>|
|`String.prototype.normalize()`|返回调用字符串值的 Unicode 标准化形式|<font color="orange">ES6</font>|
|`String.prototype.startsWith()`|判断字符串的起始位置是否匹配其他字符串中的字符|<font color="orange">ES6</font>|
|`String.prototype.endsWith()`|判断一个字符串的是否以给定字符串结尾|<font color="orange">ES6</font>|
|`String.prototype.repeat()`|返回指定重复次数的由元素组成的字符串对象|<font color="orange">ES6</font>|
|`String.prototype.matchAll()`|返回包含所有匹配正则表达式的结果及分组捕获组的迭代器|<font color="orange">ES6</font>|
|`String.prototype.padEnd()`|在当前字符串尾部填充指定的字符串，直到达到指定的长度|ES8|
|`String.prototype.padStart()`|在当前字符串头部填充指定的字符串，直到达到指定的长度|ES8|
|`String.prototype[@@iterator]()`|返回新的迭代器对象，该对象遍历字符串值的索引位置，将每个索引值作为字符串值返回|-|



## Math

&emsp;&emsp;所有数据参考自 [MDN Math](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math)。

### 属性

|属性|描述|版本|
|-|-|-|
|`Math.E`|欧拉常数，也是自然对数的底数, 约等于 2.718|-|
|`Math.LN10`|2 的自然对数, 约等于0.693|-|
|`Math.LN2`|0 的自然对数, 约等于 2.303|-|
|`Math.LOG10E`|以 2 为底 E 的对数, 约等于 1.443|-|
|`Math.LOG2E`|以 10 为底 E 的对数, 约等于 0.434|-|
|`Math.PI`|圆周率，约等于 3.14159|-|
|`Math.SQRT1_2`|1/2 的平方根, 约等于 0.707|-|
|`Math.SQRT2`|2 的平方根, 约等于 1.414|-|

### 方法

|方法|描述|版本|
|-|-|-|
|`Math.abs(x)`|绝对值|-|
|`Math.acos(x)`|反余弦值|-|
|`Math.acosh(x)`|反双曲余弦值|-|
|`Math.asin(x)`|反正弦值|-|
|`Math.asinh(x)`|反双曲正弦值|-|
|`Math.atan(x)`|反正切值|-|
|`Math.atan2(y, x)`|返回 y/x 的反正切值|-|
|`Math.atanh(y, x)`|反双曲正切值|-|
|`Math.cos(x)`|余弦值|-|
|`Math.cosh(x)`|双曲余弦值|-|
|`Math.sign(x)`|x 的符号函数, 判定 x 是正数, 负数还是 0|-|
|`Math.sin(x)`|正弦值|-|
|`Math.sinh(x)`|双曲正弦值|-|
|`Math.sqrt(x)`|平方根|-|
|`Math.tan(x)`|正切值|-|
|`Math.tanh(x)`|双曲正切值|-|
|`Math.cbrt(x)`|立方根|-|
|`Math.clz32(x)`|32 位整数的前导零的数量|-|
|`Math.exp(x)`|E 的 x 次幂|-|
|`Math.expm1(x)`|exp(x)-1|-|
|`Math.fround(x)`|数字的最接近的单精度浮点型表示|-|
|`Math.hypot(x[, y[, ...]])`|参数平方和的平方根|-|
|`Math.imul()`|32 位整数乘法的结果|-|
|`Math.log()`|自然对数(ln)|-|
|`Math.log10(x)`|以 10 为底数的x的对数|-|
|`Math.log1p(x)`|1 加上一个数字的的自然对数|-|
|`Math.log2(x)`|以 2 为底数的x的对数|-|
|`Math.ceil(x)`|上取整|-|
|`Math.floor(x)`|下取整|-|
|`Math.round(x)`|四舍五入后的整数|-|
|`Math.max(x[, y[, ...]])`|多个数值中最大值|-|
|`Math.min(x[, y[, ...]])`|多个数值中最小值|-|
|`Math.pow(x, y)`|x 的 y 次幂|-|
|`Math.random()`|0 ~ 1 的伪随机数|-|
|`Math.trunc(x)`|x 的整数部分|-|



## Number

&emsp;&emsp;所有数据参考自 [MDN Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)。

### 属性

|属性|描述|版本|
|-|-|-|
|`Number.MAX_SAFE_INTEGER`|`JavaScript` 中最大的安全整数 (253 - 1)|-|
|`Number.MAX_VALUE`|能表示的最大正数|-|
|`Number.MIN_SAFE_INTEGER`|`JavaScript` 中最小的安全整数 (-(253 - 1))|-|
|`Number.MIN_VALUE`|能表示的最小正数即最接近 0 的正数|-|
|`Number.NaN`|特殊的 “非数字” 值|-|
|`Number.NEGATIVE_INFINITY`|特殊的负无穷大值，在溢出时返回该值|-|
|`Number.POSITIVE_INFINITY`|特殊的正无穷大值，在溢出时返回该值|-|
|`Number.prototype`|返回 `Number` 的原型对象|-|
|`Number.prototype.constructor`|返回 `Number` 的构造函数|-|
|`Number.EPSILON`|两个可表示(representable)数之间的最小间隔|<font color="orange">ES6</font>|

### 方法

|方法|描述|版本|
|-|-|-|
|`Number.isFinite()`|确定传递的值类型及本身是否是有限数|<font color="orange">ES6</font>|
|`Number.isInteger()`|确定传递的值类型是否是整数|<font color="orange">ES6</font>|
|`Number.isNaN()`|确定传递的值是否是 `NaN`|<font color="orange">ES6</font>|
|`Number.isSafeInteger()`|确定传递的值是否为安全整数 ( -(253 - 1) 至 253 - 1之间)|<font color="orange">ES6</font>|
|`Number.parseFloat()`|和全局的 `parseFloat()` 一样|<font color="orange">ES6</font>|
|`Number.parseInt()`|和全局的 `parseInt()` 一样|<font color="orange">ES6</font>|
|`Number.prototype.toExponential()`|返回数值的指数表示法的字符串|-|
|`Number.prototype.toFixed()`|返回保留指定的小数位数(舍弃剩下，不是四舍五入)的字符串|-|
|`Number.prototype.toLocaleString()`|返回本地化后的字符串|-|
|`Number.prototype.toPrecision()`|返回保留指定有效数字(四舍五入)的字符串|-|
|`Number.prototype.toSource()`|返回一个对象文字代表着特定的对象|-|
|`Number.prototype.toString()`|返回用字符串表示的特定对象|-|
|`Number.prototype.valueOf()`|返回特定对象的原始值|-|



## Boolean

&emsp;&emsp;所有数据参考自 [MDN Boolean](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean)。

### 属性

|属性|描述|版本|
|-|-|-|
|`Boolean.length`|值为 1|-|
|`Boolean.prototype`|返回 `Boolean` 的原型对象|-|
|`Boolean.prototype.constructor`|返回 `Boolean` 的构造函数|-|

### 方法

|方法|描述|版本|
|-|-|-|
|`Boolean.prototype.toSource()`|返回包含 `Boolean` 对象源码的字符串|-|
|`Boolean.prototype.toString()`|根据对象的值来返回一个字符串：`true` 或 `false`|-|
|`Boolean.prototype.valueOf()`|返回 `Boolean` 对象的原始值|-|



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



## RegExp

&emsp;&emsp;所有数据参考自 [MDN RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)。

### 属性

|属性|描述|版本|
|-|-|-|
|`RegExp.length`|值为 2|-|
|`RegExp.$1-$9`|正则表达式捕获的前九个分组|非标准|
|`RegExp.input ($_)`|正则表达式所测试的完整字符串|非标准|
|`RegExp.lastMatch ($&)`|最后匹配到的字符串|非标准|
|`RegExp.lastParen ($+)`|匹配到的最后一个子串|非标准|
|``RegExp.leftContext ($`)``|含有最新匹配的左侧子串|非标准|
|`RegExp.rightContext ($')`|含有最新匹配的右侧子串|非标准|
|`RegExp.lastIndex`|读取/设置下一次匹配的起始索引|-|
|`RegExp.prototype`|返回 `RegExp` 的原型对象|-|
|`RegExp.prototype.constructor`|返回 `RegExp` 的构造函数|-|
|`RegExp.prototype.dotAll`|表明是否在正则表达式中使用 `s` 修饰符|-|
|`RegExp.prototype.flags`|返回当前正则表达式对象的标志组成的字符串|-|
|`RegExp.prototype.global`|表明是否开启全局匹配|-|
|`RegExp.prototype.ignoreCase`|表明是否忽略字符的大小写|-|
|`RegExp.prototype.multiline`|表明是否开启了多行模式匹配（影响 ^ 和 $ 的行为）|-|
|`RegExp.prototype.source`|当前正则表达式的字符串形式（不包括前后的反斜杠）|-|
|`RegExp.prototype.unicode`|表明正则表达式是否带有 `u` 标志|<font color="orange">ES6</font>|
|`RegExp.prototype.sticky`|表明是否开启粘滞匹配|<font color="orange">ES6</font>|
|`get RegExp[@@species]`|返回 `RegExp` 的构造器|<font color="orange">ES6</font>|

### 方法

|方法|描述|版本|
|-|-|-|
|`RegExp.prototype.exec()`|在目标字符串中执行一次正则匹配操作||-|
|`RegExp.prototype.test()`|测试当前正则是否能匹配目标字符串||-|
|`RegExp.prototype.toSource()`|返回正则对象的字面量形式的字符串||-|
|`RegExp.prototype.toString()`|返回正则对象的字面量形式的字符串||-|
|`RegExp.prototype[@@matchAll]()`|等同于 `String.prototype.matchAll()`|<font color="orange">ES6</font>|
|`RegExp.prototype[@@match]()`|等同于 `String.prototype.match()`|<font color="orange">ES6</font>|
|`RegExp.prototype[@@replace]()`|等同于 `String.prototype.replace()`|<font color="orange">ES6</font>|
|`RegExp.prototype[@@search]()`|等同于 `String.prototype.search()`|<font color="orange">ES6</font>|
|`RegExp.prototype[@@split]()`|等同于 `String.prototype.split()`|<font color="orange">ES6</font>|



## Global

&emsp;&emsp;所有数据参考自 [MDN Global](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)。

### 属性

|属性|描述|版本|
|-|-|-|
|`Infinity`|一个数值，表示无穷大|-|
|`NaN`|表示不是一个数字|-|
|`undefined`|表示原始值 `undefined`|-|
|`null`|特指对象的值未设置|-|
|`globalThis`|获取全局对象|提案 Stage 3|-|

### 方法

|方法|描述|版本|
|-|-|-|
|`eval()`|解析字符串并执行|-|
|`uneval()`|创建一个代表对象的源代码的字符串|-|
|`isFinite()`|判断值是否是有穷大的数，检测前会进行类型转换|-|
|`isNaN()`|判断值是否是 NaN，检测前会进行类型转换|-|
|`parseFloat()`|解析字符串并返回一个浮点数|-|
|`parseInt()`|解析字符串并返回一个整数|-|
|`decodeURI()`|解码一个编码的 URI|-|
|`decodeURIComponent()`|解码一个编码的 URI 组件|-|
|`encodeURI()`|把字符串编码为 URI|-|
|`encodeURIComponent()`|把字符串编码为 URI 组件|-|
|`escape()`|对字符串进行编码|-|
|`unescape()`|对 `escape()` 编码的字符串进行解码|-|