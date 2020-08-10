# webpack

## webpack简介

&emsp;参考自webpack[中文文档](https://www.webpackjs.com/concepts/)。

## 官方文档

### 1. 基本概念

+ entry--入口
+ output--出口
+ loader--转换
+ plugins--插件
+ 模式



## webpack3 初步使用



### 1.打包js文件

1）下载

```sh
# 初始化 package.json
npm init
# 全局安装，使用 webpack3
npm install webpack@3 -g
npm install webpack-cli -g
# 安装项目依赖
npm install webpack@3 --save-dev
npm install webpack-cli --save-dev
```

2）项目基础目录

+ 新建主文件 entry.js 和 模块文件 person.js，其中 entry.js 依赖于 person.js
```
|-project 
  |-dist
    |-js
      |-bundle.js		 // 自动创建，使用 webpack 打包后自动生成的文件
  |-src
    |-js
      |-entry.js	 // 入口文件
      |-person.js	 // 模块
  |-node_modules
  |-index.html
  |-package.json
```

3）文件

+ entry.js
```js
// 引入 person 模块
import person from './person.js';

console.log('In entry.js, use person module:');
console.log(person.obj.getMessage());

```

+ person.js
```js
let obj = {
	name: 'Alice',
	age: 24,
	job: 'developer',
  getMessage: function() {
  	return this.name + ' ' + this.age + ' ' + this.job;
  }
};
// 暴露模块
export default { obj };
```

+ 执行命令
```sh
webpack src/js/entry.js dist/js/bundle.js
# 打包完成后自动创建 dist/js/bundle.js
```

+ index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<script type="text/javascript" src="dist/main.js"></script>
</body>
</html>
```



4）输出
```sh
In entry.js, use person module:
Alice 24 developer
```



### 2.使用loader

1）安装

```
// 初始化 package.json
$ npm init
$ npm install webpack@3 --save-dev
// css 相关 loader
$ npm install css-loader --save-dev		// 用于加载 css 模块
$ npm install style-loader --save-dev	// 将 css 文件嵌入html 文件中
// 图片相关 loader
$ npm install file-loader --save-dev	// 
$ npm install url-loader --save-dev		// 
```

2）项目基础目录

```
|-project
  |-dist			// 打包后的目录
    |-js
      |-bundle.js	// 出口/输出文件，自动生成
  |-src				// 源文件
    |-css
      |-style.css
    |-js
      |-entry.js	// 入口文件
      |-module.js
    |-img
      |-big.jpg
      |-logo.jpg
  |-index.html
  |-package.json
  |-package.lock.json 
  |-webpack.config.js	// webpack 配置文件
```

3）文件

module.js

```javascript
// 暴露一个函数
export function sayHello() {
	console.log('Hello World!');
};
```

entry.js

```javascript
// 引入 module 模块
import { sayHello } from './module';
// 引入 css 模块
import '../css/style.css';  // 引入自动使用至 html 文件中，不需要保存至变量

console.log('In entry.js, use module: ');
sayHello();
```

style.css

```css
body {
	background: red;
}
#img1 {
	width: 400px;
	height: 400px;
	background: url("../img/big.jpg") no-repeat center;
}
#img2 {
	width: 400px;
	height: 400px;
	background: url("../img/logo.jpg") no-repeat center;
}
```

webpack.config.js

```json
// 加载 path 模块
let path = require('path');

module.exports = {
	entry: './src/js/entry.js',			// 设置入口文件路径，单个入口
	output: {												// 设置出口/输出文件
		filename: 'bundle.js',				// 设置文件名
		path: path.resolve(__dirname, 'dist/js/')	// 设置文件路径
	},
	module: {					// 设置 loader
		rules: [
			{
				test: /\.css$/,		// 匹配文件规则
				use: [						// 对匹配文件使用的 loader
					'style-loader',		// style-loader 必须在 css-loader 之前
					'css-loader'
				]
			},
			{
				test: /\.(png|jpg|jpeg)$/,
				use: [
					{ loader: 'url-loader' }
				]
			}
		]
	}
}
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<div id="img1"></div>
	<div id="img2"></div>
	<script type="text/javascript" src="dist/js/bundle.js"></script>
