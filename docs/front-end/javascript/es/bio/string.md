## 简介

+ 参考自 [MDN String](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String)。




## 属性

|属性|描述|版本|
|-|-|-|
|`String.length`|返回字符串的长度|-|
|`String.prototype`|返回返回字符串的原型对象|-|
|`Array.prototype.constructor`|返回字符串的构造函数|-|




## 方法

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




