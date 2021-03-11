---
sidebarDepth: 2
---

## 简介

+ [TypeScript](https://typescript.bootcss.com/)
+ 参考：
  + [TS in JS 实践指北](https://juejin.cn/post/6844904030221631501)
  + [一文读懂 TypeScript 泛型及应用（ 7.8K字）](https://juejin.cn/post/6844904184894980104)

::: details 类型参考图
![类型](../imgs/ts-type.png)
:::

## 基本类型

:::: tabs
::: tab 基本类型
+ 对应 JavaScript 的基本数据类型
```js
// 数值：支持 2/8/10/16 进制的浮点数、bigint
let num: number = 100
const bn: bigint = BigInt(1233333341231231)

// 字符串：支持单引号、双引号、模板字符串
let str: string = 'hello'

// 布尔值：true | false
let bool: boolean = true

// null、undefined
let nill: null = null
let unde: undefined = undefined

// Symbol
const sym: symbol = Symbol('Anna')
```

+ 数组
```js
// 数组元素必须唯一，否则应使用元组
let arr: number[] = [1, 2, 3]

// 还可以使用泛型来定义
let arr: Array<number> = [1, 2, 3]
```

+ 对象
```ts
// 对象类型(不是类类型)，需要为每个属性指定类型
let obj: { a: string } = { a: 'hello' }

// 更常用的方式是使用接口
interface Person {
  name: string,
  age: number
}
let p: Person = { name: 'Alice', age: 24 }
```
:::


::: tab 类类型
+ 对实例使用
```ts
class Person {
  name: string
  age: number
  constructor (name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const p: Person = new Person('Alice', 26)
```

+ 使用 `Object`/`object` 关键字都是一样的的
+ 不推荐使用 `Object`/`String`/`Number`/`Boolean`，尽量使用 `object`/`string`/`number`/`boolean`
+ 区分包装类类型(`String`/`Number`/`Boolean`)和基础类型(`string`/`number`/`boolean`)：
```js
// 可以将 string 类型赋值给 String 类型
let s1: String = new String('hello')
s1 = 'world'  // 正常

// 不能将 String 类型赋值给 string 类型
let s2: string = 'hello'
s2 = new String('world')  // 报错

// 结论：可以理解 string 等基础类型是其包装类类型的子类型
```
:::

::: tab 元组
+ 元组(turple)是特殊的数组，它允许各元素有不同的类型
```ts
// 在 ts 中，数组类型内的元素都是同一种类型，若要在数组中保存不同类型的数据，必须将其定义为元组类型
let tur: [number, string] = [12, '12']

// 元组会将它的元素约束为指定的类型，并且前几个元素的类型必须匹配，而其他的元素则兼容声明的所有类型
let t1: [number, string] = [12, '12']
t1.push(1)
t1.push('1')
t1.push(true) // 报错，没有指定包含 boolean 类型

let t2: [number, string] = [12, 12] // 报错，第二个元素必须为 string 类型
```
:::

::: tab enum
+ `enum` 定义枚举，用于声明的一组常量(支持数组常量或字符串常量)：
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
:::

::: tab any
+ `any` 表示任意类型，它是除了 `never` 外的所有类型的子类型(注意不要滥用 `any`)
```ts
// 当不想使用元组的时候，使用 any 是一个简单的方法
let arr: any[] = [1, '2', true]
```
:::

::: tab void
+ `void` 表示没有任何类型(与 `any` 相反)，常用于无返回值的函数
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
:::

::: tab never
+ `never` 表示永不存在的值的类型，常用于总是会抛出异常或根本就不会有返回值的函数
```ts
// 异常函数永远不会有返回值
function error(message: string): never {
  throw new Error(message)
}
// 为什么要这样定义呢？
// 当你修改 error() 函数为其添加返回值时，编译器会报错，因为该函数的返回值类型为 never

// never 类型是任何类型(包括它自己)的子类型，可以赋值给任何类型
let n: string = 'hello'
n = error('error')
```
:::
::::





## 接口

### 介绍和使用

+ [接口](https://typescript.bootcss.com/interfaces.html)的作用是对值所具有的结构进行类型检查，主要有两种使用方式

:::: tabs
::: tab 描述对象
```ts
interface Person {
  name: string
  age: number
}

const p1: Person = { name: 'Alice', age: 24 }   // 正常
const p2: Person = { name: 'Alice', age: '22' } // 报错，age 不是 number
```
:::

::: tab 描述函数
+ 还可以用来描述函数的参数类型和返回值
```ts
interface SearchFunc {
  (source: string, subString: string): Boolean
}

let mySearch: SearchFunc = (source, subString) => source.indexOf(subString) > -1
console.log(mySearch('hello', 'llo')) // true
```
:::
::::


### 应用

:::: tabs
::: tab 类实现接口
+ 一个类可以通过实现(`implements`)接口去扩充自身的功能(有点类似 `mixin`)
```ts
interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) { }
}
```
:::

::: tab 接口继承接口
+ 接口之间的继承只是成员的简单复制，一个接口可以继承多个接口
```ts
interface Shape {
  color: string
}
interface PenStroke {
  penWidth: number
}
interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = <Square>{}
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0
```
:::

::: tab 接口继承类
+ 若接口从类中继承了私有属性，则只有该类的子类才能实现该接口
```ts
class Control {
  private state: any
}

interface SelectableControl extends Control {
  select(): void
}

class Button extends Control implements SelectableControl {
  select() { }
}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
  select() { }
}
```
:::

::: tab 混合多种类型
+ 可同时作为一个对象或一个函数
```ts
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { }
  counter.interval = 123
  counter.reset = function () { }
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0
```
:::
::::


## 泛型

### 介绍和使用

:::: tabs
::: tab 理解范型
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
:::

::: tab 泛型函数
+ 泛型具有强类型和动态语言的灵活性，使一个组件能应用于不同的数据类型
+ 使用泛型时可以不指定类型，编译器会自动推导类型
```ts
function identity<T>(arg: T): T {
  return arg
}

// 1.显式指定类型
let output = identity<string>('myString')
// 2.自动推断类型
let output = identity('myString')
```
:::


::: tab 泛型接口
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
:::

::: tab 泛型类
+ 泛型类指的是实例部分的类型，所以**类的静态属性不能使用这个泛型类型**
```ts
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) { return x + y }
```
:::
::::


### 泛型编程

:::: tabs
::: tab extends
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
:::

::: tab keyof
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
:::

::: tab infer
+ 类类型约束：引用构造函数的类类型约束构造函数与类实例的关系
```ts
function create<T>(c: { new(): T }): T {
  return new c()
}
```
:::
::::



### 泛型示例

:::: tabs
::: tab Partial
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
:::

::: tab Record
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
:::

::: tab Pick
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
:::

::: tab Exclude
+ 将某个类型中属于另一个的类型移除掉
```ts
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Exclude from T those types that are assignable to U
 */
type Exclude<T, U> = T extends U ? never : T
```
:::

::: tab ReturnType
+ 获取函数 T 的返回类型
```ts
/**
 * node_modules/typescript/lib/lib.es5.d.ts
 * Obtain the return type of a function type
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any
```
:::
::::



## 高级类型

:::: tabs
::: tab 交叉类型
+ 可以拥有多种类型的类型，使用 `&` 连接，语法为 `T & U & P`
+ 这种特性常用于创建 `mixins`
```ts
function extend<T, U>(first: T, second: U): T & U {
  let result = <T & U>{}
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id]
    }
  }
  return result
}

class Person {
  constructor(public name: string) { }
}
interface Loggable {
  log(): void
}
class ConsoleLogger implements Loggable {
  log() {
    console.log('Hello World!')
  }
}

const jim = extend(new Person('Jim'), new ConsoleLogger())

console.log(jim.name)
jim.log()
```
:::

::: tab 联合类型
+ 一个值可以是几种类型之一，用 `|` 分隔每个类型，语法为 `string | number | boolean`
+ 可用于规定函数参数的类型或返回值类型，比 `any` 更细粒度
```ts
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}
```
:::

::: tab 类型别名
+ 使用 `type` 关键字定义类型别名
```ts
type Name = string
type Container<T> = { value: T }
type LinkedList<T> = T & { next: LinkedList<T> }
```


+ 类型别名与接口有类似的功能，都能用于规定类型，但是它没有 `extends` 和 `implements` 的特性（**建议尽量使用接口代替类型别名，除非无法通过接口来描述一个类型并且需要使用联合类型或元组类型**）

+ 类型别名不能出现在声明右侧的任何地方:
```ts
type Yikes = Array<Yikes> // error
```

+ 交叉类型一起使用，可以创建出一些稀奇古怪的类型:
```ts
type LinkedList<T> = T & { next: LinkedList<T> }

interface Person {
    name: string
}

var people: LinkedList<Person>
var s = people.name
var s = people.next.name
var s = people.next.next.name
var s = people.next.next.next.name
```

+ 创建特定的枚举类型：
```ts
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
```
:::
::::



## 类型特性

:::: tabs
::: tab 基本特性
+ **可选属性**：语法为 `name?: string`
+ **只读属性**：语法为 `readonly name: string`，还可以使用 `ReadonlyArray<T>` 指定只读的数组
+ 对于 `readonly` 和 `const`，建议作为常量声明时使用 `const`，作为属性时使用 `readonly`
:::

::: tab 子类型
+ 指该类型可以赋值给它的父类型变量，如 `null`/`undefined` 默认是所有类型的子类型
+ 若指定 `--strictNullChecks` 时(推荐)，`null`/`undefined` 便只能赋值给 `void` 和它们自身
```ts
let a: string = 'hello'
a = null      // 允许
a = undefined // 允许

let b: null = null
b = 'hello'   // 报错

// 开启 --strictNullChecks
let c: string = 'world'
c = null      // 报错
```
:::

::: tab 类型断言
+ 在对 `any` 类型的变量进行操作时，常常需要确保一个变量的类型，才能使操作更安全
```ts
// 两种方式使用类型断言
// 1.尖括号
let str: any = 'this is a string'
let len: number = (<string>str).length

// 2.as(建议使用，因为 JSX 只支持该方式，为了保证统一性)
let str: any = 'this is a string'
let len: number = (str as string).length
```

+ 避免传入可选属性时的警告，可以在传入参数时使用 `as` 断言作属性检测
```ts
interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): { color: string, width: number } {
  const color = config.color || 'white'
  const width = config.width || 100
  return { color, width }
}

// 使用 as 断言检测属性，避免传入不符合的属性时出现警告
createSquare({ color: 'black', width: 200, other: '' } as SquareConfig)
```
:::

::: tab 类型兼容性
+ 如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性
```ts
interface Named {
  name: string
}

class Person {
  name: string
}

let p: Named
p = new Person()  // 允许，因为 Person 实例拥有和 Named 接口相同的属性
```
:::
::::