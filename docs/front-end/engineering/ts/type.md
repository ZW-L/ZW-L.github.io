---
sidebarDepth: 2
---


## 类型简介

+ [基础类型](https://typescript.bootcss.com/basic-types.html)
+ [类型推论](https://typescript.bootcss.com/type-inference.html)
+ [类型兼容性](https://typescript.bootcss.com/type-compatibility.html)
+ [高级类型](https://typescript.bootcss.com/advanced-types.html)



### 基础类型

+ `number`: 支持 2/8/10/16 进制的浮点数
+ `string`: 支持单引号、双引号、模板字符串
+ `boolean`: `true` || `false`
+ `null`: `null`
+ `undefined`: `undefined`
+ `[]`: 数组
+ `{}`: 对象，注意这不是类类型

```ts
let num: number = 100
let str: string = 'hello'
let bool: boolean = true
let nill: null = null
let unde: undefined = undefined
let arr: number[] = [1, 2, 3]
let obj: { a: string } = { a: 'hello' }
```

::: tip 说明：
+ 子类型：指的是该类型可以赋值给它的父类型变量，如 `null`/`undefined` 默认是所有类型的子类型
+ 当指定了 `--strictNullChecks` 标记，`null`/`undefined` 便只能赋值给 `void` 和它们自身；鼓励尽可能使用 `--strictNullChecks`
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

+ 使用对象类型时必须指定每个成员的类型，更好的方法是使用[接口](./interface.md)来约束类型
```ts
let o1: Object = { a: 'hello' }
o1.a  // 报错，Object 内置对象内没有 a 属性

let o2: {} = { a: 'hello' }
o2.a  // 报错，对象类型没有声明 a 属性

let o3: { a: string } = { a: 'hello' }
o3.a  // 正确

interface obj {
  a: string
}

let o4: obj = { a: 'hello' }
o4.a  // 正确
```
:::


### 类类型

+ 区分对象类型和类类型的区别，上一节已提到
+ 类类型使用 `Object`/`object` 关键字都是允许的
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
+ 更多的类类型介绍请看 [类](./class.md)




### 元组

+ 在 ts 中，数组类型内的元素都是同一种类型，若要在数组中保存不同类型的数据，必须将其定义为元组类型
```ts
let tur: [number, string] = [12, '12']
```
+ 元组会将它的元素约束为指定的类型，并且前几个元素的类型必须匹配，而其他的元素则兼容声明的所有类型
```ts
let t1: [number, string] = [12, '12']
t1.push(1)
t1.push('1')
t1.push(true) // 报错，没有指定包含 boolean 类型

let t2: [number, string] = [12, 12] // 报错，第二个元素必须为 string 类型
```


### 枚举

+ 枚举的定义类似 ES6 的 `class` 语法，但是使用关键字 `enum`
+ 简单来说，枚举就是用来保存一组常量的，可以保存数组常量或字符串常量
```ts
// 数字枚举
enum e1 {
  OK = 200,
  NOT_FOUND = 404
}
e1.OK   // 200

// 常量枚举
enum e2 {
  TEST = '/api/',
  SERVE = '/example.com/'
}
e1.TEST // '/api/'
```
+ 枚举值有默认的初始值(0)和自增值(1)
```ts
enum e {
  a,
  b,
  c = 10,
  d
}

e.a   // 0
e.b   // 1
e.c   // 10
e.d   // 11
```



### any

+ `any` 表示任意类型，它是除了 `never` 外的所有类型的子类型
+ 当变量的类型是可变(不确定)的时候，可以使用 `any` 类型，但是不应该被滥用(这不就像 js 了吗)
```ts
let a: any = 1
a = null
a = undefined
a = true
a = 'hello'
a = { a: 'hello' }
a = new Date()
```
+ 当不想使用元组的时候，使用 `any` 是一个简单的方法
```ts
let arr: any[] = [1, '2', true]
```



### void

+ 与 `any` 相反，`void` 代表空值，表示没有任何类型，常用于无返回值的函数
```ts
function logger(str: string): void {
  console.log(str)
}
```
+ 声明一个 `void` 类型的变量只能它赋值为 `undefined` 和 `null`
```ts
let a: void
a = null
a = undefined
a = 12  // 报错
```


### never

+ 表示永不存在的值的类型，常用于总是会抛出异常或根本就不会有返回值的函数
```ts
function error(message: string): never {
  throw new Error(message)
}
```
+ `never` 类型是任何类型(包括它自己)的子类型，可以赋值给任何类型
```ts
function error(message: string): never {
  throw new Error(message)
}

let n: string = 'hello'
n = error('error')
```




## 更多类型特性

### 类型断言

+ 在对 `any` 类型的变量进行操作时，常常需要确保一个变量的类型，才能使操作更安全
+ 类型断言的方式有两种：
```ts
// 1.尖括号
let sre: any = 'this is a string'
let len: number = (<string>str).length

// 2.as
let str: any = 'this is a string'
let len: number = (str as string).length
```
+ 当使用 JSX 时，类型断言只能用 `as` 的方式，因此，始终使用 `as` 的方式比较好




### 类型推论

+ 考虑所有元素的类型，选择最佳通用类型
+ 根据上下文，选择合适的类型


::: tip 说明：
+ 为了避免生成预期之外的类型，尽量保持始终使用类型声明
:::



### 类型兼容性

+ [类型兼容性](https://typescript.bootcss.com/type-compatibility.html)是指如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性

```ts
interface Named {
  name: string
}

class Person {
  name: string
}

let p: Named
// 因为 Person 实例拥有和 Named 接口相同的属性，因此不会报错
p = new Person()
```




## 高级类型

+ [高级类型](https://typescript.bootcss.com/advanced-types.html)



### 交叉类型

+ 可以拥有多种类型的类型，使用 `&` 连接，语法为 `T & U & P`
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


::: tip 提示
+ 这种特性常用于创建 `mixins`
:::




### 联合类型

+ 一个值可以是几种类型之一，用 `|` 分隔每个类型，语法为 `string | number | boolean`
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

::: tip 说明：
+ 可用于规定函数参数的类型或返回值类型，比 `any` 更细粒度
:::




### 类型别名

+ 使用 `type` 关键字定义类型别名
```ts
type Name = string
type Container<T> = { value: T }
type LinkedList<T> = T & { next: LinkedList<T> }
```

::: tip 说明：
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