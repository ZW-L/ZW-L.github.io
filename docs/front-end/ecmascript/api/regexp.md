## 简介

+ 参考 [MDN RegExp](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp)



## 构造函数

+ 使用 new 操作符
```js
new RegExp('ab+c', 'i')
new RegExp(/ab+c/, 'i')
```

+ 使用字面量
```js
const regex = /ab+c/i
```



## 属性

+ 它们都是在 `RegExp` 上定义的

|属性|描述|版本|
|-|-|-|
|`name`|值为 `'RegExp'`|-|
|`length`|值为 `2`|-|
|`lastIndex`|读取/设置下一次匹配的起始索引|-|
|`prototype`|返回 `RegExp` 的原型对象|-|
|`$1-$9`|正则表达式捕获的前九个分组|<Badge type="warning">非标准</Badge>|
|`input ($_)`|正则表达式所测试的完整字符串|<Badge type="warning">非标准</Badge>|
|`lastMatch ($&)`|最后匹配到的字符串|<Badge type="warning">非标准</Badge>|
|`lastParen ($+)`|匹配到的最后一个子串|<Badge type="warning">非标准</Badge>|
|``leftContext ($`)``|含有最新匹配的左侧子串|<Badge type="warning">非标准</Badge>|
|`rightContext ($')`|含有最新匹配的右侧子串|<Badge type="warning">非标准</Badge>|
|`get RegExp[@@species]`|返回 `RegExp` 的构造器|<Badge>6</Badge>|




## 方法

+ 它们都是在 `RegExp.prototype` 上定义的

|方法|描述|版本|
|-|-|-|
|`constructor`|返回 `RegExp` 的构造函数|-|
|`flags`|返回当前正则表达式对象的标志组成的字符串|-|
|`global`|表明是否开启全局匹配|-|
|`ignoreCase`|表明是否忽略字符的大小写|-|
|`multiline`|表明是否开启了多行模式匹配（影响 ^ 和 $ 的行为）|-|
|`source`|当前正则表达式的字符串形式（不包括前后的反斜杠）|-|
|`sticky`|表明是否开启粘滞匹配|<Badge>6</Badge>|
|`dotAll`|表明是否在正则表达式中使用 `s` 修饰符|<Badge>6</Badge>|
|`unicode`|表明正则表达式是否带有 `u` 标志|<Badge>6</Badge>|
|`toString()`|返回正则对象的字面量形式的字符串||-|
|`compile()`|||-|
|`exec()`|在目标字符串中执行一次正则匹配操作||-|
|`test()`|测试当前正则是否能匹配目标字符串||-|
|`[Symbol.match]()`|等同于 `String.prototype.match()`|<Badge>6</Badge>|
|`[Symbol.matchAll]()`|等同于 `String.prototype.matchAll()`|<Badge>6</Badge>|
|`[Symbol.replace]()`|等同于 `String.prototype.replace()`|<Badge>6</Badge>|
|`[Symbol.search]()`|等同于 `String.prototype.search()`|<Badge>6</Badge>|
|`[Symbol.split]()`|等同于 `String.prototype.split()`|<Badge>6</Badge>|