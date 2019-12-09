## 微任务和宏任务

&emsp;&emsp;微任务(micro task)和宏任务(macro task)分别维护一个队列，同步的任务在宏任务上执行，而且在同一个事件循环中，微任务永远在宏任务之前执行。

**常见微任务：**

+ process.nextTick()
+ promise

**常见宏任务：**

+ setTimeout()
+ setInterval()
+ setImmediate()
+ I/O



## EventLoop

1. 从宏任务的头部取出一个任务执行
2. 执行过程中若遇到微任务则将其添加到微任务的队列中
3. 宏任务执行完毕后，若微任务的队列中存在任务，则逐个执行至全部完成
4. GUI 渲染
5. 回到步骤 1，直到宏任务执行完毕



## 异步原理

+ 当调用 Node.js API 的时候，Node.js 会将具体操作和回调函数交给 EventLoop 执行
+ EventLoop 维护了一个回调函数队列，当异步函数执行时，回调函数会被放入这个队列
+ 直至异步函数执行完成后，Javascript 才会开始处理 EventLoop


::: tip 更多：
+ EventLoop 使用的是 C/C++ 编写的 libuv 库，而 libuv 采用了异步和事件驱动的编程风格，为开发人员提供一套基于 I/O 通知的回调函数
:::





