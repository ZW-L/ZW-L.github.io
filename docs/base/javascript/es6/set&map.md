## Set
&emsp;&emsp;类似于数组，但是成员的值都是唯一的，没有重复的值。

### 基本用法

&emsp;&emsp;数组去重：
```js
const set = new Set([1, 2, 3, 4, 4]);
console.log([...set])
// [1, 2, 3, 4]
```
说明：
+ Set 结构可以用于去重，因为它的元素是唯一的
+ Set 加入值的时候，不会发生类型转换，唯一的特点是它认为 NaN ==== NaN
+ 两个(空)对象总是不相等的


### 属性和方法

1.属性：
+ Set.prototype.constructor：构造函数，默认就是 Set 函数
+ Set.prototype.size：返回 Set 实例的成员总数

2.方法：
+ Set.prototype.add(value)：添加某个值，返回 Set 结构本身
+ Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功
+ Set.prototype.has(value)：返回一个布尔值，表示该值是否为 Set 的成员
+ Set.prototype.clear()：清除所有成员，没有返回值

&emsp;&emsp;数组去重的另一种写法：
```js
function dedupe(array) {
  return Array.from(new Set(array));
}

console.log(dedupe([1, 1, 2, 3]) )
// [1, 2, 3]
```

3.遍历
+ Set.prototype.keys()：返回键名的遍历器，由于 Set 没有键名，所以等同于 values()
+ Set.prototype.values()：返回键值的遍历器
+ Set.prototype.entries()：返回键值对的遍历器
+ Set.prototype.forEach()：使用回调函数遍历每个成员

4.可以使用 `...` 和 `for...of`

&emsp;&emsp;实现并集、交集、差集：
```js
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
```

5.不能原址改变原来的 Set 结构，但可以通过一些方式实现
```js
// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6
```

## WeakSet
&emsp;&emsp;`WeakSet` 与 `Set` 类似，但它的的成员只能是对象，而不能是其他类型的值。而且 `WeakSet` **没有 `size` 属性且 不可遍历**。
```js
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
// WeakSet {[1, 2], [3, 4]}
```

### 说明
+ WeakSet 构造函数能接受任意具有 Iterable 接口的对象作为参数
+ WeakSet 只能添加对象作为成员
+ WeakSet 中的成员对象都是弱引用，因此它没有 size 属性且不能遍历


### 方法

+ WeakSet.prototype.add(value)：向 WeakSet 实例添加一个新成员
+ WeakSet.prototype.delete(value)：清除 WeakSet 实例的指定成员
+ WeakSet.prototype.has(value)：返回一个布尔值，表示某个值是否在 WeakSet 实例之中

### 应用

储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏：
```js

```
定义了对象的实例方法，只能在该对象的实例上调用：
```js
const foos = new WeakSet()
class Foo {
  constructor() {
    foos.add(this)
  }
  method () {
    if (!foos.has(this)) {
      throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    }
  }
}
```



## Map
&emsp;&emsp;`Map` 结构提供了“值—值”的对应(键名可以是任何数据类型)，是一种更完善的 Hash 结构实现。

### 基本用法
```js
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```
说明：
+ Map 也可以接受一个数组作为参数，该数组的成员均是表示键值对的数组
+ 具有 Iterator 接口、且每个成员都是一个双元素的数组的数据结构都可以当作 Map 构造函数的参数，包括 Set 和 Map 自身
+ 如果对同一个键多次赋值，后面的值将覆盖前面的值；且只有对同一个对象的引用，Map 结构才将其视为同一个键
+ 如果 Map 的键是一个简单类型的值（数字、字符串、布尔值），则只要两个值严格相等，Map 将其视为一个键
+ 另外，undefined 和 null 也是两个不同的键；虽然 NaN 不严格相等于自身，但 Map 将其视为同一个键


### 属性和方法

属性：
+ Map.prototype.size：返回 Map 结构的成员总数

方法：
+ Map.prototype.set(key, value)：设置键值对，然后返回 Map 对象
+ Map.prototype.get(key)：读取 key 对应的值，不存在则返回 undefined
+ Map.prototype.has(key)：返回一个布尔值，表示某个键是否在当前 Map 对象之中
+ Map.prototype.delete(key)：删除某个键，返回 true，若删除失败，返回 false
+ Map.prototype.clear()：清除所有成员，没有返回值

遍历：
+ Map.prototype.keys()：返回键名的遍历器
+ Map.prototype.values()：返回键值的遍历器
+ Map.prototype.entries()：返回所有成员的遍历器
+ Map.prototype.forEach()：遍历 Map 的所有成员
+ Map 的遍历顺序就是插入顺序

## WeakMap
&emsp;&emsp;`WeakMap` 结构与 `Map` 结构类似，也是用于生成键值对的集合。但 `WeakMap` 只接受对象作为键名（null除外），且 `WeakMap` 的键名所指向的对象是弱引用的。

### 基本用法

```js
const wm = new WeakMap();

const element = document.getElementById('example');

wm.set(element, 'some information');
wm.get(element)  // "some information"
```

说明：
+ WeakMap 弱引用的只是键名，而不是键值，键值依然是正常引用
+ WeakMap 没有 size 属性且不能遍历
+ 无法清空，即不支持 clear 方法

### 方法
+ WeakMap.prototype.set(key, value)：设置键值对，然后返回 WeakMap 对象
+ WeakMap.prototype.get(key)：读取 key 对应的值，不存在则返回 undefined
+ WeakMap.prototype.has(key)：返回一个布尔值，表示某个键是否在当前 WeakMap 对象之中
+ WeakMap.prototype.delete(key)：删除某个键，返回 true，若删除失败，返回 false


### 应用

用 DOM 节点作为键名：
```js
let myElement = document.getElementById('logo');
let myWeakMap = new WeakMap();

myWeakMap.set(myElement, {timesClicked: 0});

myElement.addEventListener('click', function() {
  let logoData = myWeakMap.get(myElement);
  logoData.timesClicked++;
}, false);
```

部署私有属性：
```js
const _counter = new WeakMap();
const _action = new WeakMap();

class Countdown {
  constructor(counter, action) {
    _counter.set(this, counter);
    _action.set(this, action);
  }
  dec() {
    let counter = _counter.get(this);
    counter--;
    _counter.set(this, counter);
    if (counter === 0) {
      _action.get(this)();
    }
  }
}

const c = new Countdown(2, () => console.log('DONE'));

c.dec()
c.dec()
// DONE
```