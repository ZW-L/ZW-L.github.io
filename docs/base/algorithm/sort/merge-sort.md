## 说明

+ 归并排序属于**分治算法**的一种，分治算法采用 “分而治之” 的思想：
  1. 先将一个大问题递归拆分成若干的小问题
  2. 当问题足够小时，结束递归，开始合并小问题


## 实现

```js
/**
 * 指针 i, j 对应 left, right 的索引
 * 每个循环取出一个较小数 push 到 ret 中
 * 当一个指针到达最右侧时, 将另一个数组直接添加到 ret 尾部并返回
 *
 * @param {int[]} left
 * @param {int[]} right
 * @returns {int[]}
 */
function merge(left, right) {
  const ret = []
  const ll = left.length
  const lr = right.length
  let i = 0
  let j = 0

  while (i < ll && j < lr) {
    if (left[i] < right[j]) {
      ret.push(left[i])
      i++
    } else {
      ret.push(right[j])
      j++
    }
  }

  return i === ll ? ret.concat(right.slice(j)) : ret.concat(left.slice(i))
}

/**
 * 拆分：每次将数组对半拆分，当数组长度为 0 或 1 时，直接返回数组
 * 合并：调用 merge 从下至上合并
 *
 * @param {int[]} arr
 * @returns {int[]}
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  const mid = arr.length / 2
  const left = mergeSort(arr.slice(0, mid))
  const right = mergeSort(arr.slice(mid))

  return merge(left, right)
}

export default mergeSort
```