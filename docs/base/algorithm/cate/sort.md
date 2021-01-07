---
sidebarDepth: 2
---

## 算法比较

### 分类

+ 内部排序
  + 冒泡排序
  + 选择排序
  + 插入排序
  + 希尔排序
  + 归并排序
  + 快速排序
+ 外部排序
  + 桶排序
  + 基数排序


### 对比

|算法|平均时间复杂度|最优时间复杂度|最坏时间复杂度|空间复杂度|稳定性|
|:-:|:-:|:-:|:-:|:-:|:-:|
|冒泡排序|O(n^2)|||O(1)|✔️|
|选择排序|O(n^2)|||O(1)|✔️|
|插入排序|O(n^2)|||O(1)|✔️|
|希尔排序||||||
|归并排序|O(nlogn)|||||
|快速排序|O(nlogn)||||❌|
|桶排序||||||
|基数排序||||||

::: tip 备注：
+ 排序算法的稳定性：某轮排序不影响已经排序的部分
:::



## 冒泡排序

+ 冒泡排序是最基本的排序算法，使用两个嵌套 `for` 循环实现
+ 外层循环指定需要冒泡的个数(`n-1`)；内层循环指定当前元素冒泡时需要比较的次数(`n-i-1`, 其中 `i` 为已冒泡的元素个数)


:::: tabs
::: tab 简单冒泡
+ 直接使用两个嵌套 `for` 循环实现
```js
/**
 * @param {int[]} arr
 * @returns {int[]}
 */
export function simpleBubble(arr) {
  if (arr.length < 2) {
    return arr
  }

  const length = arr.length
  let i
  let j

  for (i = 0; i < length - 1; i++) {
    for (j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }

  return arr
}
```
:::

::: tab 标记冒泡
+ 使用简单冒泡时，若数组已排序，算法仍然会执行，并不会智能退出
```js
simpleBubble([1, 2, 3, 4, 5])
```
+ 此时可以使用一个标记(sign)，当内存循环不再发生交换时，说明此时已是顺序，可以直接返回结果

```js{15,21,24,25,26,29}
/**
 * @param {int[]} arr
 * @returns {int[]}
 */
export function signBubble(arr) {
  if (arr.length < 2) {
    return arr
  }

  const length = arr.length
  let i
  let j
  let temp = true

  for (i = 0; i < length - 1; i++) {
    for (j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        temp = false
      }

    }

    if (temp) return arr

    temp = true
  }

  return arr
}
```
:::

::: tab 鸡尾酒排序
+ 一般来说，冒泡排序的外层循环执行一次都会冒泡一个元素，鸡尾酒排序是冒泡算法的变种：将内层的 `for` 循环变为两个并列的 `for` 循环，从而使得外层循环执行一次会冒泡两个元素
```js{18,19,20,21,22,23,24,25,26,27,28,29,30}
/**
 * 鸡尾酒排序：外层循环不变，内层改为两个并列的循环
 * 即每次外层循环完毕会找出一个较大数和较小数
 *
 * @param {int[]} arr
 * @returns {int[]}
 */
export function cocktailSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const length = arr.length
  let i
  let j
  let k

  for (i = 0; i < length / 2; i++) {
    for (j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }

    for (k = length - i - 2; k > 0; k--) {
      if (arr[k] < arr[k - 1]) {
        [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]]
      }
    }
  }

  return arr
}
```
:::


::: tab 鸡尾酒+标记冒泡
+ 将鸡尾酒排序和标记冒泡组合起来，将冒泡排序最优化
```js{16,22,29,33,34,35,37}
/**
 * @param {int[]} arr
 * @returns {int[]}
 */
export function bubbleSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const length = arr.length
  let i
  let j
  let k
  let temp = true

  for (i = 0; i < length / 2; i++) {
    for (j = 0; j < length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        temp = false
      }
    }

    for (k = length - i - 2; k > 0; k--) {
      if (arr[k] < arr[k - 1]) {
        [arr[k], arr[k - 1]] = [arr[k - 1], arr[k]]
        temp = false
      }
    }

    if (temp) {
      return arr
    }

    temp = true
  }

  return arr
}
```
:::
::::



## 插入排序


## 选择排序


## 归并排序

+ 归并排序属于**分治算法**的一种，分治算法采用 “分而治之” 的思想：
  1. 先将一个大问题递归拆分成若干的小问题
  2. 当问题足够小时，结束递归，开始合并小问题

:::: tabs

::: tab 伪代码
__markdown content__
:::

::: tab javascript
```js
/**
 * 合并左右数组，返回已排序的数组
 * 注意：这里的 left/right 必定是自身已排序的
 *
 * @param {number[]} left
 * @param {number[]} right
 * @returns {number[]} sortedArr
 */
export function merge(left, right) {
  let i = 0, j = 0
  const ret = []
  const ll = left.length, lr = right.length

  while (i < ll && j < lr) {
    if (left[i] < right[j]) {
      ret.push(left[i++])
    } else {
      ret.push(right[j++])
    }
  }

  // 当某一个数组遍历完时，将另外一个数组的剩下部分拷贝到 res
  return i === ll ? ret.concat(right.slice(j)) : ret.concat(left.slice(i))
}

/**
 * 分治排序
 * 拆分：递归拆分子问题
 * 合并：合并子问题结果
 *
 * @param {number[]} arr
 * @returns {number[]} sortedArr
 */
export function mergeSort(arr) {
  // 递归退出条件
  if (arr.length < 2) return arr

  const mid = arr.length / 2
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}
```
:::

::: tab c/c++
```

```
:::

::::




## 快速排序


## 堆排序

+ 堆排序利用的堆的特性，原理如下
  + 从数组构建堆
  + 循环：将堆顶元素与数组最后一个没有发生过交换的元素交换，再将堆顶元素下沉
  + 需要注意的是：已交换的堆顶元素标记为已排序，即不会再发生交换（堆元素下沉操作中）



:::: tabs
::: tab 使用已有堆实现

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
:::

::: tab 直接从数组构建堆

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
:::
::::



## 桶排序
## 基数排序

