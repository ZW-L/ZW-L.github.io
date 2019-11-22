## 基础类型

**类型标记：**
+ `boolean`: `true` || `false`
+ `number`: 2/8/10/16 进制的浮点数
+ `string`: 单引号、双引号、模板字符串
+ `[]`: 数组
+ `[type_1, type_2, ...]`: 元组
+ `enum`: 枚举
+ `any`: 任意值
+ `null`: `null`
+ `undefined`: `undefined`
+ `never`: 永不存在的值的类型

```js
let bool: boolean = true;
let num: number = 100;
let str: string = 'hello';
let arr: number[] = [1, 2, 3];
let tur: [number, string] = [12, '12'];
enum Color { red, blue, green };
let big: any = 122;
let nill: null = null;
let unde: undefined = undefined;
```

**说明：**
+ 默认情况下 `null` 和 `undefined` 是所有类型的子类型，也就是说可以把 `null` 和 `undefined` 赋值给 `number` 或其他类型的变量
+ 然而，当你指定了 `--strictNullChecks` 标记，`null` 和 `undefined` 只能赋值给 `void` 和它们自身；鼓励尽可能地使用`--strictNullChecks`
+ `never` 类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是 `never` 的子类型或可以赋值给 `never` 类型（除了 `never` 本身之外）。 即使 `any` 也不可以赋值给 `never`


## 变量声明 & 解构
## Symbols
## Iterators && Generators

## 接口

&emsp;&emsp;

**要点：**
+ 属性标记：不能缺省的属性
+ 可选属性：`name?:string`
+ 只读属性：`readonly name:string`
+ 额外的属性检查
+ 描述函数类型
+ 可索引的类型
+ 在类中使用
  + 类实现接口
  + 类继承接口
  + 混合多种类型
  + 接口继承类

```js
interface Person {
  name: string, // 属性标记
  age?: number, // 可选属性
  readonly sex: string, // 只读属性
}
```

## 类

&emsp;&emsp;

**要点：**
+ 继承
+ 属性修饰符
  + public
  + private
  + protected
+ 只读属性：`readonly`
+ `getter/setter`
+ 静态属性：`static`
+ 抽象类：`abstract`
+ 构造函数
+ 接口继承类


## 函数

&emsp;&emsp;

**要点：**
+ 参数类型和返回值类型
+ 可选参数
+ 默认参数
+ 剩余参数
+ this
+ 箭头函数
+ 函数重载



## 泛型

&emsp;&emsp;

**要点：**
+ 泛型变量
+ 泛型类型
+ 泛型类
+ 泛型约束
+ 泛型约束中的类型参数
+ 泛型中的类类型


## 枚举

&emsp;&emsp;

**要点：**
+ 枚举的定义
+ 常数枚举
+ 外部枚举


## 类型推论
## 类型兼容性
## 高级类型
&emsp;&emsp;

**要点：**
+ 交叉类型
+ 联合类型
+ 类型保护与区分类型
+ 可以为 null 的类型
+ 类型别名
+ ...



## 模块和模块解析
## 命名空间和模块
## 声明合并
## `.d.ts` 文件
## JSX
## Decorators
## 混入
## 三斜线指令
## js 文件的类型检查


