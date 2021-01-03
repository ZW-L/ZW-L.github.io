---
sidebarDepth: 2
---

## 概念

+ 定义：二叉树(Binary Tree)是一颗特殊的树，它的树节点最多只能有两个子节点，有左右之分，顺序不能颠倒

+ 性质：
  1. 二叉树的第 $i$ 层上至多有 $2^{i-1}(i\geq1)$ 个节点
  2. 深度为 $k$ 的二叉树至多有 $2^k-1(k\geq1)$ 个节点
  3. 对任一二叉树，若其终端节点数为 $n_0$，度为 2 的节点数为 $n_2$，则 $n_0 = n_2 + 1$
  4. 具有 $n$ 个节点的完全二叉树的深度为 $\lfloor log_2n \rfloor+1$
  5. 如果对一颗有 $n$ 个节点的完全二叉树（其深度为 $\lfloor log_2n \rfloor+1$）的节点按层序编号（从第 $i$ 层到第 $\lfloor log_2n \rfloor+1$ 层，每层从左到右），则对任一节点 $i(1\leq i \leq n)$，有：
      1. 若 $i=1$，则节点 $i$ 是二叉树的根，无双亲；若 $i\le1$，则双亲 $PARENT(i)$ 是节点 $\lfloor i/2 \rfloor$
      2. 若 $2i \ge n$，则节点 $i$ 无左孩子($i$ 为叶子节点)；否则其左孩子 $LCHILD(i)$ 是节点 $2i$
      3. 若 $2i + 1 \ge n$，则节点 $i$ 无右孩子；否则其右孩子 $RCHILD(i)$ 是节点 $2i+1$

+ 分类：按照子节点的排列情况，二叉树有两种特殊形式：
  + 满二叉树：树深度为 $k$，且节点数为 $2^k-1$
  + 完全二叉树：类似满二叉树，但最深层可以不排满节点，且必须按从左到右的顺序排列

+ 应用：二叉树是最常用的树结构，它能扩展为以下几种常用树：
  + [二叉搜索树](./binary-search-tree)
  + [旋转树](./avl-tree)
  + [红黑树](./red-black-tree)


::: tip 备注：
+ 通常，我们说二叉树和二叉树节点是一样的，像链表一样，每个节点都可以作为独立的一棵树/一个链表
+ 封装一个二叉树(节点)类是非常有必要的它的属性可以被派生类使用或覆盖
:::



## 代码实现

### 属性

每个节点必定包含四个属性：
+ `left`：左子树
+ `right`：右子树
+ `parent`：父节点
+ `value`：节点值

以及一些辅助属性，可供派生类使用过
+ `leftHeight`：左子树高度
+ `rightHeight`：右子树高度
+ `height`：树高度
+ `balanceFactor`：树的平衡因子，即左右子树高度差
+ `uncle`：叔叔节点


### 方法

一些常用方法：
+ `setValue(value)`：设置节点值
+ `setLeft(node)`：设置左子树
+ `setRight(node)`：设置右子树
+ `removeChild(node)`：删除子树，优先删除左子树
+ `replaceChild(source, target)`：用 target 替换 source

一些遍历方法：
+ `preOrderTraversal()`：前序遍历
+ `inOrderTraversal()`：中序遍历
+ `postOrderTraversal()`：后序遍历
+ `levelOrderTraversal()`：层序遍历

以及一些辅助方法：
+ `toString()`：返回二叉树的字符串表示
+ `static copyNode(source, target)`：复制 source 到 target



### 完整代码

