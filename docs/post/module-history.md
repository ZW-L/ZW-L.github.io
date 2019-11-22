## 模块化的意义

1. 模块化前
    + 项目壮大时，代码功能不明显，不利于维护
    + 容易污染全局变量
    + html 中引入过多的 js 文件，且不清楚文件依赖
2. 模块化的优势
    + 避免命名冲突
    + 代码分离，实行按需加载
    + 更好的复用和维护代码
    + 解决引入 js 库时依赖模糊的情况
3. 模块化思路
    + 根据代码功能拆分模块



## IIFE 实现模块化

&emsp;&emsp;模块化出现之前，实现模块化的一种方法是使用立即执行函数(IIFE)，在 `window` 上添加属性

+ 向IIFE添加依赖，为`window`添加属性

JS：
```javascript
// index.js
(function(window) {			// window 是全局变量，可缺省
	let str = 'Hello World!'
	let foo = function() {
		console.log(msg)
	};
  window.module = { foo }
})(window)
```

HTML：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript" src="index.js"></script>
	<script type="text/javascript">
		module.foo()
	</script>
</body>
</html>
```

+ 可以向IIFE中添加更多的依赖

JS：

```javascript
// index.js
(function(window, $) {
  const str = 'hello world!'
  const foo = function() {
    console.log(str)
  }
  const bar = function() {
    console.log('change background color...')
    $('body').css('background', 'red')
  }
  window.module = {
    foo,
    bar
  }
})(window, jQuery)  // 注入 jQuery
```

​	HTML：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript" src="jquery-3.1.1.min.js"></script>
	<script type="text/javascript" src="index.js"></script>
	<script type="text/javascript">
    module.foo()
    module.bar()
	</script>
</body>
</html>
```

**缺点：**

+ 依赖过多时，html 中 `<script>` 的引入顺序不能改变，否则出错
+ 在 `window` 上添加过多的属性



## CommonJS -- Browserify.js

&emsp;&emsp;CommonJS 可以在服务器端或浏览器端实现。

+ 服务器端：利用 `Node.js`，运行时动态加载模块（同步）
+ 浏览器端：利用 `Browserify.js` ，在转译（编译）时加载打包模块（生成新文件），修改模块文件后需重新编译打包

**语法 ：**

&emsp;&emsp;暴露模块，相当于暴露一个空对象，单独使用 `exports.someVar` 相当于在该空对象上添加成员，使用 `module.exports = { ... }` 则用新的对象(也可以是变量或者函数等)代替空对象

```javascript
// 1.仅能使用一次，重复使用会覆盖
module.exports = { ... };
module.exports = function() { ... };
module.exports = 'someVar';

// 2.能多次使用，默认将所有内容整合成一个对象，相当于 1 中暴露对象
exports.foo = function() { ... };
exports.bar = 'someVar';
// 等同于
module.exports = {
	foo: function() { ... },
	bar: 'someVar'
}
```

&emsp;&emsp;引入模块，将模块所暴露的对象(也可以是一个单独的变量或者函数等)引入

```javascript
// 第三方模块，直接输入模块名
let m1 = require('react');
// 自定义模块，相对路径
let m2 = require('./module.js');
// 调用：根据暴露方式调用
```

**1.在服务器端中使用**
```javascript
// module_1.js
exports.str = 'hello world!'
exports.num = 100

// module_2.js
exports.foo = function() {
	console.log('foo() in module_2.js')
}

// module_3.js
module.exports = {
	bar: function() {
		console.log('bar() in module_3.js')
	}
}

// module_4.js
module.exports = {
	bar: function() {
		console.log('bar() in module_3.js')
	}
}

// main.js
const module_1 = require('./module_1');
const module_2 = require('./module_2');
const module_3 = require('./module_3');
const module_4 = require('./module_4');

console.log(module_1.str, module_1.num);
module_2.foo();
module_3.bar();
module_4();
```
运行 `node main.js` 的结果：
```
hello world! 100
foo() in module_2.js
bar() in module_3.js
baz() in module_4.js
```

**2. 在浏览器端中使用**

&emsp;&emsp;在浏览器中使用时，要安装依赖包 `browserify.js`

1）下载安装 browserify.js

```
// 生成 package.json
npm init
// 全局安装
npm install browserify -g
// 项目目录中安装并添加至 package.json
npm install browserify --save-dev
```

