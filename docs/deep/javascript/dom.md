## 为什么 css 放在顶部而 js 写在后面

+ 浏览器预先加载 css 后，可以不必等待 HTML 加载完毕就可以渲染页面了
+ 其实 HTML 渲染并不会等到完全加载完在渲染页面，而是一边解析 DOM 一边渲染
+ js 写在尾部，主要是因为 js 主要扮演事件处理的功能，一方面很多操作是在页面渲染后才执行的

## 阻止事件冒泡 & 取消事件默认行为

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

## 理解 NodeList

+ `NodeList` 是一个类数组，它的顺序就是元素在 `DOM` 树中的顺序，有一个 `length` 属性，有一个 `item()` 方法能访问特定节点
+ 静态 `NodeList`：由 `querySelectorAll()` 返回，当脚本更新页面之后，静态 `NodeList` 不会进行更新，也不会反映脚本的变更
+ 动态 `NodeList`：由 `getElementByClassName()` 和 `getElementByTagName()` 返回，当脚本更新页面之后，动态 `NodeList` 会进行更新
+ 动态 `NodeList` 的获取比静态 `NodeList` 要快

## 理解 createDocumentFragment()



## 常见的节点类型

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


## DOM: 查找、创建、添加、删除、替换、复制

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
// 使用这些属性存在一个问题：DOM 会将空格和回车解析为空白的文本节点，导致不会得到预期的结果
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

## 获取 HTML 内容的方法

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


## 更新 HTML 内容的方法

+ `document.write()`：简单且速度块；但会覆盖整个页面的内容，一般用于测试
+ `el.innerHTML`：简单且速度快；但容易发生 XSS 脚本攻击，因此应只对信任的内容使用该方法 
+ `DOM` 操作：步骤比较繁琐；但是安全


## 访问属性节点的方式

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