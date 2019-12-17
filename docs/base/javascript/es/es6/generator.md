---
sidebarDepth: 2
---

## 简介

### 介绍

+ `Generator` 函数是一种异步编程解决方案
+ 可以理解为一个状态机，封装了多个内部状态
+ 也可以理解为一个 `Iterator` 的生成器，可以生成实现了 `Iterator` 接口的数据结构

### 定义

以下定义的语法都是合法的，一般使用第三种：

```js
function * foo(x, y) { ··· }
function *foo(x, y) { ··· }
function* foo(x, y) { ··· }
function*foo(x, y) { ··· }
```

### yield 和 next()

+ `Generator` 函数调用后会返回一个遍历器对象
+ 在 `Generator` 函数内部用关键字 `yield` 定义状态
+ 用 `next()` 或 `for...of` 获得相应的状态

```js
const fibonacciGenerator = function* () {
  let [prev, next] = [1, 1]
  for(;;) {
    yield prev;
    [prev, next] = [next, prev + next]
  }
}

const res = []
for (const i of fibonacciGenerator()) {
  if (i > 100) {
    break
  }
  res.push(i)
}
console.log(res) // [ 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]
```

::: tip 说明：
+ `yield` 表达式只能用在 `Generator` 函数里面
+ `yield` 表达式语句结尾最好加上分号，避免出现意料之外的结果
+ `yield` 表达式用在另一个表达式之中，必须放在圆括号里面
+ `yield` 表达式用作函数参数或放在赋值表达式的右边，可以不加括号
:::


### 与 Iterator 的关系

&emsp;&emsp;将 `Generator` 函数用作数据类型的 `[Symbol.iterator]` 属性，将创建(修改) `Iterator` 接口:

```js
const obj = {
  /* [Symbol.iterator]: function* () {
    yield 'hello'
    yield 'world'
  } */
  // 简写为
  * [Symbol.iterator]() {
    yield 'hello'
    yield 'world'
  }
};

for (const i of obj) {
  console.log(i)
}
```



## 方法

+ `next()`: 
+ `return()`: 
+ `throw()`: 

### next()

+ `next()` 方法会获得 `yield` 的值
+ 也可以传入参数，该参数会作为上一个 `yield` 的结果，用于下一个 `yield` 的运算

```js
function* f(x) {
  const y = yield(x + 10);
  const z = yield(y / 2);
  return (x + y+ z);
}

const a = f(10)  // x = 10
console.log(a.next().value)  // x = 10, y = 20，打印 20
console.log(a.next(50).value)  // x = 10, y = 50(覆盖y), z = 25，打印 25
console.log(a.next(30).value)  // x = 10, y = 50, z = 30(覆盖z)，打印 90
```

::: tip 说明：
+ 第一个 `next()` 不能传入参数，此时 `x = 10, y = 20`，打印 20
+ 第二个 `next()` 传入 50，覆盖了 `yield(x + 10)`，从而 y 获得值 50，使得此时 `x = 10, y = 50, z = 25`，打印 25
+ 第三个 `next()` 传入 30，覆盖了 `yield(y / 2)`，从而 z 获得值 30，使得此时 `x = 10, y = 50, z = 30`，打印 90
:::


### return()

+ `return()` 方法会返回指定的值，并且终止遍历 `Generator` 函数

```js
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}

var g = gen();

g.next()        // { value: 1, done: false }
g.return('foo') // { value: "foo", done: true }
g.next() 
```

::: tip 说明：
+ `return()` 不附加参数时，返回的对象的 `value` 值为 `undefined`
+ `return()` 调用会在 `Generator` 函数中使用 `try...finally` 块时有所延迟
:::


### throw()

+ `throw()` 方法可以在函数体外抛出错误，然后在 `Generator` 函数体内捕获

```js
var g = function* () {
  try {
    yield;
  } catch (e) {
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}
// 内部捕获 a
// 外部捕获 b
```

