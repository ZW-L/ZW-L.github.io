---
sidebarDepth: 2
---

## 取值

属性|说明
-|-|-
`<string>`|字符串，可包含转义字符串|
`<url>`|url("example.css"), url(example.css)|
`<identifier>`|区分大小写|
`<number>`|浮点数|
`<integer>`|整数|
`counter()`|用于 content 属性的函数|
`attr()`|用于插入元素值的函数|
`<length>`|长度单位|
`<percentage>`|百分比单位|
`<color>`|颜色名, hex, rgb(), rgba(), hsl(), hsla()|
`<angle>`|角度单位，取值：deg, grad, rad, turn|>IE8
`<time>`|时间单位，取值：s, ms|>IE8




## 单位

### 长度

+ 相对长度

单位|说明|兼容性
-|-|-
%|相对于另一个元素|All
em|相对于父元素的 `font-size`|All
rem|相对于 `<html>` 元素的 `font-size`|>IE8
ex|相对于小写字母 x 的高度|>IE8
ch|相对于数字 0 的宽度|>IE8
vw|viewport width，相对于视窗宽度的百分比|>IE8
vh|viewport height，相对于视窗高度的百分比|>IE8
vmin|两者的最小值：min(vw, vh)|>IE8
vmax|两者的最大值：max(vw, vh)|IE, Safari 不支持


+ 绝对长度

单位|说明|兼容性
-|-|:-:
px|像素|All
cm|厘米|All
mm|毫米|All
in|英寸|All
pt|点|All
pc|皮卡|All

::: tip 换算：
1in = 2.54cm = 25.4mm = 72pt = 6pc = 96px
:::


### 颜色

单位|说明|兼容性
-|-|-
`#cccccc`|十六进制颜色，这里可以用 #ccc 简写|
`rgb(r, g, b)`|根据 红、绿、蓝 定义颜色配比，取值为 0~255 或 0~100%|
`rgba(r, g, b, a)`|在 `rgb` 的基础上添加透明度属性，取值 0~1|
`hsl(h, s, l)`|根据色相(0~360)、饱和度(0~100%)、亮度(0~100%)设置|
`hsla(h, s, l, a)`|在 `hsl` 的基础上添加透明度属性，取值 0~1|
`<color-name>`|直接使用浏览器能识别的颜色名，如 grey|

::: tip 提示：
可以在样式中定义多个同名属性的颜色，当浏览器不支持时，会使用上一个定义的颜色
```css
.box {
  color: #ccc;
  color: rgb(128, 128, 128);
  color: hsl(0, 0%, 78%);
}
```
:::



### 角度

单位|说明|兼容性
-|-|-
deg|度，一个圆共 360 deg|>IE8
grad|梯度，一个圆共 400 grad|>IE8
rad|弧度，一个圆共 2PI rad|>IE8
turn|圈，一个圆共 1 turn|>IE8


### 时间

单位|说明|兼容性
-|-|-
s|秒|All
ms|毫秒|All