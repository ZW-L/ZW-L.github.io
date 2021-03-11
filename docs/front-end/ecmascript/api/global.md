---
sidebarDepth: 2
---


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
|`parseFloat()`|将参数解析为字符串并返回一个浮点数|-|
|`parseInt()`|将参数解析为字符串并返回一个整数|-|
|`escape()`|对字符串进行编码|<Badge type="warning">废弃</Badge>|
|`unescape()`|对 `escape()` 编码的字符串进行解码|<Badge type="warning">废弃</Badge>|



::: tip 备注
+ `isFinite()` | `isNaN()` | `parseFloat()` | `parseInt()` 在 ES6 移入 `Number` 中
+ `escape()` | `unescape()` 不再建议使用，而是使用 `encodeURI()` | `decodeURI()`
+ `encodeURI()` 不会编码一些特殊字符(`:`/`/`/`?`/`&`/`=`/`-`/`#` 等)
:::



### parseInt

+ `parseInt(str: any, radix?: number): number`
  + str: 不能转换为数值时，都会返回 `NaN`
  + radix: 有效取值范围是 2~36，当其取值为 `undefined`/0/未指定 时，会有一些默认值的情况
    + 若 str 是 `0x`/`0X` 开头，默认为 16
    + 若 str 是 `0` 开头，默认为 8 或 10(ES5 澄清应该为 10)
    + str 以其他值开头，都默认为 10

+ 案例：
```js
// 以下都会以 10 为基数，因此结果均为 1
parseInt('1', undefined)
parseInt('1', 0)
parseInt('1')

// 不在范围内的 radix，视为无效，结果为 NaN
parseInt('1', 1)    // NaN
parseInt('1', 40)   // NaN
```

+ 其他案例：
```js
/** map() 包含三个参数，第二个参数为元素下标，因此传入 parseInt 的 radix 分别为 0,1,2
 * parseInt('1', 0) -> 默认使用 10 作 radix，结果为 1
 * parseInt('2', 1) -> radix=1 为无效值，返回 NaN
 * parseInt('3', 2) -> radix=2，但 3 为无效的二进制，返回 NaN
 * */
['1', '2', '3'].map(parseInt)   // [1, NaN, NaN]


/** unary() 高阶函数内返回的函数只接受 1 个参数
 * 1. 通过 parseInt 返回一个新函数 parse 时，实际上不传入 radix，因此使用默认值 10
 * 2. 而 parseInt 只会返回整数
 * parseInt('1.1', 10) -> 1
 * parseInt('2', 10) -> 2
 * parseInt('0.3', 10) -> 0
 */
let unary = fn => val => fn(val)
let parse = unary(parseInt)
['1.1', '2', '0.3'].map(parse)  // [1, 2, 0]
```



::: tip 使用建议：
+ 必须显式指定 radix
+ 由于结果可能为 `NaN`，因此使用前，最好通过 `isNaN()` 判断
:::