---
sidebarDepth: 2
---

## 快速使用

+ [Sass](https://www.sass.hk/)是一个强大的 CSS 扩展语言（预处理器）

### 安装

1. 安装 Ruby，`sass` 是 Ruby 开发的
2. 安装
```sh
gem install sass
gem install compass
```


### 编译

+ 命令行编译
```sh
# 单文件
sass input.scss output.css
# 监听
sass --watch input.scss:output.css
# 监听整个目录
sass --watch app/sass:public/stylesheets
```

+ 编译配置选项
```sh
# 编译后格式
sass --watch input.scss:output.css --style compact
# 添加 sourcemap
sass --watch input.scss:output.css --sourcemap
# 指定多个选项
sass --watch input.scss:output.css --style expanded --sourcemap
# 开启 debug
sass --watch input.scss:output.css --debug-info
```

::: tip 编译选项
+ `--style` 可以指定四种格式：
  - `nested`（默认，带缩进未压缩）
  - `expanded `（不缩进未压缩）
  - `compact`（逐行排版）
  - `compressed`（完全压缩）
+ `--sourcemap` 开启后，会生成一个 `.css.map` 后缀的文件
:::




## 嵌套语法

::: tip 说明：
+ 嵌套语法是最基础、最常用的语法，我们不必以 `选择器 {}` 的形式书写每一块 CSS 代码，而是将关联的选择器前缀复用，精简代码
+ 可嵌套的场景：
  + 所有关系选择器(子选择器、后代选择器...)
  + 有相同属性前缀的选择器名
  + 有相同属性前缀的 CSS 属性
:::

+ 基础嵌套
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

// 编译为
#header div {
  width: 300px;
  height: 300px;
}
#header p {
  background-color: red;
}
```

+ 父选择器引用(`&`)
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
// 编译为
a { text-decoration: none; }
a:hover { background-color: red; }
a:active { background-color: blue; }


#herder {
  color: red;
  &-nav {
    color: green;
    &-list {
      background-color: #ccc;
    }
  }
}
// 编译为
#herder { color: red; }
#herder-nav { color: green; }
#herder-nav-list { background-color: #ccc; }
```

::: tip
+ `&` 必须作为嵌套的选择器的<font color="red">第一个字符</font>，不合法的连接时会报错
+ 多层嵌套的 `&`，最外层的父选择器会一层一层传递
+ 除了嵌套相同前缀的选择器，还可以嵌套相同前缀的CSS属性，例如：`font-size` 和 `font-color` 等
:::




## SassScript

### 变量

+ 用美元符号（$）开头声明一个变量
```scss
$width: 30px;
#main { width: $width; }
// 编译为
#main { width: 30px; }
```

+ 作用域，分为全局和局部变量，使用 `!global` 可将局部变量上升为全局变量
```scss
#main {
  $width: 30px !global;
  width: $width;
}
#box {
  width: $width;
}
// 编译为
#main { width: 30px; }
#box { width: 30px; }
```

::: tip 备注：
+ 变量功能很有用，可以使用变量 + 全局配置的方式去管控页面样式
+ 控制主题色
+ 控制页面换肤
+ 控制页面字体、布局大小
:::



### 数据类型

+ 数字：`1, 2, 13, 10px`
+ 字符串，有引号字符串与无引号字符串：`"foo"` / `'bar'` / `baz`
+ 颜色：`blue` / `#04a3f9` / `rgba(255,0,0,0.5)`
+ 布尔型：`true` / `false`
+ 空值：`null`
+ 数组，无括号且用空格或逗号作分隔符：`1.5em 1em 0 2em`、 `Helvetica, Arial, sans-serif`
+ maps, 相当于 object：`(key1: value1, key2: value2)`



### 运算

+ 数值运算：`+` 、`-`、`*`、`/`
+ 颜色值运算：
+ 字符串运算：`+` 、插值 `#{}`
+ 布尔运算：`and`、 `or`、 `not`




## @-Rules

### @import

+ 以下情况下，`@import` 仅作为普通的 CSS 语句，不会导入 Sass 文件
  - 文件拓展名是 `.css`
  - 文件名以 `http://` 开头
  - 文件名是 `url()`
  - `@import` 包含媒体查询
+ 其他情况下，若文件的拓展名是 `.scss`/`.sass`，则导入成功；没有指定拓展名时 Sass 将会试着寻找文件名相同，拓展名为 `.scss`/`.sass` 的文件导入
+ 若引入 Scss 文件但不需要编译为 CSS，在文件名前添加下划线即可，但导入语句中不需要添加下划线；不可以同时存在添加下划线与未添加下划线的同名文件，否则添加下划线的文件将会被忽略
+ 可以嵌套进 CSS 样式或者 `@media` 中，但**不可以在 mixin 或控制指令中嵌套使用**



### @media

