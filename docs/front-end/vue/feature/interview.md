## 指令

+ 常用指令
```
+ v-html
+ v-show
+ v-if/v-else/v-else-if
+ v-for
+ v-model
+ v-on
+ v-bind
```

+ v-if 和 v-show 的区别
```
v-if: 惰性的，直到条件第一次变为真时，才会开始渲染条件块；有更高的切换开销

v-show: 仅仅控制元素的显示方式，将 display 属性在 block 和 none 来回切换；有更高的初始渲染开销
```

+ v-for 渲染列表中的 key 是用来做什么的
```
复用元素，如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序，而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素
```

+ v-model 的原理
```

```

+ 自定义指令
```js
// 全局定义：Vue.directive()
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时
  inserted: function (el) {
    // 聚焦元素
    el.focus();
  },
})

// 局部定义：在组件实例中定义 directives 选项
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus();
    },
  },
}
```

::: tip 指令钩子函数：
+ bind: 只调用一次，指令第一次绑定到元素时调用
+ inserted: 被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
+ update: 所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前
+ componentUpdated: 指令所在组件的 VNode 及其子 VNode 全部更新后调用
+ unbind: 只调用一次，指令与元素解绑时调用
:::





## 组件实例

+ vue 中的 data 为什么是一个函数
```
组件是可以共享的，复用组件时它们的 data 应该是私有的，所以每个组件都要 return 一个新的对象，这样每个复用的组件都会维护自身的 data
```

+ Computed, Methods, Watch 的区别
```
Computed 基于它们的响应式依赖进行缓存，只在相关响应式依赖发生改变时它们才会重新求值
Methods 不会对结果进行缓存，就是一系列 js 方法
Watch 用于需要在数据变化时执行异步或开销较大的操作时，它相当于更复杂的 Computed
```

+ 简述 Vue 的生命周期
```
+ beforeCreate: vue 实例还没有初始化，不能访问 el 和 data
+ created: vue 实例能访问 data ，但未挂载，不能访问 el(无法操作 DOM)
+ beforeMount: vue 实例初始化完成，此时 DOM 为虚拟的 DOM 节点
+ mounted: vue 实例挂载到真实 DOM 上，可以获取 DOM 节点
+ beforeUpdate: 响应式数据更新时调用，发生在虚拟 DOM 打补丁前(适合在更新之前访问现有的 DOM，如手动移除已添加的事件监听器)
+ updated: 虚拟 DOM 重新渲染和打补丁之后调用，组成新的 DOM 已经更新(避免在这个钩子函数中操作数据，防止死循环)
+ beforeDestroy: 实例销毁前调用，实例还可以用，this 能获取到实例(常用于销毁定时器，解绑事件)
+ destroyed: 实例销毁后调用，调用后所有事件监听器会被移除，所有的子实例都会被销毁
```



## 组件间通信

**父子通信：**
+ 父传子：父组件通过 `v-bind` 绑定属性到子组件，子组件通过 `props` 选项接收从父组件传来的数据
+ 子传父：父组件通过 `v-on` 为子组件添加自定义事件，子组件通过 `$emit()` 触发事件并可以附加额外参数，在父组件内可通过 `$event` 访问该参数值

**兄弟组件通信：**
+ 比较麻烦的方法是，通过父组件共享状态
+ 使用 `pubsub` 等第三方库
+ 使用 `Vuex`





## vuex

+ 简述
```
一个专为 `Vue.js` 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。
```

+ 使用
```
+ `Vuex` 通过 `store` 选项，提供了一种机制将状态从根组件“注入”到每一个子组件中: `Vue.use(Vuex)`
+ 通过在根实例中注册 `store` 选项，该 `store` 实例会注入到根组件下的所有子组件中，且子组件能通过 `this.$store` 访问到
```

