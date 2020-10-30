---
sidebarDepth: 2
---

## 描述性元素

+ [title](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/title): 为元素提供标题
+ [metadata](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/metadata): 为元素添加元数据(有关数据的结构化信息)
+ [desc](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/desc): 为元素提供文本描述



## 文本

### text

+ [text](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/text): 渲染文本元素
+ 通过 `fill` 指定文本颜色(并不是 `color`)
```html
<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
  <style>
    .small { font: italic 13px sans-serif; }
    .heavy { font: bold 30px sans-serif; }
    .Rrrrr { font: italic 40px serif; fill: red; }
  </style>

  <text x="20" y="35" class="small">My</text>
  <text x="40" y="35" class="heavy">cat</text>
  <text x="55" y="55" class="small">is</text>
  <text x="65" y="55" class="Rrrrr">Grumpy!</text>
</svg>
```


### textPath

+ [textPath](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath): 使文本按照路径排列
+ 当不需要渲染路径的时候，最好将其在 defs 元素内定义
```html
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path id="MyPath" fill="none" stroke="red"
        d="M10,90 Q90,90 90,45 Q90,10 50,10 Q10,10 10,40 Q10,70 45,70 Q70,70 75,50" />
  <text>
    <textPath href="#MyPath">
      Quick brown fox jumps over the lazy dog.
    </textPath>
  </text>
</svg>
```

### tspan

+ [tspan](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/tspan): 用作 text 或自身的子元素
```html
<svg viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg">
  <style>
    text  { font: italic 12px serif; }
    tspan { font: bold 10px sans-serif; fill: red; }
  </style>

  <text x="10" y="30" class="small">
    You are
    <tspan>not</tspan>
    a banana!
  </text>
</svg>
```



## 其他

### clipPath

+ [clipPath](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/clipPath)：定义裁剪路径，其他元素可通过 clip-path 属性来引用
```html
<svg viewBox="0 0 100 100">
  <clipPath id="myClip">
    <circle cx="40" cy="35" r="35" />
  </clipPath>
  <path id="heart" d="M10,30 A20,20,0,0,1,50,30 A20,20,0,0,1,90,30 Q90,60,50,90 Q10,60,10,30 Z"/>
  <use clip-path="url(#myClip)" xlink:href="#heart" fill="red"/>
</svg>
```

### foreignObject

+ [foreignObject](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject)：可用于包含不同命名空间的 XML/XHTML

### script
 
+ [script](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/script)：内嵌 javascript 脚本代码

### style

+ [style](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/style):：内嵌 CSS 样式代码