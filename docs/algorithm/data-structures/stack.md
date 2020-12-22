---
sidebarDepth: 2
---


## 概述

+ 栈是一种后进先出(First-In-Last-Out, FILO)的链式存储结构


### 栈分类

+ 链栈：使用链表实现
+ 数组栈：使用数组实现


### 栈属性和方法

+ 属性：
  + `peek`：查看栈顶元素
+ 方法：
  + `push()`：入栈
  + `pop()`：出栈
  + `isEmpty()`：表示栈是否为空
+ 辅助方法：
  + `toArray()`：将栈转换为数组
  + `toString()`：将栈转换为字符串



## 链栈

+ 注意链栈的实现：不是往 tail 添加节点，而是直接操作 head
```js
import LinkedList from '../linked-list/LinkedList'

export default class Stack {
  constructor() {
    this.stack = new LinkedList()
  }

  /**
   * @returns {Boolean}
   */
  isEmpty() {
    return !this.stack.head
  }

  /**
   * 时间复杂度：O(1)
   * 
   * @param {*} val
   * @returns {Stack}
   */
  push(val) {
    this.stack.prepend(val)
    return this
  }

  /**
   * 时间复杂度：O(1)
   * 
   * @returns {LinkedListNode}
   */
  pop() {
    return this.stack.deleteHead()
  }

  /**
   * @returns {*}
   */
  get peek() {
    return this.isEmpty() ? null : this.stack.head.value
  }

  /**
   * @returns {Array}
   */
  toArray() {
    return this.stack.toArray()
  }

  /**
   * @param {Function} callback
   * @returns {String}
   */
  toString(callback) {
    return callback ? this.stack.toString(callback) : this.stack.toString()
  }
}
```



## 数组栈

+ 数组实现栈也很简单：
```js
class Stack {
  constructor () {
    this.data = []
  }

  push (val) {
    this.data.push(val)
    return this
  }

  pop () {
    return this.data.pop()
  }

  isEmpty () {
    return !!this.data.length
  }

  get peek () {
    return this.isEmpty() ? null : this.data[0]
  }
}
```


::: tip 备注：
+ 注意：在一些静态语言中，需要考虑数组扩容的问题
:::