</body>
</html>
```

终端

```
$ webpack
```

4）输出

```
In entry.js, use module: 
Hello World!
// body 背景色为红色
// 两个div元素均设置了图片背景
```

<font color="red">注意：</font>

+ webpack.config.js 设置 css 相关的 loader 时，`style-loader` 必需位于 `css-loader` 的前面



### 3.热加载

&emsp;热加载（hot-reload）可以在本地启动一个简易服务器，每当入口文件或相关依赖的文件发生改变时，会自动进行编译打包，而且还会刷新浏览器，能提高开发过程的效率。

&emsp;需要使用的是 [`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/)包。

1）安装

```
$ npm init
// 全局安装的依赖
$ npm install webpack@3 -g
$ npm install webpack-cli -g
$ npm install css-loader -g
$ npm install style-loader -g
$ npm install webpack-dev-server -g
// 项目依赖
$ npm install webpack@3 --save-dev
$ npm install css-loader --save-dev
$ npm install style-loader --save-dev
$ npm install webpack-dev-server -save-dev
```

2）项目基础目录

```
|-project
  |-src
    |-js
      |-entry.js
    |-css
      |-main.css
  |-index.html
  |-package.json
  |-package-lock.json
  |-node_modules
  |-webpack.config.js
```

3）文件

entry.js

```javascript
// 引入 css 模块
import '../css/main.css';

document.write('use hot-reload, should install webpack-dev-server');
```

main.css

```css
body {
	background: red;
}
```

webpack.config.js

```json
// 引入 path 模块
let path = require('path');

module.exports = {
	entry: './src/js/entry.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist/js/')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		// contentBase: '',		// 服务器使用的html的路径，默认为根目录下的 index.html
		port: 8081						// 设置服务器端口号
	}
}
```

index.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- 在服务器运行时，不需要填写相对路径，因为bundle.js缓存在服务器中，在本地没有生成相关文件 -->
	<script type="text/javascript" src="bundle.js"></script>
</body>
</html>
```

命令

```
$ webpack-dev-server --open
// 添加参数会自动打开浏览器
```

4）输出

```
use hot-reload, should install webpack-dev-server
// 背景色为红色
修改main.js：
body {
	background: deeppink;
}
// 保存后，会看到浏览器自动刷新，背景色编程深粉色，而且命令行会执行一次编译打包
```

<font color="red">注意：</font>

+ 命令行出错原因是 webpack-dev-server 导致的，注意安装的 `webpack-dev-server` 和 `webpack` 的版本是否彼此不兼容
+ 命令行出错 `TypeError: root path required`，注意看是不是 `webpack.config.js` 文件中的 devServer.contentBase 设置错了

### 4.插件

&emsp;[插件](https://webpack.js.org/plugins/)系统使 webpack 的使用更加灵活。

1）安装

```sh
# 初始化 package.json
npm init
# 全局安装依赖
npm install webpack@3 -g
npm install webpack-cli -g
npm install css-loader -g
npm install style-loader -g 
# 安装项目依赖
npm install webpack@3 --save-dev
npm install css-loader -save-dev
npm install style-loader -save-dev
npm install html-webpack-plugin --save-dev   # 插件：生成html模板
npm install clean-webpack-plugin --save-dev  # 插件：清理文件夹
```

2）项目基础目录

```
|-project
  |-dist			// 打包后生成的目录
    |-js
      |-bundle.js	// 出口 js 文件
      |-index.html	// html-webpack-plugin 生成的 html 文件
  |-src
    |-js
      |-entry.js
    |-css
      |-main.css
  |-index.html
  |-package.json
  |-package-lock.json
  |-node_modules
  |-webpack.config.js
```

3）文件

+ entry.js
```javascript
// 引入 main.css 模块
import '../css/main.css';

document.write('In entry.js');
```

+ main.css
```css
body {
	background-color: red;
}
```

+ webpack.config.js
```javascript
// 引入模块
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: './src/js/entry.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, './dist/js')
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),		// 删除指定文件夹
		new HtmlWebpackPlugin({ 'template': './index.html'})  // 以指定html文件为模板生成html文件，默认保存在输出文件夹
	]
}
```

+ index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
    <!-- 没有引入任何 js 文件 -->
</body>
</html>
```


4）输出

```sh
# 在浏览器打开 dist/js/index.html 查看
In entry.js
# body 背景色为红色
# clean-webpack-plugin  --> 其中整个 dist 文件夹先被删除，然后再被创建=
# html-webpack-plugin --> 以指定的模板生成 html 文件，目录为 dist/js/index.html，并且自动引入了 bundle.js 文件
```