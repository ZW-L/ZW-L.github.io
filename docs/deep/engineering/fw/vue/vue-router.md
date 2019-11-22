## vue-router



##  1.安装使用

两种使用方式。

1）直接引入使用，需先引入 vue

```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-router.js"></script>
```

2）安装使用

```shell
npm install vue-router
```

在模块化工程中，还需要通过 `Vue.use()` 安装路由功能

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
```

Tips

+ 在单文件组件中配置路由时，不需要引入相关路由，直接配置 `<router-link>`  和 `<router-view>` 既可。但是，需要在**路由配置文件**中引入相关路由，并且配置相应的路径参数

## 2.基础路由 & 嵌套路由

1）基础路由

路由配置文件 index.js：

```javascript
// 引入相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入自定义路由组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// 注册使用路由组件
Vue.use(VueRouter)

routes: [
		{
			path: '/',		// 设置默认路由，重定向至 /about，页面打开自动跳转
			redirect: '/about'
		},
		{
			path: '/about',	// 基础路由 1
			component: About
		},
		{
			path: '/home',	// 基础路由 2
			component: Home,
		}
]
```

组件内：

```html
<!-- App.vue -->
<div>
	<router-link to="/about" class="btn btn-default btn-router">About</router-link>
	<router-link to="/home" class="btn btn-default btn-router">Home</router-link>
	<!-- 路由出口 -->
	<router-view></router-view>
	<!-- 或者 
		<router-view/>
	-->
</div>
```

2）嵌套路由

&emsp;可以在路由配置参数中添加 `children` 属性，以同样方式指定子路由

路由配置文件 index.js：

```javascript
// 引入相关模块
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入自定义路由组件
import Home from '../views/Home.vue'
import About from '../views/About.vue'
// 引入需要配置至 Home 下的子路由组件
import News from '../views/News.vue'
import Message from '../views/Message.vue'
// 注册使用路由组件
Vue.use(VueRouter)

routes: [
		{
			path: '/',		// 设置默认路由，重定向至 /about，页面打开自动跳转
			redirect: '/about'
		},
		{
			path: '/about',	// 基础路由 1
			component: About
		},
		{
			path: '/home',	// 基础路由 2
			component: Home,
      children: [			// 嵌套路由
        {
          path: 'news',		// 第一种定义 path 的方式
          component: News
        },
        {
          path: '/home/message',	// 第二种定义 path 的方式
          component: Message
        }
      ]
		}
]
```

组件内：

```html
<!-- App.vue -->
<div>
	<router-link to="/about" class="btn btn-default btn-router">About</router-link>
	<router-link to="/home" class="btn btn-default btn-router">Home</router-link>
	<!-- 路由出口 -->
	<router-view></router-view>
</div>

<!-- Home.vue -->
<div>
		<h3>Home</h3>
		<router-link to="/home/news">News</router-link>
		<router-link to="/home/message">Message</router-link>
		<!-- 路由出口 -->
		<router-view></router-view>
	</div>
```

**Tips**

+ 路由路径中的 `/` 始终指向于路由根目录，因此，嵌套路由的 `path` 有两种定义的方式

## 3.动态路由匹配

1）可以根据不同的 `params` 参数渲染出不同的路由路径

2）Demo

路由配置文件 index.js：

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../view/About.vue'
import Home from '../view/Home.vue'
import User from '../view/User.vue'

Vue.use(VueRouter)

export default new VueRouter({
	routes: [
		{
			path: '/',
			redirect: '/about'
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/home',
			component: Home,
			children: [
				{
					path: '/home/:user',	// 动态匹配的路由
					component: User
				}
			]
		}
	]
})
```

组件内：

```html
<!-- App.vue -->
<div>
		<router-link to="/about">About</router-link>
		<br>
		<router-link to="/home">Home</router-link>

		<router-view></router-view>
</div>

<!-- Home.vue -->
<div>
		<h3>Home router</h3>
		<router-link to="/home/alice">/home/user</router-link>
		<span> Tips: click will link to {{$route.params.user}}-route.</span>
		<br>

		<router-view></router-view>
</div>

<!-- User.vue -->
<div>
		<h3>User router</h3>
		<p>Now user is {{$route.params.user}}.</p>
</div>
```

**Tips**

+ 通过**动态路由匹配**，可以为相同目录下的不同选项动态设置不同的路由路径
+ 通过**路径参数**指定的内容，都会包含在相应的 `$route.params` 中，在子路由和父路由都能访问到这个参数
+ 当使用路由参数时，原来的路由组件实例会被**复用**，因此**组件的生命周期钩子不会被调用**；要想实现响应式变化，需要使用 `watch` 监听 `$route` 对象