2）基础目录

```
|-project
  |-dist    // 打包生成文件目录（注：browserify 不会自动生成文件夹，需要手动创建）
  |-src			 		
    |-main.js    // 主文件
    |-module1.js 
    |-module2.js
    |-module3.js
    |-module4.js
  |-index.html	 
  |-package.json  // 项目配置文件
  |-node_modules  // 依赖包
```
&emsp;&emsp;其中各 js 文件代码同上

index.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript" src="dist/build.js"></script>
</body>
</html>
```

使用 `browserify` 进行模块打包：

```
$ browserify ./src/main.js -o ./dist/build.js
```

在浏览器的控制台能看到相同的输出:

```
hello world! 100
foo() in module_2.js
bar() in module_3.js
baz() in module_4.js
```

## AMD -- Require.js

&emsp;AMD(Asynchronous Module Definition异步模块定义) 专用于浏览器端，是 `异步` 加载模块的。依赖于 `require.js` 库

**语法步骤：**

1. 暴露模块，通常为暴露一个对象，对象包装了一些数据

```javascript
// 1.定义没有依赖其他模块的模块, module_1.js
define(function() {
  const str = 'hello world'
  const foo = function () {
    return str
  }
  return {
    foo: foo,
    bar: function() {
      console.log('bar() in module_1.js')
    }
  }
})
// 2.定义依赖其他模块的模块, module_2.js
// 第一个参数数组是此模块依赖的所有模块，并要以形参传入后一个参数函数
define(['module_1'], function(m1) {
  const baz = function() {
    console.log(m1.foo(), 'baz() in module_2.js')
  }
  return { baz }
});
```

2. 引入模块和模块配置，`require` 也可以用 `requirejs`

```javascript
// main.js
(function() {
	// 模块配置：paths 为各模块路径配置，还可以配置更多的选项，如 baseUrl 等
  require.config({
		// 注意：模块路径不能添加 .js 后缀，引入第三方库时(jQuery, Angular等)，名字必须对应而且为小写。
    paths: {
      module_1: './modules/module_1',
      module_2: './modules/module_2',
      jquery: './libs/jquery-3.1.1.min'
    }
	});
	// 引入并使用模块
  require([
    'module_1',
    'module_2',
    'jquery'
  ], function(m1, m2, $) {
    m1.bar();
    m2.baz();
    $('body').css('background', 'red')
  });
})();
```

3. 在 HTML 文件的引入
```html
<body>
	<!-- data-main：应用源文件main.js的路径，src：require.js的路径 -->
	<script data-main="./js/main.js" src="./js/libs/require.js"></script>
</body>
```

**完整步骤**

1）下载

&emsp;&emsp;在官网[下载](http://www.requirejs.cn/docs/download.html) RequireJS，保存至文件 `require.js`。

2）基础项目目录

```
|-project
  |-js
    |-libs    // 库文件夹
      |-require.js
      |-jquery-3.1.1.min.js
    |-modules    // 模块文件夹
      |-module_1.js
      |-module_2.js
    |-main.js    // 主文件
  |-index.html
```
各 js 文件的内容如语法步骤所示。

index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- 
		src：require.js的路径
		data-main：应用源文件main.js的路径
	 -->
	<script type="text/javascript" data-main="js/main.js" src="./js/libs/require.js"></script>
</body>
</html>
```

3）在浏览器控制台的输出：

```
bar() in module_1.js
3 hello world baz() in module_2.js
// 且页面背景色为红色
```

## CMD -- Sea.js

&emsp;&emsp;CMD(Common Module Definition通用模块定义)，依赖于 `sea.js` 库。

**语法：**

&emsp;&emsp;实现语法类似于 browserify.js 和 require.js 的结合。并可以执行异步加载。

暴露模块

```javascript
// 只要暴露了任何内容的模块，function 都要带这三个形参
define(function(require, exports, module) {
	let data = 'in module-1';
	let foo = function() {
		console.log(data);
	};
	// 暴露内容的语法类似于 browserify
	// 1.暴露一个对象
	module.exports = { foo };
	// 2.暴露一个方法
	module.exports = foo;
	// 3.分开暴露多个属性
	exports.data = data;
	exports.foo = foo;
});
```

引入模块

