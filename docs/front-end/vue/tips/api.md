## 简介

+ 参考[Vue API 管理](https://juejin.im/post/6844904154574356493#heading-4)


## 分模块按需引入

+ 目录
```
|-- api\
  |-- user.js
  |-- order.js
  |-- ...
  |-- index.js
```
+ 各模块管理相关的请求
```js
import axios from 'axios'

export function login (data) {
  return axios.post({
    url: '/mock/emall/user/login',
    data
  })
}

export function logout () {
  return axios.post({
    url: '/mock/emall/user/logout',
  })
}

export function getUserInfo (token) {
  return axios.get({
    url: '/mock/emall/user/info',
    params: { token }
  })
}
```
+ 在 `index.js` 中组织导出
```js
export * from './user.js'
export * from './order.js'
```
+ 使用
```js
import { getUserInfo } from '@/api'

getUserInfo('123').then(res => {
  console.log(res.data)
})
```




## 挂载至 Vue 原型

+ 方法1：在 main.js 中挂载
```js
import * as api from '@/api'

Vue.prototype.$api = api
```

+ 方法2：通过插件方式安装
```js
// src/api/index.js
export default {
  install (Vue) {
    Vue.prototype.$api = api
  }
}

// main.js
import * as api from '@/api'

Vue.use(api)
```

+ 使用
```js
this.$api.getUserInfo('123')
  .then(res => {
    console.log(res)
  })
```
