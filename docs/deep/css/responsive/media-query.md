---
sidebarDepth: 2
---

## 介绍

### 简介

+ 媒体查询相当于 `if` ，可以匹配使用多个符合条件的样式/样式文件
+ 媒体查询会覆盖之前定义的相同的 CSS 样式，也会被在媒体查询后定义的 CSS 样式覆盖（为了保证媒体查询不被覆盖，应该放在样式文件的最后面）
+ 使用 `Sass`/`Less` 等 CSS 预处理工具使媒体查询更简便，更清晰
+ 媒体查询(`@media`)可以在以下地方下使用：
  + 在样式中
  + 在 `@import` 时
  + 在 `<link>` 中



### 语法格式

+ 在 `<link>` 中：
```html
<!-- media 是一个 link 标签的属性 -->
<link rel="stylesheet" media="not|only media-type and|, (media-feature)" href="main.css">

<!-- 例子：500px <= 屏幕宽度 < 800px 时应用 -->
<link rel="stylesheet" href="main.css" media="screen and (min-width: 500px) and (max-width: 800px)">
```

+ 在 `@import` 时：
```css
@import './main.css' not|only media-type and|, (media-feature)

/* 例子：500px <= 屏幕宽度 < 800px 时应用 */
@import 'main.css' screen and (min-width: 500px) and (max-width: 800px)
```


+ 在样式中：
```css
@media not|only media-type and|, (media-feature) {
  /* css code */
}

/* 例子：500px <= 屏幕宽度 < 800px 时应用 */
@media screen and (min-width: 500px) and (max-width: 800px) {
  body { background-color: red; }
}
```

::: tip 说明：
+ 无论是那种方式，媒体查询的语法声明分为四部分：
  1. **not|only**：前置的逻辑操作符
  2. **media-type**：查询的设备类型
  3. **and|,**：指示各个 **media-feature** 的关系的逻辑操作符
  4. **media-feature**：查询的设备属性
+ 在不使用 `not`/`only` 这两个逻辑操作符时，**media-type** 和第一个 `and` 是可选的，此时默认使用 `all` 和 `and`
:::



## 设备类型

常用设备类型：
+ `all`：所有设备
+ `screen`：屏幕设备，电脑、平板、手机等
+ `print`：打印机设备
+ `speech`：屏幕阅读器等发声设备





## 逻辑操作符

### and

+ 逻辑与(and)，常用来指定一个查询属性的范围区间
```css
@media screen and (min-width: 500px) and (max-width: 800px) {
   /* 屏幕宽度大于 500px 且小于 800px */
   body { background-color: blue; }
}
```
+ 也可用继续添加更多不同类型的查询参数
```css
@media screen and (min-width: 500px) and (orientation: landscape) {
  body { background-color: red; }
}
```

### ,

+ 逻辑或(or)，用于指定并列关系的查询属性，相当于两条独立的查询语句的复合写法
```css
/* 屏幕尺寸小于 500px 或大于 800px 时 */
@media screen and (max-width: 500px), screen and (min-width: 800px) {
  body { background-color: red; }
}

/* 等价于 */
@media screen and (max-width: 500px) {
  body { background-color: red; }
}
@media screen and (min-width: 800px) {
  body { background-color: red; }
}
```
+ 当前置的逻辑操作符不是 `not`/`only` 时，可以省略 media-type 和 and，它默认使用 `all and`
```css
@media screen and (max-width: 500px), (min-width: 800px) {
  body { background-color: red; }
}

/* 等价于 */
@media screen and (max-width: 500px), all and (min-width: 800px) {
  body { background-color: red; }
}
```


### not

+ 逻辑非(not)，对后面整个表达式的否定，暂时没有发现更好的用法



### only

+ 主要用于区分老式浏览器(老式浏览器不能识别 only，因此不会应用样式)，推荐不要省略
```css
@media only screen and (min-width: 500px) {
	/* 屏幕宽度大于 500px */
  body { background-color: red; }
}
```









