## 字体

属性|说明|兼容性
-|-|-
`font`|复合属性，一次性设置文本的属性|
`font-style`|设置文本字体样式。取值: <br>`normal`: <font color="orange">默认</font><br>`italic`: 斜体<br>`oblique`: 倾斜 |
`font-variant`|设置文本是否为小型的大写字母。取值: <br>`normal`: <font color="orange">默认</font><br>`small-caps`: 小型大写|
`font-weight`|设置文本的粗细。取值: <br>`normal`: <font color="orange">默认</font><br>`bold`: 粗体，400<br>`bolder`: 特粗，700<br>`lighter`: 细体<br>`<integer>`: 取值 100~900|
`font-size`|设置文本字体大小。取值: <br>`medium`: <font color="orange">默认</font><br>`<length>`: 不允许负值<br>`<percentage>`: 不允许负值|
`line-height`|设置文本的行高。取值: <br>`normal`: <font color="orange">默认</font>，允许内容溢出<br>`<number>`: 乘积因子，可以为负值<br>`<length>`: 可以为负值<br>`<percentage>`: 基于字体高度的百分比，可以为负值|
`font-family`|设置文本字体名/字体序列。取值: <br>1.字体序列用逗号分隔<br>2.多个单词或空格组合的名字用引号括起来<br>3.浏览器将使用所支持的第一个字体|
`color`|设置文本颜色。取值: <br>`<color>`: <font color="orange">默认 `black`。</font>颜色值(名称, hex, rgb, rgba, hsl, hsla, transparent)|IE6/7/8 不支持 rgba, hsl, hsla, transparent 取值



## 文本

属性|说明|兼容性
-|-|-
`text-align`|设置文本对齐，取值：<br><font color="orange">start</font><br>end<br>left<br>center<br>right<br>justify|
`text-decoration`|设置文本底部的装饰，取值：<br><font color="orange">none</font><br>underline<br>overline<br>line-through<br>blink|
`text-fill-color`|设置文本填充颜色，取值：<br>`<color>`|
`text-indent`|设置文本缩进，取值：<br><font color="orange">0</font><br>`<length>`<br>`<percentage>`|
`text-overflow`|设置文本溢出，取值：<br><font color="orange">clip</font><br>ellipsis|
`text-shadow`|设置文本阴影，取值：<br><font color="orange">none</font><br>`<shadow>`|
`text-stroke`|符合属性，设置文本的描边|
`text-stroke-color`|设置文本描边的颜色，取值：<br><font color="orange">文本颜色</font><br>`<collor>`|
`text-stroke-width`|设置文本描边的厚度，取值：<br><font color="orange">0</font><br>`<length>`|
`text-transform`|设置文本大小写，取值：<br><font color="orange">none</font><br>capitalize<br>uppercase<br>lowercase|
`vertical-align`|设置垂直对齐方式，取值：<br><font color="orange">baseline</font><br>`<length>`<br>`<percentage>`<br>sub<br>super<br>top<br>text-top<br>middle<br>bottom<br>text-bottom|
`letter-spacing`|设置中文文之间的间隔，取值：<br><font color="orange">normal</font><br>`<length>`|
`line-height`|设置文本的行高，取值：<br><font color="orange">normal</font><br>`<length>`<br>`<percentage>`<br>`<number>`|
`word-spacing`|设置单词文本之间的间隔，取值：<br>`<length>`|
`white-space`|设置文本空格的处理方式，取值：<br><font color="orange">normal</font><br>pre<br>pre-wrap<br>pre-line<br>nowrap|
`word-wrap`|设置单词之间的间隔，取值：<br>normal<br>break-word|
`direction`|设置文本流的方向，取值：<br>ltr<br>rtl|
`unicode-bidi`|指定文本的流向，取值：<br>normal<br>embed<br>bidi-override|



## text-shadow

+ 简介：与 `box-shadow` 类似，但是这是环绕在文本周围的阴影，同样不影响布局
+ 语法：四个取值为别为 `offset-x`/`offset-y`/`blur-radius`/`color`
  + `offset-x`：阴影的水平偏移，正值向右
  + `offset-y`：阴影的垂直偏移，正值向下
  + `blur-radius`：阴影模糊半径，默认为 0
  + `color`：阴影颜色
```css
.text {
  text-shadow: 0 0 1em blue;
}
```

::: tip 说明
+ `color` 的位置可以在前面，也可以在后面，但是三个长度参数必须按顺序
+ 同样可以设置多重阴影，它们之间用逗号隔开
```css
.text {
  text-shadow: 1px 1px 2px black, 0 0 1em blue, 0 0 0.2em blue;
}
```
:::