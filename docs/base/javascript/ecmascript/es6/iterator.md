## Iterator
&emsp;&emsp;Iterator 是一种接口，为各种不同的数据提供统一的访问机制。

### 用处

+ 为各种数据结构提供统一的、简单的访问接口
+ 使数据结构的成员能够按次序排列
+ 能够使用 ES6 提供的 `for...of` 循环


## 实现 Iterator 接口

### 手动实现 Iterator 接口

&emsp;&emsp;对象原生没有具备 Iterator 接口，可以通过添加 `[Symbol.iterator]` 属性，使其实现 Iterator 接口。因此任何数据结构，只要具有 `[Symbol.iterator]` 属性，就实现了 Iterator 接口。

说明：

+ `[Symbol.iterator]` 是 `Symbol` 对象的 `iterator` 属性，这里是一个表达式，因此要用 `[]` 包裹
+ `[Symbol.iterator]` 属性是一个函数，它返回一个 `next()` 函数

```js
const obj = {
  [Symbol.iterator] : function () {
    return {
      next: function () {
        return {
          value: 1,
          done: true
        }
      }
    }
  }
}
```

### 原生具备 Iterator 的数据结构

+ Array
+ Set
+ Map
+ String
+ TypedArray
+ arguments
+ NodeList

```js
// Array
const arr = [1, 2, 3, 4, 5]
const iter = arr[Symbol.iterator]()

console.log(iter.next().value)  // 1
console.log(iter.next().value)  // 2
console.log(iter.next().value)  // 3

// String
const str = 'hello'
const iter = str[Symbol.iterator]()

console.log(iter.next().value)  // 'h'
console.log(iter.next().value)  // 'e'
console.log(iter.next().value)  // 'l'
```

### 使用 Generator 函数

&emsp;&emsp;`[Symbol.iterator]` 方法的最简单实现，还是使用 `Generator` 函数。

```js
let myIterable = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
}
console.log([...myIterable]) // [1, 2, 3]

// 或者采用下面的简洁写法
let obj = {
  * [Symbol.iterator]() {
    yield 'hello';
    yield 'world';
  }
};

for (let x of obj) {
  console.log(x);
}
// "hello"
// "world"
```

## for...of

&emsp;&emsp;一个数据结构只要部署了 `[Symbol.iterator]` 属性，就被视为具有 `iterator` 接口，就可以用 `for...of` 循环遍历它的成员。也就是说，`for...of` 循环内部调用的是数据结构的 `[Symbol.iterator]` 方法。

### 使用
```js
// Array
const arr = [1, 2, 3]
for (const i of arr) {
  console.log(i)  // 1 2 3
}

// String
const str = 'hi'
for (const i of str) {
  console.log(i)  // 'h' 'i'
}
```

### 比较其他遍历方法

常用的遍历方法：

+ for 循环
+ forEach 函数
+ for...in 
+ for...of

对比：

+ `for 循环` 语法不够简便
+ `forEach 函数` 不能中途提出
+ `for...in` 读取的是键名，而 `for...of` 读取的是键值
+ `for...in` 遍历数组时会返回非数字索引的属性，而 `for...of` 只会返回数字索引的属性
+ `for...in` 会以任意顺序遍历键名
+ `for...of` 会正确识别 32 位 UTF-16 字符


## 其他

### 使用 Iterator 的场合

1. 数组/Set/Map 结构的解构赋值
2. 扩展运算符
3. Generator 的 yield*
4. for...of
5. Array.from()：将类数组转化为数组，因为不是所有类数组具有 Iterator 接口
6. Map(), Set(), WeakMap(), WeakSet()
7. Promise.all()
8. Promise.race()


### return() / throw()

&emsp;&emsp;Iterator 除了 next() 方法，还具有 return() 和 throw() 方法，但是他们是可选的，可以在 return() 中进行程序的清理工作。

+ return()：for...of 提前退出或者完成时调用，且其必须返回一个对象
+ throw()：主要是配合 Generator 函数使用，一般的遍历器对象用不到