## 简介

+ 参考自 [MDN Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)。




## 属性

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




## 方法

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


