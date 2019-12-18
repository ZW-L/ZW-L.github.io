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



