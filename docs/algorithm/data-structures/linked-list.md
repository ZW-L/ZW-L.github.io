---
sidebarDepth: 2
---

## 概述

### 分类

+ 单链表：其节点有节点值(`value`)、下一个节点(`next`)两个属性
+ 双链表：在单链表节点的基础上增加了一个属性 - 前驱节点(`prev`)
+ 循环链表：链表的最后一个节点的 `next` 属性不是 `null`，而是指向链表的头节点 `head`


### 属性和方法

+ 属性
  + 头指针(`head`)
  + 尾指针(`tail`)
+ 基础方法：
  + **添加节点**：主要为 `insert()`，可添加 `append()`, `prepend()` 做辅助
  + **删除节点**：主要为 `delete()`，可添加 `deleteHead()`, `deleteTail()` 做辅助
  + **查找节点**：`find()`
  + **反转链表**：`reverse()`
+ 扩充方法：
  + 批量添加节点：`fromArray()`
  + 从数组生成链表：`static fromArray()`
  + 转换为数组：`toArray()`
  + 转换为字符串：`toString()`

::: tip 说明：
+ 双链表类的属性/方法和单链表的属性基本类似，只是内部实现要考虑前驱节点(`prev`)
:::



## 单链表

### 单链表节点类

+ 将单链表节点和单链表的定义区分不是必须的，但是这更符合 OOP 思想
+ 单链表节点类：只记录节点值 `value` 和 `next` 指针，这里还附加了一个 `toString()` 方法
```js
export default class LinkedListNode {
  /**
   * @param {*} value
   * @param {LinkedListNode} next
   */
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  /**
   * @param {Function} callback
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
```


### 单链表类

