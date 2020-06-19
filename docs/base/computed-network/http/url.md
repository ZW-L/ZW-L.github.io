## 介绍

```
https://www.zwlife.top:3000/blog/index.html?tag=note&limit=10#/main
```

+ 协议（protocol）：`http`, `https`, `ftp` 等
+ 主机名（hostname）：域名(`www.zwlife.top`)或 `IP` 地址
+ 端口（port）：`3000`，在服务器地址和一个 `:` 标识后的数字(没有则使用默认端口)
+ 请求路径（path）：`/blog/index.html`，指示服务器下的文件路径
+ 请求参数（query）：`tag=note&limit=10`，以 `?` 标识开始，且以 `key=value` 形式的单组或多组(用 `&` 分隔)的查询参数
+ 片段标识符（hash）：`#/main`，用 `<a>` 标签作锚点的跳转定位页面位置或 HTML5 的单页应用劫持跳转使请求路径和参数发生的变化

::: tip 说明：
+ `HTTP` 默认端口为 `80`，`HTTPS` 默认端口为 `443`
:::