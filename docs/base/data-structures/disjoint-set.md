---
sidebarDepth: 2
---

## 说明

+ 并查集（UnionFind）也叫不相交集（DisjointSet），在图算法中应用广泛
+ 应用：
  + 计算图的连通分量的个数
+ 两种启发式合并策略：
  + 按秩合并
  + 路径压缩



## 实现

:::: tabs
::: tab 概述

+ 按秩合并：合并操作时，根据并查集（树）的高度，选择合并方和被合并方
+ 路径压缩：在查找的过程中动态调整并查集（树）的高度，使其查找的时间复杂度为 $O(1)$
+ `makeSet()`：构建并查集
+ `find()`：查找集合
+ `union()`：合并两个集合

:::

::: tab makeSet
+ 一般来说，使用数组来构建并查集：索引代表集合元素，值代表父元素；按秩合并时还需额外维护一个 `rank` 数组
```js
// 初始化时，每个元素的父元素指向自身
f = new Array(n).fill(0).map((v, i) => i)
rank = new Array(n).fill(1)
```

+ 还可以映射为键值
```js

```
:::

::: tab find
+ find 使用递归实现，其自身包含了路径压缩，这也是一个很巧妙的递归
```js
find(x) {
  if (f[x] === x) return x
  f[x] = find(x)
  return f[x]
}
```
:::

::: tab union
+ 为了判断 `union` 操作是否执行，通常会为其添加返回值标志
+ 一般合并
```js
union(x, y) {
  const fx = find(x), fy = find(y)
  if (fx === fy) return false
  f[fx] = fy
  return true
}
```

+ 按秩合并：通过比较集合元素的高度，始终将较低 `rank` 的元素指向较高 `rank` 的元素，并更新 `rank`
```js
union(x, y) {
  let fx = find(x), fy = find(x, y)
  if (fx === fy) return false
  if (rank[fx] < rank[fy]) [fx, fy] = [fy, fx]
  f[fy] = fx
  rank[fx] += rank[fy]
  return true
}
```
:::

::: tab 完整模板
```js
class UnionFind {
  constructor(n) {
    this.f = new Array(n).fill(0).map((v, i) => i)
    this.rank = new Array(n).fill(1)
  }
  find(x) {
    return this.f[x] === x ? x : (this.f[x] = this.find(this.f[x]))
  }
  union(x, y) {
    let fx = this.find(x), fy = this.find(y)
    if (fx === fy) return false
    if (this.rank[fx] < this.rank[fy]) [fx, fy] = [fy, fx]
    this.f[fy] = fx
    this.rank[fx] += this.rank[fy]
    return true
  }
}
```
:::
::::




## 应用




## DisjointSetItem 类


### 属性和方法

+ **属性**：
  + `value`：节点值
  + `keyCallback`：用于获取键的回调函数
  + `parent`：父节点
  + `children`：子节点
+ **方法**：
  + 辅助方法
    + `isRoot()`：指示节点是否是根节点
    + `getRoot()`：获取节点的根节点
    + `getKey()`：获取键名
    + `getChildren()`：获取子节点列表
    + `getRank()`：获取节点的后代节点数
  + `setParent(parentItem, forceSettingParentChild)`：设置父节点
  + `addChild(childItem)`：添加子节点


### 实现

::: details
```js
export default class DisjointSetItem {
  /**
   * @param {*} value
   * @param {function(value: *)} [keyCallback]
   */
  constructor(value, keyCallback) {
    this.value = value
    this.keyCallback = keyCallback
    /** @var {DisjointSetItem} this.parent */
    this.parent = null
    this.children = {}
  }

  /**
   * @return {boolean}
   */
  isRoot() {
    return this.parent === null
  }

  /**
   * @return {DisjointSetItem}
   */
  getRoot() {
    return this.isRoot() ? this : this.parent.getRoot()
  }

  /**
   * @return {*}
   */
  getKey() {
    return this.keyCallback ? this.keyCallback(this.value) : this.value
  }

  /**
   * @return {DisjointSetItem[]}
   */
  getChildren() {
    return Object.values(this.children)
  }

  /**
   * @return {number}
   */
  getRank() {
    const children = this.getChildren()

    if (children.length === 0) {
      return 0
    }

    let rank = 0
    /** @var {DisjointSetItem} child */
    children.forEach((child) => {
      rank += 1
      rank += child.getRank()
    })

    return rank
  }

  /**
   * @param {DisjointSetItem} parentItem
   * @param {boolean} forceSettingParentChild
   * @return {DisjointSetItem}
   */
  setParent(parentItem, forceSettingParentChild = true) {
    this.parent = parentItem
    if (forceSettingParentChild) {
      parentItem.addChild(this)
    }

    return this
  }

  /**
   * @param {DisjointSetItem} childItem
   * @return {DisjointSetItem}
   */
  addChild(childItem) {
    this.children[childItem.getKey()] = childItem
    childItem.setParent(this, false)

    return this
  }
}
```
:::



## DisjointSet 类

### 属性和方法

+ **属性**：
  + `keyCallback`：用于获取键的回调函数
  + `items`：保存 `DisjointSetItem` 节点
+ **方法**：
  + `makeSet(itemValue)`：设置 `items`
  + `find(itemValue)`：查找指定值的根节点的键
  + `union(valueA, valueB)`：联合两个 `DisjointSetItem` 节点
  + `inSameSet(valueA, valueB)`：指示两个 `DisjointSetItem` 节点是否包含于同一个集合中


### 实现

::: details
```js
import DisjointSetItem from './DisjointSetItem'

export default class DisjointSet {
  /**
   * @param {function(value: *)} [keyCallback]
   */
  constructor(keyCallback) {
    this.keyCallback = keyCallback
    this.items = {}
  }

  /**
   * @param {*} itemValue
   * @return {DisjointSet}
   */
  makeSet(itemValue) {
    const disjointSetItem = new DisjointSetItem(itemValue, this.keyCallback)
    const key = disjointSetItem.getKey()

    if (!this.items[key]) {
      this.items[key] = disjointSetItem
    }

    return this
  }

  /**
   * @param {*} itemValue
   * @return {(string|null)}
   */
  find(itemValue) {
    const templateDisjointItem = new DisjointSetItem(itemValue, this.keyCallback)
    const requiredDisjointItem = this.items[templateDisjointItem.getKey()]

    return requiredDisjointItem ? requiredDisjointItem.getRoot().getKey() : null
  }

  /**
   * @param {*} valueA
   * @param {*} valueB
   * @return {DisjointSet}
   */
  union(valueA, valueB) {
    const rootKeyA = this.find(valueA)
    const rootKeyB = this.find(valueB)

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error('One or two values are not in sets')
    }

    if (rootKeyA === rootKeyB) {
      return this
    }

    const rootA = this.items[rootKeyA]
    const rootB = this.items[rootKeyB]

    if (rootA.getRank() < rootB.getRank()) {
      rootB.addChild(rootA)

      return this
    }

    rootA.addChild(rootB)

    return this
  }

  /**
   * @param {*} valueA
   * @param {*} valueB
   * @return {boolean}
   */
  inSameSet(valueA, valueB) {
    const rootKeyA = this.find(valueA)
    const rootKeyB = this.find(valueB)

    if (rootKeyA === null || rootKeyB === null) {
      throw new Error('One or two values are not in sets')
    }

    return rootKeyA === rootKeyB
  }
}
```
:::
