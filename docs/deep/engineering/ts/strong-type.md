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

+ 接口类型：作为一个接口限定的成员和数据类型
+ 类类型：作为一个构造函数或构造函数的实例

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

## 高级类型

&emsp;&emsp;


+ 交叉类型
+ 联合类型
+ 类型保护与区分类型
+ 可以为 null 的类型
+ 类型别名
+ ...




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




