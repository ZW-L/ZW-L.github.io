### 1.样式技巧

（1）ellipsis

超出文本显示省略号 `...`

```scss
// 单行文本，结尾显示 ...
@mixin ellipsis() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;	// 文本不换行
}
// 多行文本，结尾显示 ...
@mixin multi-ellipsis() {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;  // 指定行数
  -webkit-box-orient: vertical; 
}
```

（2）图片 wrapper

使用 `padding-bottom` 控制图片的显示高度，相对于父元素的宽度，能够很好地控制图片的正常比例显示，不会发生拉伸变形。

```scss
.wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.7%;  // 设置图片的显示比例 高/宽
    .swiper-img {
      width: 100%;
    }
}
```



### 2.阿里云 iconfont 使用

（1）下载至本地，拷贝相关文件，修改路径，复制 Unicode 值，使用 `font-size` 控制大小，使用 `color` 控制颜色

（2）引入 css 连接，在 `index.html` 中引入，再使用相应的 `font-class` 



### 3.样式文件

（1）样式重置 reset.css 文件

重置页面元素的样式，取消默认的 `margin` 、`padding`、 `text-decoration` 、`font-size` 等

```css
@charset "utf-8";html{background-color:#fff;color:#000;font-size:12px}
body,ul,ol,dl,dd,h1,h2,h3,h4,h5,h6,figure,form,fieldset,legend,input,textarea,button,p,blockquote,th,td,pre,xmp{margin:0;padding:0}
body,input,textarea,button,select,pre,xmp,tt,code,kbd,samp{line-height:1.5;font-family:tahoma,arial,"Hiragino Sans GB",simsun,sans-serif}
h1,h2,h3,h4,h5,h6,small,big,input,textarea,button,select{font-size:100%}
h1,h2,h3,h4,h5,h6{font-family:tahoma,arial,"Hiragino Sans GB","微软雅黑",simsun,sans-serif}
h1,h2,h3,h4,h5,h6,b,strong{font-weight:normal}
address,cite,dfn,em,i,optgroup,var{font-style:normal}
table{border-collapse:collapse;border-spacing:0;text-align:left}
caption,th{text-align:inherit}
ul,ol,menu{list-style:none}
fieldset,img{border:0}
img,object,input,textarea,button,select{vertical-align:middle}
article,aside,footer,header,section,nav,figure,figcaption,hgroup,details,menu{display:block}
audio,canvas,video{display:inline-block;*display:inline;*zoom:1}
blockquote:before,blockquote:after,q:before,q:after{content:"\0020"}
textarea{overflow:auto;resize:vertical}
input,textarea,button,select,a{outline:0 none;border: none;}
button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}
mark{background-color:transparent}
a,ins,s,u,del{text-decoration:none}
sup,sub{vertical-align:baseline}
html {overflow-x: hidden;height: 100%;font-size: 50px;-webkit-tap-highlight-color: transparent;}
body {font-family: Arial, "Microsoft Yahei", "Helvetica Neue", Helvetica, sans-serif;color: #333;font-size: .28em;line-height: 1;-webkit-text-size-adjust: none;}
hr {height: .02rem;margin: .1rem 0;border: medium none;border-top: .02rem solid #cacaca;}
a {color: #25a4bb;text-decoration: none;}

```

（2）一像素边框 border.css

指定相应类的边框样式，快速定义元素边框

```scss

```

（3）Sass 变量 varibles.scss

声明在很多组件都要使用的样式变量，背景色，字体等

```scss
$headerHeight: .88rem;
$bgColor: #00bcd4;
$pageColor: #f5f5f5;
$priceColor: #ff8300;
```

（4）Sass 混合 mixins.scss

声明在很多地方都是用的样式块

```scss
@mixin ellipsis() {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@mixin multi-ellipsis() {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
}
```





### 4. 盒子/页面尺寸

（1）三种类型的尺寸：