+ 核心
```
+ `State`: `Vuex` 中的公共的状态, 将 `state` 理解为 `store` 的 `data`, 用于保存所有组件的公共数据
+ `Getters`: 将 `getters` 属性理解为 `store` 的计算属性
+ `Mutations`: 
  + 将 `Mutations` 理解为 `store` 中的 `methods`，它是更改 `Vuex` 的 `store` 中的状态的唯一方法
  + 而且 `Mutation` 必须是同步函数(因为同步的状态才可以追踪)
  + 它的回调函数接收 `state` 作为第一个参数，并可以接收第二个参数 `payload`(额外的参数)
  + 使用 `$store.commit()` 来提交 `Mutation`
+ `Actions`: 
  + 类似于 `Mutation`，但它提交的是 `Mutation`，而不是直接变更状态
  + 并且可以包含任意异步操作
  + 它的回调函数接收一个 `context` 对象(一个与 `store` 实例具有相同方法和属性的对象，但不是 `store` 实例本身)作为第一个参数，并可以接收第二个参数 `payload`(额外的参数)
  + 使用 `$store.dispatch()` 来触发 `Action`
  + 可以使用 `Promise` 或 `async/await` 语法组合 `Action`
+ `Modules`: 
  + 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，`store` 对象就有可能变得相当臃肿，因此 `Vuex` 允许将 `store` 分割成模块
  + 每个模块拥有自己的 `state`、`mutation`、`action`、`getter`、甚至是嵌套子模块：从上至下进行同样方式的分割
  + 对于模块内部的 `mutation` 和 `getter`，接收的第一个参数是模块的局部状态对象(模块的 `state`)
  + 对于模块内部的 `action`，局部状态通过 `context.state` 暴露出来，根节点状态则为 `context.rootState`
  + 对于模块内部的 `getter`，根节点状态(`context.rootState`)会作为第三个参数暴露出来
```




## vue-router

+ vue-router 实现的原理
```
通过 HTML5 History 接口提供的新方法, 对浏览器历史记录栈进行修改
虽然改变了当前的 URL，但浏览器不会立即向后端发送请求：
history.pushState() => $router.push()
history.replaceState() => $router.replace()
```

+ `hash` 和 `history` 的区别
```
hash: 在地址栏 URL 中添加 # 符号，但不会被包含在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面

history: 利用 HTML5 History Interface 中新增的 pushState() 和replaceState() 方法
```

+ `$router` 和 `$route` 的区别
```
router: 
  + 通过 Vue.use(VueRouter) 和 VueRouter 构造函数得到一个 router 的实例对象，是一个全局的对象
  + 包括了路由的跳转方法，钩子函数等

route: 
  + 一个跳转的路由对象，每一个路由都会有一个 route 对象，是一个局部的对象
  + 可以获取对应的 name, path, params, query 等属性
```

+ 导航守卫
```
+ 导航守卫是一系列钩子方法，可以在路由发生改变(改变前、改变后)指定某些行为
+ 每个钩子都接受一个回调函数作为参数，该回调函数还能接受三个参数(to, from, next)
+ to 为要跳转的目标路由；from 为当前即将离开的路由；`next` 为一个函数，并且在末尾一定要执行以 resolved 该钩子
+ next() 调用：
  + next(): 完成该钩子，进入下一个钩子
  + next(false): 中断导航，回到 from 的路由
  + next('/'): 中断当前导航，跳转到指定路由，参数可以是编程式导航的各种形式
  + next(error): 传入 Error 实例时会中断导航并传递错误给 router.onError()

全局导航守卫：作为全局的路由配置(Router 实例的属性)
+ router.beforeEach((to, from, next) => {})：全局前置
+ router.beforeResolve((to, from, next) => {})：全局解析
+ router.afterEach((to, from) => {})：全局后置，回调函数没有 next 参数

路由独享守卫：作为路由配置的属性(某个特定路由中, 与 path 等属性同级)
+ beforeEnter((to, from, next) => {})：

组件内守卫：作为组件的属性(与 data, mounted 等属性同级)
+ beforeRouterEnter((to, from, next) => {})：
+ beforeRouterUpdate((to, from, next) => {})：
+ beforeRouterLeave((to, from, next) => {})：
```



## 虚拟 DOM

