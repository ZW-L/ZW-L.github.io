class DoublyLinkedListNode {
  constructor(key, val, prev = null, next = null) {
    this.key = key
    this.val = val
    this.prev = prev
    this.next = next
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  addToHead(node) {
    node.prev = null
    if (!this.head) {
      this.head = this.tail = node
    } else {
      this.head.prev = node
      node.next = this.head
      this.head = node
    }
  }
  delete(node) {
    if (node === this.head) {
      this.head = this.head.next
      if (this.head) this.head.prev = null
    } else if (node === this.tail) {
      this.deleteTail()
    } else {
      node.prev.next = node.next
      node.next.prev = node.prev
    }
  }
  deleteTail() {
    if (this.head = this.tail) {
      this.head = this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.M = new Map()
    this.list = new DoublyLinkedList()
  }
  get(key) {
    if (!this.M.has(key)) return -1
    const node = this.M.get(key)
    this.list.delete(node)
    this.list.addToHead(node)
    return node.val
  }
  put(key, value) {
    const node = new DoublyLinkedListNode(key, value)
    if (this.M.has(key)) {
      return this.get(key)
    } else if (this.M.size === this.capacity) {
      this.M.delete(this.list.tail.key)
      this.list.deleteTail()
    }
    this.list.addToHead(node)
    this.M.set(key, node)
  }
}

const lru = new LRUCache(2)
lru.put(1, 1)
lru.put(2, 2)
console.log(lru.get(1))
// console.log(lru.list)
// lru.put(3, 3)
// console.log(lru.get(1), lru.get(2), lru.get(3))
// console.log(lru)