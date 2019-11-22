

## 1.过滤器

&emsp;Vue 能自定义**过滤器**，过滤器可以用在 **双花括号插值** 和 `v-bind表达式`（2.1.0+）中。由管道 `|` 符号指示：

```html

```

**Tips**

+ 过滤器可以串联
+ 过滤器可以接受参数



### 1.全局定义过滤器

```javascript
Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

new Vue({
  // ...
})
```

### 2.局部定义过滤器

```javascript
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```



## 2.自定义指令



### 1.全局注册指令

```javascript
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

**注意**：注册指令名不包含 `v-` 前缀

### 2.局部注册指令

```javascript
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

### 3.钩子函数

+ `bind`：
+ `inserted`：
+ `update`：
+ `componentUpdated`：
+ `unbind`：

### 4.钩子函数参数

+ `el`：
+ `binding`：
  1. `name`：
  2. `value`：
  3. `oldValue`：
  4. `expression`：
  5. `arg`：
  6. `modifiers`：
+ `vnode`：
+ `oldVnode`：



## 3.插件

### 1.使用插件 `Vue.use()`

```javascript
// 调用 `MyPlugin.install(Vue)`
Vue.use(MyPlugin)

new Vue({
  //... options
})

// 也可以传入一个选项对象
Vue.use(MyPlugin, { someOption: true })
```

### 2.开发插件 `install`

这个方法的第一个参数是 `Vue` 构造器，第二个参数是一个可选的选项对象：

```javascript
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或属性
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```