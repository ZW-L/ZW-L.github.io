---
sidebarDepth: 2
---

## 堆

+ 堆（Heap）其实是一颗完全二叉树，但是存储方式是顺序存储，因此可以使用数组来存储节点
+ 分类：
  + 最大堆：父节点值大于任一子节点，即堆顶元素为最大值
  + 最小堆：父节点值小于任一子节点，即堆顶元素为最小值
+ 应用：
  + 堆排序
  + 优先队列


### 属性

+ `A`：存储堆节点的数组
+ `size`：堆节点数


### 方法

+ `getParent(i)`：返回节点的父节点索引
+ `getLeft(i)`：返回节点的左子节点索引
+ `getRight(i)`：返回节点的右子节点索引
+ `heapify(i)`：堆化，即保持堆性质
+ `buildHeap()`：建堆



### 实现

:::: tabs
::: tab 简介
+ 最大/小堆的实现类似，因此可以先构建一个 `Heap` 抽象类，`MaxHeap`/`MinHeap` 通过扩展 `Heap` 来实现

+ 由于使用数组存储堆节点，因此可以使用以下方式获取相关节点的索引：
```js
parent(i) {
  return Math.floor(i / 2)
}
left(i) {
  return 2 * i + 1
}
right(i) {
  return 2 * i + 2
}
```

+ `heapify(i)`：堆化。从节点 $i$ 及其左右节点中选出最小/大的节点作为该子堆的堆顶，递归执行至该子堆平衡
```js
heapify(i) {
  const left = this.left(i), right = this.right(i)
  let priority = i
  if (left < this.size && this.compare(this.A[left], this.A[priority])) {
    priority = left
  }
  if (right < this.size && this.compare(this.A[right],this.A[priority])) {
    priority = right
  }
  if (priority !== i) {
    const temp = this.A[i]
    this.A[i] = this.A[priority]
    this.A[priority] = temp
    this.heapify(priority)
  }
}
```

+ `buildHeap()`：建堆。初始化时，由于数组的后半段节点是叶节点，满足堆的性质，因此只需对前半段节点，按逆序调用 `heapify()` 堆化即可
```js
buildHeap() {
  for (let i = this.size / 2; i >= 0; i--) {
    this.heapify(i)
  }
}
```
:::

::: tab Heap 类
```js
class Heap {
  constructor (A) {
    if (new.target === Heap) {
      throw new TypeError('Cannot construct Heap instance directly')
    }
    this.A = A
    this.size = A.length
    this.buildHeap()
  }
  parent(i) {
    return Math.floor(i / 2)
  }
  left(i) {
    return 2 * i + 1
  }
  right(i) {
    return 2 * i + 2
  }
  heapify(i) {
    const left = this.left(i), right = this.right(i)
    let priority = i
    if (left < this.size && this.compare(this.A[left], this.A[priority])) {
      priority = left
    }
    if (right < this.size && this.compare(this.A[right],this.A[priority])) {
      priority = right
    }
    if (priority !== i) {
      const temp = this.A[i]
      this.A[i] = this.A[priority]
      this.A[priority] = temp
      this.heapify(priority)
    }
  }
  buildHeap() {
    for (let i = this.size / 2; i >= 0; i--) {
      this.heapify(i)
    }
  }
  compare(a, b) {
    throw new Error('The compare() method must be implement!')
  }
}
```
:::

::: tab MaxHeap 类
```js
class MaxHeap extends Heap {
  compare(a, b) {
    return a > b
  }
}
```
:::

::: tab MinHeap 类
```js
class MinHeap extends Heap {
  compare(a, b) {
    return a < b
  }
}
```
:::
::::



### 应用

+ 堆排序

:::: tabs
::: tab javascript
使用 `MaxHeap` 实现升序排序：
1. 每次将堆顶元素与堆的最后一个元素交换（交换后，堆的最后一个元素被标记为 “已排序”）
2. 将堆尺寸递减（后续的 `heapify()` 不会再考虑数组尾部的元素）
3. 对堆顶元素执行 `heapify()` 保持堆性质

```js
function heapSort (arr) {
  const heap = new MaxHeap(arr)
  for (let i = heap.size - 1; i > 0; i--) {
    const temp = heap.A[i]
    heap.A[i] = heap.A[0]
    heap.A[0] = temp
    heap.size--
    heap.heapify(0)
  }
  return heap.A
}

const A = [27, 17, 3, 16, 13, 10, 1, 5, 7, 12, 4, 8, 9, 0]
console.log(heapSort(A)) // [ 0, 1, 3, 4, 5, 7, 8, 9, 10, 12, 13, 16, 17, 27]
```

+ 时间复杂度：$O(nlogn)$，`heapify()` 的时间复杂度为 $logn$，总时间复杂度为 $(n-1)*logn$
+ 空间复杂度：$O(1)$，原址建堆，此外仅使用常数空间
:::
::::




## 优先队列

+ 优先队列（PriorityQueue）是一种特殊的队列，它的入队/出队操作取决于各元素的优先级
+ 最大/最小优先队列分别使用最大堆/最小堆实现，并且使用 `Map` 记录元素的优先级



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

+ 实现

::: details
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
:::


### 最小优先队列

+ 实现

::: details
```js
import MinHeap from '../heap/MinHeap'
import Comparator from '../../utils/Comparator'

export default class MaxPriorityQueue extends MinHeap {
  // 其余与 MaxHeap 相同
}
```
:::
