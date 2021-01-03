---
sidebarDepth: 2
---

## 概念

+ 旋转树(AVL)在扩展了二叉搜索树(BST)，其可以通过一定次数的 “自旋” 达到平衡
+ 关键方法为：
  + `rotateLeftLeft(node)`：
  + `rotateRightRight(node)`：
  + `rotateLeftRight(node)`：
  + `rotateRightLeft(node)`：




## 实现


::: details 完整代码
```js
import BinarySearchTree from '../binary-search-tree/BinarySearchTree'

export default class AvlTree extends BinarySearchTree {
  /**
   * @param {*} value
   */
  insert(value) {
    super.insert(value)

    let currentNode = this.root.find(value)
    while (currentNode) {
      this.balance(currentNode)
      currentNode = currentNode.parent
    }
  }

  /**
   * @param {*} value
   */
  remove(value) {
    super.remove(value)
    this.balance(this.root)
  }

  /**
   * @param {BinarySearchTreeNode} node
   */
  balance(node) {
    if (node.balanceFactor > 1) {
      if (node.left.balanceFactor > 0) {
        this.rotateLeftLeft(node)
      } else if (node.left.balanceFactor < 0) {
        this.rotateLeftRight(node)
      }
    } else if (node.balanceFactor < -1) {
      if (node.right.balanceFactor > 0) {
        this.rotateRightLeft(node)
      } else if (node.right.balanceFactor < 0) {
        this.rotateRightRight(node)
      }
    }
  }

  rotateLeftLeft(rootNode) {
    const leftNode = rootNode.left
    rootNode.setLeft(null)

    if (rootNode.parent) {
      rootNode.parent.setLeft(leftNode)
    } else if (rootNode === this.root) {
      this.root = leftNode
    }

    if (rootNode.right) {
      rootNode.setLeft(leftNode.right)
    }

    leftNode.setRight(rootNode)
  }

  rotateRightRight(rootNode) {
    // 获取右子节点，并将当前节点的右子节点清空
    const rightNode = rootNode.right
    rootNode.setRight(null)

    if (rootNode.parent) {
      // 当前节点有父节点时，右子节点上位(即右孙子节点成为右子节点)
      rootNode.parent.setRight(rightNode)
    } else if (rootNode === this.root) {
      // 当前节点是根节点时，将右子节点作为新的根节点
      this.root = rightNode
    }

    // 特殊情况：当前节点的左节点非空时，将右子节点的左子节点作为当前节点的右子节点
    if (rootNode.left) {
      rootNode.setRight(rightNode.left)
    }

    // 更新右子节点的左子节点
    rightNode.setLeft(rootNode)
  }

  rotateLeftRight(rootNode) {
    const leftNode = rootNode.left
    rootNode.setLeft(null)

    const leftRightNode = leftNode.right
    leftNode.setRight(null)

    if (leftRightNode.left) {
      leftNode.setRight(leftRightNode.left)
      leftRightNode.setLeft(null)
    }

    rootNode.setLeft(leftRightNode)
    leftRightNode.setLeft(leftNode)

    this.rotateLeftLeft(rootNode)
  }

  rotateRightLeft(rootNode) {
    const rightNode = rootNode.right
    rootNode.setRight(null)

    const rightLeftNode = rightNode.left
    rightNode.setLeft(null)

    if (rightLeftNode.right) {
      rightNode.setLeft(rightLeftNode.right)
      rightLeftNode.setRight(null)
    }

    rootNode.setRight(rightLeftNode)
    rightLeftNode.setRight(rightNode)

    this.rotateRightRight(rootNode)
  }
}
```
:::