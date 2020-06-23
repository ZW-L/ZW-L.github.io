## 简介

+ 参考 [MDN Global](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects)




## 属性

|属性|描述|版本|
|-|-|-|
|`null`|特指对象的值未设置|-|
|`undefined`|表示值未初始化|-|
|`NaN`|数值，表示无效数字|-|
|`Infinity`|数值，表示无穷大|-|
|`globalThis`|获取全局对象(浏览器为 `window`，node 环境下为全局 `this`)|Stage 3|




## 方法

|方法|描述|版本|
|-|-|-|
|`eval()`|解析字符串并执行|-|
|`uneval()`|创建一个代表对象的源代码的字符串|<Badge type="warning">非标准</Badge>|
|`encodeURI()`|把字符串编码为 URI|-|
|`encodeURIComponent()`|把字符串编码为 URI（会对特殊字符编码）|-|
|`decodeURI()`|解码一个编码的 URI|-|
|`decodeURIComponent()`|解码一个编码的 URI（会对特殊字符解码）|-|
|`isFinite()`|判断值是否是有穷大的数，检测前会进行类型转换|-|
|`isNaN()`|判断值是否是 NaN，检测前会进行类型转换|-|
|`parseFloat()`|解析字符串并返回一个浮点数|-|
|`parseInt()`|解析字符串并返回一个整数|-|
|`escape()`|对字符串进行编码|<Badge type="warning">废弃</Badge>|
|`unescape()`|对 `escape()` 编码的字符串进行解码|<Badge type="warning">废弃</Badge>|


::: tip 备注
+ `isFinite()`/`isNaN()`/`parseFloat()`/`parseInt()` 在 ES6 移入 `Number` 中
+ `escape()`/`unescape()` 不再建议使用，而是使用 `encodeURI()`/`decodeURI()` 等
+ `encodeURI()` 不会编码一些特殊字符(`:`/`/`/`?`/`&`/`=`/`-`/`#` 等)
:::