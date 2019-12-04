## 介绍

+ 数组解构赋值
+ 对象解构赋值
+ 字符串解构赋值 
+ 数值和布尔值解构赋值
+ 函数参数解构赋值
+ 圆括号问题


## 数组解构赋值

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

+ 使用默认值，当取不到任何值时自动使用默认值

```js
let [a, b = 1] = [12, false]
a // 12
b // false
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

::: warning 注意：
+ 总的来说，表达式右边必须具备 `Iterator` 接口的结构(如数组、字符串、`Set`、`Generator`)，否则会报错
+ 取不到值得情况下返回 `undefined`
:::



## 对象解构赋值

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
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
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


## 字符串解构赋值

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


## 数值和布尔值解构赋值



## 函数参数解构赋值



## 圆括号问题



## 应用

