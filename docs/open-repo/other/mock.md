---
sidebarDepth: 2
---

## 文档和教程

+ [mock](https://github.com/nuysoft/Mock) 用于前端数据模拟，可以简单地生成随机数据，或者封装一个功能丰富的本地 api 服务
+ [Wiki](https://github.com/nuysoft/Mock/wiki)
+ [示例](http://mockjs.com/examples.html)


## 安装

```
npm install mockjs
```


## 解析

### 库解析

+ mockjs 默认暴露一个 Mock 对象
+ Mock 对象下主要有以下属性：
  + `Mock.mock()`：模拟数据
  + `Mock.setup()`：配置拦截 Ajax 请求时的行为，目前仅支持 timeout 选项
  + `Mock.Random`：工具类，包含生成随机数据的方法，这些方法都有一个与之对应的占位符使用方式

```js
const Mock = require('mockjs')
const Random = Mock.Random

Mock.setup({
  timeout: 400 // 400ms 后响应返回数据
  // timeout: '200-600' // 200～600ms 后响应返回数据
})

Mock.mock({
  name: Random.name(),
  city: Random.city(true)
})

```

### 常用占位符列表

|占位符|对应 Random 方法|描述|
|-|-|-|
||||
||||
||||




## 使用技巧

### 扩展 Random 方法

+ 当 Random 提供的数据数据方法不适用时，可以对其进行扩展
```js
// 对数组的操作只能随机选取一个元素
Mock.mock({
  'tag|1': ['家用', '超薄', '智能', '补贴', '新品', '高性能']
})

// 扩展：随机选取数组的两个元素
Mock.Random.extend({
  tags () {
    let list = ['家用', '超薄', '智能', '补贴', '新品', '高性能']
    const t1 = this.pick(list)
    list = list.filter(v => v !== t1)
    const t2 = this.pick(list)

    return [t1, t2]
  }
})

Mock.mock({
  'tags': '@tags()'
})
```


### 封装 mock-server

+ 目录
```
|-- mock\
  |-- server.js        # 启动本地服务
  |-- user.js          # 用户路由
  |-- product.js       # 商品路由
```

+ user.js
```js
const Mock = require('mockjs')

const users = []
let count = 1000
// 生成定量的随机数据
for (let i = 0; i < count; i++) {
  users.push(Mock.mock({
    id: String('@id'),
    name: '@cname',
    nickname: '@string',
    tel: '@id',
    register_date: '@datetime',
    last_login_date: '@datetime',
    email: '@email',
    'vip|1': ['大众会员', '高级会员', '超级会员'],
    'sex|1': ['male', 'female'],
    introduction: '@string'
  }))
}

module.exports = [{
    url: '/emall/user/list',
    method: 'get',
    response: (query) => { /* 书写响应逻辑及返回数据 */ }
  }, {
    url: '/emall/user/detail',
    method: 'get',
    response: (query) => { /* 书写响应逻辑及返回数据 */ }
  }, {
    url: '/emall/user/add',
    method: 'post',
    response: (data) => { /* 书写响应逻辑及返回数据 */ }
  }, {
    url: '/emall/user/update',
    method: 'post',
    response: (data) => { /* 书写响应逻辑及返回数据 */ }
  }, {
    url: '/emall/user/delete',
    method: 'delete',
    response: (data) => { /* 书写响应逻辑及返回数据 */ }
  }]

```

+ product.js
```js
const Mock = require('mockjs')

// 扩展 Mock
Mock.Random.extend({
  tags () {
    let list = ['家用', '超薄', '智能', '补贴', '新品', '高性能']
    const t1 = this.pick(list)
    list = list.filter(v => v !== t1)
    const t2 = this.pick(list)
    return [t1, t2]
  }
})

const products = []
let count = 1000
// 生成定量的随机数据
for (let i = 0; i < count; i++) {
  products.push(Mock.mock({
    'index|+1': 1,
    name: '@string',
    create_date: '@datetime',
    'id|9000000000-9999999999': 1,
    'category|1': ['手机', '电脑', '化妆品'],
    tags: '@tags()',
    onsale: '@boolean',
    thumbnail: '@image("60x100", "#4A7BF7", "#FFF", "Mock")'
  }))
}

module.exports = [{
    url: '/emall/product/list',
    method: 'get',
    response: (query) => { /* 书写响应逻辑及返回数据 */ }
  }, {
    url: '/emall/product/detail',
    method: 'get',
    response: (query) => { /* 书写响应逻辑及返回数据 */ }
  }, {
    url: '/emall/product/add',
    method: 'post',
    response: (data) => { /* 书写响应逻辑及返回数据 */ }
  }, {
    url: '/emall/product/update',
    method: 'post',
    response: (data) => { /* 书写响应逻辑及返回数据 */ }
  }, {
    url: '/emall/product/delete',
    method: 'delete',
    response: (data) => { /* 书写响应逻辑及返回数据 */ }
  }]

```

+ server.js
```js
const express = require('express')
const bodyParser = require('body-parser')

const users = require('./user')
const products = require('./product')
const mocks = [
  ...users,
  ...products
]

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

for (const i of mocks) {
  if (i.method === 'get') {
    app.get(i.url, (req, res) => {
      res.json(i.response(req.query))
    })
  } else {
    app.use(i.url, (req, res) => {
      res.json(i.response(req.body))
    })
  }
}

app.listen(8081, () => {
  console.log('Mock server is running at http://localhost:8081')
})

```

+ 启动服务
```sh
# 方式1：直接在终端启动
cd mock && node server

# 方法2：配置 npm 脚本
# 在 package.json 添加一行
"server:mock": "cd mock && node server"
# 再在命令行启动
npm run server:mock
```

::: tip 此外，在 Vue 中使用时还要配置代理服务器：
```js
// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/mock': {
        target: 'http://localhost:8081',
        pathRewrite: { '^/mock': '' }
      }
    }
  }
}
```
:::


## 注意事项

