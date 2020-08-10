---
sidebarDepth: 2
---

## 介绍

### 简介

+ [Buffer](http://nodejs.cn/api/buffer.html) 用来创建一个专门存放二进制数据的缓存区
+ `Buffer` 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存
+ 是 JavaScript 的 Uint8Array 类的子类，且继承时带上了涵盖额外用例的方法，只要支持 Buffer 的地方，Node.js API 都可以接受普通的 Uint8Array
+ `buffer` 模块提供了一些属性和方法，使用时需要 `require('buffer')` 引入

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


## API

### 创建缓冲区

&emsp;&emsp;在 v6.0 之前直接使用 `new Buffer()` 构造函数来创建 `Buffer` 对象实例，出于安全性，在 v6.0 以后，官方文档建议使用 `Buffer.from()` 接口创建 `Buffer` 对象实例:

+ [Buffer.from(buffer)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_buffer)：拷贝缓存区
+ [Buffer.from(array)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_array)：从一个整数数组创建缓冲区
+ [Buffer.from(string[, encoding])](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_string_encoding)：从一个字符串创建缓冲区
+ [Buffer.from(arrayBuffer[, byteOffset[, length]])](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_arraybuffer_byteoffset_length)：从 `ArrayBuffer` 创建缓冲区
+ [Buffer.from(object[, offsetOrEncoding[, length]])](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_from_object_offsetorencoding_length)：从一个对象创建缓冲区（该对象拥有 `Symbol.toPrimitive` 或 `valueOf()`）
+ [Buffer.alloc(size[, fill[, encoding]])](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafe_size)：创建一个指定大小的缓冲区，并用指定值填充
+ [Buffer.allocUnsafe(size)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafe_size)：创建一个指定大小的未初始化的缓冲区
+ [Buffer.allocUnsafeSlow(size)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_allocunsafeslow_size)：创建一个指定大小的未初始化的缓冲区

```js
const buf1 = Buffer.from([65, 66, 67])
console.log(buf1.toString()) // ABC

const buf2 = Buffer.from(buf1)
console.log(buf2.toString()) // ABC

const buf3 = Buffer.from('ABC')
console.log(buf3.toString()) // ABC

const buf4 = Buffer.from({ valueOf: () => 'ABC' })
console.log(buf4.toString()) // ABC

const buf5 = Buffer.from(new ArrayBuffer(3))
buf5.fill('A')
console.log(buf5.toString()) // AAA

const buf6 = Buffer.alloc(3, 'A')
console.log(buf6.toString()) // AAA
```

::: tip 说明：
+ 创建的缓冲区大小区间为 [0, `buffer.constants.MAX_LENGTH`]，否则抛出 `ERR_INVALID_OPT_VALUE`
+ `allocUnsafeSlow()` 应该只用作开发人员已经在其应用程序中观察到过度的内存之后的最后手段
:::


### 属性

**静态属性：**
+ `Buffer.poolSize`：缓冲池预分配的内部 `Buffer` 实例的字节大小

**实例属性：**
+ `buf.buffer` 创建实例时的底层 `ArrayBuffer` 对象
+ `buf.byteOffset` 创建实例时的底层 `ArrayBuffer` 对象的 `byteOffset`
+ `buf.length`：返回内存分配的字节数（不一定反映实例可用数据的字节量）
+ `buf[index]`：获取/设置指定的位置的八位字节。指向单个字节，有效范围是 0x00~0xFF 或 0~255

**buffer 模块属性：**
+ `buffer.kMaxLength`：分配给单个 `Buffer` 实例的最大内存
+ `buffer.INSPECT_MAX_BYTES`：调用 `buf.inspect()` 时会返回的最大字节数
+ `buffer.constants`: 包含两个常量值：
  + `MAX_STRING_LENGTH`：单个 `string` 实例允许的最大长度(取决于 JS 引擎)
  + `MAX_LENGTH`：单个 `Buffer` 实例允许的最大内存，32 位架构上为 2^30-1(约1GB)，64 位架构上为 2^31-1(约2GB)

### 写入和填充

+ [buf.write(string[, offset[, length]][, encoding])](http://nodejs.cn/api/buffer.html#buffer_buf_write_string_offset_length_encoding): 根据字符编码、缓冲区偏移将数据写入缓冲区
+ [buf.fill(value[, offset[, end]][, encoding])](http://nodejs.cn/api/buffer.html#buffer_buf_fill_value_offset_end_encoding): 用指定值填充缓冲区，不指定 offset 与 end 将填充整个缓冲区

```js
// 1.写入
const buf = Buffer.from([65, 66, 67])
buf.write('Hi')
console.log(buf.toString()) // HiC

// 2.填充
const buf = Buffer.from([65, 66, 67])
buf.fill('H')
console.log(buf.toString()) // HHH
```

::: tip 说明：
+ 如果 `buf` 没有足够的空间保存整个字符串，则只会写入 `string` 的一部分，只编码了一部分的字符不会被写入
:::


### 读取

+ [buf.toString([encoding[, start[, end]]])](http://nodejs.cn/api/buffer.html#buffer_buf_tostring_encoding_start_end): 返回缓冲区数据的 `String` 格式
+ [buf.toJSON()](http://nodejs.cn/api/buffer.html#buffer_buf_tojson): 返回缓冲区数据的 `JSON` 格式

```js
const buf = Buffer.from([65, 66, 67])
console.log(buf.toString()) // ABC
console.log(buf.toJSON()) // { type: 'Buffer', data: [ 65, 66, 67 ] }
```

### 合并

+ [Buffer.concat(list[, totalLength])](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_concat_list_totallength): 将缓冲区列表合并成一个新的缓冲区

```js
const buf1 = Buffer.from([65, 66, 67])
const buf2 = Buffer.from([68, 69, 70])
const buf3 = Buffer.concat([buf1, buf2], 5)

console.log(buf1.toString(), buf2.toString()) // ABC DEF
console.log(buf3.toString()) // ABCDE
```


### 复制

+ [buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])](http://nodejs.cn/api/buffer.html#buffer_buf_copy_target_targetstart_sourcestart_sourceend): 拷贝缓冲区

```js
const buf1 = Buffer.from([65, 66, 67])
const buf2 = Buffer.from([68, 69, 70])

buf1.copy(buf2, 1, 1, 2)
console.log(buf1.toString(), buf2.toString()) // ABC DBF
```

### 转码

+ [buffer.transcode(source, fromEnc, toEnc)](http://nodejs.cn/api/buffer.html#buffer_buffer_transcode_source_fromenc_toenc): 更改缓冲区编码，返回新的缓冲区

```js
const buffer = require('buffer')

const buf = Buffer.from([1, 66, 67])
console.log(buf.toString()) // BC

buffer.transcode(buf, 'utf8', 'utf16le')
console.log(buf.toString('utf16le')) // 䈁
```

::: warning 说明：
+ 该方法是 `buffer` 模块上提供的，需要 `require('buffer')` 引入
:::

### 切片

+ [buf.slice([start[, end]])](http://nodejs.cn/api/buffer.html#buffer_buf_slice_start_end): 返回一个缓冲区切片
+ [buf.subarray([start[, end]])](http://nodejs.cn/api/buffer.html#buffer_buf_subarray_start_end): 返回一个缓冲区切片

```js
const buf1 = Buffer.from([65, 66, 67])
const buf2 = buf1.slice(1, 2)
console.log(buf1.toString(), buf2.toString()) // ABC B
```

::: tip 说明：
+ 两个方法是一样的
+ 生成的切片缓冲区是原缓冲区的一份复制，它们指向同一块内存：
```js
const buf1 = Buffer.from([65, 66, 67])
const buf2 = buf1.slice(1, 2)
console.log(buf1.toString(), buf2.toString()) // ABC B

buf2[0] = 90
console.log(buf1.toString(), buf2.toString()) // AZC Z
```
:::

### 迭代

+ 用 `for...of` 迭代
+ [buf.keys()](http://nodejs.cn/api/buffer.html#buffer_buf_keys): 创建缓冲区的键迭代器
+ [buf.values()](http://nodejs.cn/api/buffer.html#buffer_buf_values): 创建缓冲区的值迭代器
+ [buf.entries()](http://nodejs.cn/api/buffer.html#buffer_buf_entries): 创建缓冲区的键值迭代器

```js
const buf = Buffer.from([65, 66, 67])

for (const code of buf) {
  console.log(code)
}
// 65
// 66
// 67

for (const v of buf.keys()) { }
for (const v of buf.values()) { }
for (const v of buf.entries()) { }
```


### 交换

+ [buf.swap16()](http://nodejs.cn/api/buffer.html#buffer_buf_swap16): 将缓冲区数据解析成无符号的 16 位整数的数组(`buf.length` 是2的倍数)
+ [buf.swap32()](http://nodejs.cn/api/buffer.html#buffer_buf_swap32): 将缓冲区数据解析成无符号的 32 位整数的数组(`buf.length` 是4的倍数)
+ [buf.swap64()](http://nodejs.cn/api/buffer.html#buffer_buf_swap64): 将缓冲区数据解析成 64 位数值的数组(`buf.length` 是8的倍数)

```js
const buf = Buffer.from([65, 66, 67, 68, 69, 70, 71, 72])

console.log(buf.toString()) // ABCDEFGH
console.log(buf.swap16().toString()) // BADCFEHG
console.log(buf.swap32().toString()) // CDABGHEF
console.log(buf.swap64().toString()) // FEHGBADC
```

::: tip 说明：
+ 调用时必须保证 `buf.length` 的倍数关系，否则会抛出 `ERR_INVALID_BUFFER_SIZE` 异常
:::


### 比较

+ [Buffer.compare(buf1, buf2)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_compare_buf1_buf2): 比较缓冲区，相当于 `buf1.compare(buf2)`
+ [buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])](http://nodejs.cn/api/buffer.html#buffer_buf_compare_target_targetstart_targetend_sourcestart_sourceend)：比较两个缓冲区
+ [buf.equals(otherBuffer)](http://nodejs.cn/api/buffer.html#buffer_buf_equals_otherbuffer): 比较缓冲区是否相等

```js
const buf1 = Buffer.from([66, 67, 68])
const buf2 = Buffer.from([65, 66, 67])
const list = [buf1, buf2]

console.log(list) // [ <Buffer 42 43 44>, <Buffer 41 42 43> ]
console.log(list.sort(Buffer.compare)) // [ <Buffer 41 42 43>, <Buffer 42 43 44> ]

const buf1 = Buffer.from([65, 66, 67])
const buf2 = Buffer.from('ABC')
console.log(buf1.equals(buf2)) // true
```

::: tip 说明：
+ `Buffer.compare()`/`buf.compare()` 返回的是 -1/0/1，主要用于排序
+ `equals()` 返回一个布尔值
:::

### 其他

+ [Buffer.isBuffer(obj)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_isbuffer_obj): 判断目标是否是一个缓冲区对象
+ [Buffer.isEncoding(encoding)](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_isencoding_encoding): 判断是否支持指定字符编码
+ [Buffer.byteLength(string[, encoding])](http://nodejs.cn/api/buffer.html#buffer_class_method_buffer_bytelength_string_encoding): 返回字符串的字节长度（`str.length` 返回的是字符数）
+ [buf.indexOf(value[, byteOffset][, encoding])](http://nodejs.cn/api/buffer.html#buffer_buf_indexof_value_byteoffset_encoding): 返回该值在缓冲区中首次出现的索引，不存在时为 -1
+ [buf.lastIndexOf(value[, byteOffset][, encoding])](http://nodejs.cn/api/buffer.html#buffer_buf_lastindexof_value_byteoffset_encoding): 类似 `indexOf()`，但从缓冲区末尾开始迭代
+ [buf.includes(value[, byteOffset][, encoding])](http://nodejs.cn/api/buffer.html#buffer_buf_includes_value_byteoffset_encoding): 判断缓冲区是否包含指定值，相当于 `buf.indexOf() !== -1`