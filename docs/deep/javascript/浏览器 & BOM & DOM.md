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




## BOM

### setInterval 需要注意的点，使用 setTimeout 实现 setInterval

**使用 setInterval 需要注意的点：**
+ 避免内存泄漏，在退出当前页面前清除定时器

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

### token, cookie, session 三者的理解和区别

**理解：**
+ `cookie`：
  + 浏览器里面能永久存储的一种数据，由服务器生成，发送给浏览器
  + 浏览器把 `cookie` 以 `k-v` 形式保存到某个目录下的文本文件内，下一次请求同一网站时会把该 `cookie` 发送给服务器
  + 浏览器加入了一些限制确保 `cookie` 不会被恶意使用，同时每个域的 `cookie` 数量是有限的
+ `session`：
  + 会话，服务器给每个客户端分配的不同的“身份标识”，客户端每次向服务器发请求的时候，都带上这个“身份标识”，服务器就知道这个请求来自哪个客户端
  + 客户端有很多种方式保存这个“身份标识”，对于浏览器客户端，大家都默认采用 `cookie` 的方式
  + 服务器使用 `session` 把用户的信息临时保存在了服务器上，用户离开网站后 `session` 会被销毁。这种用户信息存储方式相对 `cookie` 来说更安全，可是`session`有一个缺陷：如果web服务器做了负载均衡，那么下一个操作请求到了另一台服务器的时候`session`会丢失
  + 在基于 `Session` 的身份验证中，服务器将在用户登录后为用户创建一个 `Session`。然后，`Session ID` 会被存储在用户浏览器的 `Cookie` 中。当用户保持登录状态时，`Cookie` 将与每个后续请求一起被发送出去。然后，服务器可以将存储在 `Cookie` 上的 `Session ID` 与存储在内存中或者数据库中的 `Session` 信息进行比较，以验证用户的身份，返回给用户客户端响应信息的时候会附带用户当前的状态
+ `token`：
  + 无状态：基于 `Token` 的身份验证是无状态的，不将用户信息存在服务器或 `Session` 中
  + 安全性：`Token` 是有时效的，一段时间之后用户需要重新验证，也可以手动撤回 `Token`
  + 可扩展性：`Token` 能够创建与其它程序共享权限的程序
  + 多平台跨域：只要用户有一个通过了验证的 `token`，数据和资源就能够在任何域上被请求到
  + 基于标准：创建 `Token` 的时候，可以设定一些选项

**基于 Token 的身份验证的过程：**
1. 用户通过用户名和密码发送请求
2. 程序验证
3. 程序返回一个签名的 `token` 给客户端
4. 客户端储存 `token`,并且每次用于每次发送请求
5. 服务端验证 `token` 并返回数据

### 浏览器渲染原理及流程

**流程：**
1. 构建 `DOM` 树：渲染引擎解析 `HTML` 文档，首先将标签转换成 `DOM` 树中的 `DOM Node`(包括 `js` 生成的标签)生成内容树
2. 构建 `render` 树：解析对应的 `CSS` 样式文件信息（包括 `js` 生成的样式和外部的样式）
3. 布局 `render` 树：从根节点递归调用，计算每一个元素的大小，位置等，给出每个节点所在的屏幕的精准位置
4. 绘制 `render` 树：遍历渲染树，使用 `UI` 后端层来绘制每一个节点

+ 重绘：当盒子的位置、大小以及其他属性，例如颜色、字体大小等到确定下来之后，浏览器便把这些颜色都按照各自的特性绘制一遍，将内容呈现在页面上。触发重绘的条件：改变元素外观属性。如：color，background-color等
重绘是指一个元素外观的改变所触发的浏览器行为，浏览器会根据元素的新属性重新绘制，使元素呈现新的外观
注意：table 及其内部元素需要多次计算才能确定好其在渲染树中节点的属性值，比同等元素要多发时间，要尽量避免使用table布局

+ 重排（重构/回流/reflow）： 当渲染书中的一部分（或全部）因为元素的规模尺寸，布局，隐藏等改变而需要重新构建，这就是回流。
每个页面都需要一次回流，就是页面第一次渲染的时候


### 304 的缓存原理

### Web 缓存的优点及实现

**优点：**
+ 减少不必要的请求，降低服务器的压力
+ 直接读取浏览器的数据，加快页面打开速度

**实现：**
+ 


### CDN 及其原理

+ CDN：内容分发网络。尽可能的避开互联网有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快更稳定。
+ 原理：广泛采用各种缓存服务器，将这些缓存服务器分布到用户访问相对的地区或者网络中；将用户的访问指向距离最近的缓存服务器，由缓存服务器直接响应用户的请求






## DOM

### 为什么 css 放在顶部而 js 写在后面

+ 浏览器预先加载 css 后，可以不必等待 HTML 加载完毕就可以渲染页面了
+ 其实 HTML 渲染并不会等到完全加载完在渲染页面，而是一边解析 DOM 一边渲染
+ js 写在尾部，主要是因为 js 主要扮演事件处理的功能，一方面很多操作是在页面渲染后才执行的

### 阻止事件冒泡、取消事件默认行为

```js
// 1.兼容的方法
function (e) {
  // 阻止事件冒泡
  if (e.stopPropagation) {
    e.stopPropagation()
  } else {
    e.cancelBubble = true // IE
  }
  // 取消事件默认行为
  if (e.preventDefault) {
    e.preventDefault()
  } else {
    e.returnValue = false // IE
  }
}

// 2.暴力的方法：同时阻止事件冒泡和取消事件默认行为，在特定情况下使用效果更佳
function (e) {
  return false
}
```

### 理解 NodeList

