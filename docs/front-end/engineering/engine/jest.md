---
sidebarDepth: 2
---

## 入门

+ Jest 兼容了 Mocha 的语法，从 Mocha 迁移的话会很简单
+ 安装
```sh
$ yarn add --dev jest
$ npm install --save-dev jest
```


### 约定和规范

+ 尽量将测试文件命名为 `filename.test.js` 的形式，即倒数第二个后缀为 `test`(或 `spec`)
+ 组织测试目录：
```sh
# 若是函数库，在测试的目标文件目录下创建 __test__ 目录，存放测试目录
|- linked-list\
  |- LinkedListNode.js
  |- LinkedList.js
  |- __test__\
    |- LinkedListNode.test.js
    |- LinkedList.test.js

# 若是开发中的测试，在根目录下创建 test 目录存放测试文件
|- src\
|- tests\
  |- unit\
    |- example.test.js
```





## 语法说明

### 简介

+ 使用 `test` / `it` 定义一个测试，是最小的测试单元，不必包含在 `describe`
+ 对于同类型测试，可以使用 `describe` 定义一个测试块，并且可以嵌套
+ 然后使用 `expect` 断言数据或函数，接着可紧跟匹配器判断是否符合测试
```js
// 最好将同类型的测试置于一个 describe 块
describe('add two number', () => {
  test('should return 3', () => {
    expect(1 + 2).toBe(3)
  })

  // 有时候测试情况较多，可以使用嵌套
  describe('add with zero', () => {
    test('should return itself', () => {
      expect(1 + 0).toBe(1)
    })
  })
})

// 也可以单独测试
test('1 + 2 === 3', () => {
  expect(1 + 2).toBe(3)
})
```



### 匹配器

+ 对于不同数据结构支持不同的匹配器
+ 完整[匹配器](https://jestjs.io/docs/en/expect)
+ 常用[匹配器](https://jestjs.io/docs/en/using-matchers)：

|匹配器|说明|
|-|-|-|
|toBe(some)|使用 `Object.is()` 判断全等
|toEqual(some)|只判断相等(不判断引用)，会递归判断对象和数组
|toBeNull()|仅匹配 null
|toBeUndefined()|仅匹配 undefined
|toBeTruthy()|仅匹配 truthy
|toBeFalsy()|仅匹配 falsy，六个假值(`false`, `0`, `''`, `null`, `undefined`, `NaN`)
|toBeGreaterThan(a)|`> a`
|toBeGreaterThanOrEqual(a)|`>= a`
|toBeLessThan(a)|`< a`
|toBeLessThanOrEqual(a)|`<= a`
|toBeCloseTo(a)|`= a`，适用于浮点数(因为 IEEE 的精度问题不能使用 toEqual 和 toBe)
|toMatch(regex)|适用于字符串，测试是否匹配正则
|toContain(item)|适用于数组，是否包含指定元素
|toThrow()|适用于抛出错误(需要使用箭头函数包装)，还可配置错误对象/信息的匹配

+ 另一个特征是，匹配器都是可以使用 `not` 取反的：
```js
expect(n).not.toBeTruthy()
// 等同于
expect(n).toBeFalsy()
```


### 配置和清理

Jest 允许在测试前/后执行一个函数，这很容易实现在测试前设置全局状态，或在测试后清除一些状态：
+ `beforeEach(fn, timeout)`: 在每个测试前调用 `fn`，`timeout` 默认 5s
+ `afterEach(fn, timeout)`: 在每个测试后调用 `fn`
+ 若是在 `describe` 中定义，则只对所在块中的测试启用：
```js
describe('add two number', () => {
  beforeEach(() => {
    console.log('before each...')
  })

  afterEach(() => {
    console.log('after each...')
  })

  // 影响到这里
  test('should return 3', () => {
    expect(1 + 2).toBe(3)
  })
  // 影响到这里
  describe('add with zero', () => {
    test('should return itself', () => {
      expect(1 + 0).toBe(1)
    })
  })
})

// 不会影响这里
test('should return 3', () => {
  expect(1 + 2).toBe(3)
})
```

还有两个相似的 api，作用于该测试文件的所有测试开始前/完成后：
+ `beforeEachAll(fn, timeout)`: 在该测试文件的所有测试开始前调用 `fn`
+ `afterEachAll(fn, timeout)`: 在该测试文件的所有测试完成后调用 `fn`
```js
beforeAll(() => {
  console.log('before all...')
})

afterAll(() => {
  console.log('after all...')
})

describe('add two number', () => {
  test('should return 3', () => {
    expect(1 + 2).toBe(3)
  })

  describe('add with zero', () => {
    test('should return itself', () => {
      expect(1 + 0).toBe(1)
    })
  })
})
```




## 测试

### 测试单个文件

+ 目标文件 `LinkedListNode.js`
```js
export default class LinkedListNode {
  constructor(value, next = null) {
    this.value = value
    this.next = next
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`
  }
}
```

+ 书测试文件：`LinkedListNode.test.js`
```js
import LinkedListNode from '../LinkedListNode';

describe('LinkedListNode Test:', () => {
  it('should create list node with value.', () => {
    const node = new LinkedListNode(10);

    expect(node.value).toBe(10)
    expect(node.next).toBeNull()
  })
})
```

+ 全局安装后，可使用 cli 测试单个文件
```sh
$ jest LinkedListNode.test.js
```

+ 局部安装，需要定位到测试文件(并确认配置了 `npm script`)
```sh
$ yarn test /path/to/LinkedListNode.test.js
```


### 自动化测试

+ 配置
```js
{
  "plugins": ["jest"],
  "env": {
    "jest/globals": true
  }
}
```

+ package.json 添加 `npm script`
```json
"script": {
  "test": "jest"
}
```

+ 执行测试：
```sh
$ yarn test
```