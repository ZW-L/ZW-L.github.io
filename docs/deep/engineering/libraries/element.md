## 介绍

[Element](https://element.eleme.cn/#/zh-CN)：

+ 基于 Vue 2.0 的桌面端组件库

### 使用

+ CDN：
```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```
+ npm 安装：
```powershell
npm i element-ui -S
```


### 完整引入

```js
// main.js
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```


### 按需引入

+ 安装 `babel-plugin-component`：
```powershell
npm install babel-plugin-component -D
```
+ 配置 `.babelrc`：
```js
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```
+ 引入组件：
```js
import Vue from 'vue'
import { Button, Select } from 'element-ui'
import App from './App.vue'

Vue.use(Button)
Vue.use(Select)

new Vue({
  el: '#app',
  render: h => h(App)
});
```