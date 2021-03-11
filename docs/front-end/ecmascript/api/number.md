## 简介

+ 参考 [MDN Number](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number)




## 属性

+ 它们都是在 `Number` 上定义的

|属性/方法|描述|版本|
|-|-|-|
|`prototype`|返回 `Number` 的原型对象|-|
|`MIN_VALUE`|最小正数（5e-324）|-|
|`MAX_VALUE`|最大正数（1.7976931348623157e+308）|-|
|`MIN_SAFE_INTEGER`|最小的安全整数 (-(2^53 - 1))|-|
|`MAX_SAFE_INTEGER`|最大的安全整数 (2^53 - 1)|-|
|`NaN`|`NaN`|-|
|`NEGATIVE_INFINITY`|`Infinity`|-|
|`POSITIVE_INFINITY`|`-Infinity`|-|
|`EPSILON`|两个可表示数之间的最小间隔（2.220446049250313e-16）|<Badge>6</Badge>|
|`isInteger()`|判断一个数字是否为整数|<Badge>6</Badge>|
|`isSafeInteger()`|判断一个数字是否为安全数字|<Badge>6</Badge>|
|`isFinite()`|判断值是否是有穷大的数，检测前会进行类型转换|<Badge>6</Badge>|
|`isNaN()`|判断值是否是 NaN，检测前会进行类型转换|<Badge>6</Badge>|
|`parseFloat()`|解析字符串并返回一个浮点数|<Badge>6</Badge>|
|`parseInt()`|解析字符串并返回一个整数|<Badge>6</Badge>|


::: tip 备注
+ 安全数字：-(2^53-1)~(2^53-1)
+ `isFinite()`/`isNaN()`/`parseFloat()`/`parseInt()` 都是全局属性，在 ES6 移入 `Number` 中
:::




## 原型

+ 它们都是在 `Number.prototype` 上定义的

|属性/方法|描述|版本|
|-|-|-|
|`constructor`|返回 `Number` 的构造函数|-|
|`toExponential()`|返回数值的指数表示法的字符串|-|
|`toPrecision()`|返回保留指定位数有效数字(四舍五入)的字符串|-|
|`toFixed()`|返回保留指定小数位数(舍弃剩下，不是四舍五入)的字符串|-|
|`toLocaleString()`|返回本地化后的字符串|-|
|`toString()`|返回用字符串表示的特定对象|-|
|`valueOf()`|返回特定对象的原始值|-|