::: details 二叉树节点类
```js
import Queue from '../queue/Queue'
import HashTable from '../hash-table/HashTable'

export default class BinaryTreeNode {
  constructor(value = null) {
    this.left = null
    this.right = null
    this.parent = null
    this.value = value
    this.meta = new HashTable()
  }

  /**
   * @returns {Number}
   */
  get leftHeight() {
    if (!this.left) {
      return 0
    }
    // 递归返回左子树的高度
    return this.left.height + 1
  }

  /**
   * @returns {Number}
   */
  get rightHeight() {
    if (!this.right) {
      return 0
    }
    // 递归返回右子树的高度
    return this.right.height + 1
  }

  /**
   * @returns {Number}
   */
  get height() {
    // 递归返回树的高度
    return Math.max(this.leftHeight, this.rightHeight)
  }

  /**
   * @return {number}
   */
  get balanceFactor() {
    return this.leftHeight - this.rightHeight
  }

  /**
   * @return {BinaryTreeNode}
   */
  get uncle() {
    // 没有父节点或祖父节点
    if (!this.parent || !this.parent.parent) {
      return undefined
    }
    // 祖父节点只有一个孩子
    if (!this.parent.parent.left || !this.parent.parent.right) {
      return undefined
    }

    return this.parent === this.parent.parent.left
      ? this.parent.parent.right
      : this.parent.parent.left
  }

  /**
   * @param {*} value
   * @returns {BinaryTreeNode}
   */
  setValue(value) {
    this.value = value

    return this
  }

  /**
   * @param {BinaryTreeNode} node
   * @returns {BinaryTreeNode}
   */
  setLeft(node) {
    if (this.left) {
      // 释放原有的 left 节点
      this.left.parent = null
    }
    // 添加新的 left 节点
    this.left = node
    // 当 node 不为 null 时，将左节点指向父节点
    if (node) {
      this.left.parent = this
    }

    return this
  }

  /**
   * @param {BinaryTreeNode} node
   * @returns {BinaryTreeNode}
   */
  setRight(node) {
    if (this.right) {
      // 释放原有的 right 节点
      this.right.parent = null
    }
    // 添加新的 right 节点
    this.right = node
    // 当 node 不为 null 时，将右节点指向父节点
    if (node) {
      this.right.parent = this
    }

    return this
  }

  /**
   * @param {BinaryTreeNode} nodeToRemove
   * @returns {Boolean}
   */
  removeChild(nodeToRemove) {
    // nodeToRemove 是左节点时
    if (this.left && this.left === nodeToRemove) {
      this.left = null
      return true
    }
    // nodeToRemove 是右节点时
    if (this.right && this.right === nodeToRemove) {
      this.right = null
      return true
    }
    // 否则
    return false
  }

  /**
   * @param {BinaryTreeNode} nodeToReplace
   * @param {BinaryTreeNode} replacementNode
   * @returns {Boolean}
   */
  replaceChild(nodeToReplace, replacementNode) {
    if (!nodeToReplace || !replacementNode) {
      return false
    }
    // nodeToReplace 是左节点
    if (this.left && this.left === nodeToReplace) {
      this.left = replacementNode
      return true
    }
    // nodeToReplace 是右节点
    if (this.right && this.right === nodeToReplace) {
      this.right = replacementNode
      return true
    }
    // 否则
    return false
  }

  /**
   * 前序遍历，返回一个数组，不包含空节点
   * @returns {*[]}
   */
  preOrderTraversal() {
    let traversal = []
    // 根节点
    traversal.push(this.value)
    // 左节点
    if (this.left) {
      traversal = traversal.concat(this.left.preOrderTraversal())
    }
    // 右节点
    if (this.right) {
      traversal = traversal.concat(this.right.preOrderTraversal())
    }

    return traversal
  }

  /**
   * 中序遍历，返回一个数组，不包含空节点
   * @returns {*[]}
   */
  inOrderTraversal() {
    let traversal = []
    // 左节点
    if (this.left) {
      traversal = traversal.concat(this.left.inOrderTraversal())
    }
    // 根节点
    traversal.push(this.value)
    // 右节点
    if (this.right) {
      traversal = traversal.concat(this.right.inOrderTraversal())
    }

    return traversal
  }

  /**
   * 后序遍历，返回一个数组，不包含空节点
   * @returns {*[]}
   */
  postOrderTraversal() {
    let traversal = []
    // 左节点
    if (this.left) {
      traversal = traversal.concat(this.left.postOrderTraversal())
    }
    // 右节点
    if (this.right) {
      traversal = traversal.concat(this.right.postOrderTraversal())
    }
    // 根节点
    traversal.push(this.value)

    return traversal
  }

  /**
   * 层序遍历，返回一个数组，包含空节点，能以满二叉树的形式模拟出唯一的二叉树
   * @returns {*[]}
   */
  levelOrderTraversal() {
    const traversal = []
    // 初始化队列
    const queue = new Queue()
    queue.enqueue(this)
    // 队列非空
    while (!queue.isEmpty()) {
      const currentNode = queue.front
      // 该节点非空且存在任一非空孩子节点时才入队
      if (currentNode && (currentNode.left || currentNode.right)) {
        queue.enqueue(currentNode.left ? currentNode.left : null)
        queue.enqueue(currentNode.right ? currentNode.right : null)
      }
      // 出队
      const dequeueNode = queue.dequeue()
      traversal.push(dequeueNode === null ? null : dequeueNode.value)
    }

    return traversal
  }

  /**
   * @returns {String}
   */
  toString() {
    return this.inOrderTraversal().toString()
  }

  /**
   * 拷贝节点
   * @param {BinaryTreeNode} sourceNode
   * @param {BinaryTreeNode} targetNode
   */
  static copyNode(sourceNode, targetNode) {
    targetNode.setValue(sourceNode.value)
    targetNode.setLeft(sourceNode.left)
    targetNode.setRight(sourceNode.right)
  }

  // todo: 从数组构建二叉树
}
```
:::