## 查询属性

+ 大多数查询属性(除 `orientation`/`scan`/`grid`)都有三种形式，如 `width`/`min-width`/`max-width`
+ 带有 `device-` 前缀的查询属性与设备尺寸有关，如 `device-width`/`device-height`/`device-aspect-ratio`

### width/height

+ `width`/`height` 查询屏幕的宽高，与屏幕分辨率有关
+ 每当调整浏览器尺寸到某一范围时，会触发样式变化
```css
@media screen and (min-width: 500px) {
	/* 屏幕宽度大于 500px */
  body { background-color: red; }
}
@media screen and (max-width: 800px) {
	/* 屏幕宽度小于 800px */
  body { background-color: green; }
}
@media screen and (min-width: 500px) and (max-width: 800px) {
   /* 屏幕宽度大于 500px 且小于 800px */
   body { background-color: blue; }
}
```


### device-width/device-height

+ 与 `width`/`height` 不同，`device-width`/`device-height` 与设备实际的宽高有关
+ 当使用不同尺寸的设备浏览、或横竖屏切换到某一范围时，触发样式变化
```css
@media screen and (min-device-width: 800px) {
  /* 设备宽度大于 800px */
  body { background-color: red; }
}
@media screen and (max-device-width: 500px) {
  /* 设备宽度小于 800px */
  body { background-color: green; }
}
@media screen and (min-device-width: 500px) and (max-device-width: 800px) {
  /* 设备宽度大于 500px 且小于 800px */
  body { background-color: blue; }
}
```


### orientation

+ 查询设备可见高度是否大于宽度，即检测检测横屏（landscape）和竖屏（portrait）
```css
@media screen and (orientation: portrait) {
  /* 竖屏 */
  body { background-color: red; }
}
@media screen and (orientation: landscape) {
  /* 横屏 */
  body { background-color: blue; }
}
```


### aspect-ratio/device-aspect-ratio

+ 查询屏幕/设备的宽度与高度的比率，比 `orientation` 更细粒度，可以实现和 `orientation` 一样的功能
```css
@media screen and (max-device-aspect-ratio: 1/1) {
  /* 竖屏 */
  body { background-color: blue; }
}
@media screen and (min-device-aspect-ratio: 1/1) {
  /* 横屏 */
  body { background-color: red; }
}
```

+ 针对特定屏幕，固定了宽高比率
```css
@media screen and (device-aspect-ratio: 375/667) {
  /* 在 iPhone 6/7/8 下 */
  body { background-color: red; }
}
@media screen and (device-aspect-ratio: 320/568) {
  /* 在 iPhone 5/5s 下 */
  body { background-color: blue; }
}
```

+ 可以通过设备比率(`device-aspect-ratio`)控制显示内容，但要注意小区域优先
```css
@media screen and (min-device-aspect-ratio: 9/16) {
  /* 设备竖屏时 */
  body { background-color: red; }
}
@media screen and (min-device-aspect-ratio: 3/4) {
  /* 在比率较大的电脑、平板设备时 */
  body { background-color: green; }
}
@media screen and (min-device-aspect-ratio: 1/1) {
  /* 设备横屏时 */
  body { background-color: blue; }
}
```

+ 更好的方式为，通过屏幕比率(`aspect-ratio`)控制显示内容，但要注意小区域优先
```css
@media screen and (min-aspect-ratio: 9/16) {
  /* 屏幕比率较小，同时涵盖了大部分的手机设备 */
  body { background-color: red; }
}
@media screen and (min-aspect-ratio: 3/4) {
  /* 屏幕比率中等，同时涵盖了大部分平板设备 */
  body { background-color: green; }
}
@media screen and (min-aspect-ratio: 1/1) {
  /* 屏幕比率较大，同时涵盖了大部分横屏的手机、平板设备 */
  body { background-color: blue; }
}
```
