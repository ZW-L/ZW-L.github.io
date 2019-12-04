## 介绍

+ `let` 用于声明变量，`const` 用于声明常量，取代以前的 `var` 声明


## let/const 与 var

+ **块级作用域**

```js
// var 声明
for (var i = 0; i < 10; i++) {}
console.log(i) // 10

// let 声明
for (let i = 0; i < 10; i++) {}
console.log(i) // ReferenceError: i is not defined
```

+ **暂时性死区(TDZ)**: 如果区块中存在 `let` 和 `const` 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域，凡是在声明之前就使用这些变量都会报 `ReferenceError` 错误

```js
if (true) {
  // TDZ开始
  tmp = 'abc' // ReferenceError
  console.log(tmp) // ReferenceError

  let tmp // TDZ结束
  console.log(tmp) // undefined

  tmp = 123
  console.log(tmp) // 123
}
```

+ **不存在变量提升**

```js
// var 声明
console.log(foo) // undefined
var foo = 2

// let 声明
console.log(bar) // ReferenceError: bar is not defined
let bar = 2
```

+ **不允许重复声明**

```js
// var 声明
var a = 10
var a = 1
console.log(a) // 1

// let 声明
let b = 10
let b = 1 // SyntaxError: Identifier 'b' has already been declared
console.log(b)
```

+ **全局声明的属性不再挂载在顶层对象**

```js
// 在浏览器中
var a = 1
let b = 2

console.log(window.a, window.b) // 1 undefined
```

## let 与 const

+ `let` 用于声明变量；`const` 用于声明常量，且声明时必须赋值

```js
let a
console.log(a) // undefined

const b // SyntaxError: Missing initializer in const declaration
```