---
sidebarDepth: 2
---

## 简介

[MDN console](https://developer.mozilla.org/zh-CN/docs/Web/API/Console)：

+ 可以接入浏览器控制台，常用于调试或输出提示信息

## 方法

### 常规打印

+ `log()`: 打印一条消息
+ `info()`: 打印一条通知信息
+ `warn()`: 打印一条警告信息
+ `error()`: 打印一条错误信息

### 分组打印

+ `group()`: 创建一个新的分组，随后输出到控制台上的内容都会被添加一个缩进
+ `groupCollapsed()`: 创建一个新的内联 `group`
+ `groupEnd()`: 结束分组

### 计时器

+ `time()`: 启动一个计时器来跟踪某一个操作的占用时长，页面中最多能同时运行 10000 个计时器
+ `timeEnd()`: 停止一个计时器
+ `timeLog()`: 在控制台输出计时器的值
+ `timeStamp()`: 向浏览器的 Performance 或者 Waterfall 工具添加一个标记

### 其他

+ `assert()`: 断言打印，当第一个参数返回 `false` 时打印一条错误信息
+ `clear()`: 清空控制台
+ `count()`: 以参数为标识记录调用的次数，调用时在控制台打印标识以及调用次数
+ `countReset()`: 重置指定标签的计数器值
+ `debug()`: 在控制台打印一条 `debug` 级别的消息
+ `dir()`: 打印一条以三角形符号开头的语句，可以点击三角展开查看对象的属性
+ `dirxml()`: 打印 `XML/HTML` 元素表示的指定对象，否则显示 `JavaScript` 对象视图
+ `profile()`: 开始记录性能描述信息
+ `profileEnd()`: 停止记录性能描述信息
+ `table()`: 将列表型的数据打印成表格
+ `trace()`: 输出一个栈跟踪