| 尺寸         | 只读 | 包含                     | 说明                                     |
| ------------ | ---- | ------------------------ | ---------------------------------------- |
| clientWidth  | 是   | padding                  | 盒子的大小，包含padding，不包含滚动条    |
| clientHeight | 是   | padding                  |                                          |
| clientTop    | 是   | border                   | 只跟boder有关，不知道有什么用            |
| clientLeft   | 是   | border                   |                                          |
|              |      |                          |                                          |
| offsetWidth  | 是   | padding/border/scrollBar | 盒子的大小，不包含margin                 |
| offsetHeight | 是   | padding/border/scrollBar |                                          |
| offsetTop    | 是   | margin/position/...      | 相对父元素的偏移，相对于左上角           |
| offsetLeft   | 是   | margin/position/...      |                                          |
|              |      |                          |                                          |
| scrollWidth  | 是   | padding/margin           | 滚动区的大小，滚动内容无法设置border     |
| scrollHeight | 是   | padding/margin           |                                          |
| scrollTop    | 否   | padding/margin           | 当前滚动显示区域距离整个滚动区上方的距离 |
| scrollLeft   | 否   | padding/margin           | 当前滚动显示区域距离整个滚动区左侧的距离 |



（2）scroll

1.scroll 的属性是在元素可滚动的时候才正确，无法滚动的元素：

+ scrollWidth/scrollHeight：为元素的宽高，只包含padding
+ scrollTop/scrollLeft：均为 0

2.滚动的其他知识：

+ 可滚动范围：(0, el.scrollHeight - el.clientHeight)
+ 滚动置顶：el.scrollTop === 0
+ 滚动置底：el.scrollTop === el.scrollHeight - el.clientHeight
+ 设置滚动位置：el.scrollTop = number

3.滚动方法（**window也可以调用**）

+ el.scroll(x, y) / el.scroll(params)
+ el.scrollTo(x, y) / el.scrollTo(params)
+ el.scrollBy(x, y) / el.scrollBy(params)



（3）`document.body` 和 `window`

+ window：上述所有属性返回值都是 `undefined`
+ document.body：width/height 返回的是整个页面的宽高，其他为 0

 



### 5.获取 CSS 样式

方式：

+ el.style.width： `String`，仅内联样式，使用 JS 控制动画设置样式的方法。

+ window.getComputedStyle(el, [pseudoElt ])： `String`，所有样式，**只读。**

+ el.clientWidth等： `Number`，**只读。**

+ el.getBoundingClientRect().left等： `Number`，**只读。**

介绍：

（1）el.style.width

​	获取或设置元素的 CSS 样式，只能获取内联样式，设置的样式也属于内联样式。

```javascript
const box = document.querySelector('.box')
// 获取
const width = el.style.width
// 设置
box.style.fontSize = '20px'
```

（2）window.getComputedStyle(el, [pseudoElt ])

​	获取元素渲染完成后的样式，因此是只读的。

```javascript
const box = document.querySelector('.box')
// 获取样式对象
const compStyles = window.getComputedStyle(box)
// 使用点操作符获取属性
const width = compStyles.width
// 使用方法获取属性
const bgColor = compStyles.getPropertyValue('background-color')
```

（3）el.clientWidth

​	见 **4.盒子/页面尺寸**，用于获取盒子的尺寸/偏移属性



（4）el.getBoundingClientRect()

```javascript
// 返回一个对象，包含 8 个属性
const box = document.querySelector('.box')
const rect = box.getBoundingClientRect()
```

+ rect.top: 盒子上边框与页面顶部的距离
+ rect.left: 盒子左边框与页面左侧的距离

+ rect.right: 盒子右边框与页面左侧的距离
+ rect.bottom: 盒子下边框与页面顶部的距离
+ rect.x: 盒子左上角相对于页面横坐标的偏移
+ rect.y: 盒子左上角相对于页面纵坐标的偏移
+ rect.width: 盒子的宽度，包含 padding、border
+ rect.height: 盒子的高度，包含 padding、border











