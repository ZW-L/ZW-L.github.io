## 安装

```js
npm i express
```

## 使用

```js
const express = require('express')

const app = express()

app.get('/', function(req, res) {
  res.set('Content-Type', 'text/plain')
  res.end('Hello World!')
})
app.listen(3000, function() {
  console.log('Server is listening at http://127.0.0.1:3000/')
})
```

## 配置路由
&emsp;&emsp;express 有以下几种定义路由的方式：
+ app.all(path, [middleware], callback)：响应所有指定路径的请求，不管是不是 HTTP 方法
+ app.get(path, [middleware], callback)：响应 GET 请求
+ app.post(path,[middleware],  callback)：响应 POST 请求

&emsp;&emsp;path 参数能用以下几种方法设置：
+ 查询字符串传递参数：处理类似 `http:\\127.0.0.1:3000\?name=Anna?age=20` 的 URL 请求
+ POST 传递参数：在 Web 表单提交的参数
+ 正则表达式匹配参数：`app.get('/\/post|\/get/', callback)` 将响应 `/post` 和 `/get` 两个页面
+ 定义匹配 id 参数：`app.get('/home/:userId', callback)` 将响应 `/home/Anna` 和 `/home/Alice` 等页面



## Request

&emsp;&emsp;[Express Request](http://www.expressjs.com.cn/4x/api.html#req) 提供了一些属性和方法。


## Response

&emsp;&emsp;[Express Request](http://www.expressjs.com.cn/4x/api.html#res) 提供了一些属性和方法。


## 响应头

+ res.set(field [, value])：设置响应头
+ res.get(field)：获取响应头

## 设置响应状态

+ res.status(code)：设置响应状态

## 发送响应

+ res.send([body])：发送响应，body 可以是 String 或 Buffer 对象

## 发送 JSON 响应

+ res.json([body])
+ res.jsonp([body])

## 发送文件

+ res.sendFile(path [, options] [, fn])

## 发送下载响应

+ res.download(path [, filename] [, options] [, fn])

## 重定向响应

+ res.redirect([status,] path)


## 模板引擎

&emsp;&emsp;[Express Application](http://www.expressjs.com.cn/4x/api.html#app) 提供相关的属性和方法：
+ app.locals：加入本地 locals 对象，会存在于整个应用的生命周期，而且可以在模板文件直接使用。
+ app.set('views', viewsPath)：设置模板文件的路径
+ app.set('view engine', engineName)：设置模板引擎
+ app.engine(engineName, [callback])：处理模板扩展名，注册模板引擎
+ app.render(view, [locals], callback)：渲染视图

**使用 jade**：
```
npm install jade
```

**../views/home.jade**：
```jade
doctype html5
html 
  head
    title="Jade Template"
  body
    h1 Using Jade Template
    ul
      li Hello #{name}
      li Hello #{age}
```

**server.js**：
```js
const express = require('express')

const app = express()
app.set('views', './views')
app.set('view engine', 'jade')

app.locals.name = 'Anna'
app.locals.age = 22

app.get('/', function(req, res) {
  res.render('home')
})
app.listen(3000, function() {
  console.log('Server is listening at http://127.0.0.1:3000/')
})
```


## 了解中间件
&emsp;&emsp;中间件能用来进行预处理，快速地提供更多的功能。使用中间件需要先安装：
```j
npm i body-parser
```

1.中间件使用语法：
```js
app.use([path], middleware, [middleware, ...])
```
+ path：使用中间件的路径，可以是全局，也可以是单个路由
+ middleware：中间件函数，内部形式为 `function(req, res, next) { }`
+ middleware 可以使用多个，但是某些中间件使用有严格顺序

2.全局使用中间件：
```js
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser())
```

3.单个路由使用中间件
```js
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use('/home', bodyParser())
```

4.使用多个中间件
```js
const express = require('express')
const bodyParser = require('body-parser')
const session = require('cookie-parser')
const app = express()
app.use('/home', bodyParser(), cookieParser())
```



## 常用中间件

### query
&emsp;&emsp;Express 内置了 query 中间件，它会将一个查询字符串转换成 Javascript 对象，并保存至 `res.query` 属性。

### static
&emsp;&emsp;static 中间件可以直接从磁盘对客户端提供静态服务。
```js
express.static(path, [options])
```

### body-parser
&emsp;&emsp;body-parser 中间件解析 POST 请求中的 JSON 数据，并保存至 `req.body` 属性。
```js
const bodyParser = require('body-parser')
app.use(bodyParser())
```

### cookie-parser
&emsp;&emsp;cookie-parser 中间件从一个请求解析 cookie 到一个 Javascript 对象，并保存至 `req.cookies` 属性。
```js
const cookieParser = require('cookie-parser')
app.use(cookieParser())
```
&emsp;&emsp;设置/清除 cookie：
```js
res.cookie(name, value, [options])  // 在服务器设置
req.clearCookie(cookieName)  // 在客户端清除
```


### cookie-session
&emsp;&emsp;cookie-session 中间件实现时，会话会被存储在 req.session 对象中。cookie-session 依赖于 cookie-parser，因此要先添加 cookie-parser 中间件。

**1.实现会话**：
```js
const express = require('express')
const cookieParser = require('cookie-parser')
const session = require('cookie-session')

const app = express()
app.use(cookieParser())
app.use(session({ secret: 'SEVEN' }))

app.get('/', function(req, res) {
  if (!req.session.count) {
    req.session.count = 1
  } else {
    req.session.count += 1
  }
  res.end(`<h1>You visit this site ${req.session.count} times.</h1>`)
})
app.listen(3000, function() {
  console.log('Server is listening at http://127.0.0.1:3000/')
})

```

**2.实现会话身份验证**：
```js

```


### basic-auth-connect
&emsp;&emsp;basic-auth-connect 中间件提供对基本 HTTP 的身份验证。
```js
const express = require('express')
const basicAuth = require('basic-auth-connect')

const app = express()
app.use(basicAuth(function(user, pass) {
  return user === 'admin' && pass === 'admin'
}))

app.get('/', function(req, res) {
  res.end('Hello World!')
})
app.listen(3000, function() {
  console.log('Server is listening at http://127.0.0.1:3000/')
})
```



## 自定义中间件
&emsp;&emsp;中间件是一个函数，创建的语法为：

+ function(req, res, next)
 + req：Request 对象
 + res：Response 对象
 + next：在函数结束前使用 `next()`，否则处理程序会停止在当前

```js
const express = require('express')

const app = express()
const writeSome = function(req, res, next) {
  res.set('Content-Type', 'text/html')
  res.send('<h1>Hello World!</h1>')
  next()
}
app.use('/', writeSome)

app.listen(3000, function() {
  console.log('Server is listening at http://127.0.0.1:3000/')
})
```