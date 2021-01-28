---
sidebarDepth: 2
---

## 概念

+ **字典树**（Trie），又名**前缀树、单词查找树**，是一种搜索树
+ 由于其内部复用了重复的节点值，使得存储空间大大减少
+ 内部通过一个哈希表记录子节点列表


### 应用

+ 应用输入框的输入自动提示
+ 用于快速查找单词、前缀



## 实现

### 属性

+ `children`：子节点数组，可以使用对象或哈希表来存储
+ `isWord`：标记该节点是否属于单词结尾

### 方法
+ `insert(word)`：插入一个新单词，同时会更新单词尾节点
+ `search(word)`：查找一个单词，除了包含完整前缀外，其尾节点的 `isWord` 必须为 `true`
+ `startsWith(prefix)`：查找指定前缀是否存在
+ `delete(word)`：删除一个已有单词


::: tip 备注：
+ `search()` 和 `startsWith()` 有同样的前提条件：**需包含完整的前缀**，可以创建一个辅助方法复用代码
:::

### 简易实现

+ 实现 `insert`, `search`, `startsWith` 三个最常用的操作
:::: tabs
::: tab 使用对象
```js
class Trie {
  constructor() {
    this.children = {}
  }
  insert(word) {
    let curr = this.children
    for (const ch of word) {
      if (!curr[ch]) curr[ch] = {}
      curr = curr[ch]
    }
    curr.isWord = true
  }
  search(word) {
    const lastCh = this.lastNode(word)
    return !!lastCh && !!lastCh.isWord
  }
  startsWith(prefix) {
    return !!this.lastNode(prefix)
  }
  // 辅助函数：返回最后一个匹配的节点
  lastNode(word) {
    let curr = this.children
    for(let ch of word){
      if(!curr[ch]) return null
      curr = curr[ch]
    }
    return curr
  }
}
```
:::

::: tab 使用哈希表
```js
class Trie {
  constructor() {
    this.isWord = false
    this.children = new Map()
  }
  insert(word) {
    let curr = this
    for (const ch of word) {
      if (!curr.children.has(ch)) curr.children.set(ch, new Trie(ch))
      curr = curr.children.get(ch)
    }
    curr.isWord = true
  }
  search(word) {
    const lastCh = this.lastNode(word)
    return !!lastCh && !!lastCh.isWord
  }
  startsWith(prefix) {
    return !!this.lastNode(prefix)
  }
  // 辅助函数：返回最后一个匹配的节点
  lastNode(word) {
    let curr = this
    for (const ch of word) {
      if (!curr.children.has(ch)) return null
      curr = curr.children.get(ch)
    }
    return curr
  }
}
```
:::
::::



## 算法

+ [LeetCode-208.实现 Trie 树](https://leetcode-cn.com/problems/implement-trie-prefix-tree/)
+ [LeetCode-79.单词搜索](https://leetcode-cn.com/problems/word-search/)
+ [LeetCode-212.单词搜索 II](https://leetcode-cn.com/problems/word-search-ii/)
