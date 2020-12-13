---
sidebarDepth: 2
---

## 介绍和使用

+ [benchmark.js](https://github.com/bestiejs/benchmark.js)：基于 jsperf，上手简单，常用于测试比较函数性能
+ 其高度依赖 [lodash](https://lodash.com/)，并使用了 [platform.js](https://github.com/bestiejs/platform.js#readme)



### 浏览器环境

+ 引入相关库
```html
<script src="lodash.js"></script>
<script src="platform.js"></script>
<script src="benchmark.js"></script>
```

+ 使用 AMD 模块规范
```js
require({
  'paths': {
    'benchmark': 'path/to/benchmark',
    'lodash': 'path/to/lodash',
    'platform': 'path/to/platform'
  }
}, ['benchmark'], function(Benchmark) { /*…*/ })
```




### nodejs 环境

+ 安装
```sh
$ yarn add benchmark
```

+ 使用
```js
const BenchMark = require('benchmark')
// 以下为三种计算斐波那契数列的函数
const { recurse, tail, iter } = require('../lib/fibonacci')

const suite = new BenchMark.Suite

suite
  .add('recurse', () => { recurse(5) })
  .add('tail', () => { tail(5) })
  .add('iter', () => { iter(5) })
  .on('cycle', (event) => {
    console.log(String(event.target), String(event.timeStamp))
  })
  .on('complete', function() {
    console.log('results: ')
    this.forEach(res => {
      console.log(res.name, res.count, res.times.elapsed)
    })
    console.log('Fastest is:', this.filter('fastest').map('name'))
  })
  .run()
```



## 介绍


