## 简介
## 媒体查询

## CSS媒体查询



**注意**

+ 媒体查询相当于 `if` ，可以匹配使用多个符合条件的样式/样式文件
+ 媒体查询会覆盖之前定义的相同的 CSS 样式，也会被在媒体查询后定义的 CSS 样式覆盖（为了保证媒体查询不被覆盖，应该放在样式文件的最后面）
+ 可以用 `@import` 配合媒体查询选择性地引入样式文件，组织样式结构
+ 使用 `Sass` 等工具使媒体查询更简便，更清晰

## 关键字

### 1.`and`

**条件且**，可以有多个

### 2.`only`

区分设备

### 3.`not`

对表达式的否定

### 4.`，`

**条件或**，可以有多个

## 查询属性

### 1.页面可见宽高

最大/最小宽高，**与分辨率有关，与设备屏幕大小无关**

+ width 
+ min-width
+ max-width
+ height
+ min-height
+ max-height

```css

@media screen and (min-width: 300px) {
	/* 可见宽度大于 300px */
}
@media screen and (max-width: 300px) {
	/* 可见宽度小于 300px */
}
@media screen and (min-width: 300px) and (max-width: 600px) {
   /* 可见宽度大于 300px 且 小于 600px */
}
```

### 2.设备屏幕宽高

最大/最小设备宽高，这个是**设备实际的宽高，与分辨率无关**

+ device-width
+ min-device-width
+ max-device-width
+ device-height
+ min-device-height
+ max-device-height

```css
@media screen and (min-device-width: 300px) {
	/* 设备宽度大于 300px */
}
@media screen and (max-device-width: 300px) {
	/* 设备宽度小于 300px */
}
@media screen and (min-device-width: 300px) and (max-device-width: 600px) {
   /* 设备宽度大于 300px 且 小于 600px */
}
```

### 3.页面高度是否大于等于宽度

值 `portrait` 表示是，值 `landscape` 表示否，可以用于检测横屏（landscape）和竖屏（portrait）

+  `orientation: portrait` ：竖屏
+  `orientation: landscape` ：横屏

```css
/* 竖屏 */
@media screen and (orientation: portrait) {
	#box1 {
		background-color: pink;
	}
}
/* 横屏 */
@media screen and (orientation: landscape) {
	#box1 {
		background-color: purple;
	}
}
```

### 4.aspect-ratio



### 5.device-aspect-ratio







## 弹性布局
## 视口