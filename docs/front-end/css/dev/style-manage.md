---
sidebarDepth: 2
---

## 组件内管理

### BEM

+ BEM 是块（block）、元素（element）、修饰符（modifier）的简写，由 Yandex 团队提出的前端 CSS 命名方法论
+ 其中命名规则如下：
  + `__`：双下划线，用来连接块和块的子元素
  + `--`：单中划线，用来描述一个块或者块的子元素的一种状态
  + `-`：中划线，作为连字符使用，为多单词之间的连接记号

```css
.stick-man__head--small {}
.stick-man__head--big {}
```
+ 优点：能有效避免样式重名，并且语义化更明显
+ 缺点：类名特别长，不适合小项目/小组件中使用，更适用于大型项目/组件库的全局样式管理



### scoped css

+ 参考 [Vue scoped css](https://vue-loader.vuejs.org/zh/guide/scoped-css.html#scoped-css)
+ `<style>` 标签上添加 scoped 属性指定样式只在该组件内有效：
```vue
<template>
  <div class="example">hi</div>
</template>

<style scoped>
/* 本地样式 */
.example {
  color: red;
}
</style>

<style>
/* 全局样式 */
</style>
```

+ Vue 规定子组件的根结点会同时受其父组件的 scoped CSS 和子组件的 scoped CSS 的影响
+ Vue 还提供了深度作用操作符，可以修改子组件的样式，以下写法都是允许的
```vue
<style scoped>
.a >>> .b { /* ... */ }
.a /deep/ .b { /* ... */ }
.a ::v-deep .b { /* ... */ }
</style>
```




### css module

+ [CSS Modules](https://github.com/css-modules/css-modules) 是一个流行的，用于模块化和组合 CSS 的系统
+ Vue 中把其作为一个计算属性 `$style`，可用于引用响应的类名
```vue
<style module>
.red {
  color: red;
}
</style>

<template>
  <p :class="$style.red">
    This should be red
  </p>
</template>
```

+ 其内部会对类名进行编码来避免重名，因此最终会转换为
```vue
<style module>
._1yZGjg0pYkMbaHPr4wT6P__1 {
  color: red;
}
</style>

<template>
  <p class="_1yZGjg0pYkMbaHPr4wT6P__1">
    This should be red
  </p>
</template>
```


### css in js

+ 参考 [css-in-js](https://github.com/styled-components/vue-styled-components)





## 全局样式管理

+ 预处理：使用 CSS 预处理器(Sass/Less/Stylus)提供的便捷语法(嵌套、变量、函数、...)简化/复用样式




### 样式文件拆分

+ 将样式文件拆分，再借助预处理器的功能来管理全局样式
```sh
|- styles\
  |= reset.css        # 样式重置
  |- variables.scss   # 变量
  |- layout.scss      # 布局样式
  |- mixins.scss      # 混入
  |- animation.scss   # 动画样式
  |- element-ui.scss  # 第三方 UI 库的样式修改
  |- ...              # 更多样式
  |- index.scss       # 引入并组织所有样式
```

+ 在 index.scss 中组织所有样式(注意样式导入顺序)
```scss
@import './reset.scss';
@import './variables.scss';
@import './mixins.scss';
@import './layout.scss';

html {
  height: 100%;
  font-size: 50px;
}

body {
  height: 100%;
}

#app {
  height: 100%;
}
```




## 怎样写出高效的 CSS

+ 提高解析速度：
  + 避免无意义或多余的选择器嵌套，因为选择器的解析是从右向左的
  + 选择器的解析速度：id > class > tag > universal
  + 不要用 tag 来限制 id 选择器，因为 id 选择器本身就是唯一的
+ 提高编写效率：
  + 使用 CSS 预处理工具(Sass, Less, Stylus)组织/复用样式
  + 使用 CSS 后处理工具(PostCSS)自动添加浏览器前缀



## 如何配置按需加载
## 如何防止 CSS 阻塞渲染
## link 和 @import

+ `link` 属于 HTML 标签，`@import` 引用的 `CSS` 会等到页面被加载完再加载
+ `link` 方式的样式的权重高于 `@import`
+ 兼容性：`@import` 在 `IE5` 以上才适用