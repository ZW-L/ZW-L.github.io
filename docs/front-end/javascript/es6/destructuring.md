## 数组解构

+ 按照元素顺序进行解构赋值：

```js
let [foo, bar, baz] = [1, 2, 3]
foo // 1
bar // 2
baz // 3
```

+ 使用连续的 `,` 避开不需要的元素

```js
let [ , , third] = ['foo', 'bar', 'baz']
third // baz

let [x, , y] = [1, 2, 3]
x // 1
y // 3
```

+ 使用默认值，当取不到任何值(或取到的值为 undefined)时自动使用默认值

```js
let [a, b = 1] = [12, false]
a // 12
b // false

let [a, b = 1] = [12, undefined]
a // 12
b // 1
```

+ 使用剩余参数操作符(`...`)取得剩余参数，但是必须是最后一个参数

```js
let [head, ...tail] = [1, 2, 3, 4]
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a']
x // a
y // undefined
z // []
```

+ 数组解构时表达式右边必须具备 `Iterator` 接口的结构(如数组、字符串、`Set`、`Generator`)，否则会报错

```js
// 以下均报错
let [ foo ] = 1
let [ foo ] = false
let [ foo ] = NaN
let [ foo ] = undefined
let [ foo ] = null
let [ foo ] = {}
```



## 对象解构

+ 没有顺序，只能按照属性名进行解构赋值：

```js
let { foo, bar } = { foo: 'aaa', bar: 'bbb' }
foo // "aaa"
bar // "bbb"

let { baz } = { foo: 'aaa', bar: 'bbb' }
baz // undefined
```

+ 可以给取出属性后赋值给不同名字的变量，格式为 `a:b`，即将 a 取出赋值给 b 变量：

```js
let { foo: baz } = { foo: 'aaa', bar: 'bbb' }
baz // "aaa"
```

+ 能够取得原型上的属性：

```js
const obj1 = {}
const obj2 = { foo: 'bar' }
Object.setPrototypeOf(obj1, obj2)

const { foo } = obj1
foo // bar
```


## 字符串解构

+ 字符串实现了 `Iterator` 接口，它的解构赋值类似数组：

```js
const [a, b, c, d, e] = 'hello'
a // "h"
b // "e"
c // "l"
d // "l"
e // "o"
```

+ 还可以解构字符串的 `length` 属性：
```js
let { length : len } = 'hello'
len // 5
```


## 基本类型解构

+ `Number` 和 `Boolean`: 类似装箱操作，转化为对象后解构

```js
let { toString: s } = 123
s === Number.prototype.toString // true

let { toString: s } = true
s === Boolean.prototype.toString // true
```

+ `null` 和 `undefined`: 无法解构

```js
let { prop: x } = undefined // TypeError
let { prop: y } = null // TypeError
```

## 函数参数解构

+ 函数参数使用解构:

```js
function add([x, y]){
  return x + y
}
add([1, 2]) // 3

[[1, 2], [3, 4]].map(([a, b]) => a + b)
// [ 3, 7 ]
```

+ 函数使用默认参数时的解构:

```js
function move({x = 0, y = 0} = {}) {
  return [x, y]
}

move({ x: 3, y: 8 }) // [3, 8]
move({ x: 3 }) // [3, 0]
move({}) // [0, 0]
move() // [0, 0]
```


## 应用

+ 快捷交换变量值

```js
let x = 1
let y = 2

[x, y] = [y, x]
```

+ 快捷获取函数返回的多个值

```js
function example() {
  return {
    foo: 1,
    bar: 2
  }
}

let { foo, bar } = example()
```

+ 快捷提取模块的属性

```js
const { SourceMapConsumer, SourceNode } = require('source-map')
```

+ 提取 JSON 数据

```js
let jsonData = {
  id: 42,
  status: 'OK',
  data: [867, 5309]
}

let { id, status, data: number } = jsonData
console.log(id, status, number) // 42, 'OK', [867, 5309]
```

+ 函数默认值

```js
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () { /* ... */ },
  cache = true,
  complete = function () { /* ... */ },
  crossDomain = false,
  global = true,
  // ... more config
} = {}) {
  // ... do stuff
}
```