## 内容

属性|说明|兼容性
-|-|-
`content`|结合伪元素 ::after, ::before 使用|
`counter-increment`|指定计数器增值|
`counter-reset`|复位计数器|
`quotes`|设置对象使用的嵌套标记|

::: tip 说明：
结合 `counter-increment` 和 `counter()` 可以实现多级目录效果。
:::


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