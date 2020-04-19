## Vue介绍

### 1.简介

[Vue](https://cn.vuejs.org) 是一个用于构建用户界面的渐进式 `JavaScript` 框架。特点：

+ Vue 核心库只关注视图层
+ Vue 易于与第三方库整合
+ 遵循 `MVVM` 设计模式

### 2.对比

对比其他框架：

+ 借鉴 `Angular` 的**模板**和**数据绑定**技术
+ 借鉴 `React` 的**组件化**和**虚拟DOM**技术

### 3.插件

丰富的插件：

+ vue-cli：vue 脚手架
+ vue-router：vue 路由
+ vue-resource：处理 Ajax 请求
+ vuex：vue 状态管理
+ vue-lazyload：图片懒加载
+ vue-scroller：页面滑动
+ element-ui：vue-UI 组件库 （PC端）
+ mint-ui：vue-UI 组件库（移动端）

### 4.指令

常用指令

+ v-html：解释为 html，相当于 `innerHTML()`
+ v-text：解释为文本，相当于 `textContent()`
+ v-once：只渲染一次
+ v-show：判断是否渲染
+ v-if：条件渲染
+ v-else：条件渲染
+ v-else-if：条件渲染
+ v-for：列表渲染
+ v-bind：或  `:` ，强制绑定数据，绑定的是 `HTML标签` 的属性，不能添加 `{{}}`
+ v-on：或 `@` ，绑定事件
+ v-model：表单输入绑定，**双向数据绑定**
+ v-pre：跳过元素的编译
+ v-cloak：

自定义指令

### 5.特殊特性

+ key：用于 Vue 的**虚拟DOM算法**
+ ref：
+ is：
+ slot：
+ slot-scope：`2.5.0版本` 替代 `scope`

### 6.内置组件

+ component：常用于渲染动态组件
+ slot：插槽，内容分发
+ template：能用作 HTML 标签的父元素，但不会渲染为任何标签

## Vue基础

### 1.安装

```html
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
```

### 2.模板语法

1）一次性插值   `v-once`

```html
<div id="app1">
		<p v-once>{{ message }}</p>
</div>
```

```javascript
new Vue({
    el: '#app1',
    data: {
        message: '一次性插值'
    }
})
```

2）显示原始 html `v-html`

```html
<div id="app2">
		<p>{{ rawHTML }}</p>
		<p><span v-html="rawHTML"></span></p>
</div>
```

```javascript
new Vue({
    el: '#app2',
    data: {
        rawHTML: '<span style="color:red;">This should be red.</span>'
    }
})
```

3）html 标签特性 `v-bind`

```html
<div id="app3">
		<button v-bind:disabled="isButtonDisabled">{{ name }}</button>
</div>
```

```javascript
new Vue({
    el: '#app3',
    data: {
        name: 'Submit',
        isButtonDisabled: true
    }
})
```

4）在 `{{ }}` 中嵌入 `javascript` 表达式

```html
<div id="app4">
		<p>{{ message.split('').reverse().join('') }}</p>
</div>
```

```javascript
new Vue({
    el: '#app4',
    data: {
        message: 'Hello Vue!'
    }
})
```

### 3.计算属性 `computed`

+ 每个计算属性不用在 `data` 中定义，计算属性名就是相应回调函数 `getter` 的返回值

+ 通过注入依赖数据，每当初始化渲染和依赖的数据发生改变时，计算属性会重新求值

+ 计算属性默认只有一个 `getter`，可以自行设置 `setter`

+ 计算属性包含在 `computed` 属性中，并且结果是**缓存**的
+ 不同于方法（methods），方法是不会缓存的，每次重新触发渲染时都会执行函数

**计算属性 & 侦听属性 & 方法**

```html
<div id="app">
		<p>firstName: <input type="text" v-model="firstName"></p>
		<p>lastName: <input type="text" v-model="lastName"></p>
		<!-- 只有 getter 的计算属性，数据是单向的 -->
		<p>fullName-1: <input type="text" v-model="fullName1"></p>
		<!-- watch 监听相应的属性，能实现双向数据 -->
		<p>fullName-2: <input type="text" v-model="fullName2"></p>
		<!-- 添加了 setter 的计算属性，也能实现双向数据 -->
		<p>fullName-3: <input type="text" v-model="fullName3"></p>

		<!-- 计算属性会缓存，打开控制台查看 console -->
		<p>{{ fullName1 }}</p>
		<p>{{ fullName1 }}</p>
		<p>{{ fullName1 }}</p>
		<!-- 方法不会缓存，打开控制台查看 console -->
		<p>{{ getFullName() }}</p>
		<p>{{ getFullName() }}</p>
		<p>{{ getFullName() }}</p>
</div>
```

```javascript
let vm = new Vue({
	el: '#app',
	data: {
		firstName: 'A',
		lastName: 'B',
		fullName2: 'A B'
	},
	computed: {
		fullName1: {
			get: function() {
				console.log('computed')
				return this.firstName + ' ' + this.lastName
			}
		},
		fullName3: {
			get: function() {
				return this.firstName + ' ' + this.lastName
			},
			set: function(val) {
				var names = val.split(' ')
				this.firstName = names[0]
				this.lastName = names[1]
			}
		}
	},
	watch: {
		firstName: function(val) {
			console.log('watch()')
			this.fullName2 = val + ' ' + this.lastName
		},
		lastName: function(val) {
			console.log('watch()')
			this.fullName2 = this.firstName + ' ' + val
		},
		fullName2: function(val) {
			console.log('watch()')
			let names = val.split(' ')
			this.firstName = names[0]
			this.lastName = names[1]
		}
	},
	methods: {
		getFullName() {
			console.log('methods')
			return this.firstName + ' ' + this.lastName
		}
	}
})
```

### 4.方法 `methods`

+ 方法 `methods` 要调用（方法名加 `()`），而计算属性不用
+ 方法是**不会缓存**的



### 5.侦听属性 `watch`





### 6.Class 与 Style 绑定

+ 使用 `v-bind` 强制数据绑定

+ 在自定义组件上添加 `class` 属性，会累加到组件根元素的 所有`class`，不会发生覆盖

1）Class 绑定

Demo：

```html
<!-- 对象语法 -->
<div id="app1" class="static"
		 v-bind:class="{ active: isActive, 'text-danger': hasError }">
</div>

<!-- 直接使用data的属性 classOobject -->
<div id="app2" class="static"
		 v-bind:class="classObject">
</div>

<!-- 绑定一个返回对象的计算属性 -->
<div id="app3" class="static"
		 v-bind:class="classObject">
</div>

<!-- 数组语法 -->
<div id="app4" class="static"
		 v-bind:class="[activeClass, { 'text-danger': hasError }]">
</div>

<!-- 使用三元表达式 -->
<div id="app5" class="static"
		 v-bind:class="[ isActive ? activeClass : '', errorClass]">
</div>
```

```javascript
var app1 = new Vue({
    el: '#app1',
    data: {
        isActive: true,
        hasError: false
    }
})
var app2 = new Vue({
    el: '#app2',
    data: {
        classObject: {
            isActive: false,
            'text-danger': true
        }
    }
})
var app3 = new Vue({
    el: '#app3',
    data: {
        isActive: false,
        hasError: false
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.hasError,
                'text-danger': this.hasError && this.error.type === 'fatal'
            }
        }
    }
})
var app4 = new Vue({
    el: '#app4',
    data: {
        hasError: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})
var app5 = new Vue({
    el: '#app5',
    data: {
    	isActive: true,
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})
```

2）绑定 Style

+ `v-bind:style` 会自动添加浏览器前缀 
+ 从 2.3.0 起可以为 `style` 绑定中的属性提供一个包含多个值的数组，这样写只会渲染数组中最后一个被浏览器支持的值

```html
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">
</div>
```

Demo：

```html
<!-- 内联style绑定 -->
<div id="app6" class="static"
		 v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }">Text
</div>

<!-- 绑定一个样式对象 -->
<div id="app7" class="static"
		 v-bind:style="styleObject">Text
</div>
<!-- 数组语法 
  <div :style="[baseStyle, overridingStyle]"></div>
-->

```

```javascript
var app6 = new Vue({
    el: '#app6',
    data: {
        activeColor: 'green',
        fontSize: 30
    }
})
var app7 = new Vue({
    el: '#app7',
    data: {
    	styleObject: {
    	    fontSize: '40px',
    	    backgroundColor: 'red',
    	    color: 'black'
    	}
    }
})
```

### 7.条件渲染

1）条件渲染的指令

+ v-if
+ v-else
+ v-else-if
+ v-show

2）Tips

+ `v-if` 定义的元素会根据数据而渲染，因此具有**较高的切换开销**
+ `v-show` 第一次选然后**始终保留在DOM中**，其实是设置了 CSS 属性 `display:none` ，因此具有较高的初始渲染开销
+ 所以需要频繁切换的组件可以用 `v-show`，而很少需要切换的组件可以用 `v-if`
+ `key` 特性可以用于渲染时尽可能高效地复用元素



### 8.列表渲染

**注意**

+ Vue 不能检测利用索引设置某个项的数组的变动，**需要使用数组变异方法**
+ Vue 不能检测改变数组的长度的数组的变动，**需要使用数组变异方法**
+ Vue 不能检测对象属性的添加或删除，但可以使用 `Vue.set(object, key, value)` 达到响应式的效果

**数组变异方法**

+ push()
+ pop()
+ shift()
+ unshift()
+ splice()
+ sort()
+ reverse()

**Tips**

+ `item in items` 的语法类似于 javascript 的 `for in`

+ 使用 `v-for` 指令，分隔符可以为 `of` 或 `in`
+ 对象的渲染可以传递两个（甚至三个？）参数 `(value, key, index)` ，但是要保证顺序
+ 结合 `template` 可以一次性渲染多个元素
+ `key` 特性可以用于渲染时尽可能高效地复用元素

1）渲染数组

```html
<div id="app1">
		<ul>
			<li v-for="(item, index) in items">
				{{ index }} - {{ item.message }}
			</li>
		</ul>
</div>
```

```javascript
var app1 = new Vue({
    el: '#app1',
    data: {
        items: [
            { message: 'first line' },
            { message: 'second line' }
        ]
    }
})
```

2）对象的渲染

```html
<div id="app2">
		<ul>
			<li v-for="(value, key, index) in obj">
				{{ index }} - {{ key }} : {{ value }}
			</li>
		</ul>
</div>
```

```javascript
var app2 = new Vue({
    el: '#app2',
    data: {
        obj: {
        	name: 'Alice',
        	age: 24,
        	sex: 'male'
        }
    }
})
```

3）绑定 `key` 特性使组件高效复用

```html
<div id="app3">
		<ul>
			<li v-for="(item, index) in items" :key="item.id">
				{{ index }} - {{ item.message }}
			</li>
		</ul>
</div>
```

```javascript
var app3 = new Vue({
    el: '#app3',
    data: {
        items: [
            { id: 1, message: 'one'},
            { id: 2, message: 'two'},
            { id: 3, message: 'three'}
        ]
    }
})
```

4）一个简单的例子

```html
<div id="app4">
		<template v-for="(p, i) in persons">
			<p>{{ p.name }}-{{ p.age }}
				<button @click="removePerson(i)">remove</button>
				<button @click="updatedPerson(i, {name: 'Anonymous', age: 18})">update</button>
			</p>
		</template>
</div>
```

```javascript
new Vue({
    el: "#app4",
    data: {
        persons: [
            { name: 'Alice', age: 24 },
            { name: 'Anna', age: 23 },
            { name: 'Bob', age: 25 }
        ]
    },
    methods: {
        removePerson(i) {
            this.persons.splice(i, 1)
        },
        updatedPerson(i, val) {
            this.persons.splice(i, 1, val)
            // 不能直接 this.persons[i] = val
            // 要使用 vue/原生js 指定数组变异方法
        }
    }
})
```

5）更简单的东西

```html
<div id="app5">
		<template v-for="i in 5">
			<p>p-{{i}}</p>
		</template>
</div>
```

```javascript
new Vue({
    el: '#app5'
})
```

6）还可以对数组进行筛选

```html
<div id="app6">
		<p>
			<button @click="resetAll">All</button>
			<button @click="showOdd">Odd</button>
			<button @click="showEven">Even</button>
		</p>
		<ul v-for="i in arr">
			<li>item-{{ i }}</li>
		</ul>
</div>
```

```javascript
new Vue({
    el: '#app6',
    data: {
        base: [1, 2, 3, 4, 5],
        arr: [1, 2, 3, 4, 5]
    },
    methods: {
        showOdd() {
            this.arr = this.base.filter(function(v) {
                return v % 2 === 1
            })
        },
        showEven() {
            this.arr = this.base.filter(function(v) {
                return v % 2 === 0
            })
        },
        resetAll() {
            this.arr = this.base
        }
    }
})
```



### 9.事件处理

+ `v-on` 指令，或用  `@` 代替，可附加修饰符
+ 可以传入一个事件对象
+ 事件修饰符
  + `.stop`：取消冒泡，相当于 `stopPropagation()`
  + `.prevent`：取消默认事件，相当于 `preventDeafult()`
  + `.capture`：
  + `.self`：
  + `.once`： **2.1.4新增**，只触发一次事件
  + `.passive`： **2.3.0新增**，能提升移动端的性能
+ 按键修饰符
  + `.enter`
  + `.tab`
  + `.delete`
  + `.esc`
  + `.space`
  + `.up`
  + `.down`
  + `.left`
  + `.right`
  + `.自定义修饰符`： **2.5.0新增**，自定义一切有效的修饰符
+ 系统修饰键  **2.1.0新增**
  + `.ctrl`
  + `.alt`
  + `.shift`
  + `.meta`： 
  + `.exact`：  **2.5.0新增**，组合键
  + 鼠标： **2.2.0新增**， `.left` /  `.right` /  `.middle`

### 10.表单输入绑定

**Tips**

+ `v-model` 指令，实现**双向数据绑定**
+ 单选类型（单选按钮/列表框）和文本（单行/多行文本），绑定至一个空字符串
+ 多选类型（复选框/多选列表框），绑定至一个数组中
+ 一个功能性切换的复选框，绑定至一个布尔值
+ 选择框 `v-model` 用在 `<select>` 元素中，而不是 `<option>`
+ 单选/多选按钮要有唯一的 `value` 属性，就是 `v-model` 绑定的数据要读取的值

**修饰符**

+ `.lazy`：输入框只会在 `input` （提交）时触发事件，而默认是在 `change` （改变）时触发事件
+ `.number`：自动将用户的输入值转为数值类型
+ `.trim`：自动过滤用户输入的首尾空白字符

1）文本框， **绑定至空字符串**：

```html
<div id="app1">
		<input v-model="message" type="" name="" placeholder="enter something">
		<p>Message is: {{ message }}</p>
</div>
```

```javascript
var app1 = new Vue({
  el: '#app1',
  data: {
    message: ''
  }
})
```

2）多行文本，**绑定至空字符串**：

```html
<div id="app2">
		<textarea v-model="message" type="" name="" placeholder="enter something"></textarea>
		<p>Multiline message is: </p>
		<p style="text-indent: 2em;">{{ message }}</p>
</div>
```

```javascript
var app2 = new Vue({
  el: '#app2',
  data: {
    message: ''
  }
})
```

3）复选框

单个复选框，**绑定至布尔值**，相当于一个确定按钮的作用：

```html
<div id="app3">
		<input type="checkbox" id="checkbox" v-model="checked">
		<label for="checkbox">Alice</label>
		<p>checked: {{ checked }}</p>
	</div>
```

```javascript
var app3 = new Vue({
  el: '#app3',
  data: {
    checked: false  // 不能绑定于空字符串
  }
})
```

多个复选框，**绑定至空数组**：

```html
<div id="app4">
		<input type="checkbox" id="jack" value="Jack" v-model="checkNames">
		<label for="jack">Jack</label>
		<input type="checkbox" id="anna" value="Anna" v-model="checkNames">
		<label for="anna">Anna</label>
		<input type="checkbox" id="alice" value="Alice" v-model="checkNames">
		<label for="alice">Alice</label>
		<input type="checkbox" id="john" value="John" v-model="checkNames">
		<label for="john">John</label>
		<br>
		<span>{{ checkNames }}</span>
</div>
```

```javascript
var app4 = new Vue({
  el: '#app4',
  data: {
    checkNames: []
  }
})
```

4）单选按钮， **绑定至空字符串**：

```html
<div id="app5">
		<input type="radio" value="One" id="one" v-model="picked">
		<label for="one">One</label>
		<input type="radio" value="Two" id="two" v-model="picked">
		<label for="two">Two</label>
		<input type="radio" value="Three" id="three" v-model="picked">
		<label for="three">Three</label>
		<br>
		<span>picked: {{ picked }}</span>
</div>
```

```javascript
var app5 = new Vue({
  el: '#app5',
  data: {
    picked: ''
  }
})
```

5）单选列表框， **绑定至空字符串**：

```html
<div id="app6">
		<select v-model="selected">
			<option disabled value="">请选择</option>
			<option>A</option>
			<option>B</option>
			<option>C</option>
		</select>
		<span>selected: {{ selected }}</span>
</div>
```

```javascript
var app6 = new Vue({
  el: '#app6',
  data: {
    selected: ''
  }
})
```

6）多选列表框， **绑定至空数组**：

```html
<div id="app7">
		<select multiple v-model="selected" style="width: 50px;">
			<option>A</option>
			<option>B</option>
			<option>C</option>
		</select>
		<span>selected: {{ selected }}</span>
</div>
```

```javascript
var app7 = new Vue({
  el: '#app7',
  data: {
    selected: []
  }
})
```

### 11.生命周期

**生命周期钩子(函数)**

+ `beforeCreate`：创建 vue 实例前
+ `created`：创建 vue 实例成功后，但挂载阶段还没开始，`$el` 属性目前不可见
+ `beforeMount`：挂载前，相关的 `render` 函数首次被调用；该钩子在服务器端渲染期间不被调用** 
+ `mounted`：挂载成功后，页面初始化，调用一次；但**该钩子在服务器端渲染期间不被调用**
+ `beforeUpdate`： 数据更新前，调用多次，这里适合在更新之前访问现有的 DOM，比如手动移除已添加的事件监听器；**该钩子在服务器端渲染期间不被调用，因为只有初次渲染会在服务端进行**
+ `updated`： 数据更新后，调用多次，在大多数情况下，你应该避免在此期间更改状态；**该钩子在服务器端渲染期间不被调用**
+ `beforeDestroy`： 销毁实例前，调用一次，**在这一步，实例仍然完全可用**；**该钩子在服务器端渲染期间不被调用**；**该钩子在服务器端渲染期间不被调用** 
+ `destroyed`：销毁实例后，调用一次
+ `activated`：`keep-alive` 组件激活时调用；**该钩子在服务器端渲染期间不被调用** 
+ `deactivated`： `keep-alive` 组件停用时调用；**该钩子在服务器端渲染期间不被调用** 
+ `errorCaptured`： 当捕获一个来自子孙组件的错误时被调用，此钩子可以返回 `false`以阻止该错误继续向上传播

**Tips**

+ 生命周期钩子(函数)自动绑定 `this` 上下文到实例中，因此**不能使用箭头函数**
+ 可分为五种生命周期钩子
  + 初始化显示：beforeCreate() / created() /  beforeMount() / mounted()
  + 更新显示：beforeUpdate() / updated()
  + 销毁实例：beforeDestroy() /  destroyed()
  + 激活组件：activated() / deactivated()
  + 捕获子组件错误：errorCaptured()

**生命周期图示**

![](https://cn.vuejs.org/images/lifecycle.png)



### 12.组件基础

**Tips**

+ 组件要先注册后使用，可以 **全局注册** 或 **局部注册**
+ 注册组件时 `data` 属性必须是**一个函数的返回值**（一个对象），才能保证其作用域的唯一性，避免组件复用时操纵同一份数据
+ 父组件可以通过 `props` 向子组件（模板元素）传递数据，但是必须在使用组件时 **强制绑定该数据至组件标签属性中**
+ **单个根元素**： 每个组件必须只有一个根元素
+ 子组件（模板元素）可以通过事件向父级组件发送消息，要使用 vue 内置的 `$emit` 方法，且 `$emit` 方法还能抛出一个值，这个值通过 `$event` 来访问
+ 可以在组件中使用 `v-model`  和插槽 `slot`
+ 动态组件使用 `component` 和 `is`

1）注册组件

```javascript
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">times: {{ count }}</button>'
})
var app1 = new Vue({ el: '#app1' })
```

```html
<div id="app1">
		<button-counter></button-counter>
		<button-counter></button-counter>
		<button-counter></button-counter>
</div>
```

2）向子组件传递数据

```html
<div id="app2">
		<blog-post title="1. Vue介绍和实例"></blog-post>
		<blog-post title="2. 模板语法"></blog-post>
		<blog-post title="3. 计算属性和侦听器"></blog-post>
</div>	
```

```javascript
Vue.component('blog-post', {
  props: ['title'],
  template: '<h3>{{ title }}</h3>'
})
var app2 = new Vue({ el: '#app2' })
```



## 过渡 & 动画

### 1.进入/离开 & 列表过渡

**Vue 操作DOM实现过渡/动画的方式**

+ 在 CSS过渡和动画中自动应用 class
+ 配合第三方 CSS 动画库，如 Animate.css
+ 在`过渡钩子函数`中使用原生 JavaScript 直接操作 DOM
+ 配合第三方 JavaScript 动画库，如 Velocity.js

**语法**

1. 使用 `<transition>` 包含要过渡的组件/标签，`<tansition>` 有5个可选属性
2. 创建 vue 实例，使用**条件渲染**需要过渡的组件/标签，实现状态切换，触发过渡动画

**过渡的类名**

+ `v-enter`：**定义进入过渡的开始状态**。在元素被插入之前生效，在元素被插入之后的下一帧移除。
+ `v-enter-active`：**定义进入过渡生效时的状态**。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
+ `v-enter-to`：**2.1.8版及以上**，**定义进入过渡的结束状态**。在元素被插入之后下一帧生效 (与此同时 `v-enter` 被移除)，在过渡/动画完成之后移除。
+ `v-leave`：**定义离开过渡的开始状态**。在离开过渡被触发时立刻生效，下一帧被移除。
+ `v-leave-active`：**定义离开过渡生效时的状态**。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
+ `v-leave-to`：**2.1.8版及以上**，**定义离开过渡的结束状态**。在离开过渡被触发之后下一帧生效 (与此同时 `v-leave` 被删除)，在过渡/动画完成之后移除。

![](https://cn.vuejs.org/images/transition.png)

**Tips**

+ 使用 `v-enter` 设置**进入前**的状态（需要过渡的组件渲染前的一帧）属性，使用 `v-leave-to` 设置**离开后**的状态（需要过渡的组件销毁的最后一帧）
+ 使用 `v-enter-active` 和 `v-leave-active` 设置整个 **进入/离开** 动画的过程：动画持续时间 `transition-duration`、延迟 `transition-delay`、时间曲线函数 `transition-timing-function`
+ `v-enter-to` 和 `v-leave` 尽量保证相等（否则状态切换时会有瞬间的**状态跳动**）；或者尽量不设置，因为这个状态保留为空时，会默认为元素的样式设置，否则也会有一个**状态跳动**
+ **不要对要过渡的元素使用行内样式**，这样不会触发过渡效果
+ 实现动画时：只需要设置 `v-enter-active` 和 `v-leave-active` 的 `animation` 属性就可以达到效果了，因为自定义动画已经包含了元素的进入/离开的样式

**过渡-Demo**

```html
<div id="app1">
		<button @click="show=!show">Fade</button>
		<transition name="fade" mode="in-out">
			<p v-if="show">fadeIn and fadeOut</p>
		</transition>
</div>
```

```css
.fade-enter, .fade-leave-to {
	opacity: 0;
	font-size: 10px;
	color: blue;
}
.fade-enter-to, .fade-leave {
	/* 什么都不做，使用元素渲染完成时的样式 */
}
.fade-enter-active, .fade-leave-active {
	transition: all 2s;
}
/* 定义元素渲染完成时的样式：
   不要使用行内样式，否则不会触发过渡效果
*/
p {
	color: red;
}
```

```javascript
new Vue({
	el: '#app1',
	data: {
		show: true
	}
})
```

**动画-Demo**

```html
<div id="app2">
		<button @click="show=!show">Toggle show</button>
		<transition name="bounce">
			<p v-if="show">{{ message }}</p>
		</transition>
</div>
```

```css
.bounce-enter, .bounce-leave-to {
	/* 什么也不做，动画中已经定义了元素的进入/离开样式 */
}
.bounce-enter-active {
	animation: bounce-in 1s;
}
.bounce-leave-active {
	animation: bounce-out 1s;
}
.bounce-enter-to, .bounce-leave {
	/* 什么也不做，动画中已经定义了元素的进入/离开样式 */
}
@keyframes bounce-in {
	0% { transform: scale(0); }
	50% { transform: scale(1.2); }
	100% { transform: scale(1); }
}
@keyframes bounce-out {
	0% { transform: scale(1); }
	50% { transform: scale(1.2); }
	100% { transform: scale(0); }
}
```

```javascript
new Vue({
	el: '#app2',
	data: {
		show: true,
		message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.'
	}
})
```

### 2.使用第三方 CSS 动画库

**Tips**

+ 使用上述六个自定义过渡的类名，用于设置第三方库的 CSS 动画，但是前面没有 `v-` 标识，且他们的优先级优于普通的类名
+ 类名定义在 `<transition>` 标签中，并不是子元素
+ 此时 `<transition>` 标签的 `name` 属性不是必要的，它的命名与引入的第三方库无关

**Demo** 

```html
<!-- 引入 Animate.css -->
<!--
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css">
-->
<div id="app3">
		<button @click="show=!show">Toggle</button>
		<transition name="animate"
			enter-active-class="animated bounceInRight"
			leave-active-class="animated bounceOutRight">
			<p v-if="show">Animate.css</p>
		</transition>
</div>
```

```javascript
new Vue({
	el: '#app3',
	data: {
		show: true
	}
})
```

### 3.JavaScript 钩子

**语法**

```javascript
// ...
methods: {
  // --------
  // 进入中
  // --------

  beforeEnter: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  enter: function (el, done) {
    // ...
    done()
  },
  afterEnter: function (el) {
    // ...
  },
  enterCancelled: function (el) {
    // ...
  },

  // --------
  // 离开时
  // --------

  beforeLeave: function (el) {
    // ...
  },
  // 当与 CSS 结合使用时
  // 回调函数 done 是可选的
  leave: function (el, done) {
    // ...
    done()
  },
  afterLeave: function (el) {
    // ...
  },
  // leaveCancelled 只用于 v-show 中
  leaveCancelled: function (el) {
    // ...
  }
}
```

**Tips**

+ 当只用 JavaScript 过渡的时候，**在 enter 和 leave 中必须使用 done 进行回调**。否则，它们将被同步调用，过渡会立即完成。
+ 推荐对于仅使用 JavaScript 过渡的元素添加 `v-bind:css="false"`，Vue 会跳过 CSS 的检测。这也可以避免过渡过程中 CSS 的影响。
+ 可以与 `Velocity.js` 一起使用，实现各种动画效果

### 4.初始渲染的过渡

**使用 `appear` 特性**

&emsp;添加 `appear` 特性在 `<transition>` 标签中，并可以通过两种方法设置初始渲染的过渡：

+ 自定义 CSS 类名
  + `appear-class`
  + `appear-active-class`
  + `appear-to-class`
+ 自定义 JavaScript 钩子
  + `before-appear`
  + `appear`
  + `after-appear`
  + `appear-cancelled`



### 5.过渡模式

+ `in-out`：新元素先进行过渡，完成之后当前元素过渡离开
+ `out-in`：当前元素先进行过渡，完成之后新元素过渡进入



### 6.多个组件的过渡

+ 使用动态组件 `component`

```html
<div id="app5">
		<label for="viewA">
			<input id="viewA" type="radio" value="v-a" v-model="view">A
		</label>
		<label for="viewB">
			<input id="viewB" type="radio" value="v-b" v-model="view">B
		</label>
		<transition name="inOut" mode="out-in">
			<component :is="view"></component>
		</transition>
</div>
```

```css
.inOut-enter, .inOut-leave-to {
	opacity: 0;
}
.inOut-enter-active, .inOut-leave-active {
	transition: all .3s;
}
```

```javascript
new Vue({
	el: '#app5',
	data: {
		view: 'v-a'
	},
	components: {
		'v-a': {
			template: '<div>componentA</div>'
		},
		'v-b': {
			template: '<div>componentB</div>'
		}
	}
})
```

### 7.列表的过渡和 FLIP

**列表过渡的特点**

+ 使用 `<transition-group>` 组件和 `v-for` 渲染
+ 使用 `move` 特性实现 `FLIP` 动画队列
+ `<transition-group` 不同于 `<transition>` 的渲染结果，它会以一个真实元素渲染

**实现 FLIP 动画方法**

+ 为 `<transition-group>` 添加名为 `v-move` 的 class 样式：`transition: transform 1s;`
+ 为 `<transition-group>` 的子元素 `<span>` 添加 class 样式：`transition: transform 1s;`

**Tips**

+ 要使删除元素时也平滑过渡，要设置定位属性 `position: absolute;`，一般在 `v-leave-active`  class 的样式中设置
+ 使用 FLIP 过渡的元素**不能设置**为 `display: inline` 。作为替代方案，可以设置为 `display: inline-block` 或者放置于 flex 中

**Demo**

```html
<div id="app6">
		<button @click="addItem()">add</button>
		<button @click="removeItem()">remove</button>
		<button @click="shuffleItem()">shuffle</button>
		<button @click="sortItem()">sort</button>
		<br>
		<transition-group name="list">
			<span v-for="item in items" :key="item" class="list-item">{{ item }}</span>
		</transition-group>
</div>
```

```css
.list-item {
 	/* 实现 FLIP 动画 */
	transition: transform 1s;	
	display: inline-block;
	margin-right: 10px;
}
.list-enter, .list-leave-to {
	opacity: 0;
	transform: translateY(20px);
}
/*使离开的时候也平滑*/
.list-leave-active {
	position: absolute;
}
```

```javascript
new Vue({
	el: '#app6',
	data: {
		items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
		nextNum: 10
	},
	methods: {
		randomIndex() {
			return Math.floor(Math.random() * this.items.length)
		},
		addItem() {
			this.items.splice(this.randomIndex(), 0, this.nextNum++)
		},
		removeItem() {
			this.items.splice(this.randomIndex(), 1)
		},
		shuffleItem() {
			this.items = _.shuffle(this.items)
		},
		sortItem() {
			this.items.sort((a, b) => a - b)
		}
	}
})
```

### 8.状态过渡





