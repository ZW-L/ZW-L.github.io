## css 和 js 引入的位置

**位置**：
+ css 一般在 `<head>` 中引入
+ js 一般在 `<body>` 的最后引入


**解释**：
+ JS 引擎线程用于执行 js 代码，Renderer 线程用于渲染页面(构建 DOM 树、CSSOM 树、Render 树、布局绘制等)
+ JS 引擎线程和 Renderer 线程互斥，当执行 js 代码时，Renderer 线程会被挂起，延迟页面的渲染
+ js 代码中也可能操作 DOM，为了阻止与 Renderer 线程的差异(导致发生频繁的回流和重绘)，尽可能先完成页面渲染




## 阻止事件冒泡

```js
// 1.兼容的方法
function (e) {
  if (e.stopPropagation) {
    e.stopPropagation()
  } else {
    e.cancelBubble = true // IE
  }
}

// 2.暴力的方法：同时阻止事件冒泡和取消事件默认行为，在特定情况下使用效果更佳
function (e) {
  return false
}
```


## 取消事件默认行为

```js
// 1.兼容的方法
function (e) {
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




## NodeList

+ 是一个类数组，它的顺序就是元素在 `DOM` 树中的顺序，包含属性：
  + `length`：包含节点的数量
  + `item()`：能访问特定节点
+ 静态 `NodeList`：由 `querySelectorAll()` 返回
+ 动态 `NodeList`：由 `getElementByClassName()`/`getElementByTagName()` 返回


::: tip 区分 静态/动态 NodeList：
+ 动态 `NodeList` 的获取比静态 `NodeList` 要快
+ 当脚本更新页面之后，动态 `NodeList` 会进行更新，而静态 `NodeList` 不会
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <p class="para">hello</p>
  <p class="para">world</p>
  <script>
    const dynamicList = document.getElementsByClassName('para')
    const staticList = document.querySelectorAll('.para')

    console.log(dynamicList.length, staticList.length)   // 2 2
    document.body.removeChild(dynamicList[0])
    console.log(dynamicList.length, staticList.length)   // 1 2
  </script>
</body>
</html>
```
:::




## createDocumentFragment()




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



## DOM 操作

+ 查找
```js
// 返回唯一节点的方法
document.getElementById('idName')       // 速度最快的方法，因为 id 是唯一的
document.querySelector('css selector')  // 灵活但兼容性不是很好

// 返回一个 NodeList 的方法
document.getElementByClassName('className')   // IE8 及之前兼容不好
document.getElementByTagName('tagName')       // 兼容性非常好
document.querySelectorAll('css selector')     // 灵活但兼容性不是很好

// 访问相关节点，以下属性均是只读的(不能通过设置这些属性修改 DOM 结构)
// 使用这些属性存在一个问题：DOM 会将空格和回车解析为空白的文本节点，导致不会得到预期的结果
el.childNodes       // 返回一个 NodeList，包含空格、换行等空白文本节点
el.children         // 返回一个 HTMLCollection，不包含空格、换行等空白文本节点
el.parentNode       // 返回父节点
el.previousSibling  // 返回上一个兄弟节点
el.nextSibling      // 返回下一个兄弟节点
el.firstChild       // 返回第一个孩子节点
el.lastChild        // 返回最后一个孩子节点
```

+ 创建
```js
const text = document.createTextNode('hello world') // 创建文本节点，需要添加到元素节点
const el = document.createElement('p')              // 创建元素节点 p
document.createDocumentFragment()                   // 创建文档片段
```

+ 添加
```js
// appendChild()，追加子节点(文本节点或元素节点)
el.appendChild(text)        // 添加文本节点
parentNode.appendChild(el)  // 添加元素节点

// insertBefore()，在指定节点前面插入子节点
parentNode.insertBefore(el, otherEl)
```

+ 删除
```js
parentNode.removeChild(el) // 删除指定子节点，也会删除该子节点自身的所有子节点
```

+ 替换
```js
parentNode.replaceChild(newEl, oldEl) // 替换节点
```

+ 复制
```js
el.cloneNode()        // 浅复制，仅复制当前节点自身(不复制子节点)，返回一个无父的新节点
el.cloneNode(true)    // 深复制(递归)当前节点及其子节点
```



## 获取 HTML 内容

**适用于文本节点：**
+ `nodeValue`：返回/设置文本节点的值

**适用于元素节点：**
+ `textContent`：返回/设置元素节点内的所有文本(忽略标签)，会保留空格和换行
+ `innerHTML`：返回/设置元素节点内的文本和标签
+ `innerText`：返回/设置元素节点内的文本，与 `textContent` 不同的是它不会保留空格和换行
+ `outerHTML`：类似 `innerHTML`，但是它获取和设置时还包括了当前元素节点的标签名
+ `outerText`：类似 `innerText`，读取值时二者是一样的，设置值时还包括了当前元素节点的标签名

::: tip 区分：
+ 带 `inner` 的属性不会访问到元素节点本身的标签名，而带 `outer` 的属性会
+ 带 `HTML` 的属性都不会转义标签，而是正确渲染它们；带 `text` 的属性不会获取标签名或属性，不会渲染标签(而是把他们看作字符串)
+ `textContent` 获取的值是有空格和换行符的，而 `innerText/outerText` 没有
+ `innerText` 和 `outerText` 在读取时是一致的，设置时 `outerText` 会一同替换元素节点的标签
:::



## 更新 HTML 内容

+ `document.write()`：简单且速度块；但会覆盖整个页面的内容，一般用于测试
+ `el.innerHTML`：简单且速度快；但容易发生 XSS 脚本攻击，因此应只对信任的内容使用该方法 
+ `DOM` 操作：步骤比较繁琐；但是安全



## 访问属性节点

+ `hasAttribute(attr)`：判断元素是否包含指定属性
+ `getAttribute(attr)`：获取元素的指定属性
+ `setAttribute(attr, value)`：设置元素的指定属性，设置时会覆盖原有属性，而不是附加
+ `removeAttribute(attr)`：删除元素的指定属性
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



## 获取盒子的准确尺寸

+ 尺寸属性对比：

|属性|类型|说明|
|-|-|-|
|el.style.width/height|string|内联宽高，非内联样式读取始终为 0|
|el.clientWidth/clientHeight|readonly int|内部宽度，包括 padding|
|el.offsetWidth/offsetHeight|readonly int|布局宽高，包括 padding, border, scrollBar|
|el.scrollWidth/scrollHeight|readonly int|滚动宽高，包括 padding, ::before, ::after|
|el.getBoundingClientRect().width/height|readonly number|盒子宽高，包括 padding, border|
|window.getComputedStyle(el).width/height|readonly string|内容宽高，不包括 padding, border|

+ 相关属性对比：

|属性|类型|说明|
|-|-|-|
|el.style.left/top/right/bottom|string|左上右下偏移距离，需要内联样式
|el.clientLeft/Top|readonly number|左上边框厚度，包括 scrollBar
|el.offsetLeft/Top|readonly number|左上偏移距离
|el.scrollLeft/Top|number|左上部滚动距离
|el.getBoundingRect().left/top/right/bottom|readonly number|盒子左上角/右下角的标识
|window.getComputedStyle(el).left/top/right/bottom|readonly string|左上偏移距离