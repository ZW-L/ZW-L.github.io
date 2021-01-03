---
sidebarDepth: 2
---

## 概念

+ 二叉搜索树(BST)也称二叉排序树，显著特点是**其中序遍历返回的节点值数组是已排序的**
+ 可以通过扩展二叉树，添加几个方法，并在内部调整节点插入的位置：
  + `insert(value)`：插入节点
  + `remove(value)`：删除节点
  + `find(value)`：查找节点




## 实现

### 二叉树节点类

+ 代码
::: details 二叉树节点类
```js
import BinaryTreeNode from '../BinaryTreeNode'

export default class BinarySearchNode extends BinaryTreeNode {
  constructor(value = null) {
    super(value)
  }

  /**
   * 插入值，递归实现
   * @param {*} value
   * @returns {BinarySearchNode}
   */
  insert(value) {
    // 处理边界：树为空时
    if (this.value === null) {
      this.value = value
      return this
    }

    // 在左子树插入
    if (this.value > value) {
      // 左子树非空，则递归至左子树为空
      if (this.left) {
        return this.left.insert(value)
      }
      // 退出递归：插入为左子树
      const newNode = new BinarySearchNode(value)
      this.setLeft(newNode)

      return newNode
    }

    // 在右子树插入
    if (this.value < value) {
      // 右子树非空，则递归至右子树为空
      if (this.right) {
        return this.right.insert(value)
      }
      // 退出递归：插入为右子树
      const newNode = new BinarySearchNode(value)
      this.setRight(newNode)

      return newNode
    }

    return this
  }

  /**
   * 查找值所在的节点，递归实现
   * @param {*} value
   * @returns {BinarySearchNode||null}
   */
  find(value) {
    // 退出递归：在当前树的根节点
    if (this.value === value) {
      return this
    }
    // 可能在左子树
    if (value < this.value && this.left) {
      return this.left.find(value)
    }
    // 可能在右子树
    if (value > this.value && this.right) {
      return this.right.find(value)
    }
    // 查找失败
    return null
  }

  /**
   * 最小值所在的节点(即最左边的节点)，递归实现
   * @returns {BinarySearchNode}
   */
  findMin() {
    // 退出递归：不存在左子树
    if (!this.left) {
      return this
    }

    return this.left.findMin()
  }

  /**
   * 判断是否包含某个值，将 find() 转化为谓词
   * @param {*} value
   * @returns {Boolean}
   */
  contains(value) {
    return !!this.find(value)
  }

  /**
   * 删除值，递归实现
   * @param {*} value
   * @returns {Boolean}
   */
  remove(value) {
    const nodeToRemove = this.find(value)
    // 边界情况：值不存在时
    if (!nodeToRemove) {
      throw new Error('Item not found in the tree!')
    }

    const { parent } = nodeToRemove
    // 要删除的节点没有子树
    if (!nodeToRemove.left && !nodeToRemove.right) {
      // 该节点不是根节点
      if (parent) {
        parent.removeChild(nodeToRemove)
      }
      // 该节点是根节点
      nodeToRemove.setValue(undefined)
    } else if (nodeToRemove.left && nodeToRemove.right) {
      // 要删除的节点同时有左右两颗子树
      // 先找出下一个 value 比要删除的节点大的节点(根据二叉搜索树的特性，该节点一定在右子树)
      const nextBiggerNode = nodeToRemove.right.findMin()
      if (nextBiggerNode === nodeToRemove.right) {
        // 当该节点刚好是要删除的节点的右子树节点时
        // 1.将要删除的节点的 value 设置为右子树节点的 value
        // 2.将右子树的右子树设置为要删除的节点的右子树
        nodeToRemove.setValue(nodeToRemove.right.value)
        nodeToRemove.setRight(nodeToRemove.right.right)
      } else {
        // 否则
        // 1.递归删除该节点
        // 2.再将要删除的节点的 value 设置为该节点的 value
        this.remove(nextBiggerNode.value)
        nodeToRemove.setValue(nextBiggerNode.value)
      }
    } else {
      // 要删除的节点仅有一棵子树
      const childNode = nodeToRemove.left || nodeToRemove.right
      if (parent) {
        // 该节点不是根节点时，直接将该节点的子树拷贝覆盖自身
        parent.replaceChild(nodeToRemove, childNode)
      } else {
        // 该节点是根节点，将该节点的子树与其替换
        BinaryTreeNode.copyNode(childNode, nodeToRemove)
      }
    }

    // 释放已删除的节点的父节点指向
    nodeToRemove.parent = null

    return true
  }
}
```
:::



### 二叉搜索树类

+ 继承并封装 `BinarySearchTreeNode`，仅暴露一些属性和方法
+ 但每个树节点作为 `BinarySearchTreeNode` 的实例仍可使用节点属性和方法

::: details 二叉搜索树
```js
import BinarySearchTreeNode from './BinarySearchTreeNode'

export default class BinarySearchTree {
  constructor() {
    this.root = new BinarySearchTreeNode(null)
  }

  /**
   * @param {*} value
   * @return {BinarySearchTreeNode}
   */
  insert(value) {
    return this.root.insert(value)
  }

  /**
   * @param {*} value
   * @returns {Boolean}
   */
  contains(value) {
    return this.root.contains(value)
  }

  /**
   * @param {*} value
   * @returns {Boolean}
   */
  remove(value) {
    return this.root.remove(value)
  }

  /**
   * @returns {*[]}
   */
  inOrderTraversal() {
    return this.root.inOrderTraversal()
  }

  /**
   * @returns {String}
   */
  toString() {
    return this.root.toString()
  }
}
```
:::