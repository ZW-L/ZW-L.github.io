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



