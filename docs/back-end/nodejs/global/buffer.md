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

+ 创建的 `Buffer` 实例一般用于表示编码字符的序列，通过使用显式的字符编码，就可以在 `Buffer` 实例与普通的 `JavaScript` 字符串之间进行相互转换
+ `Node` 支持的字符编码：

|编码|描述|备注|
|-|-|-|
|ascii|仅支持 7 位 `ASCII` 数据|如果设置去掉高位的话，这种编码是非常快的
|utf8|多字节编码的 `Unicode` 字符|许多网页和文档格式使用的格式
|utf16le|2 或 4 个字节，小字节序编码的 `Unicode` 字符|
|ucs2|`utf16le` 的别名|
|base64|`Base64` 编码|
|latin1|一种把 `Buffer` 编码成一字节编码的字符串的方式|
|binary|`latin1` 的别名|
|hex|将每个字节编码为两个十六进制字符|




## 创建缓冲区

&emsp;&emsp;在 v6.0 之前直接使用 `new Buffer()` 构造函数来创建 `Buffer` 对象实例，出于安全性，在 v6.0 以后，官方文档建议使用 `Buffer.from()` 接口创建 `Buffer` 对象实例:
+ `Buffer.from(buf)`：拷贝已有缓存区
+ `Buffer.from(array)`：从整数数组创建缓冲区
+ `Buffer.from(string[, encoding)`：从字符串创建缓冲区
+ `Buffer.from(arrayBuffer[, byteOffset[, length]])`：从 `ArrayBuffer` 创建缓冲区
+ `Buffer.from(object[, offsetOrEncoding[, length]])`：从一个对象创建缓冲区(该对象拥有 `Symbol.toPrimitive` 或 `valueOf()`)
+ `Buffer.alloc(size[, fill[, encoding]])`：创建一个指定大小的缓冲区，并用指定值填充
+ `Buffer.allocUnsafe(size)`：创建一个指定大小的未初始化的缓冲区
+ `Buffer.allocUnsafeSlow(size)`：创建一个指定大小的未初始化的缓冲区

```js
// 从数组创建
const buf1 = Buffer.from([65, 66, 67])
console.log(buf1.toString()) // ABC

// 拷贝已有缓冲区
const buf2 = Buffer.from(buf1)
console.log(buf2.toString()) // ABC

// 从字符串创建
const buf3 = Buffer.from('ABC')
console.log(buf3.toString()) // ABC

// 从对象创建
const buf4 = Buffer.from({ valueOf: () => 'ABC' })
console.log(buf4.toString()) // ABC

// 从 ArrayBuffer 创建
const buf5 = Buffer.from(new ArrayBuffer(3))
buf5.fill('A')
console.log(buf5.toString()) // AAA

// 使用 alloc
const buf6 = Buffer.alloc(3, 'A')
console.log(buf6.toString()) // AAA
```

::: tip 说明：
+ 创建的缓冲区大小区间为 [0, `buffer.constants.MAX_LENGTH`]，否则抛出 `ERR_INVALID_OPT_VALUE`
+ `allocUnsafeSlow()` 应该只用作开发人员已经在其应用程序中观察到过度的内存之后的最后手段
:::



## 属性

**静态属性：**
+ `Buffer.poolSize`：缓冲池预分配的内部 `Buffer` 实例的字节大小

**实例属性：**
+ `buf.length`：返回内存分配的字节数(不一定反映实例可用数据的字节量)
+ `buf.buffer` 创建实例时的底层 `ArrayBuffer` 对象
+ `buf.byteOffset` 创建实例时的底层 `ArrayBuffer` 对象的 `byteOffset`
+ `buf[index]`：获取/设置指定的位置的八位字节(指向单个字节，有效范围是 0x00~0xFF 或 0~255)

