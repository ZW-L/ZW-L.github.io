---
sidebarDepth: 2
---


## 概述

+ 队列是一种先进先出（First-In-First-Out, FIFO）的链式存储结构


### 队列分类

+ 一般队列：遵循 FIFO 规则
+ 循环队列：
+ 双端队列（单调队列）：队列的两端都可执行入队、出队操作
+ 优先队列：其 FIFO 体现在同等优先级的元素；优先队列基于数据结构 `堆` 来实现，详见 [堆 & 优先队列](./heap.md)



### 队列的属性和方法

+ 属性：
  + `front`：队首值
  + `back`：队尾值
+ 方法：
  + `enqueue()`：入队
  + `dequeue()`：出队
  + `isEmpty()`：表示队列是否为空
+ 辅助方法
  + `toArray()`：将队列转换为数组
  + `toString()`：将队列转换为字符串




## 一般队列

+ 链表实现：

::: details
```js
import LinkedList from '../linked-list/LinkedList'

export default class Queue {
  constructor() {
    this.queue = new LinkedList()
  }

  /**
   * @returns {Boolean}
   */
  isEmpty() {
    return !this.queue.head
  }

  /**
   * @return {*}
   */
  get front() {
    return this.isEmpty() ? null : this.queue.head.value
  }

  /**
   * @return {*}
   */
  get back() {
    return this.isEmpty() ? null : this.queue.tail.value
  }

  /**
   * 时间复杂度：O(1)
   * 
   * @param {*} val
   * @returns {Queue}
   */
  enqueue(val) {
    this.queue.append(val)
    return this
  }

  /**
   * 时间复杂度：O(1)
   * 
   * @returns {*}
   */
  dequeue() {
    return this.isEmpty() ? null : this.queue.deleteHead().value
  }

  /**
   * @returns {Array}
   */
  toArray() {
    return this.queue.toArray()
  }

  /**
   * @param {Function} callback
   * @returns {String}
   */
  toString(callback) {
    return callback ? this.queue.toString(callback) : this.queue.toString()
  }
}
```
:::

+ 数组实现：性能较差，一般不使用

::: details
```js
class Queue {
  constructor () {
    this.data = []
  }

  // 时间复杂度：O(n)
  enqueue (val) {
    this.data.unshift(val)
    return this
  }

  // 时间复杂度：O(n)
  dequeue () {
    return this.data.shift()
  }

  isEmpty () {
    return !!this.data.length
  }

  get front () {
    return this.isEmpty() ? null : this.data[0]
  }

  get back () {
    return this.isEmpty() ? null : this.data[this.data.length - 1]
  }
}
```
:::
