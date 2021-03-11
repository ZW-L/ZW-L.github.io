
+ 浏览器的运行机制，如何配置资源异步/同步加载
+ 浏览器的垃圾回收机制、如何避免内存泄漏



## 定时器


+ setInterval 使用的注意事项：
  + 避免内存泄漏，在退出当前页面前清除定时器

+ 用 setTimeout 实现 setInterval：
```js
// 递归实现
function _setInterval(fn, delay) {
  setTimeout(function() {
    fn()
    _setInterval(fn, delay)
  }, delay)
}

// 调用
_setInterval(function() {
  console.log(new Date())
}, 1000)
```