**buffer 模块属性：**
+ `buffer.kMaxLength`：分配给单个 `Buffer` 实例的最大内存
+ `buffer.INSPECT_MAX_BYTES`：调用 `buf.inspect()` 时会返回的最大字节数
+ `buffer.constants`: 包含两个常量值：
  + `MAX_STRING_LENGTH`：单个 `string` 实例允许的最大长度(取决于 JS 引擎)
  + `MAX_LENGTH`：单个 `Buffer` 实例允许的最大内存，32 位架构为 2^30-1(约1GB)，64 位架构为 2^31-1(约2GB)



## 方法

### 写入

+ `buf.write(string[, offset[, length]][, encoding])`: 将数据写入缓冲区
```js
const buf = Buffer.from([65, 66, 67])
buf.write('Hi')
console.log(buf.toString()) // HiC
```

::: tip 说明：
+ 如果实例没有足够的空间，则只会写入 `string` 的一部分，只编码了一部分的字符不会被写入
:::


### 填充

+ `buf.fill(value[, offset[, end]][, encoding])`: 用指定值填充缓冲区
```js
const buf = Buffer.from([65, 66, 67])
buf.fill('H')
console.log(buf.toString()) // HHH
```


### 转化

+ `buf.toString([encoding[, start[, end]]])`: 返回缓冲区数据的 `String` 格式(默认编码为 utf8)
+ `buf.toJSON()`: 返回缓冲区数据的 `JSON` 格式
```js
const buf = Buffer.from([65, 66, 67])
console.log(buf.toString()) // ABC
console.log(buf.toJSON())   // { type: 'Buffer', data: [ 65, 66, 67 ] }
```


### 合并

+ `Buffer.concat(list[, totalLength])`: 将缓冲区列表合并成一个新的缓冲区
```js
const buf1 = Buffer.from([65, 66, 67])
const buf2 = Buffer.from([68, 69, 70])
const buf3 = Buffer.concat([buf1, buf2], 5)

console.log(buf1.toString(), buf2.toString()) // ABC DEF
console.log(buf3.toString())                  // ABCDE
```


### 复制

+ `buf1.copy(buf2[, buf2Start[, buf1Start[, buf1End]]])`: 拷贝缓冲区(将 buf1 拷贝部分到 buf2)
```js
const buf1 = Buffer.from([65, 66, 67])
const buf2 = Buffer.from([68, 69, 70])

buf1.copy(buf2, 1, 1, 2)
console.log(buf1.toString(), buf2.toString()) // ABC DBF
```


### 转码

+ `buffer.transcode(source, fromEnc, toEnc)`: 更改缓冲区编码，返回新的缓冲区
```js
const buffer = require('buffer')      // buffer 模块提供，需手动引入

const buf = Buffer.from([1, 66, 67])
console.log(buf.toString())           // BC

buffer.transcode(buf, 'utf8', 'utf16le')
console.log(buf.toString('utf16le'))  // 䈁
```

::: tip 备注：
+ 支持的字符编码有 'ascii'、 'utf8'、 'utf16le'、 'ucs2'、 'latin1'、'binary'
+ 如果指定的字节序列无法用目标字符编码表示，则转码过程会使用替代的字符
:::


### 切片

+ `buf.slice([start[, end]])`: 返回一个缓冲区切片
+ `buf.subarray([start[, end]])`: 返回一个缓冲区切片，等同于 `buf.slice()`
```js
const buf1 = Buffer.from([65, 66, 67])
const buf2 = buf1.slice(1, 2)
console.log(buf1.toString(), buf2.toString()) // ABC B
```
+ 生成的切片缓冲区是原缓冲区的一份复制，它们指向同一块内存：
```js
const buf1 = Buffer.from([65, 66, 67])
const buf2 = buf1.slice(1, 2)
console.log(buf1.toString(), buf2.toString()) // ABC B

buf2[0] = 90
console.log(buf1.toString(), buf2.toString()) // AZC Z
```


### 交换

