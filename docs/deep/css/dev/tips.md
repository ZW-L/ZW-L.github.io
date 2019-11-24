## Sprite 介绍和实现

**介绍：**
+ 多个图片集成在一个图片中的图
+ 使用雪碧图可以有效减少网络请求的次数

**实现原理：**
+ 通过 background-position 定位图片在屏幕的哪个位置


## 怎样写出高效的 CSS

+ 避免无意义或多余的选择器嵌套，因为选择器的解析是从右向左的
+ 选择器的解析速度：id > class > tag > universal
+ 不要用 tag 来限制 id 选择器，因为 id 选择器本身就是唯一的
+ 使用 CSS 预处理工具(Sass, Less, Stylus)组织/复用样式
+ 使用 CSS 后处理工具(PostCSS)自动添加浏览器前缀

## CSS Module

+ CSS 模块化方案
+ 如何配置按需加载
+ 如何防止 CSS 阻塞渲染

## BEM 命名法