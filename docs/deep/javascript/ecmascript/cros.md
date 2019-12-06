---
sidebarDepth: 2
---

## 同源策略



## 跨域的方式

+ jsonp




## Ajax

### 过程和实现

**过程：**

1. 创建 `XMLHttpRequest` 对象的实例
2. 为实例添加 `onreadystatechange` 监听请求状态的变化
3. 使用实例的 `open(method, url)` 方法创建一个请求
4. 使用实例的 `send()` 方法发送请求

**实现：**

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


### readyState

+ 0: 
+ 1: 
+ 2: 
+ 3: 
+ 4: 


