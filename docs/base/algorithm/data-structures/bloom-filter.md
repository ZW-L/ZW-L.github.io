## 说明

+ 哈希表不是万能的，当需要在一组大数据中查找值时，哈希表的空间复杂度会到达 GB 甚至 TB 的数量级，**布隆过滤器**（BloomFilter）可以解决这个问题
+ 布隆过滤器实际上由**一个很长的二进制矢量**（位数组）和**一系列随机映射函数**（哈希函数）组成；其中位数组每个元素的值都为 0 或 1，而一系列哈希函数负责将一个值映射为一串索引值，然后将位数组中对应索引的值都设置为 1，以标记一个值
+ 布隆过滤器有以下缺点
  + 不确定性，它有一定的误识别率；随着数据的增加，误判率随之增加
  + 只能判断数据是否一定不存在，无法判断数据是否一定存在
  + 删除数据困难


## BloomFilter 类


### 属性和方法

+ **属性**：
  + `size`：位数组的大小
  + `storage`：一个封装了访问和设置位数组方法的对象
+ **方法**：
  + `insert(item)`：添加值
  + `mayContain(item)`：指示是否包含值
  + `createStorage(size)`：封装 `storage` 对象
  + `hash1(item)`：哈希函数
  + `hash2(item)`：哈希函数
  + `hash3(item)`：哈希函数
  + `getHashValues(item)`：组织调用哈希函数

::: tip 说明：
+ `mayContain(item)` 命名使用 `may` 前缀，是因为布隆过滤器的不确定性
+ 由于只是简单实现，位数组仅使用一个元素位置表示一个二进制位，并不是真实的二进制位
:::

### 实现

```js
export default class BloomFilter {
  /**
   * @param {number} size
   */
  constructor(size = 100) {
    this.size = size
    this.storage = this.createStore(size)
  }

  /**
   * @param {string} item
   */
  insert(item) {
    const hashValues = this.getHashValues(item)

    hashValues.forEach(val => this.storage.setValue(val))
  }

  /**
   * @param {string} item
   * @return {boolean}
   */
  mayContain(item) {
    const hashValues = this.getHashValues(item)

    for (let i = 0; i < hashValues.length; i++) {
      if (!this.storage.getValue(hashValues[i])) {
        return false
      }
    }

    return true
  }

  /**
   * @param {number} size
   * @return {Object}
   */
  createStore(size) {
    const storage = []

    for (let i = 0; i < size; i++) {
      storage.push(false)
    }

    const storageInterface = {
      getValue(index) {
        return storage[index]
      },
      setValue(index) {
        storage[index] = true
      },
    }

    return storageInterface
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash1(item) {
    let hash = 0
    const len = item.length

    for (let i = 0; i < len; i++) {
      const char = item.charCodeAt(i)
      hash = (hash << 5) + hash + char
      hash &= hash
      hash = Math.abs(hash)
    }

    return hash % this.size
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash2(item) {
    let hash = 5381
    const len = item.length

    for (let i = 0; i < len; i++) {
      const char = item.charCodeAt(i)
      hash = (hash << 5) + hash + char
    }

    return Math.abs(hash % this.size)
  }

  /**
   * @param {string} item
   * @return {number}
   */
  hash3(item) {
    let hash = 0
    const len = item.length

    for (let i = 0; i < len; i++) {
      const char = item.charCodeAt(i)
      hash = (hash << 5) - hash
      hash += char
      hash &= hash
    }

    return Math.abs(hash % this.size)
  }

  /**
   * @param {string} item
   * @return {number[]}
   */
  getHashValues(item) {
    return [
      this.hash1(item),
      this.hash2(item),
      this.hash3(item),
    ];
  }
}
```