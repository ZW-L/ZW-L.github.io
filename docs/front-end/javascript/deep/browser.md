---
sidebarDepth: 2
---

## 原理

### 渲染流程

1. **构建 `DOM` 树**：`HTML` 解析器解析 `HTML` 文档，构建 `DOM` 树
2. **构建 `CSSOM` 树**：`CSS` 解析器解析 `CSS` 样式文件，构建 `CSSOM` 树
3. **合并为 `Render` 树**：从根节点递归调用，计算每一个元素的大小，位置等
4. **布局绘制**：遍历 `Render` 树，绘制每一个节点

![浏览器渲染流程](./imgs/browser-render.png)



### 重绘和回流

**说明：**

+ 重绘（Repaint）：当页面中元素样式的改变并不影响它在文档流中的位置时(如修改 color, visibility 等)，浏览器将新样式赋予给元素并重新绘制的过程
+ 回流（Reflow）：当渲染树中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程(**回流必将引起重绘，重绘不一定会引起回流**)

**触发回流的情况：**

+ 页面首次渲染
+ 浏览器窗口大小变化
+ 元素尺寸或位置变化
+ 元素内容变化
+ 添加或删除元素

**回流的性能影响：**

+ 往往回流一个元素发生回流，它的父元素以及它附近的元素也会产生回流，造成浏览器不必要的性能损耗
+ 现代浏览器也对频繁的回流或重绘操作进行优化，浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列，若队列中的任务数量或时间间隔达到一个阈值，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次，访问以下属性会使浏览器立刻清空该队列：
  + `clientWidth`/`clientHeight`/`clientTop`/`clientLeft`
  + `offsetWidth`/`offsetHeight`/`offsetTop`/`offsetLeft`
  + `scrollWidth`/`scrollHeight`/`scrollTop`/`scrollLeft`
  + `width`/`height`
  + `getComputedStyle()`
  + `getBoundingClientRect()`

**避免发生回流：**

+ CSS 优化
  + 避免使用 `table` 布局
  + 避免设置多层内联样式
  + 将动画效果应用到 `absolute`/`fixed` 定位的元素上
+ Javascript 优化
  + 避免频繁修改样式
  + 避免频繁操作 `DOM`，或使用 `DocumentFragment`
  + 使用变量将会触发回流或重绘的属性缓存



### 输入网址到渲染完成

