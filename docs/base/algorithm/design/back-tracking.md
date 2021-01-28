---
sidebarDepth: 2
---

## 概念

+ 回溯法是一种选优搜索算法，其根据选优条件向前探索，当前进到到某一步发现其不达标（或是说使用 “剪枝” 剪去不需要的 “枝”）时，会回退一步重新选择，直至所有探索完成
+ 它类似枚举法，但是通过 “剪枝” 筛选了一部分（或大部分）不符合的问题，不再对其枚举，减少迭代总数
+ 许多复杂的，规模较大的问题都可以使用回溯法，有“通用解题方法”的美称
+ 回溯法经常使用递归，再次说明递归是很重要的




## 问题

### N皇后

:::: tabs
::: tab 问题描述
+ N皇后问题从八皇后扩展而来：在 n×n 格的国际象棋上摆放 n 个皇后，使其不能互相攻击，即任意两个皇后都不能处于同一行、同一列或同一斜线上，问有多少种摆法？
+ 解析：
  + 若使用枚举，每个皇后在一行中有 n 种选择，总共是 $n^n$ 的数量级
  + 使用回溯法对问题 “剪枝”，可将问题降低至 $n!$ 的数量级
:::

::: tab 伪代码
```

```
:::

::: tab 回溯实现
```js
function isLegal (board, row, col) {
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 1) return false
  }
  for (let lrow = row - 1, lcol = col - 1;lrow >= 0 && lcol >=0; lrow--, lcol--) {
    if (board[lrow][lcol] === 1) return false
  }
  const len = board[0].length
  for (let rrow = row - 1, rcol = col + 1; rrow >= 0 && rcol < len; rrow--, rcol++) {
    if (board[rrow][rcol] === 1) return false
  }
  return true
}

function backTracking (board, row) {
  let count = 0
  if (row === board.length) {
    count++
  } else {
    for (let j = 0; j < board.length; j++) {
      if (isLegal(board, row, j)) {
        board[row][j] = 1
        const ret = backTracking(board, row + 1)
        count += ret
        board[row][j] = 0
      }
    }
  }
  return count
}

function nQueen (n) {
  const board = new Array(n).fill(null).map(() => new Array(n).fill(0))
  return backTracking(board, 0)
}

console.log(nQueen(9))
```
:::
::::




### 更多


