---
sidebarDepth: 2
---

## 介绍

[MDN Service Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)：

+ 是一个注册在指定源和路径下的事件驱动 `worker`
+ 本质上充当 `Web` 应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理
+ 能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上来采取适当的动作
+ 还允许访问推送通知和后台同步 API
+ 出于安全原因，`Service workers` 只适用于 `HTTPS` 协议(或本地调试)，且在 Firefox 的用户隐私模式下不可用

::: tip 说明：
+ `Service workers` 优于以前同类尝试(如 `AppCache`)，是因为它们无法支持当操作出错时终止操作，而 `Service workers` 可以更细致地控制
+ `Service workers` 大量使用 `Promise`，因为通常它们会等待响应后继续，并根据响应返回一个成功或者失败的操作
:::


## API

### 注册

```js
ServiceWorkerContainer.register(scriptURL, options)
  .then(function (ServiceWorkerRegistration) {
    // do something...
  })
```

+ `scriptURL`: `Service workers` 脚本的 URL
+ `options`: 注册时提供选项的配置对象，目前可用的选项包括:
  + `scope`: 定义 `Service workers` 注册范围的 URL
+ 返回一个 `Promise` 对象，值是 `ServiceWorkerRegistration` 

