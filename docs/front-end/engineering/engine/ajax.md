---
sidebarDepth: 2
---


## 简介

1. Ajax 是通过 `XMLHttpRequest` 对象实现的，对于 IE 则是 `ActiveXObject` 对象，因此需要注意兼容
```js
const xmlhttp = window.XMLHttpRequest
  ? new XMLHttpRequest()
  : new ActiveXObject('Microsoft.XMLHTTP')
```
2. 通过监听 `XMLHttpRequest` 实例的 `onreadystatechange` 事件来处理返回的数据
```js
xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
    const data = xmlhttp.responseText
    console.log(data)
  }
}
```
3. 使用 `open()` 建立一个请求
4. 使用 `send()` 发送该请求




## 手写 Ajax

### 封装为函数

```js
function getJSON(url) {
  const xmlhttp = window.XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject('Microsoft.XMLHTTP')

  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      const data = xmlhttp.responseText
      console.log(data)
    }
  }

  xmlhttp.open('GET', url)
  xmlhttp.send()
}

// 使用
const data = getJSON(url)
console.log(data)
```



### 封装为 Promise

+ 返回一个 `Promise` 实例
```js
function getJSON(url) {
  return new Promise((resolve, reject) => {
    const xmlhttp = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject('Microsoft.XMLHTTP')

    xmlhttp.onreadystatechange = () => {
      if(xmlhttp.readyState === 4) {
        if(xmlhttp.status === 200) {
          const data = xmlhttp.responseText
          resolve(data)
        } else {
          reject('Data Not Found!')
        }
      }
    }

    xmlhttp.open('GET', url)
    xmlhttp.send()
  })
}
```

+ 使用：直接传入请求 url 并解析数据
```js
getJSON(url).then((res) => {
  console.log(res)
  // 处理数据
}).catch(console.log)
```

+ 使用：根据 `promise` 的特性，可以按需请求，只需在内部返回一个新的 `Promise`
```js
getJSON(url).then(res => {
  console.log(res)
  const search_user = 'https://api.github.com/search/users?q=aaa'
  return getJSON(search_user)
}).then(res => {
  console.log(res)
})
```




## axios

