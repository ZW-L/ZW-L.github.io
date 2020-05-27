## 简介

+ Node.js API 中，回调函数都遵循 “error-first”(错误优先回调)，即回调函数的第一个参数为错误对象，第二个参数为操作成功时返回的数据。同时：
  + 当发生错误时，第一个参数为错误对象，第二个参数为空
  + 当响应成功时，第一个参数为 `null`，第二个参数为响应数据
+ 因此，在回调函数的内部，一般都要进行**错误检测**
```js
// 错误检测
fs.readFile('a.txt', function (err, data) {
  if (err) {
    console.log(err.message)
  }
  console.log(data)
})

// 测试时使用 assert 断言
fs.readFile('a.txt', function (err, data) {
  assert.equal(null, err)
  console.log(data)
})
```
+ 此外，还要在特定情况下进行异常处理
```js
function readJSON(callback) {
  fs.readFile('a.txt', function (err, data) {
    let parsedJson

    // 错误检测
    if (err) {
      return callback(err)
    }

    // 异常处理
    try {
      parsedJson = JSON.parse(data)
    } catch (e) {
      return callback(e)
    }

    return callback(null, parsedJson)
  })
}
```



## 优点

+ 遵循约定时，回调函数的代码形式比较容易理解


## 缺陷

+ **回调地狱**：当回调函数里有其他异步操作，而该操作继续嵌套异步操作时，容易造成很深的回调层级
```js
step1(function (value1) {
  step2(value1, function(value2) {
    step3(value2, function (value3) {
      // more step...
    })
  })
})
```
