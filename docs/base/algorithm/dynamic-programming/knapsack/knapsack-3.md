---
sidebarDepth: 2
---

## 简介




## 经典例题

有 $N$ 件物品和一个容量为 $V$ 的背包，第 $i$ 件物品的为 $w[i]$，价值为 $v[i]$，数量为 $s[i]$。在重量总和不超过背包的情况下，放入哪几件物品能使价值最大化？
```
输入：
N = 4
V = 5
w = [1,2,3,4]
v = [2,4,4,5]
s = [3,1,3,2]

输出：10
```


### 解法1 - 转换为多重背包

+ 多重背包比完全背包多了一个数量的限制，在 [完全背包-解法1](../knapsack-2/解法1)的基础上，在第三重循环增加一个数量的控制，便完成了分数背包到完全背包的改写：
```js{7}
function solution(N, V, v, w, s) {
  const dp = new Array(N + 1).fill(0).map(v => new Array(V + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const vi = v[i-1], wi = w[i-1], si = s[i-1];
    for (let j = 1; j <= V; j++) {
      for (let k = 0; k <= si && k * vi <= j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i-1][j - k * vi] + k * wi);
      }
    }
  }

  return dp[N][V];
}
```

::: tip 复杂度分析
+ 时间复杂度：$O(N * V * times)$，其中 $times = \sum_{i=1}^N \lfloor \frac{\sum_{v=1}^V v}{w[i]} \rfloor = \sum_{i=1}^N \lfloor \frac{V*(V+1)}{2 * w[i]} \rfloor$，取决于 $V$、$w$、$s$
+ 空间复杂度：$O(N*V)$
:::

状态的更新不能在常数时间下完成，在大数据量下，需要考虑更优的解法。


### 解法2 - 转换为01背包

+ 若将每个物品都拆分为 1 件，这样可以组成一个新的、物品个数都是 1 的全新列表，此时的问题就是等价的 `0-1背包`，但是总的时间复杂度没有发生变化；它与解法1相比，虽然减少了第三重循环，但是却倍增到了最外层循环，因此时间复杂度不变
+ 可以使用`二进制拆分`，实现用更少的物品数表示范围内的所有物品：
```
如数字 10，将其拆分为 0-1背包 时，若一个一个拆分，会增加 10 个物品：[1,1,...,1]
但根据二进制的思想，将其拆分为：[1,2,4,3]，该序列的所有组合和恰好能表示 0～10 的数字
换句话来说，新物品列表从 s 变为了 floor(log2(s))

Q：再次理解其正确性？
假设最优值是在该物品被取了 1 件时产生，那么在状态转移过程中，它会从 [1,2,4,3] 中选取 1
同理，如果是选取了 10 件时产生，那么会从 [1,2,4,3] 中选取全部
依此类推...

Q：怎样拆分？
形如 15(1111), 7(111) 的数值，它们的二进制位全为 1，因此它们可以表示不大于该值的任意非负整数
其他数值也能转换，如 10 = 7(1111) + 3, 23 = 15(1111) + 7
而这样的特殊数值(2^k-1)，可以写成这样的序列：[2^0, 2^1, 2^2, ... 2^(k-1)] = [1, 2, 4, ..., 2^(k-1)]
最后，对于任意数值 n，其二进制拆分的结果为：
[1, 2, 4, ..., 2^(k-1), n-2^(k-1)+1]，其中 k 是使 n-2^(k-1)+1 > 0 成立的最大整数
```

+ 使用二进制拆分后，其时间复杂度降低为 $O(N*V*log{\sum_{i=1}^k s[i] })$，已经有了很明显的提升
```js
function solution(N, V, v, w, s) {
  // 拆分并组成为新的物品列表
  const goods = [];
  for (let i = 0; i < N; i++) {
    let cnt = s[i];
    for (let j = 1; j <= cnt; j *= 2) {
      goods.push({ v: v[i] * j, w: w[i] *j });
      cnt -= j;
    }
    if (cnt > 0) goods.push({ v: v[i] * cnt, w: w[i] * cnt });
  }
  // 0-1 背包的解法
  const M = goods.length;
  const dp = new Array(M + 1).fill(0).map(v => new Array(V + 1).fill(0));

  for (let i = 1; i <= M; i++) {
    const vi = goods[i-1].v, wi = goods[i-1].w;
    for (let j = 1; j <= V; j++) {
      if (j < vi) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - vi] + wi);
      }
    }
  }

  return dp[M][V];
}
```

+ 最后进行空间优化
```js
function solution(N, V, v, w, s) {
  // 拆分并组成为新的物品列表
  const goods = [];
  for (let i = 0; i < N; i++) {
    let cnt = s[i];
    for (let j = 1; j <= cnt; j *= 2) {
      goods.push({ v: v[i] * j, w: w[i] *j });
      cnt -= j;
    }
    if (cnt > 0) goods.push({ v: v[i] * cnt, w: w[i] * cnt });
  }
  // 0-1 背包的解法
  const M = goods.length;
  const f = new Array(V + 1).fill(0);

  for (let i = 1; i <= M; i++) {
    const vi = goods[i-1].v, wi = goods[i-1].w;
    for (let j = V; j >= vi; j--) {
      f[j] = Math.max(f[j], f[j - vi] + wi);
    }
  }

  return f[V];
}
```

::: tip 复杂度分析
+ 时间复杂度：$O(N*V*log{\sum_{i=1}^k s[i]})$
+ 空间复杂度：$O(V)$
:::


### 解法3 - 单调队列优化

TODO




## 更多题型
