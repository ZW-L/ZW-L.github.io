## 说明

+ 冒泡排序是最基本的排序算法，使用两个嵌套 `for` 循环实现
+ 外层循环指定需要冒泡的个数(`n-1`)；内层循环指定当前元素冒泡时需要比较的次数(`n-i-1`, 其中 `i` 为已冒泡的元素个数)


## 简单冒泡

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


## 标记冒泡

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


## 鸡尾酒排序

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


## 鸡尾酒+标记冒泡

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
