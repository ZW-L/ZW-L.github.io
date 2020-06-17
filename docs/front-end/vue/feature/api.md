## 全局 API

+ 通过 `Vue.method()` 的方式调用

|API|描述|
|-|-|
|extend(options)|用于构建 Vue 的子类|
|nextTick([callback, context])|在下次 DOM 更新循环结束之后执行延迟回调|
|set(target, name/index, value)|添加响应式属性并触发视图更新|
|delete(target, name/index, value)|删除响应式属性并触发视图更新|
|directive(id, [definition])|注册/获取全局指令|
|filter(id, [definition])|注册/获取全局过滤器|
|component(id, [definition])|注册/获取全局组件|
|use(plugin)|安装插件|
|mixin(mixin)|注册全局混入|
|compile(template)|将模板字符串编译成 render 函数|
|observable(object)|使对象可响应|
|version|返回字符串形式的 Vue 安装版本号|







## 选项属性

+ 单文件组件中
```vue
<script>
export default {
  // 基本选项
  name: '',
  mixins: [],
  extends: ComponentA,
  parent: ComponentA,
  components: {},
  props: {},
  model: {},
  inheritAttrs: {},
  data () { return {} },
  computed: {},
  watch: {},
  methods: {},
  directives: {},
  filters: {},
  // 生命周期函数
  beforeCreate () {},
  created () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  deactivated () {},
  activated () {},
  // 渲染函数
  render (h) { return h() },
  renderError () {},
  functional: true
}
</script>
```
+ Vue 实例中
```js

```




## 模板语法及指令、简写

|语法|简写|说明|
|-|-|-|
|{{}}|❌|模板插值，可以为 js 表达式|
|v-once|❌|一次性插值，插值内容不会更新|
|v-text|❌|更新元素的 `textContent`|
|v-html|❌|渲染为真正的 HTMl，但有 XSS 风险|
|v-bind:attr=|:attr=|绑定属性到子组件|
|v-on:event=|@event=|为子组件绑定事件|
|v-show|❌|不销毁组件，仅切换元素的 display|
|v-if|❌|销毁组件并重建|
|v-else-if|❌|销毁组件并重建|
|v-else|❌|销毁组件并重建|
|v-for=|❌|列表渲染|
|v-model=|❌|表单数据绑定，与表单控件有关|
|v-slot:name|#name|插槽|
|v-pre|❌|跳过表达式|
|v-cloak|❌||


::: tip 说明
+ `v-bind` 传入整个对象时没有缩写：
```vue
<template>
  <blog-post v-bind="post"></blog-post>
</template>

<!-- 相当于 -->
<template>
  <blog-post :title="post.title" :id="post.id"></blog-post>
</template>
```
+ 动态参数的简写也是一样的：
```vue
<template>
  <a v-bind:[attributeName]="url"> ... </a>
</template>

<!-- 相当于 -->
<template>
  <a :[attributeName]="url"> ... </a>
</template>
```
+ 具名插槽的语法简写
```vue
<template v-slot:item="slotProps">
  <div class="item">
    {{ slotProps.item.text }}
  </div>
</template>

<!-- 相当于 -->
<template #item="slotProps">
  <div class="item">
    {{ slotProps.item.text }}
  </div>
</template>
```
:::