1. **获取域名的 IP 地址**，[主要流程](../../../base/computed-network/dns/intro.html#解析过程)：
    1. 浏览器先请求本地域名服务器，本地域名服务器查看其本地 IP 缓存列表，尝试读取已缓存的 IP
    2. 没有已缓存的 IP 时，本地域名服务器会请求根域名服务器
    3. 根域名服务器查询其本地记录表，取得域名所在的域名服务器，返回给本地域名服务器
    4. 本地域名服务器拿到域名服务器后向其发起请求，后者查询其本地记录表得到 IP 地址，返回给本地域名服务器
    5. 本地域名服务器将 IP 地址其添加到本地缓存表，最后再返回该 IP 地址给浏览器
2. **浏览器使用 IP 地址与服务器建立 TCP 连接**(三次握手)：
    1. 浏览器发送报文给服务器，请求建立连接
    2. 服务器响应报文，回应浏览器可以建立连接，并处于等待连接状态
    3. 浏览器再次发送报文给服务器，完成建立连接
3. **浏览器的 Browser 进程向服务器请求资源**：
    + Browser 进程发起 HTTP 请求, 服务器处理并响应请求(也可能返回错误或重定向)
    + Browser 进程接收 HTTP 响应数据和信息，将其交由 Renderer 进程
4. **浏览器的 Renderer 进程渲染页面**，[渲染流程](#渲染流程)：
    + (中途可能继续需要 Browser 进程发起请求获取资源，或需要 GPU 进程来帮助渲染)
    1. **构建 `DOM` 树**：`HTML` 解析器解析 `HTML` 文档，构建 `DOM` 树
    2. **构建 `CSSOM` 树**：`CSS` 解析器解析 `CSS` 样式文件，构建 `CSSOM` 树
    3. **合并为 `Render` 树**：从根节点递归调用，计算每一个元素的大小，位置等
    4. **布局绘制**：遍历 `Render` 树，绘制每一个节点
5. Browser 进程接收到渲染结果并将结果绘制出来，呈现给用户




### 其他

+ 浏览器解析 HTML 代码的原理，构建 DOM 树的流程
+ 浏览器如何解析 CSS 规则，并将其应用到 DOM 树上
+ 浏览器如何将解析好的带有样式的 DOM 树进行绘制
+ 列举 IE 与其他浏览器不一样的特性
+ 各浏览器使用的 Javascript 引擎以及异同点、如何在代码中区分
+ 请求数据到请求结束的过程与服务器进行了几次交互
+ 浏览器的运行机制，如何配置资源异步/同步加载
+ 浏览器的垃圾回收机制、如何避免内存泄漏
+ 浏览器采用的缓存方案，如何选择和控制合适的缓存方案
+ 浏览器提供的几种存储机制、优缺点、开发中的选择
+ 浏览器跨标签通信
+ 浏览器的同源策略，如何避免同源策略，几种方式的异同以及如何选型
+ 前端发起网络请求的几种方式及其底层实现，可以手写原生 Ajax、fetch，熟练使用第三方库
+ DOM 事件流的具体实现机制、不同浏览器的差异、事件代理






## 安全

### XSS

+ **原理**：往 `Web` 页面插入恶意的 `html` 标签或者 `js` 代码
+ 分类：
+ 具体案例：
+ 前端如何防御：
  + 尽量采用 `post` 而不使用 `get` 提交表单
  + 避免 `cookie` 中泄漏用户的隐私


### CSRF

+ **原理**：通过伪装来自受信任用户的请求(如利用 `CSRF` 跨站请求伪装来获取服务器数据)
+ 具体案例：
+ 前端如何防御：
  + 在客服端页面增加伪随机数、验证码


### XSS 和 CSRF 的区别

+ `XSS` 是获取信息，不需要提前知道其他用户页面的代码和数据包
+ `CSRF` 代替用户完成指定的动作，需要知道其他页面的代码和数据包


### HTTP 劫持

+ **原理**：
+ 前端如何防御：


### SQL 注入

+ **原理**：将 `SQL` 代码伪装到输入参数中，传递到服务器解析并执行
+ 前端如何防御：
  + 对用户输入进行校验
  + 不使用动态拼接 `SQL`





## 跨域

### 同源策略

+ 参考：
  + [阮一峰 - 浏览器同源政策及其规避方法](http://www.ruanyifeng.com/blog/2016/04/same-origin-policy.html)
+ 1995年由 Netscape 公司引入浏览器，目前所有浏览器都实行这个政策。最初含义是指两个不同“源”的网页不能共享 Cookie，同源是指协议、域名和端口都相同
+ 与 `http://www.example.com/dist/index.html` 是否同源：

|URL|同源|说明|
|-|-|-|
|http://www.example.com/dist/a/index.html|✅|协议、域名、端口相同|
|http://www.example.com/a/index.html|✅|协议、域名、端口相同|
|https://www.example.com/dist/index.html|❌|协议不同：http 和 https|
|http://example.com/dist/index.html|❌|域名不同：一级域名和二级域名|
|http://v2.example.com/dist/index.html|❌|域名不同：二级域名不同|
|http://www.example.com:81/dist/index.html|❌|端口不同：80 和 81|


### 跨域的种类和方式

+ Cookie
  + `document.domain`：客户端设置，适用于一级域名相同的两个网站，均设置相同的值，即可以访问
  + `domain=.example.com`：服务端设置 Cookie 字段，适用于二级/三级域名，客户端不用设置
+ iframe
  + 片段标识符
  + `window.name`
  + `poseMessage`
+ localeStorage
  + `poseMessage`
+ ajax
  + CROS：需要服务端配置允许响应的 URL 列表；支持所有请求
  + JSONP：客户端动态添加 `<script>` 标签，并在里面设置请求的 URL 和名为回调函数的查询参数；兼容性好，但仅支持 GET 请求
  + WebSocket：需要服务端支持和配置





### 实现 Ajax

+ 实现：
```js
function _ajax(url) {
  let xmlhttp = null
  // 1.创建 XMLHttpRequest 实例
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }

  if (!xmlhttp) {
    alert("Your browser does not support XMLHTTP.")
  } else {
    // 2.添加 onreadystatechange 事件处理函数
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          // 成功响应时处理响应信息和数据
          document.getElementById('app').innerHTML = xmlhttp.responseText
        }
      }
    }

    xmlhttp.open('GET', url, true)  // 3.创建 GET 请求
    xmlhttp.send(null)              // 4.发送请求
  }
}
```

::: tip 过程：
1. 创建 `XMLHttpRequest` 对象的实例(应考虑兼容性)
2. 为实例添加 `onreadystatechange` 监听请求状态的变化(在状态变化时处理响应信息和数据)
3. 使用实例的 `open(method, url)` 方法创建一个请求
4. 使用实例的 `send()` 方法发送请求(同时可以给服务器附加信息)
:::

+ Promise 封装：
```js
const getJSON = function(url) {
  return new Promise(function(resolve, reject){
    let client = null
    if (window.XMLHttpRequest) {
      client = new XMLHttpRequest()
    } else if (window.ActiveXObject) {
      client = new ActiveXObject('Microsoft.XMLHTTP')
    }

    if (!client) {
      reject(new Error('Your browser does not support XMLHTTP.'))
    }

    client.onreadystatechange = function() {
      if (this.readyState !== 4) return
      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    client.responseType = 'json'
    client.setRequestHeader('Accept', 'application/json')
    client.open('GET', url)
    client.send()
  })
}
```


### 实现 JSONP