+ 在 CSS 的基础上增加了额外的功能
+ 可以使用 SassScript
+ 允许在嵌套中使用，编译时 `@media` 将被编译到文件的最外层，包含嵌套的父选择器
```scss
.layout {
  width: 960px;
  @media screen and (max-width: 840px) {
    .sidebar {
      display: none;
    }
  }
}
// 编译后
.layout { width: 960px; }
@media screen and (max-width: 840px) {
  .layout .sidebar { display: none; }
}
```



### @extend

+ 将一个选择器下的所有样式继承给另一个选择器
```scss
.error {
  color: red;
  border: 1px solid red;
}
.errorStrong {
  @extend .error;
  border-width: 3px;
}
// 编译为
.error, .errorStrong {
  color: red;
  border: 1px solid red;
}
.errorStrong {
  border-width: 3px;
}
```


### @at-root

+ 将选择器样式跳出嵌套
+ @at-root(without: ...)
+ @at-root(with: ...)



## 控制指令

### @if

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
p { color: green; }
```


### @for

```scss
@for $i from 1 through 3 {
  .item-#{$i} { width: 2em * $i; }
}

// 编译为
.item-1 { width: 2em; }
.item-2 { width: 4em; }
.item-3 { width: 6em; }
```


### @each

+ 基础 each，配合元组使用
```scss
@each $animal in puma, sea-slug, egret, salamander {
  .#{$animal}-icon {
    background-image: url('/images/#{$animal}.png');
  }
}

// 编译为
.puma-icon { background-image: url('/images/puma.png'); }
.sea-slug-icon { background-image: url('/images/sea-slug.png'); }
.egret-icon { background-image: url('/images/egret.png'); }
.salamander-icon { background-image: url('/images/salamander.png'); }
```

+ 多重 each，配合多层元组使用
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

+ maps，元组是一个字典(对象)
```scss
@each $header, $size in (h1: 2em, h2: 1.5em, h3: 1.2em) {
  #{$header} {
    font-size: $size;
  }
}

// 编译为
h1 { font-size: 2em; }
h2 { font-size: 1.5em; }
h3 { font-size: 1.2em; }
```



### @while

```scss
$i: 6;
@while $i > 0 {
  .item-#{$i} { width: 2em * $i; }
  $i: $i - 2;
}

// 编译为
.item-6 { width: 12em; }
.item-4 { width: 8em; }
.item-2 { width: 4em;}
```




## 混合指令

+ 使用 `@mixin` 定义一段可复用的样式代码，使用 `@include` 引入指定的样式代码
+ 可以在 `mixins.scss` 中定义常用样式代码块，应用在类似的项目中


### @mixin

+ 清除浮动
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

+ 超出文本显示省略号
```scss
// 单行文本
@mixin ellipsis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

// 多行文本
@mixin multi-ellipsis($line: 2) {
  overflow : hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: $line;
  -webkit-box-orient: vertical;
}
```


::: tip 备注：
+ 又是一个非常实用/常用的功能(只要能做到代码复用，就是好东西！)
:::


### @include

+ 这个语法主要是用来引入 mixin 的
```scss
.page-title {
  @include large-text;
  padding: 4px;
  margin-top: 10px;
}
```

+ 在 mixin 中引入 mixin
```scss
@mixin highlighted-background { 
  background-color: #fc0; 
}
@mixin header-text { 
  font-size: 20px; 
}
@mixin compound {
  @include highlighted-background;
  @include header-text;
}
```



### arguments 参数

+ mixin 允许像函数一样指定参数
```scss
@mixin sexy-border($color, $width) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
// 使用
p { 
  @include sexy-border(blue, 1in); 
}
```

+ 指定默认值
```scss
@mixin sexy-border($color, $width: 1in) {
  border: {
    color: $color;
    width: $width;
    style: dashed;
  }
}
// 使用
p {  @include sexy-border(blue); 
}
h1 { 
  @include sexy-border(blue, 2in); 
}
```

+ 剩余参数(在 @mixin 中)
```scss
@mixin box-shadow($shadows...) {
  -moz-box-shadow: $shadows;
  -webkit-box-shadow: $shadows;
  box-shadow: $shadows;
}
// 使用
.shadows {
  @include box-shadow(0px 4px 5px #666, 2px 6px 10px #999);
}
```

+ 剩余参数(在 @include 中) 
```scss
@mixin colors($text, $background, $border) {
  color: $text;
  background-color: $background;
  border-color: $border;
}
// 使用
$values: #ff0000, #00ff00, #0000ff;
.primary {
  @include colors($values...);
}
```



## 函数指令

+ 使用 `@function` 定义，使用时直接使用函数名调用
+ 与 mixin 相似，但需要调用 `@return` 输出结果
```scss
$grid-width: 40px;
$gutter-width: 10px;

@function grid-width($n) {
  @return $n * $grid-width + ($n - 1) * $gutter-width;
}
// 使用
#sidebar { 
  width: grid-width(5); 
}
```