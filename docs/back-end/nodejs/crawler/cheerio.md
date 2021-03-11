---
sidebarDepth: 2
---


## 注意事项

+ 返回结果的中文字符是编码过的：
```js
const cheerio = require('cheerio')
const $ = cheerio.load('<div id="content">你好</div>')
console.log($('#content').html()) //&#x4F60;&#x597D;
```

::: tip 解决
+ 参考[地址](https://www.cnblogs.com/philipding/p/10153094.html)
+ 只需在 cheerio 中指定参数即可：
```js
const cheerio = require('cheerio')
const $ = cheerio.load('<div id="content">你好</div>', { decodeEntities: false })
console.log($('#content').html()) // 你好
```
:::