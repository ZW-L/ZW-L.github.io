## 异步迭代

+ 可以在 `for...of` 前使用 `await` 关键字，以串行的方式运行异步操作

```js
async function process(array) {
  for await (let i of array) {
    doSomething(i)
  }
}
```


## Promise 变动

+ `Promise.finally()`: 类似异常捕获的 `finally` 子句，指定在 `Promise` 中始终会执行的操作

```js
doSomething().then(data => {
    // do something
  }).catch(err => {
    console.log(err)
  }).finally(() => {
    // do something
  })
```


## String

+ 非转义序列的模板字符串


## RegExp 变动

### 介绍

+ 命名捕获分组
+ 反向断言
+ dotAll 模式
+ Unicode 转义


### 命名捕获分组

使用命名捕获组符号 `?<name>` 指代捕获的分组，能够在捕获结果分组中显示获取：

```js
const regex = /(?<year>[0-9]{4})-(?<month>[0-9]{2})-(?<day>[0-9]{2})/
const match = reDate.exec('2019-12-01')

console.log(match.groups.year) // 2019
console.log(match.groups.month) // 12
console.log(match.groups.day) // 01
```

### 反向断言

+ 肯定反向断言(`?<=`): 

```js

```

+ 否定反向断言(`?<!`): 

```js

```


### dotAll 模式

`.` 能匹配除换行符外的任何单字符，使用标记 `s` 能使 `.` 也能匹配换行符:

```js
const str = 'hello\nworld'

console.log(/hello.world/.test(str)) // false
console.log(/hello.world/s.test(str)) // true
```

### Unicode 转义

+ 在此之前，在正则表达式中本地访问 Unicode 字符属性是不被允许的
+ ES9 中，在正则表达式中使用标记 `u`，就可以在 `\p` 块内以键值对的方式设置需要匹配的属性


::: tip 说明：
+ 此特性可以避免使用特定 Unicode 区间来进行内容类型判断，提升可读性和可维护性
:::