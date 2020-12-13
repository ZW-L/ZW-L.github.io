---
sidebarDepth: 2
---

## 介绍

### 分类

+ 基准测试(benchmark-test)
+ 单元测试(unit-test)
+ 端到端测试(end-to-end-test, E2E)




### 步骤

根据开发方式选择不同的测试步骤：

+ 算法功能测试：单元测试 => 基准测试
+ 函数库测试：单元测试 => 兼容性测试





## 基准测试

基准测试框架：
+ [benchmark.js](https://github.com/bestiejs/benchmark.js)：基于 jsperf，上手简单，常用于测试比较函数性能


> :point_right: 本文档中关于 [benchmark](/front-end/engineering/engine/benchmark) 的使用记录




## 单元测试

单元测试框架：
+ [Jest](https://github.com/facebook/jest)：配置少、API 简单、Fackbook 开发的基于 Jasmine 的测试框架，支持 React 和 Vue
+ [Mocha](https://github.com/mochajs/mocha)：配置较多、灵活且社区成熟的测试框架
+ [Jasmine](https://github.com/jasmine/jasmine)：开箱即用、非常成熟、支持断言和仿真的测试框架，支持 React
+ [AVA](https://github.com/avajs/ava)：异步、性能好、简约的测试框架


> :point_right: 本文档中关于 [Jest](/front-end/engineering/engine/jest) 的使用记录



## 端到端测试

E2E 测试框架：
+ [Cypress](https://github.com/cypress-io/cypress)：不使用 Selenium、速度快
+ [Nightwatch](https://github.com/nightwatchjs/nightwatch)：上手快、API 丰富、社区成熟
+ [Puppeteer](https://github.com/puppeteer/puppeteer)：只支持 Chrome，可以测试 Chrome 插件