---
sidebarDepth: 2
description: 常用的 npm 模块/库
---

## 通用

### 框架

+ vue
+ react
+ angular
+ APP
  + react-native
  + flutter
  + uni-app


### 工程化配置

+ 包管理
  + npm
  + yarn
+ 打包构建：开发服务器(dev server)和打包构建(build)必不可少的一步
  + webpack(首选)：大而全的打包构建工具，慢慢学慢慢优化吧
  + rollup
+ 任务流管理
  + gulp
+ 语法兼容
  + babel：要想使用新版本的 ES 语法，这个是没跑的了，照抄不如学习一下配置
+ 代码规范：
  + typescript：强类型加持，再配合面向对象的特性
  + eslint + prettify：尽管 js 写法自由，但是还是要考虑一下维护和团队协作的
+ 测试
  + jest(首选)
  + mocha
+ 数据模拟
  + mock：当后台还不能提供真实数据的时候，双方约定接口请求方式，自行配置一个 mock 服务器，能够提高开发效率
+ Ajax 请求
  + axios(首选)
+ html 模板(可选)
  + jade
  + pug
  + ejs
+ css 相关(推荐)：为了减少重复，尽量配置吧
  + 预处理：sass、less、stylus
  + 后处理：postcss




### 函数库

+ jquery
+ lodash
+ underscore
+ moment


### 组件库

+ element-ui
+ bootstrap
+ vant
+ weui


### 特效/工具

+ animate.js
+ animate.css
+ swiper
+ better-scroll


### 可视化

+ echarts
+ d3





## Node

+ express：强大的 Node 后端服务器框架
+ koa：轻量的 Node 服务器框架
+ [cheerio](https://github.com/cheeriojs/cheerio)：爬虫工具库，使用 jQuery 语法解析 DOM
+ [puppeteer](https://github.com/puppeteer/puppeteer)：Google 推出的模拟交互工具库，可用于爬虫或检测网站性能
+ sequalize：数据库 ORM 库
+ mongodb：mongodb 数据库驱动
+ mongoose：类型安全和语法更简便的 mongodb 数据库工具库
