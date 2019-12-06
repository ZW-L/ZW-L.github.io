## setInterval 使用时的注意事项

+ 避免内存泄漏，在退出当前页面前清除定时器



## 用 setTimeout 实现 setInterval

**使用 setTimeout 实现 setInterval：**
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


## 304 的缓存原理




## Web 缓存的优点及实现

**优点：**
+ 减少不必要的请求，降低服务器的压力
+ 直接读取浏览器的数据，加快页面打开速度

**实现：**
+ 


## CDN 及其原理

+ CDN：内容分发网络。尽可能的避开互联网有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快更稳定。
+ 原理：广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对的地区或者网络中；将用户的访问指向距离最近的缓存服务器，由缓存服务器直接响应用户的请求