## 说明

+ 并查集（DisjointSet）也叫不相交集


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