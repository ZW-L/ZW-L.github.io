## 简介

+ 浏览器内核主要分为渲染引擎和 js 引擎，但平时所说的浏览器内核一般都是指渲染引擎
+ 不同浏览器的 js 引擎也不一样
+ 参考：
  + [五大主流浏览器及四大内核](https://www.jianshu.com/p/f4bf35898719)


## 内核

+ 分类

|内核|浏览器厂商|说明|
|-|-|-|
|Webkit|Chrome, Safari, Opera|Chrome 后来在其基础上开发了 Blink
|Trident|IE||
|Gecko|Firefox|
|Presto|Opera|后面投奔了 Chrome，先后改用 Webkit 和 Blink|
|Blink|Chrome, Opera|Chrome 基于 Webkit 的开发，包括使用 V8 引擎|


+ 国内浏览器现状

|浏览器|内核|说明|
|-|-|-|
|百度|Trident|
|360|Trident + Chromium|
|猎豹|Trident + Chromium|
|QQ|Trident + Webkit|


::: tip 备注：
+ 因为 Chrome 的流行，很多国内浏览器都使用了它的 Chromium 内核，或者是双内核
:::


## 渲染引擎


## JS 引擎

|浏览器|js 引擎|
|-|-|
|Chrome|V8|
|IE|Jscript(IE8), ChakraCore(IE9)|
|Firefox|Spider Monkey|
|Safari|Nitro|
|Opera|Carakan|
