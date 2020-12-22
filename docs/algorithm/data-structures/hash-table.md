---
sidebarDepth: 2
---


## 概述

+ 哈希表(HashTable)又称散列表，实际上就是一个数组，通过散列函数将数据的键映射为数组的唯一下标
+ 散列函数：哈希表的核心函数之一，负责将数据的键转换为唯一的地址值
+ 哈希扩容：当哈希表实际存储的容量超过一定阈值时，会导致其设置/读取的效率降低，此时便需要对哈希表扩容
+ 处理冲突：散列函数不是完美的，在不同的键出现相同地址值时，便需要处理冲突
  + **开放寻址法**：通过指定算法修改键对应的地址值
  + **链表法**：将构成哈希表的数组的每个元素定义为链表，当冲突时，将数据存储于链表尾部


::: tip 备注：
+ 哈希表拥有数组的随机访问特性和链表的随机存储特性，访问、插入、删除的时间复杂度都是 O(1)
+ 哈希表的主要消耗为：
  + 初始化数组的空间复杂度 O(n)
  + 哈希扩容的时间复杂度 O(n)
:::


### 属性

+ `buckets`：存储所有元素的一个数组
+ `keys`：存储所有元素键名的一个对象
+ `size`：已使用容量
+ `capacity`：最大容量
+ `loadFactor`：负载因子

### 方法

+ `hash()`：散列函数
+ `set()`：设置键值
+ `get()`：获取键值
+ `getKeys()`：获取所有键
+ `has()`：判断是否包含键
+ `delete()`：删除键
+ `resize()`：哈希扩容



## 实现

+ 使用链表法处理冲突
```js
import LinkedList from '../linked-list/LinkedList'

const HASH_TABLE_SIZE = 32  // 哈希表容量
const LOAD_FACTOR = 0.75    // 负载因子

export default class HashTable {
  /**
   * @param {Int} size
   * @param {Number} loadFactor
   */
  constructor(size = HASH_TABLE_SIZE, loadFactor = LOAD_FACTOR) {
    this.buckets = Array(size).fill(null).map(() => new LinkedList())
    this.keys = {}
    this.size = 0
    this.capacity = size
    this.loadFactor = loadFactor
  }

  /**
   * @param {String} key
   * @returns {Number}
   */
  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => hashAccumulator + keySymbol.charCodeAt(0),
      0,
    )
    return hash % this.buckets.length
  }

  /**
   * @param {String} key
   * @param {*} value
   */
  set(key, value) {
    const hashKey = this.hash(key)
    this.keys[key] = hashKey
    const bucketLinkedList = this.buckets[hashKey]
    // 通过链表的 find 方法，传入回调函数查找 key 相同的节点
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key })
    if (!node) {
      bucketLinkedList.append({ key, value }) // 不存在对应的链表节点时，直接在链表尾部追加节点
      this.size++
    } else {
      node.value.value = value                // 链表节点已存在，直接修改值
    }

    // 自动进行哈希扩容
    (this.size >= this.capacity * this.loadFactor) && this.resize()
  }

  /**
   * @param {String} key
   * @returns {*}
   */
  get(key) {
    const bucketLinkedList = this.buckets[this.hash(key)]
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key })
    return node ? node.value.value : undefined
  }

  /**
   * @returns {String[]}
   */
  getKeys() {
    return Object.keys(this.keys)
  }

  /**
   * @param {String} key
   * @returns {Boolean}
   */
  has(key) {
    return Object.hasOwnProperty.call(this.keys, key)
  }

  /**
   * @param {String} key
   * @return {*}
   */
  delete(key) {
    delete this.keys[key]
    const bucketLinkedList = this.buckets[this.hash(key)]
    const node = bucketLinkedList.find({ callback: nodeValue => nodeValue.key === key })

    if (node) {
      this.size--
      return bucketLinkedList.delete(node.value).value.value
    }

    return null
  }

  /**
   * @returns {void}
   */
  resize() {
    // 新建哈希表，拷贝键值对
    const newHashTable = new HashTable(this.capacity * 2)
    for (const key in this.keys) {
      newHashTable.set(key, this.get(key))
    }
    // 更新相关属性
    this.size = newHashTable.size
    this.capacity = newHashTable.capacity
    this.buckets = newHashTable.buckets
  }
}
```
