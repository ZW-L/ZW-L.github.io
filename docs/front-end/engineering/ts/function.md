---
sidebarDepth: 2
---

## 简介

+ [函数](https://typescript.bootcss.com/functions.html)支持 ES6 的所有语法，而且扩展了强类型、函数参数控制、函数重载等特性。



## 类型

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



## 参数

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



## 模拟函数重载

+ 为同一个函数提供多个函数类型定义来进行函数重载，在返回值类型为 `any` 的函数进行处理并返回结果
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