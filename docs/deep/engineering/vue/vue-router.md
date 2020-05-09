## 路由配置详解

**router.js:**
```js
import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '@/views/user/index'

Vue.use(VueRouter)  // 显式声明安装路由

// 可配置路由选项
const constantRoutes = [
	{
		path: '/user/:id',  // 动态路由匹配
		name: 'user', // 路由命名，命名后可用于路由跳转或重定向
		component: User, // 当前路由路径将渲染的组件
		children: [ // 嵌套子路由，可配置属性与顶层的 constantRoutes 一样
			{
				path: 'post',
				component: () => import('@/views/post/index'), // 路由懒加载
				meta: { field: 'fieldVal' }, // 路由元信息
			}
		]
		props: true, // 传参到组件，值还可以是对象或函数
		redirect: '/', // 重定向，值还可以是一个描述路由的对象或函数
		alias: '/users', // 别名，当访问该别名时相当于访问 path 配置的路径
		beforeEnter: (to, from ,next) => { 
			// 路由独享守卫
		}
	},
	{
		path: '/post',
		components: { // 命名视图，适用于多个路由出口的情况，能够展示多个视图
			default: Main, // 默认，当没有在路由组件设置 name 属性值时
			nav: A,
			help: B,
		}
	}
]

// 创建路由实例
const router = new VueRouter({
	// 路由模式，可选：history/hash
	mode: 'history',
	// 
	base: process.env.BASE_URL,
	// 路由滚动行为
	scrollBehavior: () => ({ y: 0 }),
	// 引用路由选项
 	routes: constantRoutes
})

// 全局路由守卫/钩子
router.beforeEach((to, from, next) => {
	// 全局前置守卫，异步解析执行，在所有守卫 resolve 完成之前一直处于等待中
})

router.beforeResolve((to, from, next) => {
	// 全局解析守卫，和 beforeEach 类似
	// 区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫被调用
})

router.afterEach((to, from) => {
	// 全局后置钩子，没有 next 可调用
	// 不会再改变导航本身
})

export default router // 默认导出，当创建 Vue 实例时导入并全局注册
```

**备注：**
+ 路由守卫有三种：全局导航守卫、路由独享守卫、组件内守卫


## 组件内守卫

**任一组件内：**
```js
export default {
	beforeRouteEnter (to, from, next) {
		// 在渲染该组件的对应路由被 confirm 前调用
		// 不能获取组件实例 this，因为当守卫执行前，组件实例还没被创建
		// 但是可以使用以下方式添加回调：
		next(vm => {
			// 通过 vm 访问组件实例
		})
	},

	beforeRouteUpdate (to, from, next) {
		// 在当前路由改变且该组件被复用时调用
		// 可以访问组件实例 this
		// 使用场景：动态路由匹配为 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候
	},

	beforeRouteLeave (to, from, next) {
		// 导航离开该组件的对应路由时调用
		// 可以访问组件实例 this
		// 通常用来禁止用户在还未保存修改前突然离开，可以通过 next(false) 来取消：
		const answer = window.confirm('文件尚未保存，确认离开？')
		if (answer) {
			next()
		} else {
			next(false)
		}
	},
}
```

**导航解析顺序：**
1. 导航被触发
2. 在失活的组件里调用 beforeRouteLeave 守卫
3. 调用全局的 beforeEach 守卫
4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)
5. 在路由配置里调用 beforeEnter
6. 解析异步路由组件
7. 在被激活的组件里调用 beforeRouteEnter
8. 调用全局的 beforeResolve 守卫 (2.5+)
9. 导航被确认
10. 调用全局的 afterEach 钩子
11. 触发 DOM 更新
12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数



## 编程式导航

**`<router-link>` 组件用于声明配置路由的跳转：**
```html
<router-link to='/some/path'>
```

**编程式的导航能够实现相同的效果：**
|编程式|声明式|
|-|-|
|`this.$router.push({ '/some/path' })`|`<router-link to='/some/path'>`|
|`this.$router.replace( { '/some/path' })`|`<router-link to='/some/path' replace>`|
|`this.$router.go(n)`|无|

**备注：**
+ 三个 API 都是模仿 window.history API 编写的
+ push 和 replace 的唯一区别是，replace 是替换当前路由历史而不是添加一条记录


## 过渡特效

使用 `<transition>` 组件包裹：
```html
<transition name="fade">
  <router-view></router-view>
</transition>
```

还可以监听路由变化，根据不同的路由定制不同的效果：
```js
watch: {
  '$route' (to, from) {
    const toDepth = to.path.split('/').length
    const fromDepth = from.path.split('/').length
    this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
  }
}
```

## 数据获取

**导航完成前获取：**
```js
export default {
  data () {
    return {
      post: null,
      error: null
    }
  },
  beforeRouteEnter (to, from, next) {
    getPost(to.params.id, (err, post) => {
      next(vm => vm.setData(err, post))
    })
  },
  // 路由改变前，组件就已经渲染完了
  // 逻辑稍稍不同
  beforeRouteUpdate (to, from, next) {
    this.post = null
    getPost(to.params.id, (err, post) => {
      this.setData(err, post)
      next()
    })
  },
  methods: {
    setData (err, post) {
      if (err) {
        this.error = err.toString()
      } else {
        this.post = post
      }
    }
  }
}
```

**导航完成后获取：**
```js
export default {
  data () {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created () {
    // 组件创建完后获取数据，此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
      getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    }
  }
}
```

## History 模式



## 技巧和注意事项

+ 区分 `route` 和 `router`
	+ `this.$route` 是记录当前路由信息的一个属性，属于众多 `routes` 中的一个
	+ `this.$router` 是注入到 `Vue` 实例中的全局 `Router` 实例，用于控制所有路由

+ 路由模块拆分
```js
// 当路由配置选项过多时，可以将其拆分到不同的文件中，然后再在主文件中引入使用

// 目录结构
// |-router\
// 	|-modules\
// 		|-user.js
// 		|-cart.js
// 		|-products.js
// 	|-index.js

// index.js

import Vue from 'vue'
import VueRouter from 'vue-router'

import userRoute from './modules/user'
import cartRoute from './modules/cart'
import productsRoute from './modules/products'

import Layout from '@/layout/'

export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Layout
		},
		userRoute,
		cartRoute,
		productsRoute
	]
})
```