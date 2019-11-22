## 简介

+ `transition`：过渡。设置 CSS 属性的过渡
+ `transform`：2D/3D 变换。可进行旋转、平移、扭曲的变换
+ `animation`：动画。设置在不同的时间内状态的变化，相当于一个更复杂的 `transition`


## transition

**CSS 属性：**

+ `transition`：过渡，快速定义所有值。
+ `transition-property`：设置参与过渡的属性，多个属性用逗号分隔。`all || none || property_1, property_2, ...`
+ `transition-duration`：设置过渡持续的时间，多个属性用逗号分隔。`<times>, [<times>, <times>, ...]`
+ `transition-timing-function`：设置过渡使用的速度函数。`ease || linear || ease-in || ease-out || ease-in-out || cubiz-besier(num, num, num, num)`
+ `transition-delay`：设置延迟过渡的时间。`0 || <times>, [<times>, <times>, ...]`

**注意：**

+ 使用 `transition` 属性时，需要配合 `CSS伪类` 或 `JS事件` 等才能显示效果
+ 使用`CSS伪类`实现的过渡效果是单向的：

html:
```html
<div id="content"></div>
```

css:
```css
#content {
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
/* 鼠标悬停至元素上方时会发生过渡；离开元素时过渡马上消失，直接回到元素初始状态 */
#content:hover {
  border-radius: 50%;
  background-color: red;
  transition: all 2s;
}
```

+ 使用一些 JS 事件可以使过渡效果是双向的：

html:
```html
<div id="content"></div>
```

css:
```css
#content {
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
```

js:
```js
const content = document.getElementById('content');
// 鼠标悬停在元素上方时，发生过渡
content.addEventListener('mouseover', () => {
  content.style.backgroundColor = 'red';
  content.style.borderRadius = '50%';
  content.style.transition = 'all 1s';
});
// 鼠标离开元素时，也发生过渡
content.addEventListener('mouseout', () => {
  content.style.backgroundColor = '#ccc';
  content.style.borderRadius = '0';
  content.style.transition = 'all .5s';
});
```

## transform

**CSS 属性：**

+ transform：定义对象的 2D/3D 变换(平移，拉伸，旋转)，取值为：
  + 平移：
    + translateX()
    + translateY()
    + translateZ()
    + translate()
    + translate3D()
  + 拉伸：
    + skewX()
    + skewY()
    + skewZ()
    + skew()
    + skew3D()
  + 旋转：
    + rotateX()
    + rotateY()
    + rotateZ()
    + rotate()
    + rotate3D()
  + 通用：
    + matrix()
+ transform-origin：设置对象进行转换的原点。支持多种参数组合：
  + 默认参数：center, center || 50%, 50%
  + 两个参数：以 3x3 的九宫格组合中任意一个或两个百分比组合
  + 一个参数：第二个参数默认为 50% 
+ perspective：设置 3D 变换时的视距。视距越大，元素看起来越小。
+ perspective-origin：设置 3D 变换时的视点。
+ backface-visibility：设置 3D 变换时的元素背面是否可见。
+ transform-style：设置 3D 变换时被嵌套的元素如何显示。`flat || preserve-3d`


**注意：**

+ 2D 变换和 3D 变换
+ perspective 需要在父级元素中设置，用于对比个元素的位置变化，在同级元素之间互不影响
+ transform-style 需要在父级元素中设置，默认为 flat(2D)
+ 除了设置 transform-style，还需要将舞台(父元素)旋转一定的角度，才能观察到子元素的 3D 变化



## animation

&emsp;&emsp;animation 可以说对 transition 的强化，它可以轻松实现纯 CSS 的动画，可以不需要由 JS 控制。

**CSS 属性：**

+ animation：动画，快速定义所有值。
+ animation-name：设置使用的动画名称。`none || <identifier_1>, [<identifier_2>, ...]`
+ animation-duration：设置动画持续的时间。`<times>, [<times>, <times>, ...]`
+ animation-timing-function：设置动画的速度函数。`ease || linear || ease-in || ease-out || ease-in-out || cubiz-besier(num, num, num, num)`
+ animation-delay：设置延迟动画的时间。`0 || <times>, [<times>, <times>, ...]`
+ animation-iteration-count：设置动画循环的次数。`infinity || <number>`
+ animation-direction：设置动画是否反向运动。`normal || alternate`
+ animation-play-state：设置动画的状态。`running || paused`
+ animation-fill-mode：设置动画时间之外的状态。`none || forwards || backwards || both`
+ @key-frames identifier：设置动画效果，identifier 为该动画的名称，对应 animation-name 的引用。


**注意：**

+ animation 需要先使用 @keyframes 自定义动画，再对动画名称进行引用
+ @keyframes 用法：

```css
/* 用法1：使用 from ... to 指定开始和结束状态 */
@keyframes my-animation {
  from {
    border-radius: 0;
    background-color: #ccc;
  }
  to {
    border-radius: 50%;
    background-color: red;
  }
}

/* 用法2：使用百分比指定多个时间帧 */
@keyframes my-animation {
  0% {
    border-radius: 0;
    background-color: #ccc;
  }
  100% {
    border-radius: 50%;
    background-color: red;
  }
}
```



**对比 animation 和 transition：**

+ 实现简单的 animation：

html:
```html
<div id="content"></div>
```

css:
```css
#content {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  animation: my-animation 1s 0s 2 alternate;
}

@keyframes my-animation {
  from {
    border-radius: 0;
    background-color: #ccc;
  }
  to {
    border-radius: 50%;
    background-color: red;
  }
}
```

+ 用 transition 实现相同的效果：

html:
```html
<div id="content"></div>
```

css:
```css
#content {
  width: 100px;
  height: 100px;
  background-color: #ccc;
}
```

js:
```js
const content = document.getElementById('content');

window.addEventListener('load', () => {
  content.style.backgroundColor = 'red';
  content.style.borderRadius = '50%';
  content.style.transition = 'all 1s';
  timer = setInterval(() => {
    console.log('In interval');
    content.style.backgroundColor = '#ccc';
    content.style.borderRadius = '0';
    content.style.transition = 'all 1s';
  }, 1000);
  setTimeout(() => {
    clearInterval(timer);
  }, 200);
});
```