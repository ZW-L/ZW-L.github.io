---
sidebarDepth: 2
---

## 简介

+ [TypeScript](https://typescript.bootcss.com/)
+ 参考：
  + [TS in JS 实践指北](https://juejin.cn/post/6844904030221631501)
  + [一文读懂 TypeScript 泛型及应用（ 7.8K字）](https://juejin.cn/post/6844904184894980104)
+ 官方提供了详尽的文档，但我们应全面地理解一些内容
  1. 为什么使用
  2. 怎样在项目中使用



## 为什么使用


### 强类型

+ 很多人对 TS 的第一印象都是强类型，毫无疑问，它是 TS 最吸引人的一个特点
+ 基本数据类型，都是 JS 支持的
```ts
let num: number = 100       // 支持 2/8/10/16 进制的浮点数
let str: string = 'hello'   // 支持单引号、双引号、模板字符串
let bool: boolean = true
let nill: null = null
let unde: undefined = undefined
let arr: number[] = [1, 2, 3]
let obj: { a: string } = { a: 'hello' } // 对象，注意这不是类类型
```

+ 类类型使用 `Object`/`object` 关键字都是允许的
```js

```

+ 元组(turple)允许一个数组有不同类型的数据(数组只能为同一类型)：
```ts
let tur: [number, string] = [12, '12']
```

+ 枚举是使用 `enum` 关键字声明的一组常量(支持数组常量或字符串常量)：
```ts
enum server {
  TEST = '/api/',
  SERVE = '/example.com/'
}
server.TEST   // '/api/'

// 枚举值有默认的初始值(0)和自增值(1)
enum e { a, b, c = 10, d }

e.a   // 0
e.b   // 1
e.c   // 10
e.d   // 11
```

+ `any` 表示任意类型，它是除了 `never` 外的所有类型的子类型
```ts
// 当不想使用元组的时候，使用 any 是一个简单的方法
let arr: any[] = [1, '2', true]
```

+ 与 `any` 相反，`void` 代表空值，表示没有任何类型，常用于无返回值的函数
```ts
function logger(str: string): void {
  console.log(str)
}

// 声明一个 void 类型的变量只能它赋值为 undefined 和 null
let a: void
a = null
a = undefined
a = 12  // 报错
```

+ `never` 表示永不存在的值的类型，常用于总是会抛出异常或根本就不会有返回值的函数
```ts
function error(message: string): never {
  throw new Error(message)
}

// never 类型是任何类型(包括它自己)的子类型，可以赋值给任何类型
function error(message: string): never {
  throw new Error(message)
}

let n: string = 'hello'
n = error('error')
```

::: tip 说明：
+ 子类型：指的是该类型可以赋值给它的父类型变量，如 `null`/`undefined` 默认是所有类型的子类型
+ 注意区分包装类类型(`String`/`Number`/`Boolean`)和基础类型(`string`/`number`/`boolean`)的区别
```ts
// 可以将 string 类型赋值给 String 类型
let s1: String = new String('hello')
s1 = 'world'  // 正常

// 不能将 String 类型赋值给 string 类型
let s2: string = 'hello'
s2 = new String('world')  // 报错

// 结论：可以理解 string 等基础类型是其包装类类型的子类型
```
+ 更好的类型检验，离不开 `.d.ts` 声明文件
:::



### 接口

### 泛型

### 函数

### 类

### 装饰器

### 其他



## 在项目中使用

### 步骤

+ 项目安装
+ 配置文件：`tsconfig.json`
+ VS Code 编辑器
+ `.d.ts` 声明文件


### 装饰器




