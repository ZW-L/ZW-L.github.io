## 简介

+ 参考 [MDN Array](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)


## 构造函数

+ 对比
```js
let arr

// 1.字面量
arr = [1, 2, 3, 4, 5]
console.log(arr)    // [ 1, 2, 3, 4, 5 ]

// 2.构造函数，返回数组
arr = new Array(1, 2, 3, 4, 5)
console.log(arr)    // [ 1, 2, 3, 4, 5 ]

// 3.构造函数，返回值为 undefind 的数组
arr = new Array(5)
console.log(arr)    // [ <5 empty items> ]
```




## 属性

+ 它们都是在 `Array` 上定义的

|属性/方法|描述|版本|
|-|-|-|
|`name`|值为 `'Array'`|-|
|`length`|值为 `1`|-|
|`prototype`|返回返回数组的原型对象|-|
|`isArray()`|判断某个变量是否是一个数组对象|5|-|
|`from()`|从类数组对象或者可迭代对象中创建一个新的数组实例|<Badge>6</Badge>|
|`of()`|根据一组参数来创建新的数组实例，支持任意的参数数量和类型|<Badge>6</Badge>|




## 原型

+ 它们都是在 `Array.prototype` 上定义的

|属性/方法|描述|版本|
|-|-|-|
|`length`|设置或返回数组的长度|-|
|`constructor`|返回数组的构造函数|-|
|<Badge>数组操作</Badge>|||
|`pop()`|删除数组的最后一个元素，并返回这个元素（**影响原数组**）|-|
|`shift()`|删除数组的第一个元素，并返回这个元素（**影响原数组**）|-|
|`unshift()`|在数组的开头增加一个或多个元素，并返回数组的新长度（**影响原数组**）|-|
|`push()`|在数组的末尾增加一个或多个元素，并返回数组的新长度（**影响原数组**）|-|
|`reverse()`|颠倒数组中元素的排列顺序（**影响原数组**）|-|
|`sort()`|对数组元素进行排序，并返回当前数组（**影响原数组**）|-|
|`concat()`|返回当前数组和其它若干个数组或者若干个非数组值组合而成的新数组|-|
|`join()`|连接所有数组元素组成一个字符串|-|
|`slice()`|抽取当前数组中的一段元素组合成一个新数组|-|
|`splice()`|在任意的位置给数组添加或删除任意个元素（**影响原数组**）|-|
|`copyWithin()`|将一段元素序列拷贝到另一段元素序列上，覆盖原有的值（**影响原数组**）|<Badge>6</Badge>|
|`fill()`|将数组中指定区间的所有元素的值，都替换成某个固定的值（**影响原数组**）|<Badge>6</Badge>|
|`flat()`|按照指定的数值对数组进行递归降维|<Badge>10</Badge>|
|`flatMap()`|相当于在 `map()` 的结果上降低一层数组嵌套|<Badge>10</Badge>|
|<Badge>遍历</Badge>|第一个参数可以为回调函数||
|`filter()`|用回调函数筛选元素并返回新数组|5|
|`forEach()`|为数组的每个元素执行一次回调函数（**影响原数组**）|5|
|`map()`|为数组的每个元素执行一次回调函数，并返回新数组|5|
|`reduce()`|以回调函数对数组进行迭代，返回最终值|5|
|`reduceRight()`|从尾部开始的 `reduce()`|5|
|`every()`|判断数组中是否每个元素都通过检测|5|
|`some()`|判断数组中是否有元素通过检测|5|
|`find()`|返回第一个满足测试函数的数组元素的值，找不到则返回 `undefined`|<Badge>6</Badge>|
|`findIndex()`|返回第一个满足测试函数的元素的索引，找不到则返回 `-1`|<Badge>6</Badge>|
|<Badge>其他</Badge>|||
|`indexOf()`|返回数组中第一个与指定值相等的元素的索引，找不到则返回 -1|5|
|`lastIndexOf()`|返回数组中最后一个与指定值相等的元素的索引，找不到则返回 -1|5|
|`includes()`|判断当前数组是否包含某指定的值|<Badge>6</Badge>|
|`toString()`|返回一个由所有数组元素组合而成的字符串|-|
|`toLocaleString()`|返回一个由所有数组元素组合而成的本地化后的字符串|-|
|`keys()`|返回一个包含所有数组元素的键的迭代器对象|<Badge>6</Badge>|
|`values()`|返回一个包含所有数组元素的值的迭代器对象|<Badge>6</Badge>|
|`entries()`|返回一个包含所有数组元素的键值对的迭代器对象|<Badge>6</Badge>|
|`[Symbol.iterator]()`|等同于 `values()`|<Badge>6</Badge>|


::: tip 备注
+ `length` 是可以用来改变数组长度的
```js
const arr = [1, 2, 3, 4, 5]

arr.length = 3
console.log(arr)  // [1, 2, 3]

arr.length = 5
console.log(arr)  // [ 1, 2, 3, <2 empty items> ]
```
:::