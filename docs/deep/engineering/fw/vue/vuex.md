## vuex

## 1.使用

两种使用方式

1）直接引入直接，此前需先引入 vue，`vuex` 就会自动安装

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vuex.js"></script>
```

2）安装使用

```shell
npm install vuex
```

在模块化打包系统中，需要通过 `Vue.use()` 来安装 Vuex

```javascript
// index.js，vuex 配置文件
import Vue from 'vue'
import Vuex from 'vuex'

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
// 暴露一个新的 store 对象
export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
```

在 main.js 中

```javascript
import Vue from 'vue'
import store from './store/index.js'
import App from './App.vue'
// 使用由 vuex 创建的 store 对象
Vue.use(store)

new Vue({
	store,			// 配置实例的参数
	render: h => h(App)
}).$mount('#app')
```

## 2.介绍

### 1.原理图

![vuex](http://www.zwlife.top/images/mkdocs/vue/vuex.png)

### 2.State

1）state 是一个对象，包含了多组件间共享的状态数据，组件的局部状态仍保留在自身组件中

2）由于在 main.js 中，将 store 对象注入了 `App` 组件以及其所有子组件，所以可以在组件中获取状态数据：

```javascript
// 1.在子组件实例中
$store.state.count	// 获取 count 属性

```

3）`mapState` 辅助函数

&emsp; `mapState` 函数用于批量获取属性，不是必须的，但可以简化编码，使用前需从 `vuex` 引入

```javascript
import { mapState } from 'vuex'

// 1.接受数组参数
// 这样组件获取的计算属性名即为 ‘count’，使用数组方式不能指定属性名
computed: mapState(['count'])

// 2.接受对象参数
// 可以自定义计算属性名
computed: mapState({
  // 箭头函数可使代码更简练
	count: state => state.count,

  // 传字符串参数 'count' 等同于 `state => state.count`
	countAlias: 'count',

  // 为了能够使用 `this` 获取局部状态，必须使用常规函数
	countPlusLocalState (state) {
		return state.count + this.localCount
	}
})

// 3.使用对象展开运算符（...）混入
...mapState(['count', 'check'])
...mapState({
  // ...
})
```



### 3.Getter

1）`getters` 是一个对象，每个Getter 相当于一个计算属性（他的返回值会根据依赖被缓存起来）

2）Getter 接受 `state` 作为第一个参数，还可以传入 `getters` 作为第二个参数

```javascript
const getters = {
  // 只传入一个 state
  todosLength(state) {
		return state.todos.length
	},
  // 传入了 state 和 getters
	isSelectedAll(state, getters) {
		return getters.selectedCount === getters.todosLength && getters.todosLength > 0 
	}
}
```

3）访问/获取 Getter

```javascript
// 1.直接获取 
this.$store.getters.todosLength

// 2.使用 mapGetters
...mapGetters(['todosLength', 'selectedCount'])
```

4）`mapGetters` 辅助函数

&emsp; `mapState` 函数用于批量获取属性，不是必须的，但可以简化编码，使用前需从 `vuex` 引入

```javascript
import { mapGetters } from 'vuex'

// 1.数组语法
...mapGetters(['todosLength', 'selectedCount'])

// 2.对象语法
mapGetters({
  // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
  doneCount: 'doneTodosCount'
})
```

5）特殊的 Getter：返回一个函数，从而可以实现给 getter 传参

```javascript
getters: {
  // ...
  getTodoById: (state) => (id) => {
    return state.todos.find(todo => todo.id === id)
  }
}

// 使用
// 需要注意的是，这样访问的时候不会缓存结果，而是每次都会调用
store.getters.getTodoById(2)
```



### 4.Mutation

1）`mutations` 是一个对象，每个 mutation 都有一个字符串的**事件类型**和**回调函数**。**回调函数**是实际进行状态更改的地方，会接受 state 作为第一个参数。

2）不能直接调用一个 mutation，需要使用 `store.commit` 方法

```javascript
// 在 store 中定义 mutations 对象和相应的 mutation
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
})

// 在其他组件中通过 store 实例对象调用 commit 方法，提交mutatio
store.commit('increment')
```

3）Payload，额外的参数，可以在 `store.commit` 中传入

```javascript
// 定义一个 mutation ，额外接收一个 payload 参数
mutations: {
  increment (state, n) {
    state.count += n
  }
}

// 传入一个 payload
store.commit('increment', 10)
```

+ 大多数情况下，Payload 定义为一个对象，可以传入更多的数据，并且代码更加易读

还可以用另一种提交方式

```javascript
// 用一个对象作为提交的参数，type 以外的参数会自动作为一个对象传递给 payload
store.commit({
  type: 'increment',
  amount: 10
})
```

4）在组件中提交 Mutation

```javascript
// 1.使用组件实例调用
this.$store.commit('increment')

// 2.使用 mapMutations 辅助函数，将组件的 methods 映射为 'store.commit' 的调用
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    // 2.1 数组参数的 ...mapMutations
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    // 2.2 对象参数的 》。。mapMutations
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
  }
}
```

5）Mutation **必须是同步函数**，因为 mutation 被 devtools 捕捉，并且记录每一次状态变化的快照，不能是异步的，但是**可以使用 Action 异步提交  Mutation**

### 5.Action

1）**actions** 是一个对象，每个 Action 用于提交一个 Mutation，并不是直接变更状态，他接受一个与 store 实例既有相同方法和属性的 `context` 对象。因此，Action 可以执行异步的操作。

2）定义异步的 Action

```javascript
actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
```

3）分发 Action--`store.dispatch()`

```javascript
this.$store.dispatch('increment')
```

分发时还能传入载荷

```javascript
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})

// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```

使用 `mapActions` 辅助函数分发 Action

```javascript
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    // 1.数组参数
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    // 2.对象参数
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
}
```

4）组合 Action



### 6.Mudule

1）由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用比较复杂时，可以将 `store` 分割为**模块**。每个模块拥有自己的 state、mutations、actions、getters、甚至是嵌套的子模块：

```javascript
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```



## 3.项目结构

### 1.一个比较好的规则

1. 应用层级的状态应该集中到单个 store 对象中

2. 提交 **mutation** 是更改状态的唯一方法，并且这个过程是同步的
3. 异步逻辑都应该封装到 **action** 里面

### 2.基础结构

```shell
├── index.html
├── main.js
├── api
│   └── ... # 抽取出API请求
├── components
│   ├── App.vue
│   └── ...
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    ├── getters.js				# 根级别的 getter
    └── modules
        ├── cart.js       # 购物车模块
        └── products.js   # 产品模块
```







