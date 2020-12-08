---
sidebarDepth: 2
---

## 内容

属性|说明|兼容性
-|-|-
`content`|结合伪元素 ::after, ::before 使用|
`counter-increment`|指定计数器增值|
`counter-reset`|复位计数器|
`quotes`|设置对象使用的嵌套标记|



### content 取值

|取值|作用|
|-|-|
|`none`<br><br>`normal`|不产生伪元素|
|`<string>`|一段文本|
|`<url>`|一个外部资源（图片）|
|`attr(x)`|返回属性值的字符串形式(x 是该元素的 HTML 属性名)|
|`counter(counter-name)`<br><br>`counters(counter-name)`|常用于列表中(如文章目录)
|`open-quote`<br><br>`close-quote`|引号|


::: tip counter() 和 counters()：
+ 都是用于 `content` 属性中
+ `counters()` 用于嵌套列表
:::


### content 应用

+ 清除浮动
```html
<div class="cf">
  <div class="box"></div>
</div>
```
```css
.cf {
  border: 1px solid red;
}
.box {
  float: left;
  width: 100px;
  height: 100px;
  background-color: #ccc;
}

.cf:before,
.cf:after {
  content: " ";
  display: table;
}

.cf:after {
  clear: both;
}
```

+ 字体图标，在 [font-class 方式](/front-end/vue/tips/iconfont.html)引用的图标就是使用了 `:before` 伪类
```css
.cl-icon-user:before {
  content: "\e64b";
}

.cl-icon-video:before {
  content: "\e66b";
}
```





## 用户界面

属性|说明|兼容性
-|-|-
`outline`|简写属性，用于快捷设置对象外的线条轮廓，取值：<br>类似 `border` 的取值，但是 `outline-color` 的默认值为 `invert`|>IE7
`outline-width`|设置对象外的线条轮廓的宽度|>IE7
`outline-color`|设置对象外的线条轮廓的颜色|>IE7
`outline-style`|设置对象外的线条轮廓的表现样式|>IE7
`outline-offset`|设置对象外的线条轮廓的偏移值，取值：<br>`<length>`|>IE10
`cursor`|设置鼠标悬停于对象上方时的光标形状，取值：<br><font color="orange">auto</font><br>default<br>pointer<br>help<br>move<br>wait<br>text<br>crosshair|
`zoom`|设置对象的缩放比例，取值：<br><font color="orange">normal</font><br>`<number>`<br>`<percentage>`|
`resize`|设置对象是否允许用户调整尺寸，如 `<textarea>` 标签，取值：<br><font color="orange">none</font><br>both<br>horizontal<br>vertical|