+ `buf.swap16()`: 将缓冲区数据解析成无符号的 16 位整数的数组(`buf.length` 是 2 的倍数)
+ `buf.swap32()`: 将缓冲区数据解析成无符号的 32 位整数的数组(`buf.length` 是 4 的倍数)
+ `buf.swap64()`: 将缓冲区数据解析成 64 位数值的数组(`buf.length` 是 8 的倍数)
```js
const buf = Buffer.from([65, 66, 67, 68, 69, 70, 71, 72])

console.log(buf.toString())          // ABCDEFGH
console.log(buf.swap16().toString()) // BADCFEHG
console.log(buf.swap32().toString()) // CDABGHEF
console.log(buf.swap64().toString()) // FEHGBADC
```

::: tip 说明：
+ 调用时必须保证 `buf.length` 的倍数关系，否则会抛出 `ERR_INVALID_BUFFER_SIZE` 异常
:::


### 比较

+ `Buffer.compare(buf1, buf2)`: 比较缓冲区，相当于 `buf1.compare(buf2)`
+ `buf.compare(target[, targetStart[, targetEnd[, sourceStart[, sourceEnd]]]])`：比较两个缓冲区
+ `buf.equals(otherBuffer)`: 比较缓冲区的值是否相等
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


### 迭代

+ 用 `for...of` 迭代
+ `buf.keys()`: 创建缓冲区的键迭代器
+ `buf.values()`: 创建缓冲区的值迭代器
+ `buf.entries()`: 创建缓冲区的键值迭代器
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


### 读取/写入

+ 关于数据类型、符号、大小端的概念可参考 [操作系统 - 信息的表示和处理]()
+ 读取方法：
```js
// 1bit 8 位 int
buf.readInt8([offset])
buf.readUInt8([offset])
// 2bit 16 位 int
buf.readInt16BE([offset])
buf.readInt16LE([offset])
buf.readUInt16BE([offset])
buf.readUInt16LE([offset])
// 4bit 32 位 int
buf.readInt32BE([offset])
buf.readInt32LE([offset])
buf.readUInt32BE([offset])
buf.readUInt32LE([offset])
// 8bit 64位 bigInt
buf.readBigInt64BE([offset])
buf.readBigInt64LE([offset])
buf.readBigUInt64BE([offset])
buf.readBigUInt64LE([offset])
// 指定 bit
buf.readIntBE(offset, byteLength)
buf.readIntLE(offset, byteLength)
buf.readUIntBE(offset, byteLength)
buf.readUIntLE(offset, byteLength)

// 单精度浮点数
buf.readFloatBE([offset])
buf.readFloatLE([offset])
// 双精度浮点数
buf.readDoubleBE([offset])
buf.readDoubleLE([offset])
```
+ 写入二进制数据的方法与读取的类似，但增加了一个 value 参数，且位于首位：
```js
// 1bit 8 位 int
buf.writeInt8(value[, offset])
buf.writeUInt8(value[, offset])
// 2bit 16 位 int
buf.writeInt16BE(value[, offset])
buf.writeInt16LE(value[, offset])
buf.writeUInt16BE(value[, offset])
buf.writeUInt16LE(value[, offset])
// 4bit 32 位 int
buf.writeInt32BE(value[, offset])
buf.writeInt32LE(value[, offset])
buf.writeUInt32BE(value[, offset])
buf.writeUInt32LE(value[, offset])
// 8bit 64位 bigInt
buf.writeBigInt64BE(value[, offset])
buf.writeBigInt64LE(value[, offset])
buf.writeBigUInt64BE(value[, offset])
buf.writeBigUInt64LE(value[, offset])
// 指定 bit 长度
buf.writeIntBE(value, offset, byteLength)
buf.writeIntLE(value, offset, byteLength)
buf.writeUIntBE(value, offset, byteLength)
buf.writeUIntLE(value, offset, byteLength)

// 单精度浮点数
buf.writeFloatBE(value[, offset])
buf.writeFloatLE(value[, offset])
// 双精度浮点数
buf.writeDoubleBE(value[, offset])
buf.writeDoubleLE(value[, offset])
```




### 其他