```javascript
// 模块不再暴露内容时，只写一个形参 require
define(function(require) {
    // 同步引入
	let module1 = require('./module1');
	module1.foo();
	let module4 = require('./module4');
	module4.baz();
	// 异步引入
	require.async('./module3', function(module3) {
			module3();
	})
});
```

**完整步骤**

1）下载

&emsp;&emsp;官网下载 sea.js。保存至 'js/libs/sea.js'

2）基础项目目录

```
|-js
  |-libs
    |-sea.js
  |-modules
    |-module1.js
    |-module2.js
    |-module3.js
    |-module4.js
  |-|-main.js
|-index.html
```

3）文件

module1.js:

```javascript
define(function(require, exports, module) {
  const str = 'In module_1.'
  exports.fun1 = function() {
    console.log(str)
  }
})
```

module2.js:

```javascript
define(function(require, exports, module) {
  const module_1 = require('./module_1')
  module_1.fun1()

  const fun2 = function() {
    console.log('In module_2.')
  }

  module.exports = {
    fun2: fun2
  }
})
```

module3.js:

```javascript
define(function(require, exports, module) {
  const fun3 = function() {
    console.log('In module_3.')
  }
  module.exports = fun3
})
```

module4.js:

```javascript
define(function(require, exports, module) {
  const module_2 = require('./module_2')
  module_2.fun2()
  // 异步加载
  require.async('./module_3', function(m3) {
    m3()
  })
  
  module.exports = {
    fun4: function() {
      console.log('In module_4.')
    }
  }
})
```

main.js:

```javascript
define(function(require) {
  const module_4 = require('./modules/module_4')
  module_4.fun4()
})
```

index.html：

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- 先引入 sea.js -->
	<script src="./js/libs/sea.js"></script>
	<script>
		// 加载模块
		seajs.use('./js/modules/main.js');
	</script>
</body>
</html>
```

4）在控制台的输出:
```
In module_1.
In module_2.
In module_4.
In module_3.
```

## ES6 Module

&emsp;&emsp;ES6 模块化依赖于 `babel` (转换为ES5语法) 和 `browserify.js` (编译打包模块)，是静态加载的。

**语法：**

**暴露模块:** 
+ 使用 `export` 或 `export default`；
+ 使用 `export` 可以逐个暴露变量，但是命令要包含对外的接口；
+ 使用 `export default` 定义一个默认暴露的对象(其中 `default` 就相当于对外的接口)；
+ 二者可以同时使用，但是 `export default` 只能使用一次；

```javascript
// 1.逐个暴露，暴露两个对外接口 arr 和 foo
export let arr = [1, 2, 3];
export function foo() { return 'Hello World!'; };

// 2.一次性暴露，1 的另一种写法
let str = 'Hello World!';
let bar = function() { console.log(str); };
export { str, bar };

// 3.暴露默认模块（只能定义一个默认模块，定义多个相当于覆盖）
export const PI = 3.14  // 暴露一个对外接口 PI
let fun1 = function() { return true; };
let fun2 = function() { return false; };
export default { fun1, fun2 }	// 默认暴露一个对象
```

**引入模块:** 
+ 使用 `import` 引入模块(相当于打开与模块的接口通道，从中取出所需模块)；
+ 对 `export` 暴露的变量的引入，要一一对应其对外接口；
+ 对  `export default` 暴露的变量的引入，可以用别名指定(实质上是对 `default` 接口的重命名)；
+ 还可以使用 `*` 指定引入模块的所有非默认(`default`)暴露的对外接口，使用 `as` 对对外接口重命名；
+ `import` 具有提升功能，不要求在代码的顶部；
+ `import` 不能动态引入模块，因为它是静态加载的；
+ `import` 和 `export` 可以一起使用，具有 "转发" 模块的功能，可以用作各模块的整合或者跨模块变量。
+ 引入的变量是只读的，不能修改其值；对象变量的属性可以修改，但是也不要使用，避免产生混乱
 
```javascript
// 1.引入自定义模块：非默认暴露
import { foo, bar } from './module1.js';  // .js 后缀可以省略
import * as m1 from './module1.js';  // 引入模块的所有对外接口，可使用 m1.foo, m1.bar

// 2.引入自定义模块：默认暴露
import module3 from './module3.js';  // 不能添加 {}

// 3.引入第三方模块
import $ from 'jquery';	  // npm 下载的第三方包，路径自动调至 node_modules

