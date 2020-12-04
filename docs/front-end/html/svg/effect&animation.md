---
sidebarDepth: 2
---

## 渐变

### stop

+ [stop](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/stop)：指定渐变的偏移和停止色
+ 必须用作 linearGradient 或 radialGradient 的子元素


### linearGradient

+ [linearGradient](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/linearGradient): 创建线性渐变
```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="myGradient" gradientTransform="rotate(90)">
      <stop offset="5%"  stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </linearGradient>
  </defs>
 
  <!-- using my linear gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```


### radialGradient

+ [radialGradient](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/radialGradient): 创建径向渐变
```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <radialGradient id="myGradient">
      <stop offset="10%" stop-color="gold" />
      <stop offset="95%" stop-color="red" />
    </radialGradient>
  </defs>
 
  <!-- using my radial gradient -->
  <circle cx="5" cy="5" r="4" fill="url('#myGradient')" />
</svg>
```



## 动画

### animate

+ [animate](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate)：创建一个动画
```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <rect width="10" height="10">
    <animate attributeName="rx" values="0;5;0" dur="10s" repeatCount="indefinite" />
  </rect>
</svg>
```


### animateMotion

+ [animateMotion](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion)：定义元素如何沿运动路径移动
```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="none" stroke="lightgrey"
    d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />

  <circle r="5" fill="red">
    <animateMotion dur="10s" repeatCount="indefinite"
      path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z" />
  </circle>
</svg>
```


### animateTransform

+ [animateTransform](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform)：根据 transform 定义动画，包括平移、缩放、旋转、倾斜
```html
<svg width="120" height="120" viewBox="0 0 120 120"
     xmlns="http://www.w3.org/2000/svg">

    <polygon points="60,30 90,90 30,90">
        <animateTransform attributeName="transform"
                          attributeType="XML"
                          type="rotate"
                          from="0 60 70"
                          to="360 60 70"
                          dur="10s"
                          repeatCount="indefinite"/>
    </polygon>
</svg>
```


### discard

+ [discard](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/discard)：指定元素被丢弃，提高性能


### mpath

+ [mpath](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/mpath)：作为 animateMotion 的子元素，能够引用外部的 path 元素


### set

+ [set](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/set)：设置属性值，这些属性值只会在指定时间内有效
+ 通常用于 animation
```html
<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
  <style>
    rect { cursor: pointer }
    .round { rx: 5px; fill: green; }
  </style>

  <rect id="me" width="10" height="10">
    <set attributeName="class" to="round" begin="me.click" dur="2s" />
  </rect>
</svg>
```