```javascript
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}
```

+ 或者使用**导航守卫**

```javascript
const User = {
  template: '...',
  beforeRouteUpdate (to, from, next) {
    // react to route changes...
    // don't forget to call next()
  }
}
```

##  4.命名路由

1）路由配置时允许给相应的路由额外配置一个 `name` 属性，代表了路由名称

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',			// 路由的名称
      component: User
    }
  ]
})
```

2）然后给 `<router-link>` 的 `to` 属性传入对象

```html
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
```

该种方式会跳转到相应 `name` 名称的路由路径下，并且可以接受 `params` 参数

等同于  `router.push()` ：

```javascript
router.push({ name: 'user', params: { userId: 123 }})
```

## 5.命名视图

1）命名视图用于同级路径下展示多个多个试图，即配置多个路由出口 `<router-view>`

```html
<router-view class="view one"></router-view>
<router-view class="view two" name="a"></router-view>
<router-view class="view three" name="b"></router-view>
```

2）配置时，`component` 选项要添加 s ，变成 `components`

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Foo,	// 默认出口
        a: Bar,				// 匹配 name="a" 的路由视图
        b: Baz				// 匹配 name="b" 的路由视图
      }
    }
  ]
})
```

**Tips**

+ 通过**路由视图**和**嵌套路由**可以配置复杂的路由

## 6.路由组件传参

1）在路由配置文件中，可以添加一个 `props` 属性，用于指定是否将动态路由匹配中的 `route.params` 参数设置为组件属性（默认为false？）

```javascript
// 路由配置文件 index.js
routes: [
    { 
    	path: '/user/:id', 
    	component: User, 
      props: true 	// 这样在子组件中接受 props 就可以使用 ':id' 获取的参数了
    }
]

// 组件内
props: ['id']

// 此外，还可以通过强制数据绑定在 <router-view> 标签上，在子路由组件中接受 props
```

2）布尔模式

```javascript
props: true // 指定 route.params 为组件属性
props: false	// 这样组件就不能获取到属性
```

3）对象模式

```javascript
const router = new VueRouter({
  routes: [
    { 
      path: '/promotion/from-newsletter', 
      component: Promotion, 
      props: { newsletterPopup: false } 
    }
  ]
})
```

4）函数模式

```javascript
const router = new VueRouter({
  routes: [
    { 
      path: '/search', 
      component: SearchUser, 
      props: (route) => ({ query: route.query.q }) 
    }
  ]
})
```



## 7.编程式路由导航

1）除了使用 `<router-link>` 的 `to` 属性指定路由跳转，还可以使用 `router` 的实例方法，通过绑定事件来实现路由跳转。实例方法：

+ ## `router.push(location, onComplete?, onAbort?)`：向 history 栈添加一个新纪录

+ ## `router.replace(location, onComplete?, onAbort?)` ：替换当前的 history 记录

+ ## `router.go(n)` ：跳转至前几个/后几个 history 记录

2）声明式和编程式的对比

|             声明式              |       编程式        |
| :-----------------------------: | :-----------------: |
|     `<router-link :to="...">`     |  router.push(...)   |
| `<router-link :to="..." replace>` | router.replace(...) |
|                `/`               |    router.go(n)     |

**Tips**

+ 区分 `push` 和 `replace`，两者的区别为，`replace` 不会保存新纪录(而是替换)，当点击后退按钮时，两者返回的位置不一样

##  8.重定向 & 别名

1）**重定向**用于把某个路径下的视图定位至另一个路由路径下

例如初始化视图时，将根目录重定向至某一视图

```javascript
routes: [
		{
			path: '/',
			redirect: '/about'	// 将根目录重定向至 '/about' 路由下
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/home',
			component: Home,
		}
]
```

也可以是一个命名路由

```javascript
const router = new VueRouter({
  routes: [
    { 
      path: '/a', 
      redirect: { name: 'foo' }	// 重定向至 name='foo' 的路由下
    }
  ]
})
```

还可以是一个方法



2）**别名**将一个路由的路径映射为另一个名字，但是路由匹配规则不变。使用别名，可以自由地映射任意的 URL，不再受限于路由配置的结构

```javascript
const router = new VueRouter({
  routes: [
    { 
    	path: '/a', 
    	component: A, 
    	alias: '/b' 	// 访问 '/a' 时，路径参数显示为 '/b'
    }
  ]
})
```