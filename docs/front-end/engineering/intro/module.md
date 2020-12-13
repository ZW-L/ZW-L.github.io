---
sidebarDepth: 2
---

## 模块化

### 为什么

&emsp;&emsp;回想初学前端时，只需要一个 html 文档和一个浏览器，就可以学习手写所有的前端代码。但是当代码从一个 Demo 发展成一个项目的时候，我们首先要考虑的就是维护：怎样让代码修改变得容易、让多人协作变得容易等等。先看一些模块化之前的痛点：

+ 项目壮大时，代码不利于维护
+ 容易污染全局变量
+ 引入 js 文件时不清楚其依赖，且引入顺序非常重要


以及模块化后的优势：

+ 更好的复用和维护代码
+ 避免命名冲突，每个模块有其上下文环境
+ 解决引入 js 库时依赖模糊的情况
+ 代码分离，实行按需加载



### 怎样实现

+ 一种方法是使用立即执行函数(IIFE)，在 `window` 上添加属性
```html
<body>
  <script type="text/javascript" src="jquery-3.1.1.min.js"></script>
  <script type="text/javascript">
    (function($) {
      const str = 'hello world!'
      const foo = function() {
        console.log(str)
      }
      const bar = function() {
        console.log('change background color...')
        $('body').css('background', 'red')
      }

      // 暴露全局变量 module，引用了闭包内的属性
      window.module = { foo, bar }
    })(jQuery)

    module.foo()
    module.bar()
  </script>
</body>
```

::: tip 说明：
+ 这是闭包和 IIFE 的一个简单应用，jQuery 就是根据这种方式注入一个 `$` 全局变量
+ 这种方式有一个很大的缺点，就是必须要保证依赖库的引入顺序，因此在开发中比较少使用
:::


+ 对比几种(曾经)流行的模块化方案：

|方案|依赖|适用范围|加载方式|
|-|-|-|-|
|CommonJS|browserify.js|浏览器、Nodejs|同步|
|AMD|require.js|浏览器|异步|
|CMD|sea.js|浏览器|同步、异步|
|UMD||||
|ES6 Module|babel, browserify.js|浏览器、Nodejs|异步|


::: tip 说明：
+ 就目前来说，一般在浏览器端使用 ES6 Module，在 Nodejs 端使用 CommonJS
+ 由于 ES6 慢慢标准化，其他模块化方案已经完成了他们的历史使命，已经很少使用了
+ 另一个要注意的是，如何在 ES6 Module 和 CommonJS 之间处理暴露和模块引入
:::



## CommonJS

### 简介

+ 可以在服务器端或浏览器端实现
+ Nodejs：默认支持的模块化机制，在运行时动态加载模块（同步）
+ 浏览器端：依赖 `browserify.js` ，在编译时加载打包模块，修改模块文件后需重新编译打包


### 语法

#### 暴露模块

+ 暴露变量的方式会影响引入变量的内容

+ 默认暴露：`module.exports`，通常只使用一次，多次定义只会使用最后一次的定义
```js
module.exports = { /* */ }
module.exports = function() { /* */ }
module.exports = 'someVar'
```

+ 暴露单个成员：`exports`，能多次使用，会将所有内容整合成一个对象
```js
exports.foo = function() { /* */ }
exports.bar = 'someVar'

// 等同于
module.exports = {
	foo: function() { /* */ },
	bar: 'someVar'
}
```

::: danger 不要同时使用 exports 和 module.exports：
```js
exports.foo = function() { /* */ }
exports.bar = 'someVar'

// 此处暴露内容会覆盖以上的定义
module.exports = {
	baz: 'hello'
}
```
:::


#### 引入模块

+ 引入整个模块：默认暴露的变量名是可以修改的
```js
// 第三方模块，会自动到最近的 node_modules 中寻找
const m1 = require('lodash')

// 自定义模块，使用相对路径
const m2 = require('./module.js')
```

+ 引入部分成员
```js
// 明白暴露的 module 是一个对象，就好理解了
const foo = require('./module.js').foo

// 使用对象解构
const { foo, bar } = require('./module.js')
```


