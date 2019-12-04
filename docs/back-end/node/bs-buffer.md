---
sidebarDepth: 2
---

## 介绍

### 简介

+ `Buffer` 类用来创建一个专门存放二进制数据的缓存区
+ `Buffer` 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存


### 字符编码

&emsp;&emsp;创建的 `Buffer` 实例一般用于表示编码字符的序列，通过使用显式的字符编码，就可以在 `Buffer` 实例与普通的 `JavaScript` 字符串之间进行相互转。`Node` 支持的字符编码：

+ `ascii`: 仅支持 7 位 `ASCII` 数据(如果设置去掉高位的话，这种编码是非常快的)
+ `utf8`: 多字节编码的 `Unicode` 字符(许多网页和其他文档格式都使用 `UTF-8`)
+ `utf16le`: 2 或 4 个字节，小字节序编码的 `Unicode` 字符
+ `ucs2`: `utf16le` 的别名
+ `base64`: `Base64` 编码
+ `latin1`: 一种把 `Buffer` 编码成一字节编码的字符串的方式
+ `binary`: `latin1` 的别名
+ `hex`: 将每个字节编码为两个十六进制字符


## API 参考

&emsp;&emsp;参考 [Buffer](http://nodejs.cn/api/buffer.html)。

### 创建

&emsp;&emsp;在 v6.0 之前直接使用 `new Buffer()` 构造函数来创建 `Buffer` 对象实例，出于安全性，在 v6.0 以后，官方文档建议使用 `Buffer.from()` 接口创建 `Buffer` 对象实例:

+ [Buffer.from(array)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_array): 使用八位字节数组 array 分配一个新的 `Buffer`
+ [Buffer.from(buffer)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_buffer): 拷贝 buffer 的数据到新建的 `Buffer` 实例
+ [Buffer.from(arrayBuffer, byteOffset?, length?)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_arraybuffer_byteoffset_length): 返回一个与给定 `ArrayBuffer` 共享同一内存的 `Buffer`
+ [Buffer.from(str, encoding?)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_string_encoding): 创建一个包含 string 的新 `Buffer`
+ [Buffer.from(object, offsetOrEncoding?, length?)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_object_offsetorencoding_length): 
+ [Buffer.alloc(size, fill?, encoding?)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafe_size): 返回一个指定大小的 `Buffer` 实例，如果没有设置 fill，则默认填满 0
+ [Buffer.allocUnsafe(size)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafe_size): 返回一个指定大小的 `Buffer` 实例，但是它不会被初始化，所以它可能包含敏感的数据
+ [Buffer.allocUnsafeSlow(size)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafeslow_size): 创建一个大小为 size 字节的新 `Buffer`(应该只用作开发人员已经在其应用程序中观察到过度的内存之后的最后手段)


### 属性

+ [Buffer.poolSize](http://nodejs.cn/api/buffer.html#buffer_class_property_buffer_poolsize): 这是用于缓冲池的预分配的内部 Buffer 实例的大小（以字节为单位）。 该值可以修改
+ [buf[index]](http://nodejs.cn/api/buffer.html#buffer_buf_index): 索引操作符 [index] 可用于获取或设置 buf 中指定的 index 位置的八位字节。 该值指向单个字节，所以有效的值的范围是 0x00 至 0xFF（十六进制）、或 0 至 255（十进制）。
+ [buf.buffer](http://nodejs.cn/api/buffer.html#buffer_buf_buffer): `<ArrayBuffer>` 创建 Buffer 对象时基于的底层 ArrayBuffer 对象
+ [buf.byteOffset](http://nodejs.cn/api/buffer.html#buffer_buf_byteoffset): `<integer>` 创建 Buffer 对象时基于的底层 ArrayBuffer 对象的 byteOffset
+ [buf.length](http://nodejs.cn/api/buffer.html#buffer_buf_length): 返回内存中分配给 buf 的字节数。 不一定反映 buf 中可用数据的字节量
+ [buffer.kMaxLength](http://nodejs.cn/api/buffer.html#buffer_buffer_kmaxlength): 该属性是在 require('buffer') 返回的 buffer 模块上，而不是在 Buffer 全局变量或 Buffer 实例上
+ [buffer.INSPECT_MAX_BYTES](http://nodejs.cn/api/buffer.html#buffer_buffer_inspect_max_bytes): 返回当调用 buf.inspect() 时将会返回的最大字节数。 这可以被用户模块重写
+ `buffer.constants`: 在 `require('buffer')` 返回的 `buffer` 模块上，而不是在 `Buffer` 全局变量或 `Buffer` 实例上，包含两个常量值：
  + [buffer.constants.MAX_LENGTH](http://nodejs.cn/api/buffer.html#buffer_buffer_constants_max_length): 单个 `Buffer` 实例允许的最大内存。在 32 位的架构上，该值是 2^30-1(约1GB)，在 64 位的架构上，该值是 2^31-1(约2GB)
  + [buffer.constants.MAX_STRING_LENGTH](http://nodejs.cn/api/buffer.html#buffer_buffer_constants_max_string_length): 单个 `string` 实例允许的最大长度，表示 `string` 原始数据类型能有的最大 `length`，以 `UTF-16` 代码为单位(该值取决于使用的 JS 引擎)


### 写入

+ [buf.write(string[, offset[, length]][, encoding])](http://nodejs.cn/api/buffer.html#buffer_buf_write_string_offset_length_encoding): 根据 `encoding` 指定的字符编码将 `string` 写入到 `buf` 中的 `offset` 位置
+ [buf.fill(value[, offset[, end]][, encoding])](http://nodejs.cn/api/buffer.html#buffer_buf_fill_value_offset_end_encoding): 用指定的 value 填充 buf。 如果没有指定 offset 与 end，则填充整个 buf：

::: tip 说明：
+ 如果 `buf` 没有足够的空间保存整个字符串，则只会写入 `string` 的一部分，只编码了一部分的字符不会被写入
:::


### 读取

+ [buf.toString([encoding[, start[, end]]])](http://nodejs.cn/api/buffer.html#buffer_buf_tostring_encoding_start_end): 根据 `encoding` 指定的字符编码将 `buf` 解码成字符串
+ [buf.toJSON()](http://nodejs.cn/api/buffer.html#buffer_buf_tojson): 返回 `buf` 的 `JSON` 格式


### 合并

+ [Buffer.concat(list[, totalLength])](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_concat_list_totallength): 返回一个合并了 `list` 中所有 `Buffer` 实例的新 `Buffer`


### 复制

+ [buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])](http://nodejs.cn/api/buffer.html#buffer_buf_copy_target_targetstart_sourcestart_sourceend): 拷贝 `buf` 中某个区域的数据到 `target` 中的某个区域，即使 `target` 的内存区域与 `buf` 的重叠
+ [buffer.transcode(source, fromEnc, toEnc)](http://nodejs.cn/api/buffer.html#buffer_buffer_transcode_source_fromenc_toenc): 将指定的 Buffer 或 Uint8Array 实例从一个字符编码重新编码到另一个字符。 返回新的 Buffer 实例


### 切片

+ [buf.slice([start[, end]])](http://nodejs.cn/api/buffer.html#buffer_buf_slice_start_end): 返回一个新的 `Buffer`，它引用与原始的 `Buffer` 相同的内存，但是由 `start` 和 `end` 索引进行偏移和裁剪
+ [buf.subarray([start[, end]])](http://nodejs.cn/api/buffer.html#buffer_buf_subarray_start_end): 返回一个新的 Buffer，它引用与原始的 Buffer 相同的内存，但是由 start 和 end 索引进行偏移和裁剪


### 迭代

+ Buffer 实例能被 `for...of` 迭代
+ [buf.keys()](http://nodejs.cn/api/buffer.html#buffer_buf_keys): 创建并返回 buf 键名（索引）的迭代器
+ [buf.values()](http://nodejs.cn/api/buffer.html#buffer_buf_values): 创建并返回 buf 键值（字节）的迭代器
+ [buf.entries()](http://nodejs.cn/api/buffer.html#buffer_buf_entries): 用 buf 的内容创建并返回一个 [index, byte] 形式的迭代器

### 交换

+ [buf.swap16()](http://nodejs.cn/api/buffer.html#buffer_buf_swap16): 将 buf 解析成无符号的 16 位整数的数组，并且以字节顺序原地进行交换(`buf.length` 是2的倍数)
+ [buf.swap32()](http://nodejs.cn/api/buffer.html#buffer_buf_swap32): 将 buf 解析成无符号的 32 位整数的数组，并且以字节顺序原地进行交换(`buf.length` 是4的倍数)
+ [buf.swap64()](http://nodejs.cn/api/buffer.html#buffer_buf_swap64): 将 buf 解析成 64 位数值的数组，并且以字节顺序原地进行交换(`buf.length` 是8的倍数)

::: tip 说明：
+ 上述方法会抛出 `ERR_INVALID_BUFFER_SIZE` 异常
:::


### 比较

+ [Buffer.compare(buf1, buf2)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_compare_buf1_buf2): 比较 buf1 与 buf2，主要用于 Buffer 实例数组的排序，相当于调用` buf1.compare(buf2)`
+ [buf.equals(otherBuffer)](http://nodejs.cn/api/buffer.html#buffer_buf_equals_otherbuffer): 如果 buf 与 otherBuffer 具有完全相同的字节，则返回 true，否则返回 false。

### 其他

+ [Buffer.byteLength(string[, encoding])](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_bytelength_string_encoding): 返回字符串的实际字节长度，与 `String.prototype.length` 不同，后者返回字符串的字符数
+ [Buffer.isBuffer(obj)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_isbuffer_obj): 如果 obj 是一个 Buffer，则返回 true，否则返回 false
+ [Buffer.isEncoding(encoding)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_isencoding_encoding): 如果 encoding 是支持的字符编码，则返回 true，否则返回 false
+ [buf.includes(value[, byteOffset][, encoding])](http://nodejs.cn/api/buffer.html#buffer_buf_includes_value_byteoffset_encoding): 相当于 `buf.indexOf() !== -1`
+ [buf.indexOf(value[, byteOffset][, encoding])](http://nodejs.cn/api/buffer.html#buffer_buf_indexof_value_byteoffset_encoding): 返回 `<integer>` buf 中首次出现 value 的索引，如果 buf 没包含 value 则返回 -1
+ [buf.lastIndexOf(value[, byteOffset][, encoding])](http://nodejs.cn/api/buffer.html#buffer_buf_lastindexof_value_byteoffset_encoding): 与 buf.indexOf() 的区别是，查找的是 value 最后一次出现的索引，而不是首次出现
