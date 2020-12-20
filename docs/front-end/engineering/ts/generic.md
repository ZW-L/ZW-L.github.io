---
sidebarDepth: 2
---

## 简介

+ [泛型](https://typescript.bootcss.com/generics.html)可以用来创建可重用的组件，一个组件可以支持多种类型的数据
+ 初始接触泛型时对官方文档的 demo 一知半解，即使有的理解了也不知道为什么要这样做
+ 所以，理解泛型必须要懂得一些概念：
  1. 泛型，可以理解为广泛的类型，也就是说，程序在执行前它的类型都是可变的
  2. 泛型常用于编程“类型”，编程的对象是“类型”，而我们平时所编程的对象是“值”

+ 以及如何去通过泛型来编程，TS 提供了一些操作符来让我们操作“类型”
  + `extends`：使类型继承另一个类型
  + `keyof`：提取一个类型的所有键名
  + `infer`：提取一个类型

+ 最后一个问题是什么时候使用泛型？
  + 当函数、接口、类将处理多种数据类型时
  + 当函数、接口、类在多个地方使用该数据类型时



### 泛型函数

```ts
function identity<T>(arg: T): T {
  return arg
}

// 1.显式指定类型
let output = identity<string>('myString')
// 2.自动推断类型
let output = identity('myString')
```

::: tip 说明：
+ 泛型具有强类型和动态语言的灵活性，使一个组件能应用于不同的数据类型
+ 使用泛型时可以不指定类型，编译器会自动推导类型
:::


### 泛型接口

+ 可以使用泛型接口来锁定函数调用时的参数类型
```ts
interface GenericIdentityFn<T> {
  (arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

// 现在 myIdentity 是一个接收 number 类型参数的函数
let myIdentity: GenericIdentityFn<number> = identity
console.log(myIdentity(100))  // 100
```


### 泛型类

```ts
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) { return x + y }
```

::: danger 注意：
+ 泛型类指的是实例部分的类型，所以**类的静态属性不能使用这个泛型类型**
:::





## 泛型编程

### extends

+ 使用 `extends` 继承某类型(这里是接口)，是一种非常常用的做法
```ts
interface Lengthwise {
  length: number
}

// 泛型继承了 Lengthwise 接口，因此始终能访问 arg.length 属性
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
```


### keyof

+ 使用 `keyof` 可以引用类型的所有键
+ 再配合 `extends` 可以有奇效，以下泛型 K 继承自泛型 T 的键名，保证只能取到已存在的健值
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }
getProperty(x, 'a') // okay
getProperty(x, 'm') // error
```


### infer

+ 类类型约束：引用构造函数的类类型约束构造函数与类实例的关系
```ts
function create<T>(c: { new(): T }): T {
  return new c()
}
```



## 泛型示例

### Partial

+ 将某个类型里的属性全部变为可选项 `?`
```ts
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P]
}
```


### Record

+ 将 K 中所有的属性的值转化为 T 类型
```ts
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Construct a type with a set of properties K of type T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T
}
```


### Pick

+ 将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型
```ts
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * From T, pick a set of properties whose keys are in the union K
 */
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```


### Exclude

+ 将某个类型中属于另一个的类型移除掉
```ts
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T
```


### ReturnType

+ 获取函数 T 的返回类型
```ts
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
```
