## 介绍

[Buffer](http://nodejs.cn/api/buffer.html)：

+ `Buffer` 类用来创建一个专门存放二进制数据的缓存区
+ `Buffer` 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存
+ 在 v6.0 之前直接使用 `new Buffer()` 构造函数来创建 `Buffer` 对象实例，出于安全性，在 v6.0 以后，官方文档建议使用 `Buffer.from()` 接口创建 `Buffer` 对象实例
+ `Buffer` 实例一般用于表示编码字符的序列，通过使用显式的字符编码，就可以在 `Buffer` 实例与普通的 `JavaScript` 字符串之间进行相互转换

```js
const buf = Buffer.from('runoob', 'ascii')

console.log(buf.toString('hex')) // 72756e6f6f62
console.log(buf.toString('base64')) // cnVub29i
```

**Node 支持的字符编码：**

+ `ascii`: 仅支持 7 位 `ASCII` 数据(如果设置去掉高位的话，这种编码是非常快的)
+ `utf8`: 多字节编码的 `Unicode` 字符(许多网页和其他文档格式都使用 `UTF-8`)
+ `utf16le`: 2 或 4 个字节，小字节序编码的 `Unicode` 字符
+ `ucs2`: `utf16le` 的别名
+ `base64`: `Base64` 编码
+ `latin1`: 一种把 `Buffer` 编码成一字节编码的字符串的方式
+ `binary`: `latin1` 的别名
+ `hex`: 将每个字节编码为两个十六进制字符



## 创建

+ [Buffer.from(array)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_array): 使用八位字节数组 array 分配一个新的 `Buffer`

+ [Buffer.from(buffer)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_buffer): 拷贝 buffer 的数据到新建的 `Buffer` 实例

+ [Buffer.from(arrayBuffer, byteOffset?, length?)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_arraybuffer_byteoffset_length): 返回一个与给定 `ArrayBuffer` 共享同一内存的 `Buffer`

+ [Buffer.from(str, encoding?)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_string_encoding): 创建一个包含 string 的新 `Buffer`

+ [Buffer.from(object, offsetOrEncoding?, length?)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_object_offsetorencoding_length): 

+ [Buffer.alloc(size, fill?, encoding?)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafe_size): 返回一个指定大小的 `Buffer` 实例，如果没有设置 fill，则默认填满 0

+ [Buffer.allocUnsafe(size)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafe_size): 返回一个指定大小的 `Buffer` 实例，但是它不会被初始化，所以它可能包含敏感的数据

+ [Buffer.allocUnsafeSlow(size)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafeslow_size): 创建一个大小为 size 字节的新 `Buffer`(应该只用作开发人员已经在其应用程序中观察到过度的内存之后的最后手段)



## 写入

**语法：**

```js
buf.write(string[, offset[, length]][, encoding])
```

**参数：**

+ **str**: `<string>`，写入缓冲区的字符串
+ **offset**: `<integer>`，开始写入缓冲区的索引(默认 0)
+ **length**: `<integer>`，写入缓冲区的长度(默认 buf.length)
+ **encoding**: `<string>`，使用的编码(默认 `utf8`)

**返回值：** 

+ `<integer>`，实际写入的大小

::: tip 说明：
+ 若写入长度超出缓冲区，只会写入部分，并且返回该部分的长度
:::



## 读取

**语法：**

```js
buf.toString([encoding[, start[, end]]])
```

**参数：**

+ **encoding**: `<string>`，使用的编码(默认 `utf8`)

+ **start**: `<integer>`，开始读取的位置(默认 0)

+ **end**: `<integer>`，结束读取的位置(默认 buf.length-1)

**返回值：**

+ `<string>`，缓冲区数据按照指定编码解码后的字符串



## 合并

**语法：**

```js
Buffer.concat(list[, totalLength])
```

**参数：**

+ **list**: `<Buffer[]>`，用于合并的 `Buffer` 对象数组列表
+ **totalLength**: `<integer>`，指定合并后 `Buffer` 对象的总长度

**返回值：**

+ `<Buffer>`，由多个成员合并的新的 `Buffer` 对象



## 复制

**语法：**

```js
buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])
```

**参数：**

+ **targetBuffer**: `<Buffer>`，要拷贝的 Buffer 对象
+ **targetStart**: `<integer>`，数字，(默认 0)
+ **sourceStart**: `<integer>`，数字，(默认 0)
+ **sourceEnd**: `<integer>`，数字，(默认 buffer.length)

**返回值：**

+ `<void>`

## 切片

**语法：**

```js
buf.slice([start[, end]])
```

**参数：**

+ **start**: `<integer>`，(默认 0)
+ **end**: `<integer>`，(默认 buffer.length)

**返回值：**

+ `<Buffer>`，一个新的缓冲区(但和旧缓冲区指向同一块内存)


## 其他


