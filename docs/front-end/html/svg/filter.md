---
sidebarDepth: 2
---

## 简介

+ 每个过滤器都必须使用 filter 包裹，并设置 `id` 属性方便以后引用
+ 基本上所有过滤器基本元素都能使用 `in` 属性指定原始(输入)图像，有的元素还能设置 `in2` 属性，它们的取值：
  + `SourceGraphic`
  + `SourceAlpha`
  + `BackgroundImage`
  + `BackgroundAlpha`
  + `FillPaint`
  + `StrokePaint`
  + `<filter-primitive-reference>`



## 容器

+ [filter](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter)：定义一个过滤器
```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <filter id="floodFilter" filterUnits="userSpaceOnUse">
      <feFlood x="50" y="50" width="100" height="100" flood-color="green" flood-opacity="0.5"/>
    </filter>
  </defs>

  <use style="filter: url(#floodFilter);"/>
</svg>
```


## 模式

+ [feTile](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTile)：从图像裁剪一个模式，有点类似 pattern
```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="tile" x="0" y="0" width="100%" height="100%">
      <feTile in="SourceGraphic" x="0" y="0" width="100" height="100"/><feTile/>
    </filter>
  </defs>

  <image xlink:href="https://developer.mozilla.org/files/6457/mdn_logo_only_color.png"
      width="100%" height="100%" style="filter:url(#tile);"/>
</svg>
```


## 混合

+ [feBelend](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBelend): 以指定模式混合两个图像
```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="spotlight">
      <feFlood result="floodFill" x="0" y="0" width="100%" height="100%"
          flood-color="green" flood-opacity="1"/>
      <feBlend in="SourceGraphic" in2="floodFill" mode="multiply"/>
    </filter>
  </defs>

  <image xlink:href="//developer.mozilla.org/files/6457/mdn_logo_only_color.png"
      x="10%" y="10%" width="80%" height="80%" style="filter:url(#spotlight);"/>
</svg>
```


## 填充区域

+ [feFlood](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood)：填充区域的颜色和不透明度
```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <filter id="floodFilter" filterUnits="userSpaceOnUse">
      <feFlood x="50" y="50" width="100" height="100" flood-color="green" flood-opacity="0.5"/>
    </filter>
  </defs>

  <use style="filter: url(#floodFilter);"/>
</svg>
```


## 基于矩阵

+ [feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix)：基于变换矩阵改变颜色
+ [feConvolveMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix)：基于矩阵卷织像素控制成像，包括模糊，边缘检测，锐化，浮雕和倒角
```html
<svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="emboss">
      <feConvolveMatrix
          kernelMatrix="3 0 0
                        0 0 0
                        0 0 -3"/>
    </filter>
  </defs>

  <image xlink:href="/files/12668/MDN.svg" x="0" y="0"
      height="200" width="200" style="filter:url(#emboss);" />
</svg>
```


## 高斯模糊

+ [feGaussianBlur](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur)：创建高斯模糊
```html
<svg width="230" height="120" xmlns="http://www.w3.org/2000/svg">
  <filter id="blurMe">
    <feGaussianBlur in="SourceGraphic" stdDeviation="5"/>
  </filter>

  <circle cx="60"  cy="60" r="50" fill="green"/>
  <circle cx="170" cy="60" r="50" fill="green" filter="url(#blurMe)"/>
</svg>
```


## 使用外部图像

+ [feImage](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage)：使用外部图像
```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <filter id="image">
      <feImage xlink:href="https://developer.mozilla.org/files/6457/mdn_logo_only_color.png"/>
    </filter>
  </defs>

  <rect x="10%" y="10%" width="80%" height="80%" style="filter:url(#image);"/>
</svg>
```


## 组合图像

+ [feComposite](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite)：组合图像，配合 feDiffuseLighting 和 feSpecularLighting 很有用


## 图像阴影

+ [feDropShadow](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow): 创建图像阴影
```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow">
      <feDropShadow dx="0.2" dy="0.4" stdDeviation="0.2"/>
    </filter>
    <filter id="shadow2">
      <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="cyan"/>
    </filter>
    <filter id="shadow3">
      <feDropShadow dx="-.8" dy="-.8" stdDeviation="0" flood-color="pink" flood-opacity="0.5"/>
    </filter>
  </defs>

  <circle cx="5" cy="50%" r="4" style="fill:pink; filter:url(#shadow);"/>
  <circle cx="15" cy="50%" r="4" style="fill:pink; filter:url(#shadow2);"/>  
  <circle cx="25" cy="50%" r="4" style="fill:pink; filter:url(#shadow3);"/>
</svg>
```

## 腐蚀/扩张图像

+ [feMorphology](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology)：用于腐蚀/扩张图像
```html
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="180"
  style="font-family: Arial, Helvetica, sans-serif;font-size: 3em;">
  <defs>
    <filter id="erode">
      <feMorphology operator="erode" radius="1"/>
    </filter>
    <filter id="dilate">
      <feMorphology operator="dilate" radius="2"/>
    </filter>
  </defs>
  <text y="1em">Normal text</text>
  <text id="thin" y="2em" filter="url(#erode)">Thinned text</text>
  <text id="thick" y="3em" filter="url(#dilate)">Fattened text</text>
</svg>
```


