---
sidebarDepth: 2
---


## 概述

+ 队列是一种先进先出（First-In-First-Out, FIFO）的链式存储结构
+ 优先队列的 FIFO 体现在同等优先级的元素

### 队列分类

+ 一般队列
+ 循环队列
+ 双端队列
+ 优先队列：最大优先队列、最小优先队列

### 队列的属性和方法

+ 属性：
  + `front`：队首值
  + `back`：队尾值
+ 方法：
  + `enqueue()`：入队
  + `dequeue()`：出队
  + `isEmpty()`：表示队列是否为空
  + `toArray()`：将队列转换为数组
  + `toString()`：将队列转换为字符串




## 一般队列

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
   * @param {*} val
   * @returns {Queue}
   */
  enqueue(val) {
    this.queue.append(val)
    return this
  }

  /**
   * @returns {*}
   */
  dequeue() {
    if (this.isEmpty()) {
      return null
    }
    return this.queue.deleteHead().value
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



## 优先队列

### 说明

+ 优先队列（PriorityQueue）是一种特殊的队列，它的入队\出队操作不再取决于元素所处的位置，而是取决于各元素的优先级
+ 最大\最小优先队列分别使用最大堆\最小堆实现，并且使用 `Map` 记录元素的优先级

### 属性和方法

+ **属性**：
  + `priorities`：用于保存优先级的一个 `Map`
  + `compare`：覆盖父类的比较器，取决于 `comparePriority()`
+ **方法**：
  + `enqueue()`：入队
  + `dequeue()`：出队
  + `remove()`：删除
  + `findByValue()`：查找指定的元素列表
  + `hasValue()`：判断是否包含指定元素
  + `changePriority()`：修改优先级
  + `comparePriority()`：比较优先级

### 最大优先队列

```js
import MaxHeap from '../heap/MaxHeap'
import Comparator from '../../utils/Comparator'

export default class MaxPriorityQueue extends MaxHeap {
  constructor() {
    super()
    this.priorities = new Map()
    this.compare = new Comparator(this.comparePriority.bind(this)) // 覆盖父类属性
  }

  /**
   * @param {*} item
   * @param {number} [priority]
   * @return {PriorityQueue}
   */
  enqueue(item, priority = 0) {
    this.priorities.set(item, priority)
    super.add(item)

    return this
  }

  /**
   * @returns {*}
   */
  dequeue() {
    return super.poll()
  }

  /**
   * @param {*} item
   * @param {Comparator} [customFindingComparator]
   * @return {PriorityQueue}
   */
  remove(item, customFindingComparator) {
    super.remove(item, customFindingComparator)
    this.priorities.delete(item)

    return this
  }

  /**
   * @param {*} item
   * @param {number} priority
   * @return {PriorityQueue}
   */
  changePriority(item, priority) {
    this.remove(item, new Comparator())
    this.enqueue(item, priority)

    return this
  }

  /**
   * @param {*} item
   * @return {Number[]}
   */
  findByValue(item) {
    return this.find(item, new Comparator())
  }

  /**
   * @param {*} item
   * @return {boolean}
   */
  hasValue(item) {
    return this.findByValue(item).length > 0
  }

  /**
   * @param {*} a
   * @param {*} b
   * @return {number}
   */
  comparePriority(a, b) {
    return Comparator.defaultCompareFunction(this.priorities.get(a), this.priorities.get(b))
  }
}
```

### 最小优先队列

```js
import MinHeap from '../heap/MinHeap'
import Comparator from '../../utils/Comparator'

export default class MaxPriorityQueue extends MinHeap {
  // 其余与 MaxHeap 相同
}
```