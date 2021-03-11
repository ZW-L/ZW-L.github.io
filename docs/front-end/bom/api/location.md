## 简介

[MDN location](https://developer.mozilla.org/zh-CN/docs/Web/API/Location)：

+ 表示其链接到的对象的位置(`URL`)


## 属性

+ `href`: 整个 `URL`
+ `protocol`: 协议
+ `host`: 端口号
+ `hostname`: 主机名
+ `port`: 端口号
+ `pathname`: 路径
+ `search`: 查询参数(`?` 开头)
+ `hash`: 块标识符(`#` 开头)
+ `username`: 用户名
+ `password`: 密码
+ `origin`: 页面来源的域名

## 方法

+ `assign()`: 加载给定 `URL` 的内容资源到 `location` 对象所关联的对象上
+ `reload()`: 重新加载来自当前 `URL` 的资源
+ `replace()`: 用给定的 `URL` 替换掉当前的资源
+ `toString()`: 返回一个当前 `URL` 的字符串