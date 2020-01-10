---
sidebarDepth: 2
---


## 概述

+ 堆（Heap）其实是一颗完全二叉树，可以细分为最大堆和最小堆两种
+ 虽然堆是完全二叉树，但是存储方式是顺序存储（不是链式存储），所以可以使用数组来存储节点
+ 可用于排序、实现优先队列

### 堆分类

+ 最大堆：父节点值大于任一子节点，即堆顶元素为最大值
+ 最小堆：父节点值小于任一子节点，即堆顶元素为最小值

### 堆的属性

+ `heapContainer`：保存堆元素的数组
+ `compare`：堆使用的比较器

### 堆的方法

+ 辅助方法
  + 获取节点索引：`getLeftChildIndex()`, `getRightChildIndex()`, `getParentIndex()`
  + 获取节点值：`leftChild()`, `rightChild()`, `parent()`
  + 判断是否包含节点：`hasLeftChild()`, `hasRightChild()`, `hasParent()`
  + 指示堆是否为空：`isEmpty()`
  + 查看堆顶元素：`peek()`
  + 删除堆顶元素：`poll()`
  + 堆的字符串表示：`toString()`
  + 比较堆元素位置：`pairIsInCorrectOrder()`
  + （可选）从数组构建堆：`static fromArray()`
+ 查找：`find()`
+ 添加：`add()`
+ 删除：`remove()`
+ 上浮堆元素：`heapifyUp()`
+ 下沉堆元素：`heapifyDown()`

::: tip 说明：
+ `Heap` 不可实例化，体现在两个方面：
  + 在 `constructor` 中判断 `new.target === Heap` 并抛出错误，不允许对 `Heap` 实例化
  + `pairIsInCorrectOrder()`/`static fromArray()` 方法都抛出一个错误，目的是表明这些方法需要子类实现（类似抽象方法）方可使用
+ `heapifyUp()`/`heapifyDown()` 是堆的核心方法，堆每次添加、删除元素都会通过这些方法进行调整
:::

## 堆