+ `NodeList` 是一个类数组，它的顺序就是元素在 `DOM` 树中的顺序，有一个 `length` 属性，有一个 `item()` 方法能访问特定节点
+ 静态 `NodeList`：由 `querySelectorAll()` 返回，当脚本更新页面之后，静态 `NodeList` 不会进行更新，也不会反映脚本的变更
+ 动态 `NodeList`：由 `getElementByClassName()` 和 `getElementByTagName()` 返回，当脚本更新页面之后，动态 `NodeList` 会进行更新
+ 动态 `NodeList` 的获取比静态 `NodeList` 要快

### 理解 createDocumentFragment()

### 常见的节点类型

**节点说明：**
节点|ID|说明
-|-|-
element|1|元素节点，HTML 标签名标记的元素
attribute|2|属性节点，形式为 `src="./cat.pic"`，<font color="red">无子节点</font>
text|3|文本节点，标签名之间的文本，<font color="red">无子节点</font>
comment|8|注释节点，表示文档注释，<font color="red">无子节点</font>
document|9|文档节点，即整个文档

**另外：**
+ `el.nodeName`：返回节点的名称(大写的标签名)
+ `el.nodeType`：返回节点的 `ID` 值

### 常见 DOM 操作: 查找、创建、添加、删除、替换、复制节点

**查找：**
```js
// 返回唯一节点的方法
document.getElementById('idName') // 速度最快的方法，因为 id 是唯一的
document.querySelector('css selector') // 灵活但兼容性不是很好

// 返回一个 NodeList 的方法
document.getElementByClassName('className') // IE8 及之前兼容不好
document.getElementByTagName('tagName') // 兼容性非常好
document.querySelectorAll('css selector') // 灵活但兼容性不是很好

// 访问相关节点，以下属性均是只读的(不能通过设置这些属性修改 DOM 结构)
// 使用这些属性存在一个问题：DOM 会将空格和回车解析为空白的文本节点，导致不会得到预期的结果；这也是 jQuery 受欢迎的原因之一
el.childNodes // 返回一个 NodeList，包含空格、换行等空白文本节点
el.children // 返回一个 HTMLCollection，不包含空格、换行等空白文本节点
el.parentNode
el.previousSibling
el.nextSibling
el.firstChild
el.lastChild
```

**创建：**
```js
const text = document.createTextNode('hello world') // 创建文本节点，需要添加到元素节点
const el = document.createElement('p') // 创建元素节点 p
document.createDocumentFragment() // 创建文档片段
```

**添加：**
```js
// appendChild()，追加子节点(文本节点或元素节点)
el.appendChild(text) // 添加文本节点
parentNode.appendChild(el) // 添加元素节点

// insertBefore()，在指定节点前面插入子节点
parentNode.insertBefore(el, otherEl)
```

**删除：**
```js
parentNode.removeChild(el) // 删除指定子节点，也会删除该子节点自身的所有子节点
```

**替换：**
```js
parentNode.replaceChild(newEl, oldEl) // 替换节点
```

**复制：**
```js
el.cloneNode() // 浅复制，仅复制当前节点自身(不复制子节点)，返回一个无父的新节点
el.cloneNode(true) // 深(递归)复制当前节点及其子节点
```

### 获取 HTML 内容的方式

**适用于文本节点：**
+ `nodeValue`：返回/设置文本节点的值

**适用于元素节点：**
+ `textContent`：返回/设置元素节点内的所有文本(忽略标签)，会保留空格和换行
+ `innerHTML`：返回/设置元素节点内的文本和标签
+ `innerText`：返回/设置元素节点内的文本，与 `textContent` 不同的是它不会保留空格和换行
+ `outerHTML`：类似 `innerHTML`，但是它获取和设置时还包括了当前元素节点的标签名
+ `outerText`：类似 `innerText`，读取值时二者是一样的，设置值时还包括了当前元素节点的标签名

**区分：**
+ 带 `inner` 的属性不会访问到元素节点本身的标签名，而带 `outer` 的属性会
+ 带 `HTML` 的属性都不会转义标签，而是正确渲染它们；带 `text` 的属性不会获取标签名或属性，不会渲染标签(而是把他们看作字符串)
+ `textContent` 获取的值是有空格和换行符的，而 `innerText/outerText` 没有
+ `innerText` 和 `outerText` 在读取时是一致的，设置时 `outerText` 会一同替换元素节点的标签

### 更新 HTML 内容的方法

+ `document.write()`：简单且速度块；但会覆盖整个页面的内容，一般用于测试
+ `el.innerHTML`：简单且速度快；但容易发生 XSS 脚本攻击，因此应只对信任的内容使用该方法 
+ `DOM` 操作：步骤比较繁琐；但是安全

### 访问属性节点的方式

+ `hasAttribute('attrName')`：判断元素是否包含指定属性
+ `getAttribute('attrName')`：获取元素的指定属性
+ `setAttribute('attrName')`：设置元素的指定属性，设置时会覆盖原有属性，而不是附加
+ `removeAttribute('attrName')`：删除元素的指定属性
+ `el.attributes`：返回一个 `NamedNodeMap`(包含元素的所有属性)

```js
// 1.在删除属性之前，先检测属性是否存在
if (el.hasAttribute('class')) {
  el.removeAttribute('class')
}

// 2.需要添加 class，但不覆盖已拥有的 class，需要先提取原有 class
const classes = para.getAttribute('class').split(' ')
para.setAttribute('class', classes.concat('active').join(' '))

// 3.当元素存在一个对象属性时，也可以采用赋值的方式
const classes = para.getAttribute('class').split(' ')
para.className = classes.concat('active').join(' ')
```