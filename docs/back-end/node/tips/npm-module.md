## 介绍

参考自《Node.js 硬实战--115个核心技巧》，查看本文[仓库地址]()

## 目录

```
|- bin\ ------------------------ 命令行命令
  |- index.js
|- lib\ ------------------------ 模块源文件
  |- recurse.js
  |- tail.js
  |- iter.js
|- test\ ----------------------- 测试文件
  |- index.js
|- benchmark\ ------------------ 基准测试文件
  |- index.js
|- node_modules\ --------------- 包依赖管理
|- package.json ---------------- 包描述
|- package-lock.json ----------- 包版本锁定
|- index.js -------------------- 模块入口文件
```

## 文件说明

+ `/lib` 目录下为核心文件，本文分别使用递归、尾递归、循环三种方法实现斐波那契数列函数：
```js
/* /lib/recurse.js */
function recurse(n) {
  if (n === 0) return 0
  if (n === 1) return 1

  return recurse(n - 1) + recurse(n - 2)
}

module.exports = recurse

/* /lib/tail.js */
function tail(n) {
  return fib(n, 0, 1)
}

function fib(n, current, next) {
  if (n === 0) return current

  return fib(n - 1, next, current + next)
}

module.exports = tail

/* /lib/iter.js */
function iter(n) {
  let current = 0
  let next = 1

  for (let i = 0; i < n; i++) {
    [current, next] = [next, current + next]
  }

  return current
}

module.exports = iter
```
+ `/benchmark` 目录包含基准测试文件，这里简单测试上述三个方法的执行速度：
```js
/* /benchmark/index.js */
const recurse = require('../lib/recurse')
const tail = require('../lib/tail')
const iter = require('../lib/iter')
const BenchMark = require('benchmark')

const suite = new BenchMark.Suite

suite
  .add('recurse', function() { recurse(20) })
  .add('tail', function() { tail(20) })
  .add('iter', function() { iter(20) })
  .on('complete', function() {
    console.log('results: ')
    this.forEach(res => {
      console.log(res.name, res.count, res.times.elapsed)
    })
  })
  .run()
```
+ 根目录的 `index.js` 是模块入口文件，这里选择了速度最快的 `iter.js` 并将其导出：
```js
/* index.js */
module.exports = require('./lib/iter')
```
+ `/test` 目录下的文件用于测试脚本，这里简单地测试了根目录的 `index.js` 的正确性：
```js
/* /test/index.js */
const assert = require('assert')
const recurse = require('../index')

assert.equal(recurse(0), 0)
assert.equal(recurse(1), 1)
assert.equal(recurse(2), 1)
assert.equal(recurse(3), 2)
assert.equal(recurse(4), 3)
assert.equal(recurse(5), 5)
assert.equal(recurse(6), 8)
assert.equal(recurse(7), 13)
assert.equal(recurse(8), 21)
assert.equal(recurse(9), 34)
assert.equal(recurse(10), 55)
assert.equal(recurse(11), 89)
assert.equal(recurse(12), 144)
```
+ `/bin` 目录下的为命令行工具文件
```js
#!/usr/bin/env node

const fib = require('../index')
const seqNo = Number(process.argv[2])

if (isNaN(seqNo)) {
  return console.error('Invalid sequence number provide.\n try: \n fib 30\n')
}

console.log(fib(seqNo))
```
+ `package.json` 文件：
```js
{
  "name": "testfib",
  "version": "0.1.0",
  "description": "test the fibonacci module.",
  "main": "index.js",
  "bin": {
    "fib": "./bin/index.js"
  },
  "directories": {
    "lib": "lib",
    "test": "test"
  },
  "dependencies": {},
  "devDependencies": {
    "benchmark": "2.1.4"
  },
  "scripts": {
    "test": "node test && node benchmark"
  },
  "keywords": [
    "fibonacci"
  ],
  "author": "Alice",
  "license": "MIT"
}
```


## 命令行说明

+ 运行脚本测试：
```powershell
node test

# 由于没有设置其他打印选项，只要命令不报错即说明测试全部通过
```
+ 基准测试：
```powershell
node benchmark

# 打印
results:
recurse 765 5.449
tail 629505 5.519
iter 2114131 5.444
```
+ 运行 npm 脚本命令：
```powershell
npm run test

# 打印
> testfib@0.1.0 test C:\Users\Seven\Desktop\testfib
> node test && node benchmark

results:
recurse 766 5.393
tail 635064 5.466
iter 2108859 5.348
```
+ 使用命令行工具：
```powershell
npm link # 本地连接
fib 30 # 使用自定义命令

# npm link 打印
npm WARN testfib@0.1.0 No repository field.

up to date in 0.989s
C:\Program Files\nodejs\fib -> C:\Program Files\nodejs\node_modules\testfib\bin\index.js
C:\Program Files\nodejs\node_modules\testfib -> C:\Users\Seven\Desktop\testfib

# fib 30 打印
832040
```