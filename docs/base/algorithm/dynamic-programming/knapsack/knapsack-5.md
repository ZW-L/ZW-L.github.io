## 二维费用背包





## 经典例题

:::: tabs
::: tab JavaScript
```js
function solution(N, V, M, v, m, w) {
  const f = new Array(N + 1).fill(0).map(
    v => new Array(V + 1).fill(0).map(
      v => new Array(M + 1).fill(0)
    )
  );

  for (let i = 1; i <= N; i++) {
    const vi = v[i-1], mi = m[i-1], wi = w[i-1];
    for (let j = 1; j <= V; j++) {
      for (let k = 1; k <= M; k++) {
        if (j >= vi && k >= mi) {
          f[i][j][k] = Math.max(f[i-1][j][k], f[i-1][j-vi][k-mi] + wi);
        } else {
          f[i][j][k] = f[i-1][j][k];
        }
      }
    }
  }

  return f[N][V][M];
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
+ 时间复杂度：$O(N*V*M)$
+ 空间复杂度：$O(N*V*M)$
:::

+ 空间优化：本质还是[0-1背包](./knapsack-1.md)，可以优化掉第一维的空间，然后使用反序遍历

:::: tabs
::: tab JavaScript
```js
function solution(N, V, M, v, m, w) {
  const f = new Array(V + 1).fill(0).map(v => new Array(M + 1).fill(0));

  for (let i = 0; i < N; i++) {
    const vi = v[i], mi = m[i], wi = w[i];
    for (let j = V; j >= vi; j--) {
      for (let k = M; k >= mi; k--) {
        f[j][k] = Math.max(f[j][k], f[j-vi][k-mi] + wi);
      }
    }
  }

  return f[V][M];
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
+ 时间复杂度：$O(N*V*M)$
+ 空间复杂度：$O(V*M)$
:::



## 更多题型