### Nodejs 使用

+ 使用非常简单
```js
// module1.js
exports.str = 'hello world!'
exports.num = 100

// module2.js
module.exports = {
  foo: function() {
    console.log('foo() in module_3.js')
  }
}

// main.js
const module1 = require('./module1')
const module2 = require('./module2')

console.log(module1.str, module1.num)
module2.foo()
```


### 浏览器使用

+ 安装依赖包 `browserify.js`
```sh
$ yarn add browserify -D
```

+ 基础目录：所有 js 文件参考上述 Nodejs 中的定义
```sh
|-project
  |-js 		
    |-module1.js 
    |-module2.js
  |-index.html
  |-main.js       # browserify 入口文件
  |-bundle.js     # 打包后文件
```

+ 在 package.json 中添加构建脚本：
```json
"scripts": {
  "build": "browserify main.js -o ./dist/bundle.js"
}
```

+ 执行命令打包：
```sh
$ yarn build
```

+ html 中只需引入打包后的文件：
```html
<body>
  <script type="text/javascript" src="dist/bundle.js"></script>
</body>
```



## AMD

### 简介

+ 异步模块定义(Asynchronous Module Definition)，专用于浏览器端，是**异步**加载模块的
+ 依赖于 `require.js` 库
+ 不需要执行打包操作


### 语法

#### 暴露模块

+ 使用 `define` 暴露模块
+ 不依赖其他模块时，参数是一个函数，该函数返回需要暴露的内容
```js
define(function() {
  const str = 'hello world'
  const foo = function () {
    return str
  }

  return {
    foo: foo,
    bar: function() {
      console.log('bar() in module1.js')
    }
  }
})
```

+ 依赖其他模块时，第一个参数数组定义此模块依赖的所有模块
```js
define(['module1'], function(m1) {
  const baz = function() {
    console.log(m1.foo(), 'baz() in module2.js')
  }
  return { baz }
})
```


#### 引入模块

+ 使用 `require` 或 `requirejs` 引入模块
+ 在模块(一般为入口 main.js)中引入：
```js
;(function() {
  // 模块配置：paths 为各模块路径配置，还可以配置 baseUrl 等选项
  require.config({
    // 注意：模块路径不能添加 .js 后缀
    paths: {
      module_1: './modules/module1',
      module2: './modules/module2',
      jquery: './libs/jquery-3.1.1.min'
    }
  })

  // 引入并使用模块
  require([
    'module1',
    'module2',
    'jquery'
  ], function(m1, m2, $) {
    m1.bar()
    m2.baz()
    $('body').css('background', 'red')
  })
})()
```


### 浏览器使用