+ `Buffer.isBuffer(obj)`: 判断是否为一个缓冲区对象
+ `Buffer.isEncoding(encoding)`: 判断是否支持指定字符编码
+ `Buffer.byteLength(string[, encoding])`: 返回字符串的字节长度(`str.length` 返回的是字符数)
+ `buf.indexOf(value[, byteOffset][, encoding])`: 返回该值在缓冲区中首次出现的索引(不存在时为 -1)
+ `buf.lastIndexOf(value[, byteOffset][, encoding])`: 类似 `indexOf()`，但从缓冲区末尾开始迭代
+ `buf.includes(value[, byteOffset][, encoding])`: 判断缓冲区是否包含值，相当于 `buf.indexOf() !== -1`



## 使用技巧

### 修改字符编码

+ 使用 Base64 对账号密码进行简单编码
```js
const user = {
  name: 'Alice',
  pass: 'jj123456'
}

const encoded = Buffer.from(`${user.name}-${user.pass}`).toString('base64')
console.log(encoded)    // QWxpY2UtamoxMjM0NTY=
```

### 处理 Data URIs

+ Data URIs 允许资源以行内编码的形式存在于 web 页面中，一般格式为：
```
data:[MIME-type][;base64],<data>

# 在浏览器地址栏输入以下内容会显示 Hello World!
data:text/plain;base64,SGVsbG8sIFdvcmxkIQ
```
+ 写入文件
```js
const fs = require('fs')

const uri = 'data:text/plain;base64,SGVsbG8sIFdvcmxkIQ=='
const data = uri.split(',')[1]
const buf = Buffer.from(data, 'base64')
fs.writeFileSync('./hello.txt', buf)
```
+ 将文件组织成 Data URIs
```js
const fs = require('fs')

const mime = 'text/plain'
const encoding = 'base64'
const data = fs.readFileSync('./hello.txt').toString(encoding)
const uri = `data:${mime};${encoding},${data}`
console.log(uri)    // data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==
```


### 二进制文件转 JSON

+ 参考 [Node.js 硬实战](https://book.douban.com/subject/26937390/) P49
+ 将 DBase 二进制文件转换为 JSON 文件，文件参考 [world.dbf](https://github.com/gwaldron/osgearth/blob/master/data/world.dbf)
```js
const fs = require('fs')

const header = {}
const buf = fs.readFileSync('./world.dbf')
// 处理头部信息
const date = new Date()
date.setUTCFullYear(1900 + buf[1])
date.setUTCMonth(buf[2])
date.setUTCDate(buf[3])

header.lastUpdated = date.toUTCString(date)   // 最后更新事件
header.totalRecords = buf.readUInt32LE(4)     // 记录条目数
header.bytesInHeader = buf.readUInt16LE(8)    // 头部总字节数
header.bytesPerRecord = buf.readUInt16LE(10)  // 记录部分字节数

// 处理头部字段描述数组
const fields = []
const fieldTerminator = 0x0D
let fieldOffset = 32
const FIELD_TYPES = {
  C: 'Character',
  N: 'Numeric'
}
while (buf[fieldOffset] !== fieldTerminator) {
  const fieldBuf = buf.slice(fieldOffset, fieldOffset + 32)
  const field = {}
  field.name = fieldBuf.toString('ascii', 0, 11).replace(/\u0000/g, '')
  field.type = FIELD_TYPES[fieldBuf.toString('ascii', 11, 12)]
  field.length = fieldBuf[16]
  fields.push(field)
  fieldOffset += 32
}

// 处理数据记录
const startingRecordOffset = header.bytesInHeader
const records = []
for (let i = 0; i < header.totalRecords; i++) {
  const record = {}
  let recordOffset = startingRecordOffset + i * header.bytesPerRecord
  record.isDel = buf.readUInt8(recordOffset) === 0x2A
  recordOffset++

  for (let j = 0; j < fields.length; j++) {
    field = fields[j]
    const Type = field.type === 'Numeric' ? Number : String
    record[field.name] = Type(
      buf.toString('utf8', recordOffset, recordOffset + field.length).trim()
    )
    recordOffset += field.length
  }

  records.push(record)
}

fs.writeFileSync('./world.json', JSON.stringify({ header, fields, records }, null, '\t'))
```