// 4.与 export 一起使用
// index.js
export {exp} from './math_module.js'
export {data} from './data_module.js'
// script.js
import {exp, data} from './index.js'

```

**使用步骤**

1）安装

```
// 初始化 package.json
$ npm init
// 全局安装依赖库
$ npm install babel-cli -g  // babel 命令行接口
$ npm install babel-preset-es2015 -g  // 用于转译 ES6 代码的库
$ npm install browserify -g  // 编译打包 ES6 模块
// 添加项目依赖
$ npm install babel-cli --save-dev
$ npm install babel-preset-es2015 --save-dev
$ npm install browserify --save-dev
// 有必要时，安装第三方依赖包
$ npm install jquery@1 --save-dev
```

2）基本项目目录

```
|-js	
  |-build  // 用 babel 转译为 es2015 语法的模块文件时生成，不需要自己创建文件夹
    |-main.js
    |-module1.js
    ...
  |dist  // browserify 打包后的文件，需要自己创建文件夹
    |-bundle.js	
  |-src  // 模块文件
    |-main.js
    |-module1.js
    |-module2.js
    |-module3.js
  |-node_modules
  |-index.html
  |-.babelrc  // babel 配置文件，一个 json 文件，不能添加更多后缀
  |-package.json
  |-package-lock.json
```

3）文件

.babelrc

```json
{
	"presets": ["es2015"]
}
```

module1.js

```javascript
// 分别暴露多个对外接口
export const str = 'hello world!'
export const num = 100
export function fun1() {
  console.log('In module_1.js')
}
// 等同于
/* 
const str = 'hello world!'
const num = 100
function fun1() {
  console.log('In module_1.js')
}
export { str, num, fun1 } 

*/
```

module2.js

```javascript
// 暴露一个对外接口
export function fun2() {
  console.log('In module_2.js')
}
// 一个默认暴露
export default function() {
  console.log('export default in module_2.js')
}
```

module3.js

```javascript
// 转发来自 module_1 和 module_2 的对外接口
export { str, num, fun1 } from './module_1'
export { fun2 } from './module_2'
import dm2 from './module_2'
// 默认暴露一个自身的对外接口
export default {
  str: 'module_3',
  fun3: function() {
    console.log(`In ${this.str}.js`)
  },
  dm2
}
```

main.js

```javascript
// import * as m3 from './module_3'
// import dm3 from './module_3'
// 可以写为
import dm3, * as m3 from './module_3'  // dm3 接收默认暴露；m3 为别名，接受所有非默认暴露的接口
import $ from 'jquery'  // 第三方库

m3.fun1()
m3.fun2()
dm3.fun3()
dm3.dm2()
console.log(m3.str, m3.num)
$('body').css('background', 'red')
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>
  <script src="./dist/bundle.js"></script>
</body>
</html>
```

4）输出

```
In module_1.js
In module_2.js
In module_3.js
export default in module_2.js
hello world! 100
// body 背景色为红色
```

## 对比

### CommonJS Module 和 ES6 Module

**区别：**
 
+ 暴露模块的语法上类似，`exports` 和 `export`，`module.exports` 和 `export default`；但是含义却不一样，`module.exports` 会覆盖其他单独暴露的语句，`export default` 只是一个额外的默认暴露，不影响单独暴露的语句
+ CommonJS Module 是运行时加载的，ES6 Module 是编译时加载接口(静态)
+ CommonJS Module 输出的是一个值的拷贝(带缓存功能)，ES6 Module 输出的是值的引用

**ES6 Module 加载 CommonJS Module：**

+ 三种方法获取 `module.exports`，使用第三种方法时，要通过 `foo.default()` 才能获取真正的 `module.exports`
```js
// a.js
module.exports = function() {
  console.log('hello world!')
}

// 法一
import foo from './a.js'
// foo = function() {}
foo()

// 法二
import { default as foo } from './a.js'
// foo = function() {}
foo()

// 法三
import * as foo from './a.js'
// foo = { default: function() {} }
foo.default()
```

+ 由于 ES6 Module 是编译时确定输出接口，CommonJS Module 是运行时确定输出接口；这就说明了引入 CommonJS Module 时，要整体引入
```js
// 法一
import * as express from 'express';
const app = express.default();

// 法二
import express from 'express';
const app = express();
```