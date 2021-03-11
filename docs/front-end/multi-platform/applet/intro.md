## 项目目录

+ 每个 page 下的 *.json 配置选项会覆盖 app.json
```
|- project\
  |- miniprogram_npm\           # 构建后的 npm 包
  |- node_modules\
  |- pages\
    |- index\                   # index 页面
    |- user\                    # user 页面
      |- user.js                # 页面实例
      |- user.json              # 页面配置
      |- user.wxml              # 页面文档 
      |- user.wxss              # 页面样式
  |- style\
  |- utils\
  |- app.js                     # app 实例
  |- app.json                   # 全局 page 配置
  |- app.wxss                   # 全局样式
  |- package.json
  |- project.config.json        # 项目配置文件
  |- sitemap.json
```



## 数据流

+ 页面的响应式数据在 js 文件内的 data 属性下
+ 页面可以通过 `getApp()` 获取 app 实例，以及其数据属性，可用于初始化数据
```js
// pages/user/user.js
// 获取 app 实例
const app = getApp()

Page({
  // 页面的初始数据
  data: {
    uaserInfo: null,
    hasUserInfo: false,
  },
  
  // 页面加载时
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (wx.canIUse('button.open-type.getUserInfo')) {
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      wx.getUserInfo()
        .then(res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        })
    }
  },
})
```



## 异步写法

+ 带回调的方式
```js
handleLogin() {
  wx.getUserInfo({
    success: res => {
      app.globalData.userInfo = res.userInfo
      this.setData({
        userInfo: res.userInfo,
        hasUserInfo: true,
      })
    }
  })
}
```
+ promise 方式，省略回调函数时会返回一个 Promise
```js
handleLogin() {
  wx.getUserInfo()
    .then(res => {
      app.globalData.userInfo = res.userInfo
      this.setData({
        userInfo: res.userInfo,
        hasUserInfo: true,
      })
    })
}
```
+ async 方式
```js
async handleLogin() {
  const res = await wx.getUserInfo()
  app.globalData.userInfo = res.userInfo
  this.setData({
    userInfo: res.userInfo,
    hasUserInfo: true,
  })
}
```