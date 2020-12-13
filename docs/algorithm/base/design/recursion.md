## 简介

+ 递归(recursion)是指一个函数在其内部调用自身
+ 函数的执行机制和调用栈：在函数内部执行，若遇到另一个函数时，会先将当前函数的执行环境推入一个栈(调用栈)中，然后先去执行遇到的函数；而在递归中，执行栈通常是非常深的

+ 递归的三要素：
  1. 开始：在函数内部调用自身
  2. 延续：
  3. 退出：递归必须退出，不然你会感受到 CPU 和内存使用量飙升以及 `Maximum call stack size exceeded` / `Stack OverFlow`

+ 递归的优化：
  + 尾递归：递归会重复计算已计算的工作，使用额外的参数将
  + 改用栈：递归和栈是可以相互转换的
  + 改用循环：递归和循环是可以相互转换的


## 从简单的递归说起

### 计算阶乘

+ 递归公式：`n! = n * (n-1) * (n-2) * ... * 2 * 1` => `n! = n * (n-1)!`
+ 退出条件：`n === 1`
+ 代码实现：
```js
/**
 * 计算整数的阶乘
 * @param {number} n
 * @returns {number}
 */
function factorial (n) {
  if (n === 1) return 1
  return n * factorial(n - 1)
}
```

+ 代码只有两行，很简单是吧！可以先测试结果是否正确：
```js
factorial(5)  // 120
factorial(10) // 3628800
factorial(30) // 9.33262154439441e+157
```



### 斐波那契数列

+ 递归公式：看一下斐波那契数列的定义，可以知道其递归公式为 `an = an-1 + an-2`
+ 退出条件：`n === 1` / `n === 2`
+ 代码实现：
```js
/**
 * 计算指定项的斐波那契数列
 * @param {number} n 需要计算的第几项
 * @returns {number}
 */
function fibonacci (n) {
  if (n === 1 || n === 2) return 1
  return fibonacci(n - 1) + fibonacci(n - 1)
}
```

+ 同样，测试一下结果：
```js
fibonacci(5)   // 5
fibonacci(10)  // 65
fibonacci(30)  // 268435456
```




## 汉诺塔问题



