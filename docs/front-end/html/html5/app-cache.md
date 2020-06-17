---
sidebarDepth: 2
---

## 介绍

[菜鸟教程](https://www.runoob.com/html/html5-app-cache.html)：

+ 通过创建 cache manifest 文件，可以轻松地创建 web 应用的离线版本
+ 应用程序缓存带来的优势：
  + 离线浏览 - 用户可在应用离线时使用
  + 速度更快 - 已缓存资源加载得更快
  + 减少服务器负载 - 浏览器将只从服务器下载更新过或更改过的资源

::: tip 说明：
+ 启用应用程序缓存，必须在文档的 `<html>` 标签中包含 `manifest` 属性
+ `manifest` 文件的建议的文件扩展名是 `.appcache`，而且 `MIME-type` 为 `text/cache-manifest`，必须在 web 服务器上进行配置
:::

```html
<!DOCTYPE HTML>
<html manifest="demo.appcache">
...
</html>
```


## Manifest 文件

`manifest` 文件是简单的文本文件，它告知浏览器被缓存的内容(以及不缓存的内容)，可分为三个部分：
+ `CACHE MANIFEST`: 在此标题下列出的文件将在首次下载后进行缓存
+ `NETWORK`: 在此标题下列出的文件需要与服务器的连接，且不会被缓存
+ `FALLBACK`: 在此标题下列出的文件规定当页面无法访问时的回退页面(如 404 页面)


## Demo

```
CACHE MANIFEST
# 2012-02-21 v1.0.0
/theme.css
/logo.gif
/main.js

NETWORK:
login.php

FALLBACK:
/html/ /offline.html
```

::: tip 说明：
+ 第一部分指定的三个文件会被缓存，第二部分指定的 `login.php` 文件不会被缓存，第三部分指定当没有网络时，使用 `offline.html` 代替 `/html/` 下的所有文件
+ `#` 开头的行表示注释，常用于标注日期和版本号，也用于刷新缓存(每当 `manifest` 文件发生变化便会刷新缓存)
:::


## 刷新缓存

刷新缓存的方式：

+ 用户清空缓存
+ `manifest` 文件发生变化
+ 通过程序更新应用缓存

::: warning 注意：
+ 一旦文件被缓存，即使修改了服务器上的文件浏览器也会使用已缓存的内容，此时必须刷新缓存
+ 浏览器对缓存数据的容量限制可能不太一样(某些浏览器设置的限制是每个站点 `5MB`)
:::