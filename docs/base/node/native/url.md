## 简介

+ [url](http://nodejs.cn/api/url.html) 模块用于处理与解析 URL。包含两个类（`URL`, `URLSearchParams`）和一些方法。



## URL

+ **简介：**
  + 浏览器兼容的 URL 类，根据 WHATWG URL 标准实现。

+ **构造函数**：
  + `new URL(input: string, base?: string): URL`：创建一个 URL 对象，当 `input` `是相对路径是，base` 是必须的
+ **属性**：
  + `url.hash: string`：获取/设置的哈希片段
  + `url.host: string`：获取/设置的主机名和端口
  + `url.hostname: string`：获取/设置的主机名
  + `url.origin: string`：获取/设置的源
  + `url.username: string`：获取/设置的用户名
  + `url.password: string`：获取/设置的密码
  + `url.pathname: string`：获取/设置的路径名
  + `url.port: string`：获取/设置的端口号
  + `url.protocol: string`：获取/设置的协议名称
  + `url.search: string`：获取/设置的查询字符串
  + `url.href: string`：获取/设置 URL，等同于 `url.toString()`
  + `url.searchParams: readonly URLSearchParams`：表示 URL 查询参数的 `URLSearchParams` 对象
+ **方法**：
  + `url.toString()`：返回序列化的 URL
  + `url.toJSON()`：返回序列化的 URL

::: tip 说明：
+ `url.href`/`url.toString()`/`url.toJSON()` 三者是一样的
+ 一些协议的默认端口号如下：
  + `ftp`: 21
  + `file`: 无
  + `gopher`: 70
  + `http`/`ws`: 80
  + `https`/`wss`: 443
:::




## URLSearchParams

+ **简介：**
  + 提供对 URL 查询部分的读写权限，有四个不同的构造函数，并且可以在全局对象上使用。

+ **构造函数**：
  + `new URLSearchParams(): URLSearchParams`：创建一个空的查询字符串
  + `new URLSearchParams(str: string): URLSearchParams`：将字符串解析成一个查询字符串
  + `new URLSearchParams(obj: object): URLSearchParams`：将对象解析成一个查询字符串
  + `new URLSearchParams(iter: iterator): URLSearchParams`：将迭代器解析成一个查询字符串
+ **方法**：
  + `urlSearchParams.append(name: string, value: string)`：在查询字符串中添加一个新的键值对
  + `urlSearchParams.delete(name: string)`：删除所有指定名字的字符串
  + `urlSearchParams.keys(): Iterator`：返回一个所有键名的迭代器
  + `urlSearchParams.values(): Iterator`：返回一个所有键对应的值的迭代器
  + `urlSearchParams.entries(): Iterator`：返回一个键值对的迭代器
  + `urlSearchParams[Symbol.iterator]()`：相当于 `urlSearchParams.entries()`
  + `urlSearchParams.forEach(fn: function, thisArg?: object)`：在查询字符串中迭代每个键值对
  + `urlSearchParams.has(name: string): boolean`：判断是否包含指定键名
  + `urlSearchParams.get(name: string): string | null`：返回指定键名的第一个值
  + `urlSearchParams.getAll(name: string): []`：返回指定键名的所有值
  + `urlSearchParams.set(name: string, value: string)`：设置匹配的键对应的值；不存在时会新建；若存在多个匹配的键，会设置第一对并删除其他对
  + `urlSearchParams.sort()`：按现有名称就地排列所有的键值对（稳定排序）
  + `urlSearchParams.toString(): string`：返回查询参数序列化后的字符串

::: tip 说明：
+ `URLSearchParams` 类和 `querystring` 模块类似，但是 `querystring` 模块更加通用，因为它可以定制分隔符（`&`, `=`）

:::




## 其他

+ `url.domainToASCII(domain: string): string`：返回 Punycode ASCII 序列化后的域名
+ `url.domainToUnicode(domain: string): string`：返回 Unicode 序列化后的的域名
+ `url.format(url: URL, options?: object): string`：返回自定义序列化的 URL
+ `url.fileURLToPath(url: URL | string): string`：返回文件 URL 对象对应的路径
+ `url.pathToFileURL(path: string): URL`：返回文件路径对应的 URL 对象

::: tip 说明：
+ `domainToASCII()`/`domainToUnicode()` 是一对逆运算
+ `fileURLToPath()`/`pathToFileURL()` 也算是一对逆运算
:::

