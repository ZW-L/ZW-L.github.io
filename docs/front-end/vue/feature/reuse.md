## 过滤器

+ 过滤器可以用在插值和 `v-bind` 的表达式中，用管道符隔开
```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 `v-bind` 中 -->
<div v-bind:id="rawId | formatId"></div>
```
+ **本地过滤器**：定义在组件选项内，优先级高于全局过滤器(同名冲突时)
+ **全局过滤器**：创建 Vue 实例之前定义
+ **可以一直串联使用**
```html
{{ message | filterA | filterB }}
```
+ **可以接收参数**，且第一个参数为上一步处理的结果
```html
<!-- arg1 实际上为第二个参数，arg2 为第三个参数 -->
{{ message | filterA(arg1, arg2) }}
```



## 混入

+ 可以将不同组件复用的功能抽离，再通过混入(mixin)的方式注入组件中
+ 混入的本质是选项合并，但发生冲突时
  + 以组件的数据优先
  + 钩子函数会合并为数组，并且混入对象的钩子先执行
+ 通过 `Vue.extend()` 混入到某个组件
```js
// 定义混入对象
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}

// 使用了混入对象的组件
var Component = Vue.extend({
  mixins: [myMixin]
})
```
+ 单文件组件的混入
```vue
<script>
import resizeMixin from './mixins/resize'

export default {
  mixins: [resizeMixin]
}
</script>
```
+ **全局混入**：使用 `Vue.mixin(option)` 定义，会影响所有新创建的实例，一般很少使用





## 插件

+ 插件通常用来为 Vue 添加全局功能
+ 使用插件：在创建 Vue 实例之前调用，还可以添加额外的选项
```js
// 使用插件
Vue.use(MyPlugin)
// 使用插件，附加选项
Vue.use(MyPlugin, { someOption: true })

new Vue({
  // ...组件选项
})
```
+ 开发插件：插件应该暴露一个 install 方法，该方法的第一个参数是 Vue 构造器，第二个参数是可选的选项对象
```js
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    // ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    // ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```



## 自定义指令

+ 钩子函数 (均为可选)：
  + `bind`：(只调用一次)，指令第一次绑定到元素时调用。此时可以进行一次性的初始化设置
  + `inserted`：被绑定元素插入父节点时调用(仅保证父节点存在，但不一定已被插入文档中)
  + `update`：所在组件的 VNode 更新时调用。可能发生在其子 VNode 更新之前
  + `componentUpdated`：所在组件的 VNode 及其子 VNode 全部更新后调用
  + `unbind`：(只调用一次)，指令与元素解绑时调用
+ 钩子函数接收的参数：
  + `el`：指令所绑定的元素，可以用来直接操作 DOM
  + `binding`：一个对象
  + `vnode`：Vue 编译生成的虚拟节点
  + `oldVnode`：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用