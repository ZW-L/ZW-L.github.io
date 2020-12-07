---
sidebarDepth: 2
---


## 概述

+ 栈是一种后进先出(First-In-Last-Out, FILO)的链式存储结构

### 栈分类

+ 链栈：使用链表实现的栈

### 栈属性和方法

+ 属性：
  + `peek`：查看栈顶元素
+ 方法：
  + `push()`：入栈
  + `pop()`：出栈
  + `isEmpty()`：表示栈是否为空
  + `toArray()`：将栈转换为数组
  + `toString()`：将栈转换为字符串



## 链栈

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
   * @param {*} val
   * @returns {Stack}
   */
  push(val) {
    this.stack.prepend(val)
    return this
  }

  /**
   * @returns {LinkedListNode}
   */
  pop() {
    return this.stack.deleteHead()
  }

  /**
   * @returns {*}
   */
  get peek() {
    if (this.isEmpty()) {
      return null
    }

    return this.stack.head.value
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