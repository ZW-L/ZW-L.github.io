---
sidebarDepth: 2
---

## 函数

+ [函数](https://typescript.bootcss.com/functions.html)支持 ES6 的所有语法，而且扩展了强类型、函数参数控制、函数重载等特性
+ 显式指定参数类型和返回值类型：
```ts
let myAdd = (x: number, y: number): number => x + y
```

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

+ 除了支持 ES6 的默认参数和剩余参数外，还支持可选参数：
```ts
function sayHi(name?: string) {
  if (name) {
    console.log(`Hello ${name}!`)
  } else {
    console.log('Hello World!')
  }
}
sayHi()         // Hello World!
sayHi('Alice')  // Hello Alice!


function buildName(prefix = 'Hello ', firstName: string, ...restOfName: string[]) {
  return prefix + firstName + ' ' + restOfName.join(' ')
}
let employeeName = buildName(undefined, 'Joseph', 'Samuel', 'Lucas', 'MacKinzie')
console.log(employeeName)   // Hello Joseph Samuel Lucas MacKinzie
```

+ 另一个强大的功能是可以模拟函数重载：为同一个函数提供多个函数类型定义来进行函数重载，**但必须在返回值类型为 `any` 的函数进行处理并返回结果**
```ts
function pickCard(x: { suit: string; card: number; }[]): number // 函数重载
function pickCard(x: number): { suit: string; card: number }    // 函数重载
// 实际上处理结果的函数，组织函数调用逻辑
function pickCard(x): any {
  if (typeof x == 'object') {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if (typeof x == 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

const suits = ['hearts', 'spades', 'clubs', 'diamonds']
const myDeck = [
  { suit: 'diamonds', card: 2 }, 
  { suit: 'spades', card: 10 }, 
  { suit: 'hearts', card: 4 }
]

let pickedCard1 = myDeck[pickCard(myDeck)]
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit) // card: 4 of hearts
let pickedCard2 = pickCard(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit) // card: 2 of spades
```



## 类

+ [类](https://typescript.bootcss.com/classes.html)支持 ES6 `Class`，但扩展了强类型、成员修饰符、抽象类等特性
+ 属性修饰符

|访问范围|本类|派生类|备注|
|-|-|-|-|
|`public`|☑️|☑️|公有属性，默认，可缺省|
|`protected`|☑️|☑️|受保护属性|
|`private`|☑️|✖️|私有属性|
|`readonly`|-|-|只读属性，必须在声明时或构造函数里被初始化|


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


+ 抽象类包含了成员的实现细节，通常作为其他类的基类使用，使用 `abstract` 定义一个抽象类，而且：
  + 可以创建抽象类的引用，但**不能实例化抽象类**
  + 继承抽象类的子类必须**实现抽象类的所有抽象方法**
  + 继承抽象类的子类必须**在构造函数中调用 `super()`**

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
    // 必须调用 super()
    super('')
  }
  // 必须实现所有抽象方法
  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }
  // 可选：扩展自身的方法
  generateReports(): void {
    console.log('Generating accounting reports...')
  }
}
```



## 装饰器

+ 装饰器是一个表达式，其执行后返回一个函数
+ 该函数的参数分别为 `target`, `name`, `descriptor`
+ 执行该函数后，可能返回 `descriptor` 对象，用于配置 `target` 对象


### 类装饰器
### 属性装饰器
### 方法装饰器
### 参数装饰器





## 更多

### 模块

### 命名空间


### 声明合并


### 混入


### JSX



