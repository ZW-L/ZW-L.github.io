## 简介

+ 参考：
  + [iconfont 官方教程](https://www.iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8cf4382a&helptype=code)
  + [vue项目中引入iconfont](https://segmentfault.com/a/1190000019723874)
+ 原理：
  + Unicode 预留了E000-F8FF范围作为私有保留区域，这个区间的 Unicode 码非常适合做字体图标，前端根据 Unicode 码就能显示对应的图标
+ 可以在 [iconfont](https://www.iconfont.cn/) 上下载和管理项目图标


## 引用单个图表

+ 直接下载指定格式的文件在本地引用即可
+ 适用范围
  + 设计师用来做 demo 原型
  + 前端做临时活动页



## unicode 引用

Unicode 是字体在网页端最原始的应用方式，特点是：
+ 兼容性最好，支持ie6+，及所有现代浏览器
+ 支持按字体的方式去动态调整图标大小，颜色等等
+ 但是因为是字体，所以不支持多色；只能使用平台里单色的图标，就算项目里有多色图标也会自动去色

步骤：
1. 在 `iconfont.css` 中引入
```css
/* 拷贝项目下面生成的 font-face */
@font-face {
  font-family: "iconfont";
  src: url('../fonts/iconfont.eot'); /* IE9*/
  src: url('../fonts/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('../fonts/iconfont.woff') format('woff'), /* chrome, firefox */
  url('../fonts/iconfont.woff2') format('woff2'), /* chrome, firefox */
  url('../fonts/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('../assets/fonts/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

/* 定义使用 iconfont 的样式 */
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

2. 挑选相应图标，查找字体编码，应用于页面
```html
<i class="iconfont">&#x33;</i>
```

::: tip 备注：
+ `font-face` 可以使用远程 url，但建议下载至本地引入
+ 每次使用图表都要去查询字体编码，且毫无语义化
:::



## font-class 引用

+ font-class 是 unicode 使用方式的一种变种，主要是解决 unicode 书写不直观，语意不明确的问题
+ 特点：
  + 兼容性良好，支持ie8+，及所有现代浏览器
  + 相比于 unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么
  + 因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 unicode 引用
  + 不过因为本质上还是使用的字体，所以多色图标还是不支持的

步骤

1. 使用在线生成的 css 代码(或下载至本地，拷贝到 `iconfont.css`)
```html
<link rel="stylesheet" href="//at.alicdn.com/t/font_1261797_48wm20jf8z.css">
```

2. 挑选图标，使用类名引用
```html
<i class="iconfont icon-fold"></i>
<i class="iconfont icon-delete-solid"></i>
```

::: tip 备注：
+ 每次添加图标都要重新生成 css 代码，建议开发时使用在线链接，开发后再下载至本地，加入到 `iconfont.css`
+ 它的原理与 iconfont 类似，只是对 class 和 font 进行映射(通过 `:before` 伪类)
```css
@font-face {
  font-family: "iconfont";
  src: url('../fonts/iconfont.eot'); /* IE9*/
  src: url('../fonts/iconfont.eot#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('../fonts/iconfont.woff') format('woff'), /* chrome, firefox */
  url('../fonts/iconfont.woff2') format('woff2'), /* chrome, firefox */
  url('../fonts/iconfont.ttf') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('../assets/fonts/iconfont.svg#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* :before 伪类 */
.cl-icon-user:before {
  content: "\e64b";
}

.cl-icon-video:before {
  content: "\e66b";
}

.cl-icon-pause:before {
  content: "\e7bd";
}

.cl-icon-orgnazation:before {
  content: "\e61b";
}
```
:::



## symbol 引用

+ 是一种全新的使用方式，应该说这才是未来的主流，也是推荐的用法
+ 这种用法其实是做了一个 svg 的集合
+ 特点：
  + 支持多色图标，不再受单色限制
  + 通过一些技巧，支持像字体那样，通过 `font-size`, `color` 来调整样式
+ 缺点：
  + 兼容性较差，支持 ie9+ 及现代浏览器
  + 浏览器渲染 svg 的性能一般，还不如 png


步骤：

1. 拷贝项目生成的 symbol 代码(或下载至本地)
```html
<!-- 外链 -->
<script src="//at.alicdn.com/t/font_1254715_oewlgci0ut.js"></script>
<!-- 本地引入 -->
<script src="./static/js/symbols.js"></script>
```

2. 挑选相应图标并获取类名，应用于页面
```html
<svg class="icon" aria-hidden="true">
  <use xlink:href="#test-icon-word-ext"></use> 
</svg>
```

::: tip 备注：
+ 生成的 js 文件实际上是在页面生成 svg symbol
+ 每次添加新图标时，仍然要重新生成代码
+ 还可以使用 `svg-sprite-loader` 和 webpack 的 `require.context` [实现](/front-end/vue/component-skills/svg-component.html)，这样可以按需添加图标（可以在开发时逐个添加图标，开发完成后再打包为 symbol 方式？）
:::