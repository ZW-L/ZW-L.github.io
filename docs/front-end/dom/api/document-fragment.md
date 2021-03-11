## 介绍

[DocumentFragment](https://developer.mozilla.org/zh-CN/docs/Web/API/DocumentFragment)：

+ 文档片段接口，表示一个没有父级文件的最小文档对象
+ 作为一个轻量版的 Document 使用，用于存储已排好版的或尚未打理好格式的 XML 片段
+ DocumentFragment 不是真实 DOM 树的一部分，它的变化不会触发 DOM 树的重新渲染，且不会导致性能等问题


::: tip 最常用的方法是使用文档片段作为参数传入 append() 等方法中，一次性添加多个节点(因为这样仅发生一次重新渲染，提高了性能)：
```js
const list = document.querySelector('#list')
const fruits = ['Apple', 'Orange', 'Banana', 'Melon']
const fragment = document.createDocumentFragment()

fruits.forEach(fruit => {
  const li = document.createElement('li')
  li.innerHTML = fruit
  fragment.appendChild(li)
})

list.appendChild(fragment)
```
:::


## 构造函数

```js
const fragment = new DocumentFragment()
```

::: tip 也可以使用 document.createDocumentFragment() 方法创建文档片段：
```js
const fragment = document.createDocumentFragment()
```
:::

## 属性

+ 从 [Node](/base/javascript/dom/node) 接口继承
+ 从 [ParentNode](/base/javascript/dom/parent-node) 接口扩展

## 方法

+ 从 [Node](/base/javascript/dom/node) 接口继承
+ 从 [ParentNode](/base/javascript/dom/parent-node) 接口扩展