## 遍历的实现

+ 分为前序、中序、后序三种遍历，按照遍历节点的顺序命名：
  + 前序遍历：遍历顺序为 parent -> left -> right
  + 中序遍历：遍历顺序为 left -> parent -> right
  + 后序遍历：遍历顺序为 left -> right -> parent
+ 因为它们可以使用递归实现，因此也可以使用栈来模拟


### DFS VS 递归

+ 递归实现深度优先遍历非常简单
+ 前缀遍历
```js
preOrderTraversal() {
  let traversal = []

  traversal.push(this.value)
  this.left && traversal.push(...this.left.preOrderTraversal())
  this.right && traversal.push(...this.right.preOrderTraversal())

  return traversal
}
```

+ 中序遍历
```js
inOrderTraversal() {
  let traversal = []

  this.left && traversal.push(...this.left.preOrderTraversal())
  traversal.push(this.value)
  this.right && traversal.push(...this.right.preOrderTraversal())

  return traversal
}
```

+ 后序遍历
```js
postOrderTraversal() {
  let traversal = []

  this.left && traversal.push(...this.left.preOrderTraversal())
  this.right && traversal.push(...this.right.preOrderTraversal())
  traversal.push(this.value)

  return traversal
}
```



### DFS VS 栈

+ 前序遍历
```js

```

+ 中序遍历
+ 后序遍历



### DFS VS 线索树





### 层序遍历

+ 又叫广度优先遍历，可以使用队列来辅助遍历
```js
/**
 * 层序遍历，返回一个数组，包含空节点，能以满二叉树的形式模拟出唯一的二叉树
 * @returns {*[]}
 */
levelOrderTraversal() {
  const traversal = []
  // 初始化队列
  const queue = new Queue()
  queue.enqueue(this)
  // 队列非空
  while (!queue.isEmpty()) {
    const currentNode = queue.front
    // 该节点非空且存在任一非空孩子节点时才入队
    if (currentNode && (currentNode.left || currentNode.right)) {
      queue.enqueue(currentNode.left ? currentNode.left : null)
      queue.enqueue(currentNode.right ? currentNode.right : null)
    }
    // 出队
    const dequeueNode = queue.dequeue()
    traversal.push(dequeueNode === null ? null : dequeueNode.value)
  }

  return traversal
}
```
