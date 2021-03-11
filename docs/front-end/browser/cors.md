---
sidebarDepth: 2
---

+ 浏览器跨标签通信
+ 浏览器的同源策略，如何避免同源策略，几种方式的异同以及如何选型
+ 前端发起网络请求的几种方式及其底层实现，可以手写原生 Ajax、fetch，熟练使用第三方库

## 介绍

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





## 手动实现

### Ajax

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



### JSONP
