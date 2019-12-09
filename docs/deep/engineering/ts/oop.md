---
sidebarDepth: 2
---


## 接口

&emsp;&emsp;[接口](https://typescript.bootcss.com/interfaces.html)的作用是对值所具有的结构进行类型检查，可以类比为一个对象的类型检查。

### 属性界限

在声明属性时，可以使用一些便捷的语法来规约属性：

+ 可选属性：语法为 `name?: string`
+ 只读属性：语法为 `readonly name: string`，还可以使用 `ReadonlyArray<T>` 指定只读的数组

::: tip 说明：
+ 对于 `readonly` 和 `const`，建议作为常量声明时使用 `const`，作为属性时使用 `readonly`
:::


### 额外的属性检查

避免传入可选属性时的警告，可以在传入参数时使用 `as` 断言作属性检测：

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
createSquare({ color: 'black', width: 200 } as SquareConfig)
```


### 描述函数的类型和返回值

直接将接口当作函数表达式的类型：

```ts
interface SearchFunc {
  (source: string, subString: string): Boolean
}

let mySearch: SearchFunc
mySearch = function(source, subString) {
  return source.indexOf(subString) > -1
}
```


### 可索引的类型


### 在类中使用

+ **类实现接口**：强制一个类去符合某种契约

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

+ **接口的相互继承**：从一个接口复制成员到另一个接口，而且一个接口可以继承多个接口

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

+ **混合多种类型**：可同时作为一个对象或一个函数

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

+ **接口继承类**：接口从类中继承的私有属性，只有该类的子类才能实现该接口

```ts
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
    select() { }
}
```




## 枚举

&emsp;&emsp;[枚举](https://typescript.bootcss.com/enums.html)用于定义一些有名字的数字常量，通过关键字 `enum` 定义。

+ 枚举是在运行时真正存在的一个对象，其中一个原因是因为这样可以从枚举值到枚举名进行反向映射
+ 枚举成员具有一个数字值，可以是常数或是计算得出的值
+ 当满足如下条件时，枚举成员被当作是常数：
  + 不具有初始化函数并且之前的枚举成员是常数，此时当前枚举成员的值为上一个枚举成员的值加 1
  + 枚举成员使用常数枚举表达式初始化，以下情况都是一个常数枚举表达式
    + 数字字面量
    + 引用之前定义的常数枚举成员
    + 带括号的常数枚举表达式
    + 一元运算符：`+`, `-`, `~`
    + 二元运算符：`+`, `-`, `*`, `/`, `%`, `<<`, `>>`, `>>>`, `&`, `|`, `^`

::: tip 说明：
+ 简单来说，枚举就是一组数字常量，它们可以使用 `枚举名.常量名` 的形式引用
+ 枚举成员可以不用初始化，它们默认会从 0 开始递增；当某个枚举值初始化后，在它后面的依然会在该值的基础上递增
:::

### 枚举的定义

```ts
enum Direction {
  Up = 1,
  Down, // 2
  Left, // 3
  Right, // 4
}
```

### 常数枚举

在 `enum` 关键字前使用 `const` 修饰符：

```ts
const enum Enum {
  A = 1,
  B = A * 2,
}
```

### 外部枚举

外部枚举用来描述已经存在的枚举类型的形状：

```ts
declare enum Enum {
  A = 1,
  B,
  C = 2,
}
```



## 函数

&emsp;&emsp;[函数](https://typescript.bootcss.com/functions.html)支持 ES6 的所有语法，而且扩展了强类型、函数参数控制、函数重载等特性。

### 参数类型和返回值类型

```ts
function add(x: number, y: number): number {
  return x + y
}

let myAdd = (x: number, y: number): number => x + y
```

::: tip 说明：
+ 不返回任何值的函数的返回值类型为 `void`：
```ts
function sayHi(name: string): void {
  console.log(`Hello ${name}!`)
}
```
+ 不指定返回值类型时，会按照上下文类型推断出返回值类型：
```ts
// 根据参数推断返回值类型为 number
let myAdd: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y }
```
:::

### 可选参数、默认参数、剩余参数

+ 可选参数：语法 `name?: string`
+ 默认参数：语法 `name = 'Alice'`，与 ES6 相同
+ 剩余参数：语法 `...name`，与 ES6 相同

```ts
function sayHi(name?: string) {
  if (name) {
    console.log(`Hello ${name}!`)
  } else {
    console.log('Hello World!')
  }
}
sayHi() // Hello World!
sayHi('Alice') // Hello Alice!