+ 单链表类：扩充 `head` / `tail` 属性值，定义常用方法
```js
import LinkedListNode from './LinkedListNode'

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * 在头部添加节点：修改指针即可
   * 时间：O(1)
   * 
   * @param {*} value
   * @return {LinkedList}
  */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
    if (!this.tail) {     // 边界：更新 tail
      this.tail = newNode
    }
    return this
  }

  /**
   * 在尾部添加节点：修改指针即可
   * 时间：O(1)
   * 
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value)
    if (!this.head) {     // 边界：空链表
      this.head = newNode
      this.tail = newNode
      return this
    }
    this.tail.next = newNode
    this.tail = newNode   // 边界：更新 tail
    return this
  }

  /**
   * 插入节点：创建一个指针，循环遍历链表
   * 时间：O(n)
   * 
   * @param {*} value
   * @param {number} index
   * @return {LinkedList}
   */
  insert(value, index) {
    if (index < 1) {            // 边界：无效 index
      return this
    }
    let node = this.head
    if (!node || index === 1) { // 边界：在头部添加
      this.prepend(value)
      return this
    }

    let i = 1
    // 开始迭代 node 指针，
    while (i !== index - 1 && node.next) {
      node = node.next
      i++
    }
    // i = index OR node 迭代到链表尾部
    node.next = new LinkedListNode(value, node.next)
    return this
  }

  /**
   * 删除头节点：修改指针即可
   * 时间：O(1)
   * 
   * @return {LinkedListNode}
   */
  deleteHead() {
    const deletedHead = this.head
    if (!deletedHead) {     // 边界：空链表
      return null
    }

    if (deletedHead.next) {
      this.head = this.head.next
    } else {                // 边界：删除节点后变为空链表
      this.head = null
      this.tail = null
    }
    return deletedHead
  }

  /**
   * 删除尾节点：创建一个指针，循环遍历链表
   * 时间：O(n)
   * 
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deletedTail = this.tail
    if (this.head === this.tail) {   // 边界：删除节点后变为空链表
      this.head = null
      this.tail = null
      return deletedTail
    }

    // 开始迭代 node 指针
    let node = this.head
    while (node.next) {
      if (!node.next.next) {  // node 到达尾节点，结束迭代
        node.next = null
      } else {
        node = node.next
      }
    }

    this.tail = node          // 边界：更新 tail
    return deletedTail
  }

  /**
   * 删除节点：删除所有值相等的节点，并返回最后删除的节点；通过一个指针遍历链表
   * 时间：O(n)
   * 
   * @param {*} val
   * @return {LinkedListNode}
   */
  delete(val) {
    if (!this.head) {   // 边界：空链表
      return null
    }

    let deletedNode = null
    // 边界：删除的节点在头部，用 while 而不用 if：有可能连续几个要删除的元素都在开头
    while (this.head && this.head.value === val) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let node = this.head
    if (node !== null) {  // 边界：非空链表才继续
      // 开始迭代 node 指针
      while (node.next) {
        if (node.next.value === val) {
          deletedNode = node.next
          node.next = node.next.next  // 删除符合条件的元素的引用
        } else {
          node = node.next
        }
      }
    }

    // 边界：删除了尾节点，更新 tail
    if (this.tail.value === val) {
      this.tail = node
    }

    return deletedNode
  }

  /**
   * 查找节点：使用一个指针迭代链表
   * 时间：O(n)
   * 
   * @param {Object} param
   * @param {*} param.val
   * @param {function} [param.callback]
   * @return {LinkedListNode}
   */
  find({ val = undefined, callback = undefined }) {
    if (!this.head) {   // 边界：空链表
      return null
    }

    let node = this.head
    // 开始迭代 node 指针
    while (node) {
      // 根据回调函数查找(优先于值查找)
      if (callback && callback(node.value)) {
        return node
      }
      // 指定查找值
      if (val !== undefined && node.value === val) {
        return node
      }
      node = node.next
    }

    return null
  }

  /**
   * 辅助方法：批量添加节点
   * 
   * @param {Array} arr
   * @return {LinkedList}
   */
  fromArray(arr) {
    arr.forEach((v) => this.append(v))
    return this
  }

  /**
   * 静态方法：根据数组生成链表
   * 
   * @param {Array} arr
   * @returns {LinkedList}
   */
  static fromArray(arr) {
    const list = new LinkedList()
    return list.fromArray(arr)
  }


  /**
   * 辅助方法：链表的数组表示
   * 
   * @return {LinkedListNode[]}
   */
  toArray() {
    let currentNode = this.head
    const nodes = []
    while (currentNode) {
      nodes.push(currentNode.value)
      currentNode = currentNode.next
    }
    return nodes
  }

  /**
   * 辅助方法：链表的字符串表示
   * 
   * @param {Function} [callback]
   * @return {String}
   */
  toString(callback) {
    return this.toArray()
      .map(node => (callback ? callback(node) : node.toString()))
      .toString()
  }

  /**
   * 辅助方法：反转链表，使用指针迭代链表
   * 时间：O(n)
   * 
   * @return {LinkedList}
   */
  reverse() {
    let currNode = this.head  // currNode 用作遍历原链表
    let nextNode = null       // nextNode ，并作为新一轮循环的 currNode
    let prevNode = null       // prevNode 保存 currNode，用作新一轮循环的 currNode.next
    while (currNode) {
      nextNode = currNode.next  // 保存 currNode.next
      currNode.next = prevNode  // 从尾部开始生成新链表指向，原链表的 head 为 新链表的 tail
      // 更新 prevNode 和 currNode 用于下一轮循环
      prevNode = currNode
      currNode = nextNode
    }
    // 更新 head 和 tail
    this.tail = this.head     // 注意：循环开始时便已设置 head.next = null
    this.head = prevNode

    return this
  }
}
```


## 双链表

### 双链表节点类

```js
export default class DoublyLinkedListNode {
  /**
   * @param {*} value
   * @param {DoublyLinkedListNode} prev
   * @param {DoublyLinkedListNode} next
   */
  constructor(value, prev = null, next = null) {
    this.value = value
    this.prev = prev
    this.next = next
  }

  /**
   * @param {Function} callback
   */
  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
```

### 双链表类

