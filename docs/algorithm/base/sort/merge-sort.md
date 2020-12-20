## 说明

+ 归并排序属于**分治算法**的一种，分治算法采用 “分而治之” 的思想：
  1. 先将一个大问题递归拆分成若干的小问题
  2. 当问题足够小时，结束递归，开始合并小问题



## 实现


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

