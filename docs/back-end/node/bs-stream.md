---
sidebarDepth: 2
---

## 介绍

### 概念

参考 [Stream](http://nodejs.cn/api/stream.html):

+ Stream 是一个抽象接口，Node 中有很多对象实现了这个接口
+ 所有的 Stream 对象都是 EventEmitter 的实例

### 流的类型

+ `Writable`: 可写入数据的流，如 `fs.createWriteStream()`
+ `Readable`: 可读取数据的流，如 `fs.createReadStream()`
+ `Duplex`: 可读又可写的双工流，如 `net.Socket`
+ `Transform`: 在读写过程中可以修改或转换数据的 `Duplex` 流，如 `zlib.createDeflate()`

## Readable

### 简介

+ 可读流是对提供数据的来源的一种抽象
+ 所有可读流都实现了 stream.Readable 类定义的接口
+ 在任意时刻，可读流会处于以下三种状态之一
  + readable.readableFlowing === null
  + readable.readableFlowing === false
  + readable.readableFlowing === true


### 事件

+ `close`
+ `data`
+ `end`
+ `error`
+ `pause`
+ `readable`
+ `resume`

### 实现

+ [new stream.Readable([options])](http://nodejs.cn/api/stream.html#stream_new_stream_readable_options)
+ [readable._read(size)](http://nodejs.cn/api/stream.html#stream_readable_read_size_1)
+ [readable._destroy(err, callback)](http://nodejs.cn/api/stream.html#stream_readable_destroy_err_callback)
+ [readable.push(chunk[, encoding])](http://nodejs.cn/api/stream.html#stream_readable_push_chunk_encoding)

### 属性

|属性|类型|描述|
|-|-|-|
|[readable.destroyed](http://nodejs.cn/api/stream.html#stream_readable_destroyed)|Boolean|在调用 readable.destroy() 之后为 true|
|[readable.readable](http://nodejs.cn/api/stream.html#stream_readable_readable)|Boolean|如果可以安全地调用 readable.read()，则为 true。|
|[readable.readableEncoding](http://nodejs.cn/api/stream.html#stream_readable_readableencoding)|String|获取用于给定可读流的 encoding 属性。 可以使用 readable.setEncoding() 方法设置 encoding 属性。|
|[readable.readableEnded](http://nodejs.cn/api/stream.html#stream_readable_readableended)|Boolean|当 'end' 事件被触发时变为 true。|
|[readable.readableFlowing](http://nodejs.cn/api/stream.html#stream_readable_readableflowing)|||
|[readable.readableHighWaterMark](http://nodejs.cn/api/stream.html#stream_readable_readablehighwatermark)||返回构造可读流时传入的 highWaterMark 的值。|
|[readable.readableLength](http://nodejs.cn/api/stream.html#stream_readable_readablelength)||此属性包含准备读取的队列中的字节数（或对象数）。 该值提供有关 highWaterMark 状态的内省数据。|
|[readable.readableObjectMode](http://nodejs.cn/api/stream.html#stream_readable_readableobjectmode)|String|获取用于给定可读流的 objectMode 属性。|

### 方法

+ [readable.destroy([error])](http://nodejs.cn/api/stream.html#stream_readable_destroy_error): 销毁流
+ [readable.isPaused()](http://nodejs.cn/api/stream.html#stream_readable_ispaused): 返回可读流当前的操作状态
+ [readable.pause()](http://nodejs.cn/api/stream.html#stream_readable_pause): 使流动模式的流停止触发 'data' 事件，并切换出流动模式
+ [readable.pipe(destination[, options])](http://nodejs.cn/api/stream.html#stream_readable_pipe_destination_options): 绑定可写流到可读流，将可读流自动切换到流动模式，并将可读流的所有数据推送到绑定的可写流
+ [readable.read([size])](http://nodejs.cn/api/stream.html#stream_readable_read_size): 从内部缓冲拉取并返回数据
+ [readable.resume()](http://nodejs.cn/api/stream.html#stream_readable_resume): 将被暂停的可读流恢复触发 'data' 事件，并将流切换到流动模式
+ [readable.setEncoding(encoding)](http://nodejs.cn/api/stream.html#stream_readable_setencoding_encoding): 从可读流读取的数据设置字符编码。
+ [readable.unpipe([destination])](http://nodejs.cn/api/stream.html#stream_readable_unpipe_destination): 解绑之前使用 stream.pipe() 方法绑定的可写流
+ [readable.unshift(chunk[, encoding])](http://nodejs.cn/api/stream.html#stream_readable_unshift_chunk_encoding): 
+ [readable.wrap(stream)](http://nodejs.cn/api/stream.html#stream_readable_wrap_stream): 
+ [readable\[Symbol.asyncIterator\]()](http://nodejs.cn/api/stream.html#stream_readable_symbol_asynciterator): 


## Writeable

### 简介

+ 所有可写流都实现了 stream.Writable 类定义的接口
+ 可写流是对数据要被写入的目的地的一种抽象

### 事件

+ `close`: 当流或其底层资源（比如文件描述符）被关闭时触发。 表明不会再触发其他事件，也不会再发生操作
+ `drain`: 
+ `error`: 
+ `finish`: 
+ `pipe`: 
+ `unpipe`: 


### 实现

+ [new stream.Writable([options])](http://nodejs.cn/api/stream.html#stream_constructor_new_stream_writable_options)
+ [writable._write(chunk, encoding, callback)](http://nodejs.cn/api/stream.html#stream_writable_write_chunk_encoding_callback_1)
+ [writable._writev(chunks, callback)](http://nodejs.cn/api/stream.html#stream_writable_writev_chunks_callback)
+ [writable._destroy(err, callback)](http://nodejs.cn/api/stream.html#stream_writable_destroy_err_callback)
+ [writable._final(callback)](http://nodejs.cn/api/stream.html#stream_writable_final_callback)

### 属性

|属性|类型|描述|
|-|-|-|
|[writable.destroyed](http://nodejs.cn/api/stream.html#stream_writable_destroyed)|Boolean|调用 writable.destroy() 之后为 true|
|[writable.writable](http://nodejs.cn/api/stream.html#stream_writable_writable)|Boolean|如果调用 writable.write() 是安全的，则为 true|
|[writable.writableEnded](http://nodejs.cn/api/stream.html#stream_writable_writableended)|Boolean|在调用了 writable.end() 之后为 true|
|[writable.writableFinished](http://nodejs.cn/api/stream.html#stream_writable_writablefinished)|Boolean|在触发 'finish' 事件之前立即设置为 true|
|[writable.writableHighWaterMark](http://nodejs.cn/api/stream.html#stream_writable_writablehighwatermark)||返回构造可写流时传入的 highWaterMark 的值|
|[writable.writableLength](http://nodejs.cn/api/stream.html#stream_writable_writablelength)||此属性包含准备写入的队列中的字节数（或对象）。 该值提供有关 highWaterMark 状态的内省数据|
|[writable.writableObjectMode](http://nodejs.cn/api/stream.html#stream_writable_writableobjectmode)||获取用于给定 Writable 流的 objectMode 属性|

### 方法

+ [writable.cork()](http://nodejs.cn/api/stream.html#stream_writable_cork): 强制把所有写入的数据都缓冲到内存中
+ [writable.destroy([error])](http://nodejs.cn/api/stream.html#stream_writable_destroy_error): 销毁流
+ [writable.end([chunk[, encoding]][, callback])](http://nodejs.cn/api/stream.html#stream_writable_end_chunk_encoding_callback): 调用 writable.end() 表明已没有数据要被写入可写流
+ [writable.setDefaultEncoding(encoding)](http://nodejs.cn/api/stream.html#stream_writable_setdefaultencoding_encoding): 为可写流设置默认的 encoding
+ [writable.uncork()](http://nodejs.cn/api/stream.html#stream_writable_uncork): 调用 stream.cork() 后缓冲的所有数据输出到目标
+ [writable.write(chunk[, encoding][, callback])](http://nodejs.cn/api/stream.html#stream_writable_write_chunk_encoding_callback): 写入数据到流，并在数据被完全处理之后调用 callback

## Duplex

### 简介

+ Duplex 同时实现了 Readable 和 Writable 接口

### 实现

+ [new stream.Duplex(options)](http://nodejs.cn/api/stream.html#stream_new_stream_duplex_options)



## Transform

### 简介

+ Transform 是一种 Duplex 流，但它的输出与输入是相关联的
+ Transform 流也同时实现了 Readable 和 Writable 接口

### 实现

+ [new stream.Transform([options])](http://nodejs.cn/api/stream.html#stream_new_stream_duplex_options)
+ [transform._flush(callback)](http://nodejs.cn/api/stream.html#stream_transform_flush_callback)
+ [transform._transform(chunk, encoding, callback)](http://nodejs.cn/api/stream.html#stream_transform_transform_chunk_encoding_callback)

### 方法

+ [transform.destroy([error])](http://nodejs.cn/api/stream.html#stream_transform_destroy_error): 销毁流，并可选地触发 `error` 事件



## 其他 API

+ [stream.finished(stream[, options], callback)](http://nodejs.cn/api/stream.html#stream_stream_finished_stream_options_callback): 当流不再可读、可写、或遇到错误、或过早关闭事件时，则该函数会获得通知
+ [stream.pipeline(...streams, callback)](http://nodejs.cn/api/stream.html#stream_stream_pipeline_streams_callback): 一个模块方法，使用管道传送多个流，并转发错误和正确地清理，当管道完成时提供回调
+ [stream.Readable.from(iterable, [options])](http://nodejs.cn/api/stream.html#stream_stream_readable_from_iterable_options): 一个从迭代器中创建可读流的实用方法