function buildName(prefix = 'Hello ', firstName: string, ...restOfName: string[]) {
  return prefix + firstName + ' ' + restOfName.join(' ')
}
let employeeName = buildName(undefined, 'Joseph', 'Samuel', 'Lucas', 'MacKinzie')
console.log(employeeName) // Hello Joseph Samuel Lucas MacKinzie
```

::: tip 说明：
+ 当不需要修改默认参数时，要显式传入 `undefined`
+ 与 ES6 一样，剩余参数只能作为最后一个参数
:::


### 模拟函数重载

为同一个函数提供多个函数类型定义来进行函数重载，其中返回值类型为 `any` 的函数进行处理并返回结果：

```ts
let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: { suit: string; card: number; }[]): number
function pickCard(x: number): { suit: string; card: number }
function pickCard(x): any {
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [{ suit: 'diamonds', card: 2 }, 
              { suit: 'spades', card: 10 }, 
              { suit: 'hearts', card: 4 }]

let pickedCard1 = myDeck[pickCard(myDeck)]
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)
// card: 4 of hearts

let pickedCard2 = pickCard(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)
// card: 2 of spades
```


## 类

&emsp;&emsp;[类](https://typescript.bootcss.com/classes.html)语法类似 ES6 `Class` ，但是增加了强类型、成员修饰符、抽象类等特性。

### 继承

```ts
class Animal {
  name: string
  constructor(theName: string) { this.name = theName }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}

class Snake extends Animal {
  constructor(name: string) { super(name) }
  move(distanceInMeters = 5) {
    console.log('Slithering...')
    super.move(distanceInMeters)
  }
}

let sam = new Snake('Sammy the Python')

sam.move()
```


### 属性修饰符

+ `public`：共有的属性，可缺省，成员默认的修饰符
+ `protected`：受保护的属性，只能在本类或派生类中访问
+ `private`：私有的属性，只能在本类中访问
+ `readonly`: 只读属性，只读属性必须在声明时或构造函数里被初始化

::: tip 说明：
+ 构造函数也能被声明为 `protected`，意味着这个类不能在类外部实例化，但能被继承，可用于创建一个不能实例化的基类
+ 在构造函数中使用参数界限，会同时初始化一个同名成员（虽然简便，但觉得很容易被忽略）：
```ts
class Animal {
  constructor(private name: string) { } // 默认初始化了一个名为 name 的成员变量
  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`)
  }
}
```
:::


### 抽象类

抽象类包含了成员的实现细节，通常作为其他类的基类使用，使用关键字 `abstract` 定义一个抽象类，而且：

+ 可以创建抽象类的引用，但不能实例化抽象类
+ 继承抽象类的子类必须实现抽象类的所有抽象方法
+ 继承抽象类的子类必须在构造函数中调用 `super()`

```ts
abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log('Department name: ' + this.name)
  }
  abstract printMeeting(): void
}

class AccountingDepartment extends Department {
  constructor() {
    // 调用 super()
    super('')
  }
  // 实现抽象方法
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }
  // 扩展自身的方法
  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}
```

### 类实现接口

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

### 接口继承类

```ts
class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Button extends Control implements SelectableControl {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'.
class Image implements SelectableControl {
    select() { }
}
```




## 泛型

&emsp;&emsp;[泛型](https://typescript.bootcss.com/generics.html)可以用来创建可重用的组件，一个组件可以支持多种类型的数据。

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
+ 简单来说，泛型就是一种具有强类型但又具有动态语言的灵活性的编程设计，使一个组件能应用于不同的数据类型
+ 定义了泛型函数后，调用时可以显式指定类型，也可以不指定类型，因为编译器会自动推导类型
:::


### 泛型接口

可以使用泛型接口来锁定函数调用时的参数类型：

```ts
interface GenericIdentityFn<T> {
  (arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

// 现在 myIdentity 是一个接收 number 类型参数的函数
let myIdentity: GenericIdentityFn<number> = identity
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
+ 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型
:::


### 泛型约束

+ 接口约束：通过将泛型实现接口来对泛型进行约束

```ts
interface Lengthwise {
  length: number
}

// 泛型必须实现 Lengthwise 接口，因此始终能访问 arg.length 属性
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length)
  return arg
}
```

+ 泛型类型参数约束：使用 keyof 引用泛型类型的参数

```ts
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }
getProperty(x, 'a') // okay
getProperty(x, 'm') // error
```

+ 类类型约束：引用构造函数的类类型约束构造函数与类实例的关系

```ts
function create<T>(c: { new(): T }): T {
  return new c()
}
```
