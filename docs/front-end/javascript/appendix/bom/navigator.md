## 简介

[MDN navigator](https://developer.mozilla.org/zh-CN/docs/Web/API/Navigator)：

+ 表示用户代理的状态和标识，允许脚本查询它和注册自己进行一些活动



## 属性

### 接口属性

+ `battery`: 返回一个 `BatteryManager` 对象，你可以用它来获取一些电池充电状态的信息
+ `connection`: 返回一个 `NetworkInformation` 对象，用来获取设备的网络连接信息
+ `keyboard`: 返回一个 `Keyboard` 对象，提供对检索键盘布局图和切换从物理键盘捕获按键的功能
+ `locks`: 返回一个 `LockManager` 对象，提供用于请求新 `Lock` 对象和查询现有 `Lock` 对象的方法
+ `mimeTypes`: 返回一个 `MimeTypeArray` 对象，包含可被当前浏览器识别的 `MimeType` 对象的列表
+ `mediaCapabilities`: 返回一个 `MediaCapabilities` 对象，可以使用媒体解码和编码的 `API`
+ `permissions`: 返回一个 `Permissions` 对象，提供查询或更新权限状态的 `API`
+ `serviceWorker`: 返回 `ServiceWorkerContainer` 对象
+ `storage`: 返回单例 `StorageManager` 对象

### 标准属性

+ `activeVRDisplays`:以数组的形式返回所有 `ispresenting` 属性为 `true` 的 `VRDisplay` 对象
+ `appCodeName`: 浏览器的内部开发代号名称
+ `appName`: 浏览器官方名称
+ `appVersion`: 浏览器版本
+ `oscpu`: 当前操作系统名
+ `platform`: 浏览器平台名
+ `plugins`: 列举出浏览器安装的插件
+ `onLine`: 表明浏览器是否联网
+ `maxTouchPoints`: 当前设备能够支持的最大同时触摸的点数
+ `cookieEnabled`: 指示当前页面是否启用了 `cookie`
+ `userAgent`: 当前浏览器的用户代理
+ `webdriver`: 指示用户代理是否由自动化控制
+ `hardwareConcurrency`: 指明当前浏览器环境所拥有的 `CPU` 核心数，这来自于操作系统提供的 `API` 来获取
+ `javaEnabled`: 表明浏览器是否支持 `Java`
+ `language`: 用户的首先语言(通常是浏览器用户界面的语言)
+ `languages`: 用户语言的数组，并按优先顺序排列
+ `product`: 返回 `Gecko`(此属性只用于兼容)


### 非标准属性

+ `buildID`: 浏览器识别码
+ `doNotTrack`: 指示网址或应用是否追踪用户
+ `id`: 
+ `productSub`: 
+ `securitypolicy`: 
+ `standalone`: 
+ `vendor`: 
+ `cendorSub`: 
+ `webkitPointer`: 



## 方法

+ `getVRDisplays()`: 返回一个 `promise`，该 `promise` 解析为 `VRDisplay` 代表连接到计算机的任何可用 VR 显示器的对象数组
+ `getUserMedia()`: 
+ `registerContentHandler()`: 
+ `registerProtocolHandler()`: 
+ `requestMediaKeySystemAccess()`: 
+ `sendBeacon()`: 
+ `share()`: 
+ `vibrate()`: 