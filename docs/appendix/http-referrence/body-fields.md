## 介绍

&emsp;&emsp;主体部分指的是请求体和响应体。当前广泛使用的 `REST API` 设计规范的四种请求方法：`GET`/`POST`/`PUT`/`DELETE` 中，`GET` 请求没有请求主体。

## 常用的 POST 请求主体头部字段

+ application/json：最常用。表示请求主体为序列化后的 JSON 格式的数据
+ text/xml：表示请求主体为 XML 格式的数据
+ multipart/form-data：from 表单的默认头部字段，常用于上传文件
+ application/x-www-from-urlencoded：form 表单结构，用于传递字符串参数的键值对，与 URL 参数格式类似