---
sidebarDepth: 2
---

## 简介

+ [接口](https://typescript.bootcss.com/interfaces.html)的作用是对值所具有的结构进行类型检查，可以类比为一个对象的类型检查

### 属性界限

+ **可选属性**：语法为 `name?: string`
+ **只读属性**：语法为 `readonly name: string`，还可以使用 `ReadonlyArray<T>` 指定只读的数组

::: tip 备注
+ 对于 `readonly` 和 `const`，建议作为常量声明时使用 `const`，作为属性时使用 `readonly`
:::



### 额外的属性检查

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



### 描述函数的类型和返回值

+ 直接将接口当作函数表达式的类型
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






## 在类中使用

### 类实现接口

+ 强制一个类去符合某种契约
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



### 接口继承接口

+ 接口之间的继承只是成员的简单复制
+ 一个接口可以继承多个接口
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


### 接口继承类

+ 若接口从类中继承了私有属性，则只有该类的子类才能实现该接口
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



### 混合多种类型

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