## 图像偏移

+ [feOffset](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset)：定义图像的偏移
```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="offset" width="180" height="180">
      <feOffset in="SourceGraphic" dx="60" dy="60" />
    </filter>
  </defs>

  <rect x="0" y="0" width="100" height="100" stroke="black" fill="green"/>
  <rect x="0" y="0" width="100" height="100" stroke="black" fill="green" filter="url(#offset)"/>
</svg>
```


## 图像优先级

+ [feMerge](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMerge)：用于控制元素的层优先级
+ [feMergeNode](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMergeNode)：作为 feMerge 的子元素，表示一个元素的引用
+ 当我们想要控制源元素和模糊元素的层叠时：
```html
<svg width="200" height="200"
  xmlns="http://www.w3.org/2000/svg">

  <filter id="feOffset" x="-40" y="-20" width="100" height="200">
    <feOffset in="SourceGraphic" dx="60" dy="60" />
    <feGaussianBlur stdDeviation="5" result="blur2" />
    <feMerge>
      <!-- 后面的元素会覆盖前面的元素 -->
      <feMergeNode in="blur2" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>

  <rect x="40" y="40" width="100" height="100"
    style="stroke: #000000; fill: green; filter: url(#feOffset);" />
</svg> 
```

## 图像湍流

+ [teTurbulence](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/teTurbulence)：图像湍流，可以合成人造纹理
+ [feDisplacementMap](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap)：使用图像的像素值在空间上置换从图像
```html
<svg width="200" height="200" viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
  <filter id="displacementFilter">
    <feTurbulence type="turbulence" baseFrequency="0.05"
        numOctaves="2" result="turbulence"/>
    <feDisplacementMap in2="turbulence" in="SourceGraphic"
        scale="50" xChannelSelector="R" yChannelSelector="G"/>
  </filter>

  <circle cx="100" cy="100" r="100" filter="url(#displacementFilter)"/>
</svg>
```


## 映射颜色分量

+ [feComponentTransfer](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer)：重新映射颜色分量，允许进行亮度调节，对比度调节，色彩平衡或阈值设置之类的操作
+ [feFuncR](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncR)：设置 R 分量
+ [feFuncG](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncG)：设置 G 分量
+ [feFuncB](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncB)：设置 B 分量
+ [feFuncA](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncA)：设置 Alpha 分量
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 300">
  <defs>
    <linearGradient id="rainbow" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="100%" y2="0">
      <stop offset="0" stop-color="#ff0000"></stop>
      <stop offset="0.2" stop-color="#ffff00"></stop>
      <stop offset="0.4" stop-color="#00ff00"></stop>
      <stop offset="0.6" stop-color="#00ffff"></stop>
      <stop offset="0.8" stop-color="#0000ff"></stop>
      <stop offset="1" stop-color="#800080"></stop>
    </linearGradient>
    <filter id="identity" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="identity"></feFuncR>
        <feFuncG type="identity"></feFuncG>
        <feFuncB type="identity"></feFuncB>
        <feFuncA type="identity"></feFuncA>
      </feComponentTransfer>
    </filter>
    <filter id="table" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="table" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="table" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="table" tableValues="0 1 1 0"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="discrete" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="discrete" tableValues="0 0 1 1"></feFuncR>
        <feFuncG type="discrete" tableValues="1 1 0 0"></feFuncG>
        <feFuncB type="discrete" tableValues="0 1 1 0"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="linear" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="0.5" intercept="0"></feFuncR>
        <feFuncG type="linear" slope="0.5" intercept="0.25"></feFuncG>
        <feFuncB type="linear" slope="0.5" intercept="0.5"></feFuncB>
      </feComponentTransfer>
    </filter>
    <filter id="gamma" x="0" y="0" width="100%" height="100%">
      <feComponentTransfer>
        <feFuncR type="gamma" amplitude="4" exponent="7" offset="0"></feFuncR>
        <feFuncG type="gamma" amplitude="4" exponent="4" offset="0"></feFuncG>
        <feFuncB type="gamma" amplitude="4" exponent="1" offset="0"></feFuncB>
      </feComponentTransfer>
    </filter>
  </defs>
  <g font-weight="bold">
    <text x="0" y="20">Default</text>
    <rect x="0" y="30" width="100%" height="20"></rect>
    <text x="0" y="70">Identity</text>
    <rect x="0" y="80" width="100%" height="20" style="filter:url(#identity)"></rect>
    <text x="0" y="120">Table lookup</text>
    <rect x="0" y="130" width="100%" height="20" style="filter:url(#table)"></rect>
    <text x="0" y="170">Discrete table lookup</text>
    <rect x="0" y="180" width="100%" height="20" style="filter:url(#discrete)"></rect>
    <text x="0" y="220">Linear function</text>
    <rect x="0" y="230" width="100%" height="20" style="filter:url(#linear)"></rect>
    <text x="0" y="270">Gamma function</text>
    <rect x="0" y="280" width="100%" height="20" style="filter:url(#gamma)"></rect>
  </g>
</svg>
```


## 光源相关

+ [feSpecularLighting](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting)：
+ [feDiffuseLighting](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting)：
+ [feDistantLight](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDistantLight)：
+ [fePointLight](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fePointLight)：聚光灯
+ [feSpotLight](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpotLight)：