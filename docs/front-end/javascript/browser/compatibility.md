## 简介

参考：
+ [前端浏览器兼容性问题总结](https://www.jianshu.com/p/6afd596440bb)



## CSS 兼容

+ `margin` / `padding`：基本上所有浏览器都不一样，因此初始化样式很重要
+ 很多其他标签，如 `ul` / `a` 等的默认样式也不一样，同样是需要初始化样式


### IE

+ 由于早期 IE 不遵循 W3C 标准，所以他是处理兼容性的最大痛点（Edge 都使用 Chromium 内核了，希望 IE 早日消失吧～）
+ IE6 双边距问题；在 IE6 中设置了 float，同时又设置 margin，就会出现边距问题
```css
/* 解决方案： */
.box {
  display：inline;
}
```

+ IE6/7 中，当标签的高度设置小于 10px 会超出自己设置的高度
```css
/* 设置溢出隐藏 */
.box {
  overflow：hidden;
}

/* 或设置 line-height 的值小于你的设置高度 */
```

+ 图片默认带间距
```css
/* 使用 float 为 img 布局 */
```

+ IE9 以下不能使用 `opacity`
```css
.box {
  opacity: 0.5;
  filter: alfha(opacity=50);
  filter: progid;
  DXlmageTransform.Microsoft.Alfha(style=0,opacity=50);
}
```







## DOM 兼容

+ 主要还是对 IE 的兼容

+ 事件绑定：IE8 不支持 `addEventListener` / `removeEventListener`
```js
// 绑定
if (el.addEventListener) {
  el.addEventListener('click', handler)
} else {
  el.attachEvent('onclick', handler)
}

// 移除
if (el.removeEventListener) {
  el.removeEventListener('click', handler)
} else {
  el.detachEvent('onclick', handler)
}
```

+ Ajax 对象不一样：
```js
let xmlhttp
if (window.XMLHttpRequest) {
  xmlhttp = new XMLHttpRequest()
} else if (window.ActiveXObject) {
  xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
}
```

+ `event.srcElement` 对象：
```js
const srcObj = event.srcElement
  ? event.srcElement  // IE8 没有 target 属性
  : event.target      // Firefox61 没有 srcElement 属性
```