```js
import Comparator from '../../utils/Comparator'

export default class Heap {
  /**
   * @constructs Heap
   * @param {Function} [comparatorFunction]
   */
  constructor(comparatorFunction) {
    // Heap 类不允许实例化
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly')
    }

    this.heapContainer = [] // 使用数组构建堆
    this.compare = new Comparator(comparatorFunction)
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2
  }

  /**
   * @param {number} childIndex
   * @return {number}
   */
  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2)
  }

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  leftChild(parentIndex) {
    return this.heapContainer[this.getLeftChildIndex(parentIndex)]
  }

  /**
   * @param {number} parentIndex
   * @return {*}
   */
  rightChild(parentIndex) {
    return this.heapContainer[this.getRightChildIndex(parentIndex)]
  }

  /**
   * @param {number} childIndex
   * @return {*}
   */
  parent(childIndex) {
    return this.heapContainer[this.getParentIndex(childIndex)]
  }

  /**
   * @param {number} childIndex
   * @return {boolean}
   */
  hasParent(childIndex) {
    return this.getParentIndex(childIndex) >= 0
  }

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  hasLeftChild(parentIndex) {
    return this.getLeftChildIndex(parentIndex) < this.heapContainer.length
  }

  /**
   * @param {number} parentIndex
   * @return {boolean}
   */
  hasRightChild(parentIndex) {
    return this.getRightChildIndex(parentIndex) < this.heapContainer.length
  }

  /**
   * @returns {boolean}
   */
  isEmpty() {
    return !this.heapContainer.length
  }

  /**
   * @param {number} index1
   * @param {number} index2
   */
  swap(index1, index2) {
    const tmp = this.heapContainer[index2]
    this.heapContainer[index2] = this.heapContainer[index1]
    this.heapContainer[index1] = tmp
  }

  /**
   * @return {*}
   */
  peek() {
    return this.isEmpty() ? null : this.heapContainer[0]
  }

  /**
   * @return {*}
   */
  poll() {
    if (this.heapContainer.length === 0) return null
    if (this.heapContainer.length === 1) return this.heapContainer.pop()

    const item = this.heapContainer[0]
    this.heapContainer[0] = this.heapContainer.pop()
    this.heapifyDown()

    return item
  }

  /**
   * @param {*} item
   * @param {Comparator} [comparator]
   * @return {Number[]}
   */
  find(item, comparator = this.compare) {
    const ret = []
    for (let i = 0; i < this.heapContainer.length; i++) {
      if (comparator.equal(item, this.heapContainer[i])) {
        ret.push(i)
      }
    }

    return ret
  }

  /**
   * @param {*} item
   * @return {Heap}
   */
  add(item) {
    this.heapContainer.push(item)
    this.heapifyUp()

    return this
  }

  /**
   * @param {*} item
   * @param {Comparator} [comparator]
   * @return {Heap}
   */
  remove(item, comparator = this.compare) {
    const itemsToRemove = this.find(item, comparator)
    const len = itemsToRemove.length
    for (let iteration = 0; iteration < len; iteration++) {
      const indexToRemove = itemsToRemove.pop()
      // 只有一个元素，直接删除
      if (indexToRemove === (this.heapContainer.length - 1)) {
        this.heapContainer.pop()
      } else {
        this.heapContainer[indexToRemove] = this.heapContainer.pop()
        const parentItem = this.parent(indexToRemove)
        if (
          this.hasLeftChild(indexToRemove)
          && (
            !parentItem
            || this.pairIsInCorrectOrder(parentItem, this.heapContainer[indexToRemove])
          )
        ) {
          this.heapifyDown(indexToRemove)
        } else {
          this.heapifyUp(indexToRemove)
        }
      }
    }

    return this
  }

  /**
   * @return {string}
   */
  toString() {
    return this.heapContainer.toString()
  }

  /**
   * 核心方法：上浮
   *
   * @param {number} [customStartIndex]
   */
  heapifyUp(customStartIndex) {
    let currentIndex = customStartIndex || this.heapContainer.length - 1

    while (
      this.hasParent(currentIndex)
      && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex))
      currentIndex = this.getParentIndex(currentIndex)
    }
  }

  /**
   * 核心方法：下沉
   *
   * @param {number} [customStartIndex]
   */
  heapifyDown(customStartIndex = 0) {
    let currentIndex = customStartIndex
    let nextIndex = null
    while (this.hasLeftChild(currentIndex)) {
      if (
        this.hasRightChild(currentIndex)
        && this.pairIsInCorrectOrder(this.rightChild(currentIndex), this.leftChild(currentIndex))
      ) {
        nextIndex = this.getRightChildIndex(currentIndex)
      } else {
        nextIndex = this.getLeftChildIndex(currentIndex)
      }

      if (this.pairIsInCorrectOrder(
        this.heapContainer[currentIndex],
        this.heapContainer[nextIndex],
      )) {
        break
      }

      this.swap(currentIndex, nextIndex)
      currentIndex = nextIndex
    }
  }

  /**
   * 子类必须实现的静态方法，用于从一个数组构建堆
   *
   * @param {[]} arr
   * @return {Heap}
   */
  static fromArray(arr) {
    throw new Error(`You have to implement this method with ${arr} value.`)
  }

  /**
   * 子类必须实现的方法，用于比较两元素的位置
   *
   * @param {*} firstElement
   * @param {*} secondElement
   * @return {boolean}
   */
  pairIsInCorrectOrder(firstElement, secondElement) {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `)
  }
}
```

## 最大堆

+ 继承 `Heap` 类并重写两个方法：

```js
import Heap from './Heap'

export default class MaxHeap extends Heap {
  /**
   * @param {[]} arr
   * @return {MaxHeap}
   */
  static fromArray(arr) {
    const heap = new MaxHeap()
    const len = arr.length
    for (let i = 0; i < len; i++) {
      heap.add(arr[i])
    }

    return heap
  }

  /**
   * @param {*} firstElement
   * @param {*} secondElement
   * @returns {boolean}
   */
  pairIsInCorrectOrder(firstElement, secondElement) {
    return this.compare.greaterThanOrEqual(firstElement, secondElement)
  }
}
```

## 最小堆

+ 继承 `Heap` 类并重写两个方法：

```js
import Heap from './Heap'

export default class MinHeap extends Heap {
  /**
   * @param {[]} arr
   * @return {MinHeap}
   */
  static fromArray(arr) {
    const heap = new MinHeap()
    const len = arr.length
    for (let i = 0; i < len; i++) {
      heap.add(arr[i])
    }

    return heap
  }

  /**
   * @param {*} firstElement
   * @param {*} secondElement
   * @returns {boolean}
   */
  pairIsInCorrectOrder(firstElement, secondElement) {
    return this.compare.lessThanOrEqual(firstElement, secondElement)
  }
}
```