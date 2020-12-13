---
sidebarDepth: 2
---

## 链表概述

### 链表分类

+ 单链表：节点有节点值(`value`)、下一个节点(`next`)两个属性
+ 双链表：节点有节点值(`value`)、前驱节点(`prev`)、后驱节点(`next`)三个属性
+ 循环链表：

### 链表类的属性和方法

+ 属性
  + 头指针(`head`)
  + 尾指针(`tail`)
+ 方法：前四个方法是最重要的，其中反转链表的考察率最高
  + **添加节点**：主要为 `insert()`，可添加 `append()`, `prepend()` 做辅助
  + **删除节点**：主要为 `delete()`，可添加 `deleteHead()`, `deleteTail()` 做辅助
  + **查找节点**：`find()`
  + **反转链表**：`reverse()`
  + 批量添加节点：`fromArray()`
  + 从数组生成链表：`static fromArray()`
  + 转换为数组：`toArray()`
  + 转换为字符串：`toString()`

::: tip 说明：
+ 双链表类的属性/方法和单链表的属性基本类似，只是内部实现要考虑前驱节点(`prev`)
:::

## 单链表

### 单链表节点类

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

```js
import LinkedListNode from './LinkedListNode'

export default class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  /**
   * @param {*} value
   * @return {LinkedList}
  */
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode
    if (!this.tail) {
      this.tail = newNode
    }
    return this
  }

  /**
   * @param {*} value
   * @return {LinkedList}
   */
  append(value) {
    const newNode = new LinkedListNode(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
      return this
    }
    this.tail.next = newNode
    this.tail = newNode
    return this
  }

  /**
   * @param {*} value
   * @param {number} index
   * @return {LinkedList}
   */
  insert(value, index) {
    if (index < 1) {
      return this
    }
    let node = this.head
    if (!node || index === 1) {
      this.prepend(value)
      return this
    }
    let i = 1
    while (i !== index - 1 && node.next) {
      node = node.next
      i++
    }
    // 现在 i === index
    node.next = new LinkedListNode(value, node.next)
    return this
  }

  /**
   * @return {LinkedListNode}
   */
  deleteHead() {
    const deletedHead = this.head
    if (!deletedHead) {
      return null
    }

    if (deletedHead.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }
    return deletedHead
  }

  /**
   * @return {LinkedListNode}
   */
  deleteTail() {
    const deletedTail = this.tail
    if (this.head === this.tail) {
      this.head = null
      this.tail = null
      return deletedTail
    }

    let currentNode = this.head
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode
    return deletedTail
  }

  /**
   * @param {*} val
   * @return {LinkedListNode}
   */
  delete(val) {
    if (!this.head) {
      return null
    }

    let deletedNode = null
    // 删除的节点在头部时，用 while 而不用 if 是因为有可能连续几个要删除的元素都在开头
    while (this.head && this.head.value === val) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head
    if (currentNode !== null) {
      // 遍历链表，删除符合条件的元素的引用
      while (currentNode.next) {
        if (currentNode.next.value === val) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // 如果删除的是尾节点，重置 tail
    if (this.tail.value === val) {
      this.tail = currentNode
    }

    return deletedNode
  }

  /**
   * @param {Object} paramList
   * @param {*} paramList.val
   * @param {function} [paramList.callback]
   * @return {LinkedListNode}
   */
  find({ val = undefined, callback = undefined }) {
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
   * @param {Array} arr
   * @return {LinkedList}
   */
  fromArray(arr) {
    arr.forEach((v) => this.append(v))
    return this
  }

  /**
   * @param {Array} arr
   * @returns {LinkedList}
   */
  static fromArray(arr) {
    const list = new LinkedList()
    return list.fromArray(arr)
  }


  /**
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
   * @param {Function} [callback]
   * @return {String}
   */
  toString(callback) {
    return this.toArray()
      .map(node => (callback ? callback(node) : node.toString()))
      .toString()
  }

  /**
   * @return {LinkedList}
   */
  reverse() {
    let currNode = this.head // currNode 用作遍历原链表
    let nextNode = null // nextNode ，并作为新一轮循环的 currNode
    let prevNode = null // prevNode 保存 currNode，用作新一轮循环的 currNode.next
    while (currNode) {
      // 保存 currNode.next
      nextNode = currNode.next
      // 从尾部开始生成新链表指向，原链表的 head 为 新链表的 tail
      currNode.next = prevNode
      // 设置 prevNode 和 currNode 用于下一轮循环
      prevNode = currNode
      currNode = nextNode
    }
    // 重置 head 和 tail
    this.tail = this.head
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

  // 在尾部插入
  /**
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

  // 在头部插入
  /**
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

  // 在任意位置插入，任何不合法的 index 都默认为在尾部添加元素
  /**
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

  // 在头部删除
  /**
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

  // 在尾部删除
  /**
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

  // 删除所有 value === val 的节点，并返回最后一个删除的节点
  /**
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

  // 查找元素
  /**
   * @param {Object} paramList
   * @param {*} paramList.val
   * @param {Function} paramList.callback
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

  // 反转链表
  /**
   * @return {DoublyLinkedList}
   */
  reverse() {
    if (!this.head) {
      return null
    }

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
    this.head = this.tail
    this.tail = prevNode
    return this
  }

  // 将数组元素添加至已有链表尾部
  /**
   * @param {Array} arr
   * @return {DoublyLinkedList}
   */
  fromArray(arr) {
    arr.forEach(v => this.append(v, this.tail))
    return this
  }

  // 静态方法，通过一个数组返回一个双链表
  /**
   * @param {Array} arr
   * @returns {DoublyLinkedList}
   */
  static fromArray(arr) {
    const list = new DoublyLinkedList()
    return list.fromArray(arr)
  }

  // 转化为数组并返回
  /**
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

  // 转化为字符串并返回
  /**
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