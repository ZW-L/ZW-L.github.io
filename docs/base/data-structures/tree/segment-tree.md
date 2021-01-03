## 说明

+ **线段树**（Segment Tree）



## 线段树

### 属性和方法

+ **属性**：
+ **方法**：

### 实现

::: details
```js
import isPowerOfTwo from '../../../algorithms/math/is-power-of-two/isPowerOfTwo'

export default class SegmentTree {
  /**
   * @param {number[]} inputArray
   * @param {function} operation - binary function (i.e. sum, min)
   * @param {number} operationFallback - operation fallback value (i.e. 0 for sum, Infinity for min)
   */
  constructor(inputArray, operation, operationFallback) {
    this.inputArray = inputArray
    this.operation = operation
    this.operationFallback = operationFallback
    this.segmentTree = this.initSegmentTree(this.inputArray)
    this.buildSegmentTree()
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getLeftChildIndex(parentIndex) {
    return (2 * parentIndex) + 1
  }

  /**
   * @param {number} parentIndex
   * @return {number}
   */
  getRightChildIndex(parentIndex) {
    return (2 * parentIndex) + 2
  }

  /**
   * @param {number[]} inputArray
   * @return {number[]}
   */
  initSegmentTree(inputArray) {
    let treeLength
    const arrLength = inputArray.length

    if (isPowerOfTwo(arrLength)) {
      treeLength = (2 * arrLength) - 1
    } else {
      const currentPower = Math.floor(Math.log2(arrLength))
      const nextPower = currentPower + 1
      const nextPowerOfTwoNumber = 2 ** nextPower
      treeLength = (2 * nextPowerOfTwoNumber) - 1
    }

    return new Array(treeLength).fill(null)
  }

  /**
   * Build segment tree.
   */
  buildSegmentTree() {
    const leftIndex = 0
    const rightIndex = this.inputArray.length - 1
    const position = 0
    this.buildTreeRecursively(leftIndex, rightIndex, position)
  }

  /**
   * @param {number} leftInputIndex
   * @param {number} rightInputIndex
   * @param {number} position
   */
  buildTreeRecursively(leftInputIndex, rightInputIndex, position) {
    if (leftInputIndex === rightInputIndex) {
      this.segmentTree[position] = this.inputArray[leftInputIndex]
      return
    }

    const middleIndex = Math.floor((leftInputIndex + rightInputIndex) / 2)
    this.buildTreeRecursively(leftInputIndex, middleIndex, this.getLeftChildIndex(position))
    this.buildTreeRecursively(middleIndex + 1, rightInputIndex, this.getRightChildIndex(position))
    this.segmentTree[position] = this.operation(
      this.segmentTree[this.getLeftChildIndex(position)],
      this.segmentTree[this.getRightChildIndex(position)],
    )
  }

  /**
   * @param {number} queryLeftIndex
   * @param {number} queryRightIndex
   * @return {number}
   */
  rangeQuery(queryLeftIndex, queryRightIndex) {
    const leftIndex = 0
    const rightIndex = this.inputArray.length - 1
    const position = 0

    return this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      rightIndex,
      position,
    )
  }

  /**
   * @param {number} queryLeftIndex - left index of the query
   * @param {number} queryRightIndex - right index of the query
   * @param {number} leftIndex - left index of input array segment
   * @param {number} rightIndex - right index of input array segment
   * @param {number} position - root position in binary tree
   * @return {number}
   */
  rangeQueryRecursive(queryLeftIndex, queryRightIndex, leftIndex, rightIndex, position) {
    if (queryLeftIndex <= leftIndex && queryRightIndex >= rightIndex) {
      return this.segmentTree[position]
    }

    if (queryLeftIndex > rightIndex || queryRightIndex < leftIndex) {
      return this.operationFallback
    }

    const middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    const leftRes = this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      leftIndex,
      middleIndex,
      this.getLeftChildIndex(position),
    )
    const rightRes = this.rangeQueryRecursive(
      queryLeftIndex,
      queryRightIndex,
      middleIndex + 1,
      rightIndex,
      this.getRightChildIndex(position),
    )

    return this.operation(leftRes, rightRes)
  }
}
```
:::
