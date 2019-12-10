---
sidebarDepth: 2
---


## 基础类型

### 和 Javascript 一样的类型

+ `number`: 2/8/10/16 进制的浮点数
+ `string`: 单引号、双引号、模板字符串
+ `boolean`: `true` || `false`
+ `null`: `null`
+ `undefined`: `undefined`
+ `[]`: 数组

```ts
let num: number = 100
let str: string = 'hello'
let bool: boolean = true
let nill: null = null
let unde: undefined = undefined
let arr: number[] = [1, 2, 3]
```

::: tip 说明：
+ 默认情况下 `null` 和 `undefined` 是所有类型的子类型，也就是说可以把 `null` 和 `undefined` 赋值给 `number` 或其他类型的变量
+ 当指定了 `--strictNullChecks` 标记，`null` 和 `undefined` 只能赋值给 `void` 和它们自身；鼓励尽可能地使用`--strictNullChecks`
:::


### 扩展的类型

+ `[type_1, type_2, ...]`: 元组。表示一个已知元素数量和类型的数组，各元素的类型不必相同
+ `enum`: 枚举。为一组数值赋予友好的名字
+ `any`: 任意值。表示任何类型，用于在编程阶段还不清楚类型的变量
+ `void`：空值。与 `any` 相反，表示没有任何类型，常用于无返回值的函数
+ `never`: 永不存在的值的类型。

```ts
let tur: [number, string] = [12, '12']
enum Color { red, blue, green }
let big: any = 122

function warnUser(): void {
  alert('This is my warning message')
}

function error(message: string): never {
  throw new Error(message)
}
```

::: tip 说明：
+ 声明一个 `void` 类型的变量只能它赋值为 `undefined` 和 `null`
+ `never` 类型是任何类型的子类型，也可以赋值给任何类型
+ 没有类型是 `never` 的子类型或可以赋值给 `never` 类型（除了它本身），即使是 `any`
+ `never` 常用于一些总会抛出异常不会有返回值的函数的返回值类型、箭头函数的返回值类型
:::

### 结构类型

+ 接口结构类型：作为一个接口限定的成员和数据类型
+ 类结构类型：作为一个构造函数或构造函数的实例

```ts
interface Person {
  name: string
  age: number
}
// 接口类型
let p: Person = {
  name: 'Alice',
  age: 24
}


class Student implements Person{
  name: string
  age: number
  school: string
  constructor(name: string, age: number, school: string) {
    this.name = name
    this.age = age
    this.school = school
  }
}
// 类类型
let s: Student = new Student('Alice', 24, 'GDPU')
```



## 类型断言

&emsp;&emsp;在对 `any` 类型的变量进行操作时（如获取字符串的长度），首先要确保该变量是一个字符串，此时可以使用类型断言（相当于类型转换）。类型断言的方式有两种：

+ 尖括号语法
```ts
let someValue: any = 'this is a string'
let strLength: number = (<string>someValue).length
```

+ `as` 语法
```ts
let someValue: any = 'this is a string'
let strLength: number = (someValue as string).length
```


## 类型推论

+ 考虑所有元素的类型，选择最佳通用类型
+ 根据上下文，选择合适的类型


::: tip 说明：
+ 为了避免生成预期之外的类型，尽量保持始终使用类型声明
:::

## 类型兼容性

&emsp;&emsp;[类型兼容性](https://typescript.bootcss.com/type-compatibility.html)是指如果 x 要兼容 y，那么 y 至少具有与 x 相同的属性。

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

&emsp;&emsp;[高级类型](https://typescript.bootcss.com/advanced-types.html)


### 交叉类型

可以拥有多种类型的类型，使用 `&` 连接，语法为 `T & U & P`：

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

::: tip 说明：
+ 这种特性常用于创建 `mixins`
:::


### 联合类型

一个值可以是几种类型之一，用 `|` 分隔每个类型，语法为 `string | number | boolean`：

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

使用 `type` 关键字定义类型别名：

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