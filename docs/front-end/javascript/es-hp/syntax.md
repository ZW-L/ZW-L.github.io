---
sidebarDepth: 2
---

## 作用域相关



## 流程控制

### 条件语句

+ 将最可能出现的情况放在前面，保证条件语句尽早退出：
```js
if (score >= 90) {
  // ...
} else if (score >= 80) {
  // ..
} else if (score >= 70) {
  // ...
} else if (score >= 60) {
  // ...
} else {
  // ...
}

// 假设班级中不及格或低分的人数较多，应该改写为
if (score < 60) {
  // ...
} else if (score < 70) {
  // ...
} else if (score < 80) {
  // ...
} else if (score < 90) {
  // ...
} else {
  // ...
}
```

+ 将一系列并列的 `if...else` 语句组织成嵌套的 `if...else`（类似折半查找）：
```js
if (val === 0) {
  // ...
} else if (val === 1) {
  // ...
} else if (val === 2) {
  // ...
} else if (val === 3) {
  // ...
} else if (val === 4) {
  // ...
} else if (val === 5) {
  // ...
}

// 改写为
if (val < 3) {
  if (val === 0) {
    // ...
  } else if (val === 1) {
    // ...
  } else {
    // ...
  }
} else {
  if (val === 3) {
    // ...
  } else if (val === 4) {
    // ...
  } else {
    // ...
  }
}
```

+ 将判断多个离散值的 `if...else` 改写为 `switch`：
```js
if (color === 'red') {
  return result1
} else if (color === 'green') {
  return result2
} else if (color === 'blue') {
  return result3
} else {
  return result4
}

// 改写为
switch(color) {
  case 'red':
    return result1
  case 'green':
    return result2
  case 'blue':
    return result3
  default:
    return result4
}
```

+ 当存在多个键值的逻辑映射时，使用查找表：
```js
switch(val) {
  case 0:
    return result1
  case 1:
    return result2
  case 2:
    return result3
  case 3:
    return result4
  // 更多的 case...
  default:
    return default
}

// 完全摒弃条件语句，改写为
const results = [result1, result2, result3, result4 /* 更多返回值 */]
return results[val]
```

::: tip 说明：
+ `if...else` 的优化主要是减少 `condition` 中的条件比较次数
+ `if...else` 或 `switch` 的优化，或两者的转换对性能有提升，但不是很明显，有时候还会降低代码的可读性，使用哪种方式需依场景而定
+ `switch` 的一个优点是，它比较时使用的是 `===` 操作符，不会发生类型转换
+ **推荐使用：**
  + 只有少数的离散值时，使用纯 `if...else` 并将概率较高的判断放在前面
  + 需要对几个值域进行判断时，使用嵌套的 `if...else`
  + 包含多个离散值时，使用 `switch`
  + 只是为了映射多个键值时，使用查找表
:::

### 循环

+ 使用变量将值缓存：
```js
for (let i = 0; i < arr.length; i++) {
  // ...
}

// 改写为
for (let i = 0, len = arr.length; i < len; i++) {
  // ...
}
```
+ 反序迭代：
```js
for (let i = 0, len = arr.length; i < len; i++) {
  // ...
}

// 改写为
for (let i = arr.length; i--;) {
  // ...
}
// 或
let i = arr.length
while(i--) {
  // ...
}
```
+ 减少迭代次数（Duff's Device）：
```js

```
+ 需要严格要求迭代运行速度时，尽量使用循环迭代而不是函数迭代：
```js
arr.forEach(v => v * 2)

// 改写为
for (let i = arr.length; i--;) {
  arr[v] *= 2
}
```

::: tip 总结：
+ 缓存遍历有利于减少每次迭代的工作量，反序迭代使循环判断步骤从 `i < len === true` 变成了 `i === true`，也减少了工作量
+ 
+ 循环迭代会比函数迭代快一些
+ `for...in` 要比 `for`/`while`/`do...while` 慢，因为它每次迭代都要在示例或原型上查找；另外，不要使用 `for...in` 遍历数组
+ 从算法上优化，考虑使用更高效率的算法
:::



### 递归

+ 当调用栈不足时或调用栈过深导致运算过慢时，将递归改写为循环：
```js
// factorial() 递归写法
function factorial(n) {
  if (n === 1) {
    return 1
  }
  
  return n * factorial(n-1)
}
// 改写为
function factorial(n) {
  let res = 1
  while (n > 0) {
    res *= n
    n--
  }

  return res
}

// fibonacci() 递归写法
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1
  }

  return fibonacci(n-1) + fibonacci(n-2)
}
// 改写为
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  let a = 1
  let b = 1

  while (n > 2) {
    [a, b] = [b, a + b]
    n--
  }

  return a + b
}
```
+ 缓存递归结果：
```js
// factorial() 改写为
function factorial(n) {
  if (!factorial.cache) {
    factorial.cache = { 
      0: 1,
      1: 1,
    }
  }

  if (!factorial.cache.hasOwnProperty(n)) {
    factorial.cache[n] = n * factorial(n-1)
  }

  return factorial.cache[n]
}

// fibonacci() 改写为
function fibonacci(n) {
  if (!fibonacci.cache) {
    fibonacci.cache = { 
      1: 1,
      2: 1,
    }
  }

  if (!fibonacci.cache.hasOwnProperty(n)) {
    fibonacci.cache[n] = fibonacci(n-1) + fibonacci(n-2)
  }

  return fibonacci.cache[n]
}
```
+ 使用尾递归优化：
```js
// factorial() 改写为
function factorial(n) {
  return tail(n, 1)
}

function tail(n, prev) {
  if (n === 0) return prev

  return tail(n-1, prev*n)
}

// fibonacci() 改写为
function fibonacci(n) {
  return tail(n, 0, 1)
}

function tail(n, current, next) {
  if (n === 0) return current

  return tail(n - 1, next, current + next)
}
```

::: tip 说明：
+ 使用递归的代码结构简单（但是受限于运行环境的调用栈大小）
+ 当调用栈不足时可以使用循环代替递归（但是循环的代码量较大）
+ 也可以缓存递归计算结果（但是这也会消耗更多的内存）
+ 还可以使用尾递归优化（前提是浏览器支持该特性）
:::



## 字符串和正则表达式

