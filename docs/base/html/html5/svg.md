---
sidebarDepth: 2
---

## 介绍

+ SVG 是可伸缩矢量图形，在放大或改变尺寸的情况下其图形质量不会有损失
+ SVG 使用 XML 格式定义，是万维网联盟的标准
+ SVG 可通过文本编辑器来创建和修改，可被搜索、索引、脚本化或压缩

## 对比 Canvas

|Canvas|SVG|
|-|-|
|依赖分辨率|不依赖分辨率|
|不支持事件处理器|支持事件处理器|
|弱的文本渲染能力|适合带有大型渲染区域的应用(如谷歌地图)|
|能够以 .png 或 .jpg 格式保存结果图像|复杂度高会减慢渲染速度(过度使用 DOM)|
|适合图像密集型的游戏，许多对象会被频繁重绘|不适合游戏应用|


## 元素标签总览

### 动画

+ [animate](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate): 
+ [animateColor](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateColor): 
+ [animateMotion](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion): 
+ [animateTransform](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform): 
+ [discard](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/discard): 
+ [mpath](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mpath): 
+ [set](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/set): 

### 形状

+ [circle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle): 
+ [ellipse](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/ellipse): 
+ [image](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/image): 
+ [line](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/line): 
+ [path](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/path): 
+ [polygon](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polygon): 
+ [polyline](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/polyline): 
+ [rect](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/rect): 

### 容器相关

+ [svg](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg): 最外层容器
+ [a](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/a): 类似 HTML 的 `<a]() 标签，可以将一些标签放置在该容器内
+ [defs](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/defs): 存储将在以后使用(`<use]())的图形对象
+ [g](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/g): 用于组合其他 SVG 元素
+ [marker](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker): 
+ [mask](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mask): 
+ [missing-glyph](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/missing-glyph): 
+ [pattern](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/pattern): 
+ [switch](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/switch): 
+ [symbol](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol): 
+ [use](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use): 

### 描述性元素

+ [desc](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc): 
+ [metadata](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/metadata): 
+ [title](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title): 

### 过滤基本元素

+ [feBelend](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feBelend): 
+ [feColorMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feColorMatrix): 
+ [feComponentTransfer](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComponentTransfer): 
+ [feComposite](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feComposite): 
+ [feConvolveMatrix](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feConvolveMatrix): 
+ [feDiffuseLighting](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDiffuseLighting): 
+ [feDisplacementMap](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap): 
+ [feDropShadow](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDropShadow): 
+ [feFlood](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFlood): 
+ [feFuncA](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncA): 
+ [feFuncB](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncB): 
+ [feFuncG](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncG): 
+ [feFuncR](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feFuncR): 
+ [feGaussianBlur](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feGaussianBlur): 
+ [feImage](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feImage): 
+ [feMerge](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMerge): 
+ [feMergeNode](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMergeNode): 
+ [feMorphology](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feMorphology): 
+ [feOffset](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feOffset): 
+ [feSpecularLighting](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpecularLighting): 
+ [feTile](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTile): 
+ [teTurbulence](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/teTurbulence): 

### 字体元素

+ [font](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/font): 
+ [font-face](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/font-face): 
+ [font-face-name](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/font-face-name): 
+ [font-face-src](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/font-face-src): 
+ [font-face-uri](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/font-face-uri): 
+ [hkern](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/hkern): 
+ [vkern](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/vkern): 

### 渐变

+ [linearGradient](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient): 
+ [radialGradient](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient): 
+ [stop](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop): 

### 光源

+ [feDistantLight](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDistantLight): 
+ [fePointLight](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/fePointLight): 
+ [feSpotLight](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feSpotLight): 

### 文本

+ [text](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text): 
+ [textPath](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath): 
+ [tref](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tref): 
+ [tspan](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan): 
+ [altGlyph](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/altGlyph): 
+ [altGlyphDef](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/altGlyphDef): 
+ [altGlyphItem](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/altGlyphItem): 
+ [glyph](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/glyph): 
+ [glyphRef](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/glyphRef): 

### 其他

+ [clipPath](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath): 
+ [color-profile](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/color-profile): 
+ [cursor](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/cursor): 
+ [filter](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/filter): 
+ [foreignObject](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject): 
+ [hatchpath](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/hatchpath): 
+ [script](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/script): 
+ [style](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/style): 
+ [view](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/view): 
+ [solidcolor](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/solidcolor): 