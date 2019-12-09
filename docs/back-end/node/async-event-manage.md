## Callback

&emsp;&emsp;采用错误优先回调，即异步操作的回调函数中，第一个参数为 error 对象，第二个参数是成功响应的结果数据。

## EventEmitter

&emsp;&emsp;一个构造函数，采用发布/订阅模式，主要方法为 `on()`/`emit()`，分别用于监听和发布事件。