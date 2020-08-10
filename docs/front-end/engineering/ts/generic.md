## 简介

+ [泛型](https://typescript.bootcss.com/generics.html)可以用来创建可重用的组件，一个组件可以支持多种类型的数据
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




## 泛型接口

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



## 泛型类

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




## 泛型约束

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

+ 泛型类型参数约束：使用 `keyof` 引用泛型类型的参数
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
