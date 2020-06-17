## 简介

[MDN history](https://developer.mozilla.org/zh-CN/docs/Web/API/History)：

+ 允许操作浏览器的曾经在标签页或者框架里访问的会话历史记录


## 属性

+ `length`: 会话历史中元素的数目
+ `state`: 表示历史堆栈顶部的状态的值
+ `scrollRestoration`: 允许 `Web` 应用程序在历史导航上显式地设置默认滚动恢复行为


## 方法

+ `back()`: 前往上一页
+ `forward()`: 前往下一页
+ `go()`: 前往指定页
+ `pushState()`: 按指定的名称和 `URL` 将数据 `push` 进会话历史栈
+ `replaceState()`: 按指定的数据，名称和 `URL`，更新历史栈上最新的入口
