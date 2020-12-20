## 简介

&emsp;[Gulp](https://www.gulpjs.com.cn/)是一个自动化构建工具（task runner）。有如下几个特点：

+ 易于使用
+ 构建快速（利用Node.js流）
+ 插件高质
+ 易于学习（少量但强大的API）



## 入门指南

**官方指南：**

1.全局安装

```
$ npm install --global gulp
```

2.项目安装依赖

```
$ npm install --save-dev gulp
```

3.项目根目录创建 gulpfile.js

```javascript
var gulp = require('gulp');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});
```

4.运行

```
$ gulp
```

<font color="red">注意：</font>

+ 使用 `$ gulp` 命令会执行默认任务（任务名为 `default`），执行其他任务使用命令 `$ gulp my_task`
+ `gulp` 这个单词的所有使用都是小写

## API

&emsp;参考[gulp API 文档](https://www.gulpjs.com.cn/docs/api/)。

+ gulp.src() - 指定任务将要处理的文件
+ gulp.task() - 注册/指定任务
+ gulp.dest() - 文件输出
+ gulp.watch() - 监听文件





## 合并/压缩文件 

&emsp;可以利用 gulp 的相关插件，对文件（css/js/html/image等）进行处理（合并、压缩或编译）。

**目的：**

+ 合并 css/js 文件
+ 编译 less 文件为 css 文件
+ 压缩 html/css/js 文件

1）下载

```
// 初始化 package.json
$ npm init 
// 安装全局包
$ npm install gulp@3 -g
$ npm install gulp-cli -g
// 安装项目依赖
$ npm install gulp@3 --save-dev			
$ npm install gulp-concat -save-dev		// 合并 css/js 文件
$ npm install gulp-uglify -save-dev		// 压缩 js 文件
$ npm install gulp-rename -save-dev		// 文件重命名
$ npm install gulp-less -save-dev		// 编译 less 文件
$ npm install gulp-clean-css -save-dev	// 压缩 css 文件
$ npm install gulp-htmlmin -save-dev	// 压缩 html 文件
```

2）项目基础目录

```
|-project
  |-build			// 自动生成，gulp 处理后的文件
    |-css
      |-main.css
    |-js
      |-build.js
  |-dist			// 自动生成，gulp 压缩后的文件
    |-build.min.js
    |-main.min.css
    |-index.html
  |-src				// 源文件
    |-js
      |-test1.js
      |-test2.js
    |-css
      |-test1.css
      |-test2.css
      |-test3.css	// 编译 test3.less 后生成
      |-test3.less	// 用于测试 gulp-less 插件
  |-index.html		
  |-package.json
  |-package-lock.json
  |-node_modules	
  |-gulpfile.js		// gulp 配置文件
```

3）文件

test1.js

```javascript
var add = function(a, b) {
	return a + b;
};
console.log(add(22, 43));
```

test2.js

```javascript
var mul = function(a, b) {
	return a * b;
};
console.log(mul(20, 30));
```

test1.css

```css
#box1 {
	width: 200px;
	height: 200px;
}
#box2 {
	width: 300px;
	height: 300px;
}
```

test2.css

```css
#box1 {
	background-color: deeppink;
}
#box2 {
	background-color: red;
	border-radius: 50%;
}
```

test3.less

```less
body {
	#box1 {
		transform: translateX(100px);
	}
	#box2 {
		transform: translateX(200px);
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
	<link rel="stylesheet" type="text/css" href="main.min.css">
</head>
<body>
	<div id="box1"></div>
    
	<div id="box2"></div>
	<script type="text/javascript" src="build.min.js"></script>
</body>
</html>
```

gulpfile.js

```javascript
// 引入 gulp 相关模块
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

// 注册 js 相关任务
gulp.task('js', function() {
	return gulp.src('./src/js/*.js')
		.pipe(concat('build.js'))						// 合并匹配的所有 js 文件
		.pipe(gulp.dest('./build/js'))			// 合并后的 js 文件输出路径
		.pipe(uglify())											// 压缩 build.js
		.pipe(rename('build.min.js'))				// 重命名为 build.min.js
		.pipe(gulp.dest('./dist/'));				// 压缩后的 js 文件输出路径
});


// 注册 css 相关任务
gulp.task('css', ['less'], function() {		// 执行 css 任务之前，先执行 less 任务
	return gulp.src('./src/css/*.css')
		.pipe(concat('main.css'))							// 合并匹配的所有 css 文件，保存至 main.css
		.pipe(gulp.dest('./build/css'))				// 合并后的 css 文件输出路径
		.pipe(cleanCss())											// 压缩 main.css
		.pipe(rename('main.min.css'))					// 重命名为 main.min.css
		.pipe(gulp.dest('./dist/'));					// 压缩后的 css 文件输出路径
});


// 注册 html 相关任务
gulp.task('htmlmin', function() {
	return gulp.src('./index.html')
		.pipe(htmlmin({ collapseWhitespace: true }))	// 压缩 html 文件，参数指定压缩所有空格
		.pipe(gulp.dest('./dist/'));									// 压缩后的 html 文件输出路径
});

// 注册 less 编译任务
gulp.task('less', function() {
	return gulp.src('./src/css/*.less')
		.pipe(less())													// 编译 less 文件为css文件，默认只改变文件的后缀，不会重命名
		.pipe(gulp.dest('src/css/'));					// 编译后的 css 文件输出路径
})

// 注册默认任务，gulp3 在命令行使用 '$ gulp' 时，默认执行 
gulp.task('default', ['js', 'css', 'htmlmin'], function() {
	// 什么也不做，但是在默认任务前，远程参数数组指定的任务列表
	// gulp4 不能向这样定义，会报错 AssertionError [ERR_ASSERTION]: Task function must be specified
});
```

命令行

```
// 执行默认任务，会先执行依赖的任务
$ gulp
// 也可以执行其中单个任务
$ gulp js
$ gulp css
$ gulp htmlmin
```

4）输出/结果

```
// console.log
65 600
// 页面样式与所定义的一致
```

<font color="red">注意：</font>浏览器打开的 html 文件是 dist/index.html 文件，因此引入的 js 和 css 文件都是在当前路径下；打开根目录的 index.html 不会得到期望的结果，但可以修改相关文件路径，指向 dist/ 下的文件。

## 半自动构建

&emsp;利用 `gulp-livereload` 插件和 `gulp-watch()` 方法，让命令行监听文件，自动构建。

1）下载

```
// 在上一步的基础上
// 安装项目依赖
$ npm install gulp-livereload --save-dev
```

2）项目基础目录

```
// 与 1 中的一致
```

3）文件

gulpfile.js

```javascript
// 引入 gulp 相关模块
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var livereload = require('gulp-livereload');

// 注册 js 相关任务
gulp.task('js', function() {
	return gulp.src('./src/js/*.js')
		.pipe(concat('build.js'))						// 合并匹配的所有 js 文件
		.pipe(gulp.dest('./build/js'))			// 合并后的 js 文件输出路径
		.pipe(uglify())											// 压缩 build.js
		.pipe(rename('build.min.js'))				// 重命名为 build.min.js
		.pipe(gulp.dest('./dist/'));				// 压缩后的 js 文件输出路径
});


// 注册 css 相关任务
gulp.task('css', ['less'], function() {		// 执行 css 任务之前，先执行 less 任务
	return gulp.src('./src/css/*.css')
		.pipe(concat('main.css'))							// 合并匹配的所有 css 文件，保存至 main.css
		.pipe(gulp.dest('./build/css'))				// 合并后的 css 文件输出路径
		.pipe(cleanCss())											// 压缩 main.css
		.pipe(rename('main.min.css'))					// 重命名为 main.min.css
		.pipe(gulp.dest('./dist/'))					 	// 压缩后的 css 文件输出路径
		.pipe(livereload());									// 添加这个能在命令行看到哪个文件发生修改
});


// 注册 html 相关任务
gulp.task('htmlmin', function() {
	return gulp.src('./index.html')
		.pipe(htmlmin({ collapseWhitespace: true }))	// 压缩 html 文件，参数指定压缩所有空格
		.pipe(gulp.dest('./dist/'));									// 压缩后的 html 文件输出路径
});

// 注册 less 编译任务
gulp.task('less', function() {
	return gulp.src('./src/css/*.less')
		.pipe(less())													// 编译 less 文件为css文件，默认只改变文件的后缀，不会重命名
		.pipe(gulp.dest('src/css/'));					// 编译后的 css 文件输出路径
})

// 添加 watch 任务
gulp.task('watch', function() {
	livereload.listen();
    // 监听相关文件
	gulp.watch('./src/css/*.css', ['css']);	
	gulp.watch('./src/css/*.less', ['css']);
	gulp.watch('./src/js/*.js', ['js']);
})


// 注册默认任务，gulp3 在命令行使用 '$ gulp' 时，默认执行 
gulp.task('default', ['js', 'css', 'htmlmin'], function() {
	// 什么也不做，但是在默认任务前，远程参数数组指定的任务列表
	// gulp4 不能向这样定义，会报错 AssertionError [ERR_ASSERTION]: Task function must be specified
});
```

命令行

```
$ gulp watch	// 执行 watch 任务，监听相关文件
```

4）输出/结果

```
// 修改 css/js/less 文件时，命令行会自动进行构建，打开 dist/index.html 刷新可以看到样式的改变
```

<font color="red">注意：</font>

+ 不要忘了引入插件模块
+ 在相关任务下添加 `pipe(livereload())` 时可选的，添加后能在命令行观察到相关文件的改变

## 全自动构建

&emsp;利用 `gulp-livereload`、`gulp-connect` 插件和 gulp-watch() 方法，使命令行监听文件变化，并且自动刷新至浏览器。

1）下载

```
// 在 2 的基础上
// 安装项目依赖
$ npm install gulp-connect --save-dev	// 配置浏览器自动刷新
$ npm install open --save-dev			// 自动打开浏览器
```

2）项目基础目录

```
与 2 的一致
```

3）文件

gulpfile.js

```javascript
// 引入 gulp 相关模块
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var cleanCss = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var open = require('open');

// 注册 js 相关任务
gulp.task('js', function() {
	return gulp.src('./src/js/*.js')
		.pipe(concat('build.js'))						// 合并匹配的所有 js 文件
		.pipe(gulp.dest('./build/js'))			// 合并后的 js 文件输出路径
		.pipe(uglify())											// 压缩 build.js
		.pipe(rename('build.min.js'))				// 重命名为 build.min.js
		.pipe(gulp.dest('./dist/')) 				// 压缩后的 js 文件输出路径
		.pipe(connect.reload());						// 关联 connect 插件刷新浏览器
});


// 注册 css 相关任务
gulp.task('css', ['less'], function() {		// 执行 css 任务之前，先执行 less 任务
	return gulp.src('./src/css/*.css')
		.pipe(concat('main.css'))							// 合并匹配的所有 css 文件，保存至 main.css
		.pipe(gulp.dest('./build/css'))				// 合并后的 css 文件输出路径
		.pipe(cleanCss())											// 压缩 main.css
		.pipe(rename('main.min.css'))					// 重命名为 main.min.css
		.pipe(gulp.dest('./dist/'))					 	// 压缩后的 css 文件输出路径
		.pipe(livereload()) 									// 添加这个能在命令行看到哪个文件发生修改
		.pipe(connect.reload());
});


// 注册 html 相关任务
gulp.task('htmlmin', function() {
	return gulp.src('./index.html')
		.pipe(htmlmin({ collapseWhitespace: true }))	// 压缩 html 文件，参数指定压缩所有空格
		.pipe(gulp.dest('./dist/')) 									// 压缩后的 html 文件输出路径
		.pipe(connect.reload());
});

// 注册 less 编译任务
gulp.task('less', function() {
	return gulp.src('./src/css/*.less')
		.pipe(less())													// 编译 less 文件为css文件，默认只改变文件的后缀，不会重命名
		.pipe(gulp.dest('src/css/'));					// 编译后的 css 文件输出路径
})

// 添加 watch 任务
gulp.task('watch', function() {
	livereload.listen();
	// 监听相关文件
	gulp.watch('./src/css/*.css', ['css']);
	gulp.watch('./src/css/*.less', ['css']);
	gulp.watch('./src/js/*.js', ['js']);
})

// 添加 server 任务，且执行 server 任务之前执行默认任务
gulp.task('server', ['default'], function() {
	connect.server({
		root: './dist',
		port: '8081',
		livereload: true 	// 浏览器自动刷新
	});
	// 监听文件
	gulp.watch('./src/js/*.js', ['js']);
	gulp.watch('./src/css/*.css', ['css']);
	gulp.watch('./src/css/*.less', ['css']);
	// 使用 open 插件，自动打开浏览器
	open('http://localhost:8081/');
})

// 注册默认任务，gulp3 在命令行使用 '$ gulp' 时，默认执行 
gulp.task('default', ['js', 'css', 'htmlmin'], function() {
	// 什么也不做，但是在默认任务前，远程参数数组指定的任务列表
	// gulp4 不能向这样定义，会报错 AssertionError [ERR_ASSERTION]: Task function must be specified
});
```

命令行

```
$ gulp server	// 启动服务器，并且自动打开浏览器，自动刷新浏览器
```

<font color="red">注意：</font>

+ 需要依赖 `gulp-livereload` 和 `gulp-connect` 两个插件
+ `connect.server()` 要配置 `livereload: true`，且相关任务要添加 `.pipe(connect.reload())`
+ 要监听相关文件

4）输出/结果

```
// 命令行启动 '$ gulp server' 后，open 插件会自动打开默认浏览器，修改相关 css/js/less 文件时，命令行会自动构建，且浏览器会自动刷新。
```