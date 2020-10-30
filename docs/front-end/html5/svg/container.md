## svg

+ [svg](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg)：元素定义一个新的坐标系和容器视口
+ 用作 SVG 文档的最外层元素，也可以用于将 SVG 片段嵌入 SVG/HTML 文档中
```html
<svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">
  <circle cx="50" cy="50" r="40"/>
  <circle cx="150" cy="50" r="4"/>
  <svg viewBox="0 0 10 10" x="200" width="100">
    <circle cx="5" cy="5" r="4"/>
  </svg>
</svg>
```

<Base-SvgDemo height="300px">
  <svg viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg" stroke="red" fill="grey">
    <circle cx="50" cy="50" r="40"/>
    <circle cx="150" cy="50" r="4"/>
    <svg viewBox="0 0 10 10" x="200" width="100">
      <circle cx="5" cy="5" r="4"/>
    </svg>
  </svg>
</Base-SvgDemo>

::: tip 解析：
+ 因为三个圆的 `cy` 都为其视口的一般，所以圆心的高度一样
+ `stroke-width` 的默认值为 1，而 1 在第三个圆中的比例为 20%，因此它的边比较厚
:::



## a

+ [a](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/a)：元素与 HTML 的 `<a>` 标签非常类似
::: details 点击查看代码：
```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <!-- A link around a shape -->
  <a href="/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="20"/>
  </a>

  <!-- A link around a text -->
  <a href="/docs/Web/SVG/Element/text">
    <text x="50" y="90" text-anchor="middle">
      &lt;circle&gt;
    </text>
  </a>
</svg>
```
:::

<Base-SvgDemo>
<svg height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

  <a href="/docs/Web/SVG/Element/circle">
    <circle cx="50" cy="40" r="20"/>
  </a>

  <!-- A link around a text -->
  <a href="/docs/Web/SVG/Element/text">
    <text x="50" y="90" text-anchor="middle">
      &lt;circle&gt;
    </text>
  </a>
</svg>
</Base-SvgDemo>


## defs

+ [defs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs)：元素用于保存图形对象(并设置 id 属性标记)，以后可以使用 use 元素引用并渲染
+ 开发时通常将常用的 SVG 图标整合在 defs 中，并放置于 `<body>` 的开始
```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- 定义一些图形对象，并使用 id 属性标记 -->
  <defs>
    <circle id="myCircle" cx="0" cy="0" r="5" />

    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="20%" stop-color="gold" />
      <stop offset="90%" stop-color="red" />
    </linearGradient>
  </defs>

  <!-- 引用已定义的图形对象，通过 id 进行引用 -->
  <use x="5" y="5" xlink:href="#myCircle" fill="url('#myGradient')" />
</svg>
```

## g

+ [g](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g)：元素用于组合一组 svg 元素，这些元素从 g 元素上继承一些内容
```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <g fill="white" stroke="green" stroke-width="5">
    <circle cx="40" cy="40" r="25" />
    <circle cx="60" cy="60" r="25" />
  </g>
</svg>
```

## marker

+ [marker](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker)：元素可用于绘制坐标系和点的样式
::: details 点击查看代码：
```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <!-- arrowhead marker definition -->
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>

    <!-- simple dot marker definition -->
    <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="5" markerHeight="5">
      <circle cx="5" cy="5" r="5" fill="red" />
    </marker>
  </defs>

  <!-- Coordinate axes with a arrowhead in both direction -->
  <polyline points="10,10 10,90 90,90" fill="none" stroke="black"
   marker-start="url(#arrow)" marker-end="url(#arrow)"  />

  <!-- Data line with polymarkers -->
  <polyline points="15,80 29,50 43,60 57,30 71,40 85,15" fill="none" stroke="grey"
   marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)" />
</svg>
```
:::

<Base-SvgDemo>
<svg height="200px" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker>
    <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="5" markerHeight="5">
      <circle cx="5" cy="5" r="5" fill="red" />
    </marker>
  </defs>
  <polyline points="10,10 10,90 90,90" fill="none" stroke="black"
   marker-start="url(#arrow)" marker-end="url(#arrow)"  />
  <polyline points="15,80 29,50 43,60 57,30 71,40 85,15" fill="none" stroke="grey"
   marker-start="url(#dot)" marker-mid="url(#dot)"  marker-end="url(#dot)" />
</svg>
</Base-SvgDemo>



## mask

+ [mask](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask)：用于定义一个图形，其他元素可通过 `mask` 属性引用，相当于在元素上添加一层图层
```html
<svg viewBox="-10 -10 120 120">
  <mask id="myMask">
    <!-- Everything under a white pixel will be visible -->
    <rect x="0" y="0" width="100" height="100" fill="white" />

    <!-- Everything under a black pixel will be invisible -->
    <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="black" />
  </mask>
 
  <polygon points="-10,110 110,110 110,-10" fill="orange" />

  <!-- with this mask applied, we "punch" a heart shape hole into the circle -->
  <circle cx="50" cy="50" r="50" mask="url(#myMask)" />
</svg>
```


## pattern

+ [pattern](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern)：用于定义一个图像模式，可以作为一些元素的 `fill`/`stroke` 属性的值
```html
<svg viewBox="0 0 230 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="star" viewBox="0,0,10,10" width="10%" height="10%">
      <polygon points="0,0 2,5 0,10 5,8 10,10 8,5 10,0 5,2"/>
    </pattern>
  </defs>

  <circle cx="50"  cy="50" r="50" fill="url(#star)"/>
  <circle cx="180" cy="50" r="40" fill="none" stroke-width="20" stroke="url(#star)"/>
</svg>
```

## switch

+ [switch](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch)：用于定义一组元素，浏览器会自动选择兼容的元素？


## symbol

+ [symbol](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol)：用于定义一个图形对象，可以使用 use 元素对其引用并渲染
```html
<svg viewBox="0 0 80 20" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <!-- Our symbol in its own coordinate system -->
  <symbol id="myDot" width="10" height="10" viewBox="0 0 2 2">
    <circle cx="1" cy="1" r="1" />
  </symbol>
 
   <!-- A grid to materialize our symbol positioning -->
  <path d="M0,10 h80 M10,0 v20 M25,0 v20 M40,0 v20 M55,0 v20 M70,0 v20" fill="none" stroke="pink" />
 
  <!-- All instances of our symbol -->
  <use xlink:href="#myDot" x="5"  y="5" style="opacity:1.0" />
  <use xlink:href="#myDot" x="20" y="5" style="opacity:0.8" />
  <use xlink:href="#myDot" x="35" y="5" style="opacity:0.6" />
  <use xlink:href="#myDot" x="50" y="5" style="opacity:0.4" />
  <use xlink:href="#myDot" x="65" y="5" style="opacity:0.2" />
</svg>
```



## use

+ [use](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)：引用并渲染存在 id 属性的任意 svg 元素