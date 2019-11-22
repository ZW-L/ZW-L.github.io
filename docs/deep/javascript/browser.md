## 浏览器

### 浏览器提供的符合 W3C 标准的 DOM 操作 API、浏览器差异、兼容性

### 浏览器提供的浏览器对象模型(DOM)提供的所有全局 API、浏览器差异、兼容性

### 大量 DOM 操作、海量数据的性能优化(合并操作、Diff、requestAnimationFrame 等)

### 网页从输入网址到渲染完成经历了哪些过程

1. 输入 `URL` 并回车后, 浏览器先查找当前 `URL` 是否存在缓存, 确认缓存是否过期
2. `URL` 经过 `DNS` 服务器解析为对应的 `IP` 地址
3. 根据 `IP` 与服务器建立 `TCP` 连接(三次握手)
4. 三次握手完成, 浏览器开始发起 `HTTP` 请求, 服务器处理并响应请求(也可能返回错误或重定向), 浏览器接收 HTTP 响应数据和信息
5. 浏览器根据服务器返回的数据(`html`, `js`, `css` 等)构建 `DOM` 树, 渲染页面
6. 关闭 `TCP` 连接(四次握手)

### 列举 IE 与其他浏览器不一样的特性

### 各浏览器使用的 Javascript 引擎以及它们的异同点、如何在代码中进行区分

### 请求数据到请求结束的过程与服务器进行了几次交互

### 浏览器解析 HTML 代码的原理，构建 DOM 树的流程

### 浏览器如何解析 CSS 规则，并将其应用到 DOM 树上

### 浏览器如何将解析好的带有样式的 DOM 树进行绘制

### 浏览器的运行机制，如何配置资源异步/同步加载

### 浏览器回流与重绘的底层原理、引发原因、如何避免

### 浏览器的垃圾回收机制、如何避免内存泄漏

### 浏览器采用的缓存方案，如何选择和控制合适的缓存方案

### 浏览器提供的几种存储机制、优缺点、开发中的选择

### 浏览器跨标签通信

### 浏览器海量数据存储、操作性能优化

### 浏览器的同源策略，如何避免同源策略，几种方式的异同以及如何选型

### 前端发起网络请求的几种方式及其底层实现，可以手写原生 Ajax、fetch，熟练使用第三方库

### DOM 事件流的具体实现机制、不同浏览器的差异、事件代理




## Ajax & 跨域

### 同源策略

### 跨域的方式

+ jsonp

### Ajax 的四个步骤

**过程：**
1. 创建 `XMLHttpRequest` 对象的实例
2. 为实例添加 `onreadystatechange` 监听请求状态的变化
3. 使用实例的 `open(method, url)` 方法创建一个请求
4. 使用实例的 `send()` 方法发送请求

```js
function _ajax(url) {
  let xmlhttp = null
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    // 不支持 XMLHttpRequest 对象的浏览器
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }

  if (!xmlhttp) {
    alert("Your browser does not support XMLHTTP.")
  } else {
    // 添加 onreadystatechange 事件处理函数
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) { // 
        if (xmlhttp.status === 200) { // 成功响应时
          box.innerHTML = xmlhttp.responseText
        }
      }
    }
    // 创建 GET 请求
    xmlhttp.open('GET', url, true)
    // 同时可以给服务器附加信息
    xmlhttp.send(null)
  }
}
```

### readyState 的值

+ 0: 
+ 1: 
+ 2: 
+ 3: 
+ 4: 

### GET 和 POST 的区别

+ GET 一般用于请求数据, POST 一般用于发送数据
+ GET 安全性底, POST 安全性较高
+ GET 传递参数大小有限制, POST 将请求参数放进请求体中,大小没有限制
+ GET 一般会走缓存, POST 不走缓存




## 浏览器安全

### XSS 攻击的原理、分类、具体案例，前端如何防御

### CSRF 攻击的原理、具体案例，前端如何防御

### HTTP 劫持、页面劫持的原理，防御措施

### 常见的 Web 安全及防护原理

**SQL注入：** 将 `SQL` 代码伪装到输入参数中，传递到服务器解析并执行的一种攻击手法。防范：
+ 对用户输入进行校验
+ 不适用动态拼接 `SQL`

**XSS(跨站脚本攻击)：** 往 `Web` 页面插入恶意的 `html` 标签或者 `js` 代码。防范：
+ 尽量采用 `post` 而不使用 `get` 提交表单
+ 避免 `cookie` 中泄漏用户的隐式

**CSRF(跨站请求伪装)：** 通过伪装来自受信任用户的请求(例如利用 `CSRF` 跨站请求伪装来获取服务器数据)。防范：
+ 在客服端页面增加伪随机数，通过验证码

**点击劫持：**

### XSS 和 CSRF 的区别

+ `XSS` 是获取信息，不需要提前知道其他用户页面的代码和数据包
+ `CSRF` 代替用户完成指定的动作，需要知道其他页面的代码和数据包