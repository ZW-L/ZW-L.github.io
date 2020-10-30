---
sidebarDepth: 2
---

## 概念

参考：
+ [Vuex 文档](https://vuex.vuejs.org/zh/guide/state.html)
+ [Vuex API](https://vuex.vuejs.org/zh/api/)


### 区分

+ **单向数据流**：将 `State`/`View`/`Actions` 的功能进行划分：
![单向数据流](./imgs/flow.png)

+ **单一状态树**：使用单例模式保证了组件间状态的共享：
![单一状态树](./imgs/vuex.png)


### 对比

+ **组件属性和 Vuex**：

|组件内|Vuex|区别|
|-|-|-|
|data|state|基本一样，都具有响应式|
|getter|getters|基本一样，但 getters 作为方法访问时，不会缓存结果|
|-|mutations|mutations 只能执行同步任务，用于调试|
|method|actions|相似，但 actions 主要用于提交 mutations 或组合 actions|
|-|modules|modules 是对 Vuex 更细粒度的拆分|


+ **Vuex 自定义方法接受的参数**：

|类型|举例|参数说明|
|-|-|-|
|getters|getUser(state[, getters])|可以使用已存在的 getters|
|mutations|UPDATE_USER(state[, payload])|可选的 payload 数据用于更新 state|
|actions|updateUser(context[, payload])|context 与 store 实例具有相同的属性和方法|

::: tip 备注：
+ context 包含 `state`, `getters`, `commit`, `dispatch` 等属性
:::





## 注意事项

### 严格模式

在严格模式下，无论何时发生了状态变更且不是由 `mutation` 函数引起的，将会抛出错误，常在开发环境使用：
```js
const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production'
})
```


### 表单提交

+ 严格模式下，使用 v-model 绑定的表单数据，如果触发了状态变更，由于不是由 `mutation` 更改的，将会抛出错误，一种解决方法是监听 `<input>` 的 `input` 或 `change` 事件，在事件处理函数中提交 `mutation`：
```html
<!-- <input v-model="obj.message"> -->
<!-- 取消上面的做法，用以下的方式代替 -->
<input :value="message" @input="updateMessage">
```

```js
// 组件内
computed: {
  ...mapState({
    message: state => state.obj.message
  })
},
methods: {
  updateMessage (e) {
    this.$store.commit('updateMessage', e.target.value)
  }
}

// Vuex
mutations: {
  updateMessage (state, message) {
    state.obj.message = message
  }
}
```




## 项目配置

###  简单配置

+ 当需要管理的状态较少时：
```js
// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

// 显式安装 Vuex
Vue.use(Vuex)

const state = {
  // 状态
}

const getters = {
  // 计算属性（带缓存的）
}

const mutations = {
  // mutation（只能是同步的）
}

const actions = {
  // action（可以是异步的）
}

// 暴露一个新的 store 对象，将会用于在 main.js 中注入全局 Vue 实例
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
```


### 分离到单独的文件

+ 比较符合模块化的概念：
```js
// 目录
// |-store
//   |-state.js
//   |-getters.js
//   |-mutations.js
//   |-mutations_type.js  // 可选，用于管理所有 mutation 的常量名 
//   |-actions.js
//   |-index.js

// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
```


### 拆分为模块

+ 项目体积逐渐增大时，需要将状态管理细粒度到业务模块：
```sh
|-store
 |-modules\       # 拆分，每个模块有单独的 state, mutations, actions
   |-settings.js
   |-users.js
   |-cart.js
 |-getters.js     # 组织所有子模块的 state 暴露
 |-index.js
 # 也可以包含根级别的 actions 和 mutations
 |-actions
 |-mutations
```

+ 单个模块的内容，一定要使用 `namespaced` 属性：
```js
// setting.js
const state = {
  width: 0
}

const mutations = {
  UPDATE_WIDTH (state, width) {
    state.width = width
  }
}

const actions = {
  updateWidth ({ commit }, width) {
    commit('UPDATE_WIDTH', width)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
```

+ 在 getters 中组织模块的 state：
```js
// getters.js
export default {
  // settings.js 的 state
  bodyWidth: state => state.config.width,

  // users.js 的 state
  // ...
}
```

+ 通过 Webpack 提供的 [require.context()](https://www.webpackjs.com/api/module-methods/#require-context) 方法解析模块路径，动态导入模块：
```js
// index.js
import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
  modules,
  getters
})
```

::: tip 备注：
+ 由于 store 的模块化使用了命名空间，在组件调用 `dispatch()` 时需要带上响应的命名空间：
```js
this.$store.dispatch('settings/updateWidth', 400)
```
:::