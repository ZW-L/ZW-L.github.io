## 介绍

+ 提供了一系列的语法糖，看起来更像 OOP 的方式
+ 使用 `class` 关键字声明一个类
+ 使用 `extend` 关键字声明类的继承
+ 使用 `constructor()` 函数定义构造方法
+ 使用 `super()` 函数调用父类的构造函数
+ 使用 `static` 关键字声明类的静态方法(即构造函数的方法)
+ 使用 `new.target` 访问创建实例时调用的构造函数

## 继承

+ 使用 `class` 语法实现继承时，子类必须要在 `constructor()` 函数内调用父类的构造函数(`super()`)，而且在这之前都不能访问 `this`
+ `super` 关键字
  + 调用变量时，在普通方法中指向父类的原型，在静态方法中指向父类
  + 调用方法时，在普通方法中指向父类的原型，在静态方法中指向父类，但是 `this` 绑定的是子类
+ `Object.getPrototypeOf(obj: Object): Object`: 获取 obj 类的父类
+ `Object.setPrototypeOf(child: Object, parent: Object)`: 将 parent 设置为 child 的原型