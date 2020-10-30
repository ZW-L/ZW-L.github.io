---
sidebarDepth: 2
---

## 概念

+ **单个根元素**：每个组件必须只有一个根元素
```vue
<template>
  <div class="blog-post">
    <h3>{{ title }}</h3>
  <div v-html="content"></div>
</div>
</template>
```

+ **data 必须是一个函数**：每个复用的组件都会维护一份独立的数据
```js
data () {
  return {
    title: 'awesome vue!'
  }
}
```

+ **双向数据绑定**：组件内模板语法绑定的变量会与视图实时更新




## 组件注册

+ **组件名大小写**：可以为 PascalCase 或 kebab-case，建议使用 kebab-case
+ **全局注册**：注册后在任何组件内能直接使用(开发时在 `main.js` 中注册，并且必须在 Vue 创建之前进行)
```js
Vue.component('my-component-name', {
  // ... 选项 ...
})
```

+ **局部注册**：只在使用的引入并注册(开发时在单文件组件中引入并注册)
```js
// 使用 js 创建组件时
const ComponentA = { /* ... */ }

new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA
  },
  // ...
})

// 使用单文件组件时
import ComponentA from './ComponentA.vue'

export default {
  components: {
    ComponentA
  },
  // ...
}
```

+ **全局注册基础组件**：当基础组件较多时，借助 Webpack 提供的 [require.context()](https://www.webpackjs.com/api/module-methods/#require-context) 创建辅助方法一次性注册：
```js
import Vue from 'vue'

// 获取 ./components 目录下以 Base 开头的组件的上下文
const requireComponent = require.context(
  './components',
  false,
  /Base[A-Z]\w+\.(vue|js)$/
)

// key() 获取所有组件的相对文件名数组，并逐个操作并注册
requireComponent.keys().forEach(fileName => {
  // 获取当前模块上下文
  const componentConfig = requireComponent(fileName)
  // 处理：./BaseInput.vue -> BaseInput
  const componentName = fileName.split('/').pop().replace(/\.\w+$/, '')

  // 全局注册组件
  Vue.component(
    componentName,
    // 优先使用模块的 default，否则使用模块的根
    componentConfig.default || componentConfig
  )
})
```




## 生命周期

+ 生命周期钩子简介

|钩子|简介|
|-|-|
|beforeCreate|**实例初始化之后**，数据观测 (data observer) 和 event/watcher 事件配置之前被调用|
|created|**实例创建完成后调用**。实例已完成数据观测 (data observer)、property 和方法的运算、watch/event 事件回调；但挂载阶段还没开始，`$el`、`property` 不可用|
|beforeMount|**实例挂载开始之前调用**。此时首次调用 render 函数|
|mounted|**实例挂载后调用**。此时 el 被新创建的 vm.$el 替换，但子组件不一定都已挂载|
|beforeDestroy|**实例销毁之前调用**。此时实例仍然完全可用|
|destroyed|**实例销毁后调用**。此时所有指令解绑、所有事件监听器被移除、所有子实例被销毁|
|beforeUpdate|**数据更新时调用**。发生在虚拟 DOM 打补丁之前|
|updated|**DOM 更新后调用**。|
|activated|被 keep-alive 缓存的组件激活时调用|
|deactivated|被 keep-alive 缓存的组件停用时调用|

::: tip 备注
+ 生命周期钩子不能使用箭头函数，它们会丢失 `this`
+ `mounted` 中可使用 `this.$nextTick(callback)` 保证子组件**挂载**后执行回调
+ `updated` 中可使用 `this.$nextTick(callback)` 保证子组件**重绘**后执行回调
+ `beforeUpdate`：适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器
:::

+ 生命周期图示：

![生命周期图示](./imgs/lifecycle.png)




## prop

+ **单向数据流**：`prop` 从父组件流向子组件，子组件不能更改
+ **大小写**：HTMl 中 attribute 是大小写不敏感的，但在 JS 中会变为 camelCase，推荐绑定时使用 kebab-case
+ **动态传值**：使用 `v-bind` 动态传值，否则传入的都是字符串
+ **类型及验证**：
```js
props: {
  // 1.简单的类型检查 (null 和 undefined 会通过任何类型验证)
  propA: Number,

  // 2.多个可能的类型
  propB: [String, Number],

  // 3.必填的字符串
  propC: {
    type: String,
    required: true
  },

  // 4.带有默认值的数字
  propD: {
    type: Number,
    default: 100
  },

  // 5.带默认值的对象或数组，其默认值必须从一个工厂函数获取
  propE: {
    type: Object,
    default: () => { message: 'hello' }
  },

  // 6.自定义验证函数
  propF: {
    validator: function (value) {
      // 这个值必须匹配下列字符串中的一个
      return ['success', 'warning', 'danger'].indexOf(value) !== -1
    }
  }
}
```

+ **禁用属性继承**：在组件内禁用属性继承后，其根元素不会继承 `attribute`，常配合 `$attr` 开发基础组件
```js
Vue.component('base-input', {
  inheritAttrs: false,    // 禁用属性继承
  props: ['label', 'value'],
  template: `
    <label>
      {{ label }}
      <input
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    </label>
  `
})
```




## 自定义事件

+ **事件名**：HTML 属性是大小写不敏感的，推荐使用 kebab-case 的事件名
+ **语法**：父组件使用 `v-on` 指令绑定事件，子组件调用 `this.$emit()` 触发事件，还可以抛出值给父组件
+ 更新 `prop`：父组件为子组件添加自定义事件，再通过子组件调用 `this.$emit()` 抛出值来通知父组件更新
```vue
<!-- 父组件 -->
<template>
  <item :username="user.username" :age="user.age"
    @update:username="updateUsername" @update:age="updateAge"
  ></item>
</template>
<script>
export default {
  data () {
    return {
      user: { username: 'Alice', age: 26 }
    }
  },
  methods: {
    updateUsername (username) {
      this.user.username = username
    },
    updateAge (age) {
      this.user.age = age
    }
  }
}
</script>

<!-- 子组件 -->
<template>
  <div>
    {{ username }} - {{ age }}
    <button @click="update">Update</button>
  </div>
</template>
<script>
export default {
  props: {
    username: String,
    age: Number
  },
  methods: {
    update () {
      this.$emit('update:username', 'Bob')
      this.$emit('update:age', 30)
    }
  }
}
</script>
```

+ `.sync` 修饰符，实际是以上的语法糖
```vue
<template>
  <item v-bind:username.sync="user.username" v-bind:age.sync="user.age"></item>
  <!-- 相当于 -->
  <item :username.sync="user.username" :age.sync="user.age"></item>
  <!-- 相当于 -->
  <item v-bind.sync="user"></item>
</template>
```
+ **绑定原生事件**：
  + 使用 `.native` 事件修饰符访问原生事件
  + 若子组件的根元素没有该原生事件时，需要使用 `this.$listener` 对子组件进行[调整](https://cn.vuejs.org/v2/guide/components-custom-events.html#将原生事件绑定到组件)
+ [自定义组件的 v-model](https://cn.vuejs.org/v2/guide/components-custom-events.html#自定义组件的-v-model)





## 插槽

+ **唯一出口**：保留一个默认插槽作为唯一的出口
+ **后备内容**：为插槽添加默认值，当未匹配插槽时，使用默认值
+ **具名插槽**：默认的插槽为 `default`，用 `name` 定义插槽名字，用 `v-slot`(缩写 #)使用指定插槽
```vue
<!-- 子组件 -->
<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
</div>
</template>

<!-- 父组件 -->
<template>
  <base-layout>
    <template v-slot:header>
      <h1>Here might be a page title</h1>
    </template>

    <p>A paragraph for the main content.</p>
    <p>And another one.</p>

    <template #footer>
      <p>Here's some contact info</p>
    </template>
  </base-layout>
</template>
```
+ **动态插槽**：`v-slot:[dynamicSlotName]`
+ **作用域插槽**：使用 `v-bind` 绑定一个变量供父组件用于重组插槽的显示(在原基础上再进行赋值)，并且：
  + 支持对象解构
  + 支持独占默认插槽
```vue
<!-- 子组件 -->
<template>
  <h2>
    <slot :user="user">{{ user.name }} - {{ user.age }}</slot>
  </h2>
</template>

<script>
export default {
  data () {
    return {
      user: { name: 'Alice', age: 26 }
    }
  }
}
</script>

<!-- 父组件 -->
<template>
  <item>
    <template #default="{ user }">
      My name is {{ user.name }}, {{ user.age }} years old.
    </template>
  </item>
</template>
```




## 递归组件

+ 组件内循环调用自身的组件，注意一定要为递归的子组件设置 `name` 属性(保证递归可以退出)
+ **递归出口**：`v-if` 求值为 false
+ **递归保持**：`v-bind` 绑定用于下一次递归的数据
+ 父组件用于开启递归(类似递归函数的初始调用)
```vue
<!-- 父组件 -->
<template>
  <div class="about">
    <sub-about :books="books"></sub-about>
  </div>
</template>

<script>
import SubAbout from './SubAbout.vue'

export default {
  components: {
    SubAbout
  },
  data () {
    return {
      books: {
        path: '/',
        children: [
          { path: '/home' },
          {
            path: '/about',
            children: [
              { path: '/about/user' },
              { path: '/about/product' }
            ]
          }
        ]
      }
    }
  }
}
</script>

<!-- 递归的子组件 -->
<template>
  <div>
    <h2>{{ books.path }}</h2>
    <template v-if="books.children">
      <sub-about v-for="book in books.children" :key="book.path" :books="book"></sub-about>
    </template>
  </div>
</template>

<script>
export default {
  name: 'sub-about',
  props: {
    books: Object
  }
}
</script>
```





## 动态组件

+ 使用 `<component>` 标签和 `is` 属性指定动态组件，`is` 的类型：
  + `String`：组件注册时的 `name` 属性
  + `Object`：组件的选项对象
+ 使用 `<keep-alive>` 标签缓存动态组件
```vue
<!-- 字符串方式 -->
<template>
  <div>
    <button @click="changeComponent">change</button>
    <keep-alive>
      <component :is="`component-${componentId}`"></component>
    </keep-alive>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data () {
    return {
      componentId: 'a'
    }
  },
  methods: {
    changeComponent () {
      this.componentId = this.componentId === 'a' ? 'b' : 'a'
    }
  }
}
</script>

<!-- 组件选项对象方式 -->
<template>
  <div>
    <button @click="changeComponent">change</button>
    <keep-alive>
      <component :is="componentId"></component>
    </keep-alive>
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'

export default {
  components: {
    ComponentA,
    ComponentB
  },
  data () {
    return {
      componentId: ComponentA
    }
  },
  methods: {
    changeComponent () {
      this.componentId = this.componentId === ComponentA ? ComponentA : ComponentB
    }
  }
}
</script>
```




## 异步组件





## 函数式组件

+ 模板语法使用 `functional` 属性标记函数式组件
```vue
<template functional>
</template>
```

+ [渲染函数](./render.md)使用 `functional: true` 指定函数式组件
```js
export default {
  name: 'item',
  functional: true,
  // ...
}
```

::: tip 函数式组件特性：
+ 没有任何状态、生命周期方法、响应式数据，也没有实例(`this`)
+ 渲染开销低很多
+ 渲染函数有第二个参数 `context`，它包含以下属性
  + `props`：对象。提供所有 prop，还会自动展开组件上的所有 attribute
  + `data`：传递给组件的整个数据对象，作为 createElement 的第二个参数传入组件
  + `slots`：函数。调用后返回包含所有插槽的对象
  + `scopedSlots`： 暴露传入的作用域插槽的对象。也以函数形式暴露普通插槽
  + `children`：数组。包含所有 VNode 子节点
  + `parent`：父组件的引用
  + `listeners`：对象。包含所有父组件为当前组件注册的事件监听器
  + `injections`：对象。包含应当被注入的 property
:::





## 其他

+ 访问组件或节点
  + `$root`：组件树的根节点
  + `$parent`：当前组件的父组件实例(如果有的话)
  + `$el`：当前组件
  + `$refs.usernameInput`：组件内定义了 `ref="usernameInput"` 的节点