+ 参考：
  + [详解Vue中的虚拟DOM](https://www.cnblogs.com/fundebug/p/vue-virtual-dom.html)
+ 简介
```
+ 简单来说，虚拟 DOM 为一个 JS 对象，Vue 中为 vnode
+ 该对象最少包含标签名(tag)、属性(attrs)和子元素对象(children)三个属性，不同的框架对这些属性的命名会有差异
```

+ 作用：
```
+ 提供与真实 DOM 节点所对应的虚拟节点 vnode
+ 将虚拟节点 vnode 和旧虚拟节点 oldVnode 进行对比，然后更新视图
```

+ 为什么需要虚拟 DOM：
```
+ 跨平台：底层为 js 对象，能在各浏览器平台、Weex、Node.js 中使用
+ 效率高：将频繁的 DOM 操作修改为用 js 操作(DOM 操作比 js 慢)虚拟 DOM，最后一次性更新
+ 提升渲染性能：依靠内部高效的 diff 算法，最大程度地复用 DOM
```

+ 和真实 DOM 的区别
```
+ 真实 DOM 会发生频繁的重排和重绘，影响性能
+ Vue 内部通过 diff 算法比较虚拟 DOM，尽可能高效地复用元素，然后再渲染为真实 DOM
```

+ 从 template 到真实 DOM 的实现机制
```
+ init：初始化实例和选项
+ mount：解析模板，生成渲染函数 -> Watcher
```

+ diff 算法原理
```
+ 用 JavaScript 对象结构表示 DOM 树的结构，然后用这个树构建一个真正的 DOM 树，插到文档当中
+ 当状态变更的时候，重新构造一棵新的对象树，然后用新的树和旧的树进行比较，记录两棵树差异
+ 把所记录的差异应用到所构建的真正的 DOM 树上，视图就更新了
```

+ diff 算法内部实现
```js
// patch()
function patch (oldVnode, vnode) {
  if (sameVnode(oldVnode, vnode)) {   // 节点相同时则原地复用，打补丁
    patchVnode(oldVnode, vnode)
  } else {  // 节点不相同时则重新创建节点，并插入至 DOM 中
    const oEl = oldVnode.el
    let parentEle = api.parentNode(oEl)
    createEle(vnode)
    if (parentEle !== null) {
      api.insertBefore(parentEle, vnode.el, api.nextSibling(oEl))
      api.removeChild(parentEle, oEl)
      oldVnode = null
    }
  }
  return vnode
}

// patchVnode()：元素节点打补丁
function patchVnode (oldVnode, vnode) {
  const el = vnode.el = oldVnode.el
  let i, oldCh = oldVnode.children, ch = vnode.children
  if (oldVnode === vnode) return          // 1.新旧节点相同直接返回
  // 2.比较文本节点，新旧节点都有文本节点且不相等时
  if (oldVnode.text !== null && vnode.text !== null && oldVnode.text !== vnode.text) {
    api.setTextContent(el, vnode.text)
  } else {
    updateEle(el, vnode, oldVnode)
    if (oldCh && ch && oldCh !== ch) {    // 3.新旧节点都有子节点且子节点不同时，更新子节点
      updateChildren(el, oldCh, ch)
    } else if (ch){       // 4.只有新节点有子节点时，创建新节点
      createEle(vnode)
    } else if (oldCh){    // 5.只有旧节点有子节点时，删除旧节点
      api.removeChildren(el)
    }
  }
}
```




## 响应式原理

**简述：**
+ 当一个 `Vue` 实例创建时，`Vue` 会遍历 `data` 选项的属性，用 `Object.defineProperty` 将它们转为 `getter/setter` 并且在内部追踪相关依赖，在属性被访问和修改时通知变化。
+ 每个组件实例都有相应的 `watcher` 程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的 `setter` 被调用时，会通知 `watcher` 重新计算，从而致使它关联的组件得以更新。

**原理：**





## 双向绑定原理

1. 使用 `Object.defineProperty()` 劫持属性的读写：
```js
function observable (obj) {
  Object.keys(obj).forEach(key => defineReactive(obj, key, obj[key]))
  return obj
}

function defineReactive (obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      return val
    },
    set(newVal) {
      val = newVal
    }
  })
}

const data = observable({
  name: 'Alice',
  age: 24
})
```
2. 




## $nextTick()

+ 实现原理



## 事件机制





## 开发中

+ 实现页面的权限控制