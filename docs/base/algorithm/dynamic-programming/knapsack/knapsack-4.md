---
sidebarDepth: 2
---

## 简介

+ 混合三种背包问题




## 经典例题



:::: tabs
::: tab JavaScript
```js
function solution(N, V, v, w, s) {
  // 二进制拆分物品
  const goods = [];
  for (let i = 0; i < N; i++) {
    if (s[i] <= 0) {
      goods.push({ v: v[i], w: w[i], s: s[i] });
    } else {
      let cnt = s[i];
      for (let j = 1; j <= cnt; j *= 2) {
        goods.push({ v: v[i] * j, w: w[i] * j, s: -1 });
        cnt -= j;
      }
      if (cnt > 0) goods.push({ v: v[i] * cnt, w: w[i] * cnt, s: -1 });
    }
  }
  // 动态规划
  const M = goods.length;
  const f = new Array(V + 1).fill(0);
  for (let i = 1; i <= M; i++) {
    const vi = goods[i-1].v, wi = goods[i-1].w, si = goods[i-1].s;
    if (si === -1) {
      for (let j = V; j >= vi; j--) {
        f[j] = Math.max(f[j], f[j-vi] + wi);
      }
    } else {
      for (let j = vi; j <= V; j++) {
        f[j] = Math.max(f[j], f[j-vi] + wi);
      }
    }
  }

  return f[V];
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
+ 时间复杂度：$O(N*V* \sum_{i=1}^ks[i])$，最坏时间复杂度取决于物品中多重背包的个数
+ 空间复杂度：$O(V)$
:::



## 更多题型


