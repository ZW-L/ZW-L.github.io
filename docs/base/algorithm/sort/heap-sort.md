## 说明

+ 堆排序利用的堆的特性，原理如下
  + 从数组构建堆
  + 循环：将堆顶元素与数组最后一个没有发生过交换的元素交换，再将堆顶元素下沉
  + 需要注意的是：已交换的堆顶元素标记为已排序，即不会再发生交换（堆元素下沉操作中）



## 使用已有堆实现

+ 使用最小堆实现升序，最大堆实现降序
+ 由于实现堆时不修改原数组，从而开辟了新的内存，因此空间复杂度上升为 O(n)

```js
import MinHeap from '../../data-structures/heap/MinHeap'

/**
 * @param {[]} arr
 * @returns {[]}
 */
function heapSort(arr) {
  const heap = MinHeap.fromArray(arr)
  const ret = []

  while (!heap.isEmpty()) {
    ret.push(heap.poll())
  }

  return ret
}

export default heapSort
```

## 直接从数组构建堆

+ 通过一个 `sortedUp` 可选参数指定升序还是降序
+ 由于没有引用堆数据结构，而是直接从数组进行排序，空间复杂度为 O(1)

```js
/**
 * @param {[]} arr
 * @param {int} index1
 * @param {int} index2
 */
function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

/**
 * @param {[]} arr
 * @param {Function} compare
 * @param {int} startIndex
 * @param {int} endIndex
 */
function heapifyDown(arr, compare, startIndex = 0, endIndex = arr.length) {
  let currentIndex = startIndex
  let nextIndex

  while (currentIndex < endIndex) {
    nextIndex = 2 * currentIndex + 1 // 默认赋值为左子节点

    if (nextIndex + 1 < endIndex // 不超出 endIndex
      && nextIndex + 1 < arr.length // 存在右子节点
      && compare(arr[nextIndex + 1], arr[nextIndex]) // 右子节点值大于左子节点值
    ) {
      nextIndex++ // 赋值为右子节点
    }

    // 父节点值较大或左子节点超出 endIndex 时，直接退出循环
    if (compare(arr[currentIndex], arr[nextIndex])
      || nextIndex >= endIndex
    ) {
      break
    }

    swap(arr, currentIndex, nextIndex) // 交换节点值
    currentIndex = nextIndex
  }
}

/**
 * @param {[]} arr
 * @param {Boolean} sortedUp
 * @returns {[]}
 */
function heapSort(arr, sortedUp = true) {
  const compare = sortedUp ? (a, b) => a >= b : (a, b) => a <= b
  // 构建堆
  for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
    heapifyDown(arr, compare, i)
  }
  // 排序
  for (let i = arr.length - 1; i > 0; i--) {
    swap(arr, 0, i) // 先将堆顶元素和最后一个元素交换
    heapifyDown(arr, compare, 0, i) // 再将堆顶元素下沉到指定位置
  }

  return arr
}

export default heapSort
```