::: tip 说明：
+ 如果 `Generator` 函数内部没有部署 `try...catch` 代码块，那么 `throw` 方法抛出的错误，将被外部 `try...catch` 代码块捕获
+ 如果 `Generator` 函数内部和外部都没有部署 `try...catch` 代码块，那么程序将报错，直接中断执行
+ `throw` 方法被捕获以后，会附带执行下一条 `yield` 表达式。也就是说，会附带执行一次 next 方法
+ 一旦 `Generator` 执行过程中抛出错误且没有被内部捕获，就不会再执行下去
:::



## 其他

### yield*

+ `yield*` 表达式用来在一个 `Generator` 函数里面执行另一个 `Generator` 函数(这样可以很方便地进行很多的递归操作)

```js
// 1.执行另一个生成器
function* foo() {
  yield 'hello'
  yield 'world'
}
function* bar(foo) {
  yield 'start'
  yield* foo()
  yield 'end'
}
console.log([...bar(foo)])  // [ 'start', 'hello', 'world', 'end' ]

// 2.执行一个迭代器
function* baz() {
  yield* ['a', 'b', 'c']
}
console.log([...baz()]) // ['a', 'b', 'c']
```

+ 当 `Generator` 中有 `return` 时，可以使用变量引用再 `yield` 出返回的值

```js
function* foo() {
  yield 'hello'
  yield 'world'
  return 'Awesome Javascript!'
}

function* bar(foo) {
  yield 'start'
  const ret = yield* foo()  // 获取 foo* () 返回的值
  yield ret
  yield 'end'
}

console.log([...bar(foo)])  // [ 'start', 'hello', 'world', 'Awesome Javascript!', 'end' ]
```



### this

+ `Generator` 不能用作构造函数，但通过一定的包装可以实现：

```js
function* gen() {
  this.a = 1;
  yield this.b = 2;
  yield this.c = 3;
}

function F() {
  return gen.call(gen.prototype);
}

var f = new F();

f.next();  // Object {value: 2, done: false}
f.next();  // Object {value: 3, done: false}
f.next();  // Object {value: undefined, done: true}

f.a // 1
f.b // 2
f.c // 3
```



## 应用

### 异步操作的同步化表达

&emsp;&emsp;可以将回调函数的嵌套改写成同步的形式。

+ 逐行读取文件：
```js
function* numbers() {
  let file = new FileReader("numbers.txt")
  try {
    while(!file.eof) {
      yield parseInt(file.readLine(), 10)
    }
  } finally {
    file.close()
  }
}
```

### 控制流管理

&emsp;&emsp;逐步执行任务，当一个任务里面还有步骤，递归执行步骤。

+ 一个多步骤任务的执行：

```js
let jobs = [job1, job2, job3]

function* iterateJobs(jobs){
  for (let i=0; i< jobs.length; i++){
    let job = jobs[i]  // 依次执行任务
    yield* iterateSteps(job.steps)  // 每个任务里面还有很多步骤
  }
}

for (let step of iterateJobs(jobs)){
  console.log(step.id)
}
```

### 部署 Iterator 接口

&emsp;&emsp;可以为对象部署 `Iterator` 接口或修改具备 `Iterator` 接口的数据结构的默认行为。

+ 部署 `Iterator` 接口：

```js
const obj = { name: 'Alice', age: 24 }
obj[Symbol.iterator] = function* () {
  const keys = Object.keys(this)
  for (let i = 0; i < keys.length; i++) {
    yield { key: keys[i], value: obj[keys[i]]}
  }
}

for (const i of obj) {
  console.log(i)
}
// { key: 'name', value: 'Alice' }
// { key: 'age', value: 24 }
```

+ 修改数组的 `Iterator` 接口：

```js
function* makeArrayGenerator(arr) {
  for (let i=0; i<arr.length; i++) {
    yield 'step-' + arr[i];
  }
}

for (const i of makeArrayGenerator([1, 2, 3])) {
  console.log(i)
}
// step-1
// step-2
// step-3
```