```js
import DoublyLinkedListNode from './DoublyLinkedListNode'

export default class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * 在尾部添加元素
   * 
   * @param {*} val
   * @returns {DoublyLinkedList}
   */
  append(val) {
    const node = new DoublyLinkedListNode(val, this.tail, null)
    // 链表为空时
    if (!this.head) {
      this.head = node
      this.tail = node
      return this
    }
    // 链表不为空时
    this.tail.next = node
    this.tail = node
    return this
  }

  /**
   * 在头部添加元素
   * 
   * @param {*} val
   * @returns {DoublyLinkedList}
   */
  prepend(val) {
    const node = new DoublyLinkedListNode(val, null, this.head)
    // 链表为空时
    if (!this.head) {
      this.head = node
      this.tail = node
      return this
    }
    // 链表不为空时
    this.head.prev = node
    this.head = node
    return this
  }

  /**
   * 在任意位置添加元素，任何不合法的 index 都默认为在尾部添加元素
   * 
   * @param {*} val
   * @param {Number} index
   * @returns {DoublyLinkedList}
   */
  insert(val, index = 0) {
    // 任何不合法的 index 都默认为在尾部添加元素
    if (index <= 0) {
      return this.append(val)
    }
    if (index === 1) {
      return this.prepend(val)
    }

    let i = 1
    let currentNode = this.head
    while (i < index && currentNode) {
      currentNode = currentNode.next
      i++
    }
    if (!currentNode) {
      return this.append(val) // 此时 index 越界，在尾部添加元素
    }

    const node = new DoublyLinkedListNode(val, currentNode.prev, currentNode)
    currentNode.prev.next = node
    currentNode.prev = node

    return this
  }

  /**
   * 删除头节点
   * 
   * @returns {DoublyLinkedListNode}
   */
  deleteHead() {
    // 空链表时
    if (!this.head) {
      return null
    }
    const currentNode = this.head
    // 只有一个节点时
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head.next.prev = null
      this.head = this.head.next
    }
    return currentNode
  }

  /**
   * 删除尾节点
   * 
   * @returns {DoublyLinkedListNode}
   */
  deleteTail() {
    // 空链表时
    if (!this.head) {
      return null
    }
    const currentNode = this.tail
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.tail.prev.next = null
      this.tail = this.tail.prev
    }
    return currentNode
  }

  /**
   * 删除所有 value === val 的节点，并返回最后一个删除的节点
   * 
   * @param {*} val
   * @returns {DoublyLinkedListNode}
   */
  delete(val) {
    if (!this.head) {
      return null
    }
    let deleteNode = null
    // 在头部删除
    while (this.head && this.head.value === val) {
      deleteNode = this.head
      this.head.next.prev = null
      this.head = this.head.next
    }

    // 在中间(非头尾)删除
    let currentNode = this.head
    // 链表非空
    if (currentNode) {
      // currentNode 不是尾节点时
      while (currentNode.next) {
        if (currentNode.next.value === val) {
          deleteNode = currentNode.next
          // currentNode.next.next 不为 null 设置 prev
          if (currentNode.next.next) {
            currentNode.next.next.prev = currentNode
          }
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }
    // currentNode 为尾节点时
    if (this.tail.value === val) {
      this.tail.prev.next = null
      this.tail = currentNode.prev
    }

    return deleteNode
  }

  /**
   * 查找元素
   * 
   * @param {Object} param
   * @param {*} param.val
   * @param {Function} param.callback
   * @return {DoublyLinkedListNode}
   */
  find({ val = undefined, callback = undefined }) {
    // 空链表
    if (!this.head) {
      return null
    }

    let currentNode = this.head
    while (currentNode) {
      // 根据回调函数查找(优先于值查找)
      if (callback && callback(currentNode.value)) {
        return currentNode
      }
      // 指定查找值
      if (val !== undefined && currentNode.value === val) {
        return currentNode
      }

      currentNode = currentNode.next
    }
    return null
  }

  /**
   * 辅助方法：反转链表
   * 
   * @return {DoublyLinkedList}
   */
  reverse() {
    let currentNode = this.head
    let prevNode = null
    let nextNode = null
    while (currentNode) {
      nextNode = currentNode.next

      currentNode.next = prevNode
      currentNode.prev = nextNode

      prevNode = currentNode
      currentNode = nextNode
    }
    this.tail = this.head
    this.head = prevNode
    return this
  }

  /**
   * 辅助方法：批量添加节点
   * 
   * @param {Array} arr
   * @return {DoublyLinkedList}
   */
  fromArray(arr) {
    arr.forEach(v => this.append(v, this.tail))
    return this
  }

  /**
   * 静态方法：通过数组构造链表
   * 
   * @param {Array} arr
   * @returns {DoublyLinkedList}
   */
  static fromArray(arr) {
    const list = new DoublyLinkedList()
    return list.fromArray(arr)
  }

  /**
   * 辅助方法：链表的数组表示
   * 
   * @returns {Array}
   */
  toArray() {
    if (!this.head) {
      return []
    }

    const res = []
    let currentNode = this.head
    while (currentNode) {
      res.push(currentNode.value)
      currentNode = currentNode.next
    }
    return res
  }

  /**
   * 辅助方法：链表的字符串表示
   * 
   * @param {Function} callback
   * @returns {String}
   */
  toString(callback) {
    return this.toArray()
      .map(node => (callback ? callback(node) : node.toString()))
      .join('<=>')
  }
}
```