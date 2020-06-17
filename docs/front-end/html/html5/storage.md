## sessionStorage

### 简介

&emsp;&emsp;[MDN sessionStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage) 的介绍：

+ 使用 `window.sessionStorage` 或 `sessionStorage` 的方式访问 `sessionStorage` 对象
+ `sessionStorage` 和 `localStorage` 一样，特定于某个页面
+ 存储在 `sessionStorage` 里面的数据在页面会话结束时会被清除
+ 页面会话在浏览器打开期间一直保持，刷新或恢复页面仍会保持会话，关闭页面标签时消失


### 属性

属性|说明
-|-
`length`|返回 `sessionStorage` 的长度

### 方法：
方法|说明
-|-
`setItem(key, value)`|设置一个 `sessionStorage` 键值对
`getItem(key)`|获取一个键对应的值
`removeItem(key)`|删除一个键及值
`clear()`|删除所有 `sessionStorage` 键值对




## localStorage

### 简介

&emsp;&emsp;[MDN localStorage](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage) 的介绍：

+ 使用 `window.localStorage` 或 `localStorage` 的方式访问 `localStorage` 对象
+ `localStorage` 和 `sessionStorage` 一样，特定于某个页面
+ 存储在 `localStorage` 里面的数据可以长期保留，除非开发者或用户手动清除


### 属性

属性|说明
-|-
`length`|返回 `localStorage` 的长度

### 方法：
方法|说明
-|-
`setItem(key, value)`|设置一个 `localStorage` 键值对
`getItem(key)`|获取一个键对应的值
`removeItem(key)`|删除一个键及值
`clear()`|删除所有 `localStorage` 键值对


## 对比

::: warning 对比 sessionStorage 和 localStorage：
+ 相同点：有相同的属性和方法
+ 不同点： `sessionStorage` 会在关闭页面标签时消失，而 `localStorage` 会长期保留直至开发者或用户手动清除
:::