+ 在官网下载[RequireJS](http://www.requirejs.cn/docs/download.html)，保存至本地 `require.js`

+ 项目目录
```sh
|- project
  |- js
    |- libs # 第三方模块
      |-require.js
      |-jquery-3.1.1.min.js
    |- modules # 本地模块
      |- module_1.js
      |- module_2.js
  |- index.html
  |- main.js
```

+ 在 html 中引入：
```html
<body>
  <!--
    data-main：应用源文件 main.js 的路径
    src：require.js的路径
  -->
  <script data-main="main.js" src="./js/libs/require.js"></script>
</body>
```



## CMD

### 简介

+ CMD(Common Module Definition通用模块定义)，依赖于 `sea.js` 库
+ 语法类似于 CommonJS 和 AMD 的结合，并支持**异步加载**


### 语法

+ 使用 `define` 定义暴露模块，回调允许使用三个参数
  + `require`：可以用于引入其他的模块
  + `exports`：用于暴露单个模块
  + `module`：配合 `exports` 定义默认暴露
+ 暴露内容使用 CommonJS 的方式：
```js
define(function(require, exports, module) {
  let data = 'in module-1'
  let foo = function() {
    console.log(data)
  }

  // 默认暴露
  module.exports = { foo }
  module.exports = foo

  // 单独暴露
  exports.data = data
  exports.foo = foo
})
```

+ 引入模块同样使用 `define`，当不需要再暴露内容时，只使用 `require` 参数即可
```js
define(function(require) {
  // 同步引入
  let module1 = require('./module1')
  module1.foo()
  let module4 = require('./module4')
  module4.baz()

  // 异步引入
  require.async('./module3', function(module3) {
    module3()
  })
})
```


### 浏览器使用

+ 官网下载 [sea.js]()，保存至本地

+ 项目目录
```sh
|-js
  |-libs
    |-sea.js
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
|-index.html
|-main.js
```

+ js：
```js
// module1.js
define(function(require, exports, module) {
  exports.fun1 = function() {
    console.log('In module1')
  }
})

// module2.js
define(function(require, exports, module) {
  module.exports = function() {
    console.log('In module2')
  }
})

// module3.js
define(function(require, exports, module) {
  const module1 = require('./module1')
  module1.fun1()
  // 异步加载
  require.async('./module2', function(fun2) {
    fun2()
  })

  module.exports = {
    fun3: function() {
      console.log('In module3')
    }
  }
})

// main.js
define(function(require) {
  const module3 = require('./modules/module3')
  module3.fun3()
})
```

+ html：
```html
<body>
  <!-- 先引入 sea.js -->
	<script src="./js/libs/sea.js"></script>
	<script>
		// 使用 use() 加载模块
		seajs.use('./js/modules/main.js')
	</script>
</body>
```



## ES6 Module

### 简介

+ 依赖于 `babel`(转换为ES5语法) 和 `browserify.js`(编译打包模块)
+ 模块是静态加载的，即在编译时加载处理模块；但 ES2020 有一个提案为 `import()` 函数，支持动态引入
+ 语法与 CommonJS 类似，但是使用不同的关键字，而且有一些不同的地方


### 语法

#### 暴露模块

+ 逐个暴露：`export` 关键字，可使用多次
```js
export let arr = [1, 2, 3]
export function foo() { return 'Hello World!' }

// 相当于以下方式
let str = 'Hello World!'
let bar = function() { console.log(str) }
export { str, bar }
```

+ 默认暴露：`export default` 关键字，使用一次，重复使用只有最后一个生效
+ 与 CommonJS 不同的是，`export default` 定义的默认暴露并不会覆盖 `export` 定义的暴露内容
```js
export const PI = 3.14
let fun1 = function() { return true }
let fun2 = function() { return false }

// 引入模块后，PI、fun1、fun2 都是可访问的
export default { fun1, fun2 }
```

+ 可以通过 as 修改暴露的名字，这样可以创建不同名字的，但暴露内容相同的暴露
```js
function foo() { return 'Hello World!' }

// 暴露 foo 和 bar，实际上 bar 是 foo 的引用
export { foo, foo as bar }
```

::: tip 备注：
+ 至此，应该区分 CommonJS 和 ES6 Module 暴露模块的不同点：默认暴露是否会覆盖逐个暴露
+ 实际上，ES6 Module 的暴露内容理解如下，因此 `export default` 并不会覆盖 `export`
```js
module = {
  PI,
  default: { fun1, fun2 }
}
```
:::


#### 引入模块

+ 使用 `import .. from ...` 的方式引入模块
+ 引入默认暴露：实际上引用的是模块导出的 `default` 的值，允许保存为其他变量
```js
// 第三方模块
import $ from 'jquery'
// 本地模块，使用相对路径
import test from './test'
```

+ 引入非默认暴露：引用的是模块导出的非 `default` 的值，且允许使用 `*` 和 `as`，其中：
  + `*`：代表除了 default 外的所有暴露内容
  + `as`：重命名变量
```js
// 使用解构赋值按需引入变量
import { foo, bar } from './test'

// 使用 as 重命名，此后只能使用 baz 代表 foo
import { foo as baz } from './test'

// 引用除 default 外的所有内容，并使用 as 重命名，此后可使用 m1.foo 引用变量
import * as m1 from './test'
```

+ 同时引入两种暴露内容：支持缩写
```js
import test from './test'
import { foo, bar } from './test'

// 可以缩写为
import test, { foo, bar } from './test'

// 当引入所有内容时，也等同于
import test, * as other from './test'
```


::: warning 注意：
+ `import` 具有提升功能，并不要求在代码的顶部
+ `import` 是静态加载的，不能动态引入模块
+ 引入的变量是只读的，不能修改其值；但对象变量的属性可以修改(不要使用，避免产生混乱)
+ 为了按需引入模块，建议多使用 `export`，仅在有需要的时候使用 `export default`
:::



#### 结合两者

+ `export` 和 `import` 是可以一起使用的
+ 有了这个功能，就可以在一个文件中组织模块的集中导出：
```js
// index.js
export { exp } from './math_module'
export { data } from './data_module'

// script.js
import { exp, data } from './index'
```

+ 也可以在修改名称：
```js
// index.js
export { exp } from './math_module'
export { data as getJSON } from './data_module'

// script.js
import { exp, getJSON } from './index'
```



### 浏览器使用

+ 安装依赖库
```sh
$ yarn add @babel/core @babel/preset-env babelify browserify -D

# @babel/core：babel 核心，用于转译 ES6 代码
# @babel/preset-env：babel 预设
# browserify：打包模块
# babelify：babel 为 browserify 提供的工具
```

+ 项目目录
```sh
|-project
  |-js
    |-module1.js
    |-module2.js
    |-module3.js
  |-index.html
  |-main.js     # browserify 入口文件
  |-bundle.js   # 打包后的文件
```

+ html：
```html
<body>
  <script src="bundle.js"></script>
</body>
```

+ js：
```javascript
// module1.js
export const str = 'hello world!'
export const num = 100
export function fun1 () { console.log('In module1.js') }

// module2.js
export function fun2 () { console.log('In module2.js') }
export default function() {
  console.log('export default in module2.js')
}

// module3.js
export { str, num, fun1 } from './module1'
export { fun2 } from './module2'
import dm2 from './module2'
export default {
  str: 'module3',
  dm2,
  fun3: function() { console.log(`In ${this.str}.js`) }
}

// main.js
import dm3, * as m3 from './module3'
import $ from 'jquery'

m3.fun1()
m3.fun2()
dm3.fun3()
dm3.dm2()
console.log(m3.str, m3.num)
$('body').css('background', 'red')
```

+ `package.json` 添加脚本：
```json
{
  "script": {
    "build": "browserify main.js -o bundle.js"
  },
  "browserify": {
    "transform": [[ "babelify", { "presets": ["@babel/preset-env"] }]]
  }
}
```

+ 打包代码：
```sh
$ yarn build
```




## CommonJS 和 ES6

### 区别

+ CommonJS 模块输出的是值的拷贝(一旦引入就不再变化)，后者输出的是值的引用(原模块变化时会跟随变化)
+ CommonJS 模块是运行时加载的，后者是编译时加载接口(静态)
+ CommonJS 模块的 `require()` 是同步加载，后者的 `import` 是异步加载(有一个模块依赖的解析阶段)
+ CommonJS 模块的 `this` 指向模块对象，后者为的 `this` 为 `undefined`
+ CommonJS 模块的 `module.exports` 会覆盖其他单独暴露的语句，而 `export default` 不会


### 相互加载

+ ES6 模块加载 CommonJS 模块
```js
// 引入 CommonJS Module 时，要整体引入
import express from 'express'
const app = express()

// 引入 Nodejs 内置模块时允许部分引入
import { readFile } from 'fs'
```

+ CommonJS 模块加载 ES6 模块
```js
// require() 命令不能加载 ES6 模块，只能使用 import() 方法加载
(async () => {
  await import('./my-app.mjs')
})()
```



### 在 Nodejs 中

+ `.mjs` 文件总是以 ES6 模块加载，`.cjs` 文件总是以 CommonJS 模块加载，`.js` 文件的加载取决于 package.json 里面 `type` 字段的设置

+ 规定 ES6 模块之中不能使用 CommonJS 模块的特有的一些内部变量，它们在 CommonJS 模块中都有自身的含义 
  + `arguments`
  + `require`
  + `module`
  + `exports`
  + `__filename`
  + `__dirname`




### 循环加载

