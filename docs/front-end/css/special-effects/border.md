---
sidebarDepth: 2
---

## border-radius

+ 圆角属性可以将盒子的角弯曲，甚至将盒子变成一个圆或类椭圆
+ 将一个固定长宽的矩形对角线经过特定的扭曲，变成一段圆滑的曲线，而每个盒子都有四个角，因此会有四对值指定四个角的扭曲

### 介绍

+ 语法：
```css
.box {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border-radius: 1px 2px 3px 4px / 1px 2px 3px 4px;
}
```

::: tip 说明：
+ 两组用 `/` 分隔的值，第一组用作四个角的长度，第二组用作四个角的宽度
+ 每组参数的值少于 4 个：缺省的参数取对角的值，如 `1px 2px 3px` 相当于 `1px 2px 3px 2px`
+ 只有一组值：第二组值与第一组相等，如上述可简写为 `1px 2px 3px 4px`
+ 只有一个值：应用于所有，如 `10px` 相当于 `10px 10px 10px 10px / 10px 10px 10px 10px`
:::


### 示例

+ 圆形盒子
```css
.box {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border-radius: 50%;
}
```




## border-image

+ 图片边框能使用图像构造盒子的边框


### 介绍

+ 语法
```css
.box {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  border: 10px solid;
  border-image: url('./border.png') 30 round;
}
```

::: tip 说明：
+ 要先设置 `border` 属性，`border-image` 才会生效
+ `border-image-repeat` 属性的值为：`stretch`(默认), `round`, `repeat`
:::




## box-shadow

+ 盒子阴影能在盒子的周围添加一层阴影色，构造出一些立体效果，而且不会影响盒子的布局属性
+ 该属性和 background、border 一样，默认的


### 介绍

+ 语法
```css
.box {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  box-shadow: 0px 0px 10px 2px inset #333;
}
```

::: tip 说明：
+ 该属性必须至少包含前两个参数
+ 前四个长度参数按照严格顺序，其他参数顺序不限制
+ `inset`(可选)：指定阴影为内阴影，即在 border 内侧显示
+ 颜色(可选)：默认为黑色(`#000`)
+ 四个长度参数分别为：
  + 水平偏移：向右为正
  + 垂直偏移：向下为正
  + 模糊值(可选)：不允许负值，值越大颜色效果越模糊
  + 外延值(可选)：不允许负值，值越大阴影范围越大
:::


### 示例

+ 构造一个边框
```css
.box {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  /* 阴影不偏移、不模糊，相当于在 border 外画一个 2px 的边框 */
  box-shadow: 0px 0px 0px 2px #333;
}
```