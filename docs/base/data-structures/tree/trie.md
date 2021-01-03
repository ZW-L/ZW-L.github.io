## 说明

+ **字典树**（Trie），又名**单词查找树**，是一种搜索树——一种已排序的数据结构，通常用于存储动态集或键为字符串的关联数组
+ `Trie` 由 `TrieNode` 组成，而 `TrieNode` 通过一个名为 `children` 的哈希表属性记录了子节点的链向



## TrieNode 类

### 属性和方法

+ **属性**：
  + `character`：节点记录的字符值
  + `isCompleteWord`：指示该节点是否是单词结尾
  + `children`：一个保存节点的所有子节点的哈希表
+ **方法**：
  + `addChild(character, isCompleteWord )`：添加新的子节点
  + `removeChild(character)`：删除指定子节点
  + 辅助方法：
    + `getChild(character)`：获取指定的子节点
    + `hasChild(character)`：指示是否包含指定子节点
    + `hasChildren()`：指示是否包含子节点
    + `suggestChildren()`：一个包含节点的所有子节点的值的数组
    + `toString()`：节点的字符串表示
  

::: tip 说明：
+ `addChild()` 只有当子节点不存在时才会添加；另一个关键的步骤是，修改节点的 `isCompleteWord` 属性（当 `Trie` 类中已包含 caret 字符串，再添加 car 字符串时，保证字符 r 标记为 `true`）
+ `removeChild(character)` 成功删除字符需要同时满足以下条件：
  + 该子节点存在
  + 该子节点的 `isCompleteWord` 属性为 `false`（为 `true` 时说明该节点与其他字符串共享）
  + 该子节点不包含子节点（确保删除只能从叶节点开始，这样就不会删除共享的节点）
:::


### 实现

::: details 
```js
import HashTable from '../hash-table/HashTable'

export default class TrieNode {
  /**
   * @param {string} character
   * @param {boolean} isCompleteWord
   */
  constructor(character, isCompleteWord = false) {
    this.character = character
    this.isCompleteWord = isCompleteWord
    this.children = new HashTable()
  }

  /**
   * @param {string} character
   * @return {TrieNode}
   */
  getChild(character) {
    return this.children.get(character)
  }

  /**
   * @param {string} character
   * @return {boolean}
   */
  hasChild(character) {
    return this.children.has(character)
  }

  /**
   * @return {boolean}
   */
  hasChildren() {
    return this.children.getKeys().length !== 0
  }

  /**
   * @return {string[]}
   */
  suggestChildren() {
    return [...this.children.getKeys()]
  }

  /**
   * @param {string} character
   * @param {boolean} isCompleteWord
   * @return {TrieNode}
   */
  addChild(character, isCompleteWord = false) {
    if (!this.children.has(character)) {
      this.children.set(character, new TrieNode(character, isCompleteWord))
    }

    const childNode = this.children.get(character)
    childNode.isCompleteWord = childNode.isCompleteWord || isCompleteWord

    return childNode
  }

  /**
   * @param {string} character
   * @return {TrieNode}
   */
  removeChild(character) {
    const childNode = this.getChild(character)

    if (
      childNode
      && !childNode.isCompleteWord
      && !childNode.hasChildren()
    ) {
      this.children.delete(character)
    }

    return this
  }

  /**
   * @return {string}
   */
  toString() {
    let childrenAsString = this.suggestChildren().toString()
    childrenAsString = childrenAsString ? `:${childrenAsString}` : ''
    const isCompleteString = this.isCompleteWord ? '*' : ''

    return `${this.character}${isCompleteString}${childrenAsString}`
  }
}
```
:::



## Trie 类

### 属性和方法

+ **属性**：
  + `head`：根节点，一般为特点标记
+ **方法**：
  + `addWord(word)`：添加单词
  + `deleteWord(word)`：删除单词
  + 辅助方法：
    + `suggestNextCharacters(word)`：输入建议，其实就是一个子节点的值的数组（或 `null`）
    + `doesWordExist(word)`：指示单词是否存在
    + `getLastCharacterNode(word)`：获取单词的最后一个字符
  

::: tip 说明：
+ `doesWordExist(word)` 必须满足两个条件
  + 单词的最后一个字符非空（如 `['car']` 中不存在单词 caret）
  + 单词的最后一个字符的 `isCompleteWord` 为 `true`（如 `['car']` 中不存在单词 ca）
+ `addWord(word)` 使用一个简单的循环，逐个添加 `TrieNode` 节点
+ `deleteWord(word)` 使用深度优先的递归方式，从叶节点开始删除，以下情况下删除会被忽略
  + 从 `['caret', 'car']` 中删除 caret，删除至 r 时，此时节点的 `isCompleteWord` 为 `true`
  + 继续执行删除至 a 时，此时节点包含子节点，删除至 c 时同理
:::


### 实现


::: details 
```js
import TrieNode from './TrieNode'

const HEAD_CHARACTER = '*'

export default class Trie {
  constructor() {
    this.head = new TrieNode(HEAD_CHARACTER)
  }

  /**
   * @param {string} word
   * @return {Trie}
   */
  addWord(word) {
    const characters = Array.from(word)
    const len = characters.length
    let currentNode = this.head

    for (let i = 0; i < len; i++) {
      currentNode = currentNode.addChild(characters[i], i === len - 1)
    }

    return this
  }

  /**
   * @param {string} word
   * @return {Trie}
   */
  deleteWord(word) {
    const len = word.length
    const depthFirstDelete = (currentNode, i = 0) => {
      if (i >= len) {
        return
      }

      const character = word[i]
      const nextNode = currentNode.getChild(character)

      if (nextNode == null) { // 不存在子节点时
        return
      }

      depthFirstDelete(nextNode, i + 1) // 递归到子节点

      if (i === (len - 1)) {
        nextNode.isCompleteWord = false
      }

      currentNode.removeChild(character)
    }

    depthFirstDelete(this.head)

    return this
  }

  /**
   * @param {string} word
   * @return {string[]}
   */
  suggestNextCharacters(word) {
    const lastCharacter = this.getLastCharacterNode(word)

    return !lastCharacter ? null : lastCharacter.suggestChildren()
  }

  /**
   *
   * @param {string} word
   * @return {boolean}
   */
  doesWordExist(word) {
    const lastCharacter = this.getLastCharacterNode(word)

    return !!lastCharacter && lastCharacter.isCompleteWord
  }

  /**
   * @param {string} word
   * @return {TrieNode}
   */
  getLastCharacterNode(word) {
    const characters = Array.from(word)
    const len = characters.length
    let currentNode = this.head

    for (let i = 0; i < len; i++) {
      if (!currentNode.hasChild(characters[i])) {
        return null
      }

      currentNode = currentNode.getChild(characters[i])
    }

    return currentNode
  }
}
```
:::
