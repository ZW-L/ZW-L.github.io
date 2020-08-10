---
sidebarDepth: 2
---

## 简介

+ [类](https://typescript.bootcss.com/classes.html)语法类似 ES6 `Class`，但是增加了强类型、成员修饰符、抽象类等特性



## 继承

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



## 属性修饰符

+ `public`：共有的属性，可缺省，成员默认的修饰符
+ `protected`：受保护的属性，只能在**本类或派生类**中访问
+ `private`：私有的属性，只能在**本类**中访问
+ `readonly`: 只读属性，**必须在声明时或构造函数里被初始化**

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




## 抽象类

抽象类包含了成员的实现细节，通常作为其他类的基类使用，使用关键字 `abstract` 定义一个抽象类，而且：
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