+ [axios](http://www.axios-js.com/zh-cn/docs/) 对 Ajax 进行了封装，并提供了很多便捷的功能
+ 可在浏览器和 node.js 中使用
+ 支持 Promise 语法
+ 能够拦截请求和响应
+ 可以中途取消请求


### 请求配置

+ 以下配置只有 url 是必须的
```js
{
  url: '/user', // 请求的服务器 URL
  method: 'get', // 请求方法，默认为 get
  baseURL: 'https://some-domain.com/api/', // 添加在 url 的前缀

  // 发送请求前，修改请求数据；只能用在 'PUT', 'POST' 和 'PATCH'
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data, headers) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // 在传递给 then/catch 前，修改响应数据
  transformResponse: [function (data) {
    // 对 data 进行任意转换处理
    return data;
  }],

  // 发送的自定义请求头
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },

  // 发送的 URL 参数，必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {
    ID: 12345
  },

  // 负责将 params 序列化的函数
  paramsSerializer: function(params) {
    return Qs.stringify(params, { arrayFormat: 'brackets' })
  },

  /** 作为请求主体被发送的数据，只适用于 'PUT', 'POST', 'PATCH'
  * 在没有设置 transformRequest 时，必须是以下类型之一：
  * - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  * - 浏览器专属：FormData, File, Blob
  * - Node 专属： Stream
  */
  data: {
    firstName: 'Fred'
  },

  // 指定请求超时的毫秒数(0 表示无超时限制)，请求超时时将被中断
  timeout: 1000,

  // 表示跨域请求时是否需要使用凭证
  withCredentials: false, // default

  // 允许自定义处理请求，以使测试更轻松，返回一个 promise 并应用一个有效的响应
  adapter: function (config) {
    /* ... */
  },

  // 设置一个 Authorization 请求头，覆盖 headers 的设置
  auth: {
    username: 'janedoe',
    password: 's00pers3cret'
  },

  // 服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json', // default

  // `responseEncoding` indicates encoding to use for decoding responses
  // Note: Ignored for `responseType` of 'stream' or client-side requests
  responseEncoding: 'utf8', // default

  // 用作 xsrf token 的值的 cookie 的名称
  xsrfCookieName: 'XSRF-TOKEN', // default

  // `xsrfHeaderName` is the name of the http header that carries the xsrf token value
  xsrfHeaderName: 'X-XSRF-TOKEN', // default

  // 允许为上传处理进度事件
  onUploadProgress: function (progressEvent) {
    // Do whatever you want with the native progress event
  },

  // 允许为下载处理进度事件
  onDownloadProgress: function (progressEvent) {
    // 对原生进度事件的处理
  },

  // 允许的响应内容的最大尺寸
  maxContentLength: 2000,

  // 返回 true(或 null、undefined)时 promise 将被 resolve; 否则，promise 将被 reject
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // default

  // `socketPath` defines a UNIX Socket to be used in node.js.
  // e.g. '/var/run/docker.sock' to send requests to the docker daemon.
  // Only either `socketPath` or `proxy` can be specified.
  // If both are specified, `socketPath` is used.
  socketPath: null, // default

  // 在 node.js 中定义在执行 http 和 https 时使用的自定义代理，keepAlive 默认为 false
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),

  // 设置一个 Proxy-Authorization 请求头，覆盖 headers 的设置
  proxy: {
    host: '127.0.0.1',
    port: 9000,
    auth: {
      username: 'mikeymike',
      password: 'rapunz3l'
    }
  },

  // 指定用于取消请求的 cancel token
  cancelToken: new CancelToken(function (cancel) {})
}
```


### 响应结构

```js
{
  data: {},         // 服务器返回的数据
  status: 200,      // 服务器响应的 HTTP 状态码
  statusText: 'OK', // 服务器响应的 HTTP 状态信息
  headers: {},      // 服务器返回的响应头
  config: {},       // 为请求提供的配置信息
  request: {}
}
```


### 使用

+ axios 有多种使用方式，所有方式(`axios.get()`、`axios.post()`等)都是 `axios(config)` 的别名
+ get：额外参数可以在 url 中拼接(推荐)，也可以在选项对象中提供 `params` 对象字段
```js
import axios from 'axios'
 
// 1.直接请求
const url = 'https://api.github.com/search/repositories?q=vue&sort=stars'
axios.get(url).then(res => {
  console.log(res.data)
})

// 2.将请求参数写在一个对象中
const url = 'https://api.github.com/search/repositories'
axios.get(url, {
  params: {
    q: 'vue',
    sort: 'stars'
  }
}).then(res => {
  console.log(res.data)
})

// 3.将请求方法和参数都写在参数对象中
axios({
  method: 'get',
  url: 'https://api.github.com/search/repositories',
  params: {
    q: 'vue',
    sort: 'stars'
  }
}).then(res => {
  console.log(res.data)
})
```
+ post：若使用 `axios()` 发送，请求表单字段为 `data`
```js
import axios from 'axios'

// 1.使用别名
axios.post('/user', {
  firstName: 'Fred',
  lastName: 'Flintstone'
}).then(res => {
  console.log(res)
})

// 2.写在参数对象中
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
})
```



### 拦截请求和响应

+ 拦截器(interceptors)相当于发送请求/接收响应前的一个钩子函数
```js
import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from './auth'

const service = axios.create({
  timeout: 3000
})

// 请求拦截器：添加 X-Token 请求头
service.interceptors.request.use(
  config => {
    if (store.getters.token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// 响应拦截器：对不同的状态码提示不同的信息
service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.status !== 200) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      if (res.status === 508 || res.status === 512 || res.status === 514) {
        MessageBox.confirm('您已退出登录，您可以选择停留在该页面或者重新登录。', '登出提示', {
          confirmButtonText: '重新登录',
          cancelButtonText: '关闭提示',
          type: 'warning'
        }).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log(error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
```


### 取消请求

+ 请求发出后，可以被取消
```js
const CancelToken = axios.CancelToken
const source = CancelToken.source()

axios.get('/user/12345', {
  cancelToken: source.token
}).catch(err => {
  if (axios.isCancel(err)) {
    console.log('请求已取消：', err.message);
  } else {
    // 处理错误
  }
})

// 取消请求，message 参数是可选的
source.cancel('不要这个请求了。')
```



### 处理并发请求

+ `axios.all(iterable)`：同时发起多个请求，类似 `promise.all()`
+ `axios.spread(callback)`：并发的请求完成后，执行其中的回调，回调参数就是并发请求的响应数据
```js
function getUser (id) {
  return axios.get(`/user/${id}`)
}

axios.all([getUser(1234), getUser(2234)])
  .then(axios.spread((res1, res2) => {
    console.log(res1.data, res2.data)
  }))
```