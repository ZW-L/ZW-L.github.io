---
sidebarDepth: 2
---

## 简介

+ `0-1背包`的特点：每种物品仅有一件，可以选择放或者不放
+ 通常定义状态 `dp[i][j]`：从前 $i$ 件物品中选取若干件，放入容量为 $j$ 的背包的最大价值


## 经典例题

有 $N$ 件物品和一个容量为 $V$ 的背包，第 $i$ 件物品的为 $w[i]$，价值为 $v[i]$。在重量总和不超过背包的情况下，放入哪几件物品能使价值最大化？
```
输入：
N = 4
V = 5
v = [1,2,3,4]
w = [2,4,4,5]

输出：8
```


### 解析

1. 定义状态：`dp[i][j]` - 从前 $i$ 件物品中选取若干件，放入容量为 $j$ 的背包，且恰好放满时的最大价值
2. 初始化：`dp[i][j] = 0`
3. 状态转移：

$$
dp[i][j]=
	\begin{cases}
		{dp[i-1][j]} & & {j \le weight} \\
		{max(dp[i-1][j], dp[i-1][j-weight] + value)} & & {j \geq weight}
	\end{cases}
$$

4. 结果：`dp[N][V]`

```js
function solution(N, V, weights, values) {
  const dp = new Array(N + 1).fill(0).map(v => new Array(V + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const weight = weights[i - 1], value = values[i - 1];
    for (let j = 1; j <= V; j++) {
      if (weight > j) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight] + value);
      }
    }
  }

  return dp[N][V];
}
```

::: tip 复杂度分析：
+ 时间复杂度：$O(N * V)$
+ 空间复杂度：$O(N * V)$
:::


### 空间优化

+ 滚动数组
:::: tabs
::: tab JavaScript
```js
function solution(N, V, weights, values) {
  const dp = new Array(2).fill(0).map(v => new Array(V + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const weight = weights[i - 1], value = values[i - 1];
    for (let j = 1; j <= V; j++) {
      if (weight > j) {
        dp[i%2][j] = dp[(i-1)%2][j];
      } else {
        dp[i%2][j] = Math.max(dp[(i-1)%2][j], dp[(i-1)%2][j - weight] + value);
      }
    }
  }

  return Math.max(dp[0][V], dp[1][V]);
}
```
:::

::: tab C++
```c++

```
:::
::::

+ 反序遍历：
:::: tabs
::: tab JavaScript
```js
function solution(N, V, weights, values) {
  const dp = new Array(V + 1).fill(0);

  for (let i = 1; i <= N; i++) {
    for (let j = V; j >= weights[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - weights[i]] + values[i]);
    }
  }

  return dp[V];
}
```
:::

::: tab C++
```c++

```
:::
::::

::: tip 复杂度分析：
+ 时间复杂度：$O(N * V)$
+ 空间复杂度：$O(V)$
:::


## 更多题型


