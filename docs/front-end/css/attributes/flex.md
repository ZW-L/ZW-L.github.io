## 简介

+ 块级元素和行内元素都能设置 flex 布局
+ 定义 flex 布局后，子元素的 `float`/`clear`/`vertical-align` 属性会失效
+ flex 布局中，父元素和子元素有不同的设置选项。其中有父元素作为容器，子元素作为项目
  + 容器默认存在两根轴线：水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`）
  + 项目默认沿主轴排列，单个项目占据的主轴空间/交叉轴空间叫做`main size`/`cross size`

![flex 容器](./imgs/flex_01.png)


**参考：**
+ [菜鸟教程 Flex](https://www.runoob.com/w3cnote/flex-grammar.html)


## 属性

**容器属性：**
|属性|描述|取值|
|-|-|-|
|`flex-flow`|`flex-direction`/`flex-wrap` 的简写|默认：row nowrap<br>`<direction> <wrap>`|
|`flex-direction`|项目排列的方向|默认：row<br>row-reverse<br>column<br>column-reverse|
|`flex-wrap`|项目排满一行时的换行方式|默认：nowrap<br>wrap<br>wrap-reverse|
|`justify-content`|项目在主轴上的伸缩方式|默认：flex-start<br>flex-end<br>center<br>space-between<br>space-around|
|`align-content`|项目在交叉轴上的伸缩方式|默认：stretch<br>flex-start<br>flex-end<br>center<br>space-between<br>space-around|
|`align-items`|定义项目在主轴上的对齐方式|默认：stretch<br>flex-start<br>flex-end<br>center<br>baseline|

::: tip 说明：
+ `justify-content`/`align-content` 类似，主要用于处理轴线上空隙的显示
+ 当容器只有一根交叉轴(项目都排在一行)时，`align-content` 的值不起作用
+ `align-items` 有点类似行内元素的对齐，会被项目属性 `align-self` 的值覆盖
+ 当一个容器作为另一个容器的项目时，它还可以设置项目的各个属性
:::


**项目属性：**
|属性|描述|取值|
|-|-|-|
|`order`|项目的排列顺序，小值优先，可以为负|`<number>`|
|`flex`|`flex-flow`/`flex-shrink`/`flex-basis` 三者的简写|默认：(0 1 auto)<br>auto(1 1 auto)<br>none(0 0 auto)|
|`flex-grow`|定义项目的放大比例|默认：0<br>`<number>`|
|`flex-shrink`|定义项目的缩小比例|默认：1<br>`<number>`|
|`flex-basis`|定义分配多余空间前项目占据的主轴空间|`<length>`|
|`align-self`|定义自身的对齐方式|默认：auto<br>flex-start<br>flex-end<br>center<br>baseline<br>stretch|

::: tip 说明：
+ 某个项目设置 `flex: 1;`，表示它将占据容器主轴的剩余空间
```css
/* 应用：一列定宽，另一列动态宽度的快捷布局 */
.container {
  display: flex;
  height: 600px;
}
.left {
  width: 300px;
  background-color: #ace;  
}
.right {
  flex: 1;
  background-color: #ccc;
}
```
+ 当主轴的空间大于各项目的总和时，`flex-grow` 属性会起作用，它会按照放大的权重分配剩余空间；当主轴的空间小于各项目的总和时，`flex-shrink` 属性会起作用，它会按照缩小的权重将各项目缩小。计算方式如下：
```css
/* 计算 left 和 right 最终的宽度 */
.container {
  display: flex;
  width: 600px;
  height: 400px;
}
.left {
  flex: 1 1 400px;
  background-color: #ace;  
}
.right {
  flex: 1 2 500px;
  background-color: #ccc;
}
/* 
600 - (400 + 500) = -300，子项目将会按照权重进行缩小
总权重：400*1 + 500*2 = 1400
缩小量：权重占比 * 总缩小量
left：(400*1/1400) * 300 = 85.7
right：(500*2/1400) * 300 = 214.3
最终宽度：
left：400 - 85.7 = 314.3
right：500 - 214.3 = 285.7

备注：由于最终结果是缩小，所以应用的是 flex-shrink 参数，放大时则应用 flex-grow
*/
```
+ 同样地，当项目作为一个容器时，它还可以设置容器的属性
:::