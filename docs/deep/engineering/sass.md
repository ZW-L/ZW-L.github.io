## 简介

&emsp;[Sass](https://www.sass.hk/)是一个强大的CSS扩展语言（预处理器）。特点：

+ 兼容所有版本的CSS
+ 丰富的功能特性
+ 成熟的技术团队
+ 行业认可
+ 社区庞大

## 安装

&emsp; `sass`  是`Ruby` 开发的，因此要先安装 `Ruby`。

安装 Ruby 后：

```
$ gem install sass
$ gem install compass
```

## 编译

**命令行编译：**

```
//单文件转换命令
sass input.scss output.css

//单文件监听命令
sass --watch input.scss:output.css

//如果你有很多的sass文件的目录，你也可以告诉sass监听整个目录：
sass --watch app/sass:public/stylesheets
```

**编译配置选项：**

```
//编译格式
sass --watch input.scss:output.css --style compact

//编译添加调试map
sass --watch input.scss:output.css --sourcemap

//选择编译格式并添加调试map
sass --watch input.scss:output.css --style expanded --sourcemap

//开启debug信息
sass --watch input.scss:output.css --debug-info
```

+ `--style` 可以指定四种格式：`nested`（带缩进未压缩的CSS）、 `expanded `（不缩进未压缩的CSS）、`compact` （逐行排版的CSS）、`compressed`（压缩后的CSS）。

+ `--sourcemap` 开启后，会生成一个 `.css.map` 后缀的文件。



## CSS 功能扩展

**嵌套语法：**

```scss
#header {
	div {
		width: 300px;
		height: 300px;
	}
	p {
		background-color: red;
	}
}
```

编译为：

```css
#header div {
  width: 300px;
  height: 300px;
}
#header p {
  background-color: red;
}
```

**Tips：**可以尝试所有合法嵌套的方式。



**父选择器 &：**

```scss
a {
	text-decoration: none;
	&:hover {
		background-color: red;
	}
	&:active {
		background-color: blue;
	}
}
```

编译为：

```css
a {
  text-decoration: none;
}
a:hover {
  background-color: red;
}
a:active {
  background-color: blue;
}
```

或者

```scss
#herder {
	color: red;
	&-nav {
		color: green;
		&-list {
			background-color: #ccc;
		}
	}
}
```

编译为：

```css
#herder {
  color: red;
}
#herder-nav {
  color: green;
}
#herder-nav-list {
  background-color: #ccc;
}
```

**Tips:**


+ `&` 必须作为嵌套的选择器的<font color="red">第一个字符</font>，不合法的连接时会报错
+ 多层嵌套的 `&`，最外层的父选择器会一层一层传递
+ 除了嵌套相同前缀的选择器，还可以嵌套相同前缀的CSS属性，例如：`font-size` 和 `font-color` 等



## SassScript

&emsp;像编程一样使用样式。

1）定义/使用变量

+ 用美元符号（$）开头声明一个变量

```scss
$width: 30px;
#main {
	width: $width;
}
```

编译为：

```css
#main {
  width: 30px;
}
```

+ 变量的作用域

```scss
#main {
	$width: 30px !global;	// 使局部变量升级为全局变量
	width: $width;
}
#box {
	width: $width;
}
```

编译为：

```css
#main {
  width: 30px;
}

#box {
  width: 30px;
}
```

**Tips：**

+ Sass变量是有相应的作用域的，但局部变量也可以升级为全局变量，类似PHP的语法

2）数据类型和运算：

SassScript 支持 6 种主要的数据类型：

- 数字，`1, 2, 13, 10px`
- 字符串，有引号字符串与无引号字符串，`"foo", 'bar', baz`
- 颜色，`blue, #04a3f9, rgba(255,0,0,0.5)`
- 布尔型，`true, false`
- 空值，`null`
- 数组 (list)，用空格或逗号作分隔符，`1.5em 1em 0 2em, Helvetica, Arial, sans-serif`
- maps, 相当于 JavaScript 的 object，`(key1: value1, key2: value2)`



3）运算

+ 数值运算：`+` 、`-`、`*`、`/`
+ 颜色值运算：
+ 字符串运算：`+` 、插值 `#{}`
+ 布尔运算：`and`、 `or`、 `not`



4）函数





5）插值 

+ `#{}`





## @-Rules 和指令

1）@import

**介绍**

通常，`@import` 寻找 Sass 文件并将其导入，但在以下情况下，`@import` 仅作为普通的 CSS 语句，不会导入任何 Sass 文件。

- 文件拓展名是 `.css`；
- 文件名以 `http://` 开头；
- 文件名是 `url()`；
- `@import` 包含 media queries。

如果不在上述情况内，文件的拓展名是 `.scss` 或 `.sass`，则导入成功。没有指定拓展名，Sass 将会试着寻找文件名相同，拓展名为 `.scss` 或 `.sass` 的文件并将其导入。

**Partial**

+ 如果需要导入 SCSS 或者 Sass 文件，但又不希望将其编译为 CSS，只需要在文件名前添加下划线，这样会告诉 Sass 不要编译这些文件，但导入语句中却不需要添加下划线

+ 注意，不可以同时存在添加下划线与未添加下划线的同名文件，添加下划线的文件将会被忽略

**嵌套@import**

+ 大多数情况下，一般在文件的最外层（不在嵌套规则内）使用 `@import`，其实，也可以将 `@import` 嵌套进 CSS 样式或者 `@media` 中，与平时的用法效果相同，只是这样导入的样式只能出现在嵌套的层中
+ 不可以在混合指令 (mixin) 或控制指令 (control directives) 中嵌套 `@import`

2）@media

+ Sass 中 `@media` 指令与 CSS 中用法一样，只是增加了一点额外的功能：允许其在 CSS 规则中嵌套。如果 `@media` 嵌套在 CSS 规则内，编译时，`@media`将被编译到文件的最外层，包含嵌套的父选择器。这个功能让 `@media` 用起来更方便，不需要重复使用选择器，也不会打乱 CSS 的书写流程
+ `@media` 甚至可以使用 SassScript（比如变量，函数，以及运算符）代替条件的名称或者值

3）@extend

+ 使用 `@extend` 可以告诉 Sass 将一个选择器下的所有样式继承给另一个选择器

## 控制指令

1）`@if` / `@else if` 

```scss
$type: monster;
p {
  @if $type == ocean {
    color: blue;
  } @else if $type == matador {
    color: red;
  } @else if $type == monster {
    color: green;
  } @else {
    color: black;
  }
}

// 编译为
p {
  color: green; 
}
```

2）`@for` 

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

// 编译为
.item-1 {
  width: 2em; 
}
.item-2 {
  width: 4em; 
}
.item-3 {
  width: 6em; 
}
```

3）`@each`

+ 基础 each

```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}

