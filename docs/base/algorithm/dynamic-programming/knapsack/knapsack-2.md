---
sidebarDepth: 2
---

## 简介




## 经典例题

有 $N$ 件物品和一个容量为 $V$ 的背包，第 $i$ 件物品的为 $w[i]$，价值为 $v[i]$。在重量总和不超过背包的情况下，放入哪几件物品能使价值最大化？
```
输入：
N = 4
V = 5
v = [1,2,3,4]
w = [2,4,4,5]

输出：10
```


### 解法1 - 转化为01背包

1. 定义状态：`dp[i][j]` - 前 $i$ 件物品中选取若干件（可重复选取），放入容量为 $j$ 的背包，能获得的最大价值。
2. 初始化：`dp[i][j] = 0`
3. 状态转移：对于每件物品，除了选择放入和不放入外，还要判断放入多少件时能使价值最大化。不放入时，相当于放入 0 件，可归入放入的情况，得到状态转移方程：
$$
dp[i][j] = max \{ dp[i - 1][j - k * weight] + k * value \}, k \in [0, \lfloor \frac{j}{weight} \rfloor]
$$
4. 结果：`dp[N][V]`

:::: tabs
::: tab JavaScript
```js
function solution(N, V, weights, values) {
  const dp = new Array(N + 1).fill(0).map(v => new Array(V + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const weight = weights[i - 1], value = values[i - 1];
    for (let j = 1; j <= V; j++) {
      for (let k = 0; k * weight <= j; k++) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - k * weight] + k * value);
      }
    }
  }

  return dp[N][V];
}
```
:::

::: tab C++
```cpp

```
:::

::: tab Java
```java

```
:::
::::


::: tip 复杂度分析
+ 时间复杂度：$O(N * V * times)$，其中 $times = \sum_{i=1}^N \lfloor \frac{\sum_{v=1}^V v}{weight[i]} \rfloor = \sum_{i=1}^N \lfloor \frac{V*(V+1)}{2 * weight[i]} \rfloor$，取决于 $V$ 和 $weights$
+ 空间复杂度：$O(N * V)$
:::

这种解法的时间复杂度不理想，并且空间难以优化。



### 解法2 - 递推公式优化

+ 寻找一种方式来优化解法1中的第三重循环，根据解法1的状态转移方程，对于 $j \geq weight$，观察：
$$
dp[i][j] = max(dp[i-1][j], dp[i-1][j-weright]+value, dp[i-1][j-2*weright]+2*value,...)
$$

$$
dp[i][j-weight] = max(dp[i-1][j-weight], dp[i-1][j-2*weight]+value, ...)
$$

+ 结合上述两式子可得到：
$$
dp[i][j] = max(dp[i-1][j], dp[i][j-weight] + value)
$$

+ 最终：
$$
dp[i][j] = 
	\begin{cases}
		{dp[i-1][j]} & & {j \le weight}  \\
		{max(dp[i-1][j], dp[i][j-weight] + value)} & & {j \geq weight}
	\end{cases}
$$


+ 理解 `i` 而不是 `i-1`？
	+ 在 `0-1背包` 中，我们不能选择同一件物品，因此通过上一维的状态来转移，$dp[i-1][j-weight]$ 表示在前 `i-1` 件物品中，选取并放入大小为 `j - weight` 的背包产生的最大价值，也就是说该状态不可能选得到物品 `i`
	+ 在 `完全背包` 中，$dp[i][j-weight]$ 表示在前 `i` 件物品中，选取并放入大小为 `j - weight` 的背包产生的最大价值，可以选的到物品 `i`

+ 从 $dp[i][j-weight]$ 转移的正确性？
	+ 假设任意 $dp[i][v]$ 是最优的，那么 $dp[i][v+weight]$ 就是在背包大小为 `v + weight` 时选择物品 `i` 的最优值，并且有 $dp[i][v+weight]=dp[i][v] + value$
	+ 而 $dp[i][j]$ 的计算顺序是从前到后，因此计算后面的问题时完全可以访问前面的状态

:::: tabs
::: tab JavaScript
```js
function solution(N, V, weights, values) {
  const dp = new Array(N + 1).fill(0).map(v => new Array(V + 1).fill(0));

  for (let i = 1; i <= N; i++) {
    const weight = weights[i - 1], value = values[i - 1];
    for (let j = 1; j <= V; j++) {
      if (j < weight) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - weight] + value);
      }
    }
  }

  return dp[N][V];
}
```
:::

::: tab C++
```cpp

```
:::

::: tab Java
```java

```
:::
::::

::: warning 提示
+ 细心观察可以发现，`完全背包` 和 `0-1背包` 的区别就在于放入的时候，状态的第一维是 `i` 还是 `i-1`
+ 另外，完全背包的状态是严格按照 `外循环是物品数，内循环是背包数` 的方式计算的，而且两者都是 `正序遍历`
:::

::: tip 复杂度分析
+ 时间复杂度：$O(N * V)$
+ 空间复杂度：$O(N * V)$
:::


+ 然后是空间优化
  + 由于状态只与前一行的状态、以及当前行的状态有关，并且当前行的状态是从前往后计算，并不会污染后续状态
  + 不用使用滚动数组，也不用逆序遍历

:::: tabs
::: tab JavaScript
```js
function solution(N, V, weights, values) {
  const dp = new Array(V + 1).fill(0);

  for (let i = 1;ran i <= N; i++) {
    const weight = weights[i - 1], value = values[i - 1];
    for (let j = 1; j <= V; j++) {
      // 以下代码可优化
      // if (j < weight) {
      // 	dp[j] = dp[j];
      // } else {
      //   dp[j] = Math.max(dp[j], dp[j - weight] + value);
      // }
      if (j >= weight) {
        dp[j] = Math.max(dp[j], dp[j - weight] + value);
      }
    }
  }

  return dp[V];
}
```
:::

::: tab C++
```cpp

```
:::

::: tab Java
```java

```
:::
::::


::: tip 复杂度分析
+ 时间复杂度：$O(N * V)$
+ 空间复杂度：$O(V)$
:::




## 更多题型