// 编译为
.puma-icon {
  background-image: url('/images/puma.png'); 
  }
.sea-slug-icon {
  background-image: url('/images/sea-slug.png'); 
  }
.egret-icon {
  background-image: url('/images/egret.png'); 
  }
.salamander-icon {
  background-image: url('/images/salamander.png'); 
  }
```

+ 多重 each

```scss
@each $animal, $color, $cursor in (puma, black, default),
                                  (sea-slug, blue, pointer),
                                  (egret, white, move) {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
    border: 2px solid $color;
    cursor: $cursor;
  }
}

// 编译为
.puma-icon {
  background-image: url('/images/puma.png');
  border: 2px solid black;
  cursor: default; 
}
.sea-slug-icon {
  background-image: url('/images/sea-slug.png');
  border: 2px solid blue;
  cursor: pointer; 
}
.egret-icon {
  background-image: url('/images/egret.png');
  border: 2px solid white;
  cursor: move; 
}
```

+ maps

```scss
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
  #{$header} {
    font-size: $size;
  }
}

// 编译为
h1 {
  font-size: 2em; 
}
h2 {
  font-size: 1.5em; 
}
h3 {
  font-size: 1.2em; 
}
```

4）`@while`

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}

// 编译为
.item-6 {
  width: 12em; 
}
.item-4 {
  width: 8em; 
}
.item-2 {
  width: 4em;
}
```



## 混合指令

1）`@mixin`

+ 混合指令的用法是在 `@mixin` 后添加名称与样式
+ 混合也需要包含选择器和属性，甚至可以用 `&` 引用父选择器

```scss
@mixin clearfix {
  display: inline-block;
  &:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  * html & { height: 1px }
}
```

2）`@include`

+ 使用 `@include` 指令引用混合样式，格式是在其后添加混合名称，以及需要的参数（可选）

```scss
.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}
```



+ 也可以在最外层引用混合样式，不会直接定义属性，也不可以使用父选择器

```scss
@mixin silly-links {
  a {
    color: blue;
    background-color: red;
  }
}
@include silly-links;
```



+ 混合样式中也可以包含其他混合样式

```scss
@mixin compound {
  @include highlighted-background;
  @include header-text;
}
@mixin highlighted-background { 
  background-color: #fc0; 
}
@mixin header-text { 
  font-size: 20px; 
}
```

3）参数 `arguments`

+ 参数用于给混合指令中的样式设定变量，并且赋值使用

```scss
@mixin sexy-border($color, $width) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
p { 
  @include sexy-border(blue, 1in); 
}
```

+ 混合指令也可以使用给变量赋值的方法给参数设定默认值

```scss
@mixin sexy-border($color, $width: 1in) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
p { 
  @include sexy-border(blue); 
}
h1 { 
  @include sexy-border(blue, 2in); 
}
```

+ 有时，不能确定混合指令需要使用多少个参数，比如一个关于 `box-shadow` 的混合指令不能确定有多少个 'shadow' 会被用到。这时，可以使用参数变量 `…`声明（写在参数的最后方）告诉 Sass 将这些参数视为值列表处理

```scss
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}
.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
```

+ 参数变量也可以用在引用混合指令的时候 (`@include`)，与平时用法一样，将一串值列表中的值逐条作为参数引用

```scss
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}
$values: #ff0000, #00ff00, #0000ff;
.primary {
  @include colors($values...);
}
```



## 函数指令

+ Sass 支持自定义函数，并能在任何属性值或 Sass script 中使用
+ 与 mixin 相同，也可以传递若干个全局变量给函数作为参数
+ 一个函数可以含有多条语句，需要调用 `@return` 输出结果
+ 建议在自定义函数前添加前缀避免命名冲突，其他人阅读代码时也会知道这不是 Sass 或者 CSS 的自带功能

```scss
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}

#sidebar { 
  width: grid-width(5); 
}
```