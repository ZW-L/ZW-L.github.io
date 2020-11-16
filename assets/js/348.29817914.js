(window.webpackJsonp=window.webpackJsonp||[]).push([[348],{778:function(v,t,_){"use strict";_.r(t);var e=_(25),a=Object(e.a)({},(function(){var v=this,t=v.$createElement,_=v._self._c||t;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"微任务和宏任务"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微任务和宏任务"}},[v._v("#")]),v._v(" 微任务和宏任务")]),v._v(" "),_("p",[_("strong",[v._v("简介：")])]),v._v(" "),_("ul",[_("li",[v._v("微任务(micro task)和宏任务(macro task)分别维护一个队列，同步的任务在宏任务上执行")]),v._v(" "),_("li",[v._v("在同一个事件循环中，微任务永远在宏任务之前执行")])]),v._v(" "),_("p",[_("strong",[v._v("常见微任务：")])]),v._v(" "),_("ul",[_("li",[v._v("process.nextTick()")]),v._v(" "),_("li",[v._v("promise")]),v._v(" "),_("li",[v._v("Object.observe()")]),v._v(" "),_("li",[v._v("MutationObserve")])]),v._v(" "),_("p",[_("strong",[v._v("常见宏任务：")])]),v._v(" "),_("ul",[_("li",[v._v("setTimeout()")]),v._v(" "),_("li",[v._v("setInterval()")]),v._v(" "),_("li",[v._v("setImmediate()")]),v._v(" "),_("li",[v._v("I/O")]),v._v(" "),_("li",[v._v("UI rendering")])]),v._v(" "),_("h2",{attrs:{id:"定时器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#定时器"}},[v._v("#")]),v._v(" 定时器")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("setTimeout()")]),v._v("/"),_("code",[v._v("setInterval()")]),v._v(" 和 Javascript 类似，但是其内部是基于 Node.js 事件循环的")]),v._v(" "),_("li",[_("code",[v._v("setImmediate()")])])]),v._v(" "),_("h2",{attrs:{id:"nexttick"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[v._v("#")]),v._v(" nextTick()")]),v._v(" "),_("ul",[_("li",[v._v("全局属性 "),_("code",[v._v("process")]),v._v(" 的一个方法，用于将回调添加到当前事件循环的尾部")]),v._v(" "),_("li",[v._v("若无限调用该方法，本轮 EventLoop 将不会结束")])]),v._v(" "),_("h2",{attrs:{id:"eventloop"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#eventloop"}},[v._v("#")]),v._v(" EventLoop")]),v._v(" "),_("ol",[_("li",[v._v("从宏任务的头部取出一个任务执行")]),v._v(" "),_("li",[v._v("执行过程中若遇到微任务则将其添加到微任务的队列中")]),v._v(" "),_("li",[v._v("宏任务执行完毕后，若微任务的队列中存在任务，则逐个执行至全部完成")]),v._v(" "),_("li",[v._v("GUI 渲染")]),v._v(" "),_("li",[v._v("回到步骤 1，直到宏任务执行完毕")])]),v._v(" "),_("h2",{attrs:{id:"异步原理"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步原理"}},[v._v("#")]),v._v(" 异步原理")]),v._v(" "),_("ul",[_("li",[v._v("当调用 Node.js API 的时候，Node.js 会将具体操作和回调函数交给 EventLoop 执行")]),v._v(" "),_("li",[v._v("EventLoop 维护了一个回调函数队列，当异步函数执行时，回调函数会被放入这个队列")]),v._v(" "),_("li",[v._v("直至异步函数执行完成后，Javascript 引擎才会开始处理 EventLoop 维护的回调函数队列")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("更多：")]),v._v(" "),_("ul",[_("li",[v._v("EventLoop 使用的是 C/C++ 编写的 libuv 库，而 libuv 采用了异步和事件驱动的编程风格，为开发人员提供一套基于 I/O 通知的回调函数")]),v._v(" "),_("li",[v._v("Node.js 的 异步原理类似 Ajax 原理，但是 Ajax 的核心是 XHR，而 Node.js 是 EventLoop")])])]),v._v(" "),_("h2",{attrs:{id:"事件处理方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#事件处理方式"}},[v._v("#")]),v._v(" 事件处理方式")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("callback")]),v._v("：采用错误优先回调的方式")]),v._v(" "),_("li",[_("code",[v._v("EventEmitter")]),v._v("：事件驱动里的事件发射器")])]),v._v(" "),_("h3",{attrs:{id:"callback"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#callback"}},[v._v("#")]),v._v(" Callback")]),v._v(" "),_("ul",[_("li",[v._v("回调函数的第一个参数为 "),_("code",[v._v("error")]),v._v(" 错误对象，第二个参数是成功响应的结果数据")]),v._v(" "),_("li",[v._v("如果成功响应时，第一个参数值为 "),_("code",[v._v("null")])]),v._v(" "),_("li",[v._v("API 写法约定\n"),_("ul",[_("li",[v._v("回调函数作为函数的最后一个参数")]),v._v(" "),_("li",[v._v("回调函数的参数遵循错误优先")]),v._v(" "),_("li",[v._v("回调函数的函数体内优先检测错误")])])])]),v._v(" "),_("h3",{attrs:{id:"eventemitter"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#eventemitter"}},[v._v("#")]),v._v(" EventEmitter")]),v._v(" "),_("ul",[_("li",[_("code",[v._v("events")]),v._v(" 模块的一个构造函数，采用发布/订阅模式")]),v._v(" "),_("li",[_("code",[v._v("on()")]),v._v("：监听(订阅)事件，在某时刻触发回调函数")]),v._v(" "),_("li",[_("code",[v._v("emit()")]),v._v("：触发(发布)事件")])]),v._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("说明：")]),v._v(" "),_("ul",[_("li",[v._v("类似前端的事件机制、Vue 的 "),_("code",[v._v("$on()")]),v._v("/"),_("code",[v._v("$emit()")]),v._v("、jQuery 的 "),_("code",[v._v("on()")]),v._v("/"),_("code",[v._v("trigger()")])])])]),v._v(" "),_("h2",{attrs:{id:"异步编程简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#异步编程简介"}},[v._v("#")]),v._v(" 异步编程简介")]),v._v(" "),_("ul",[_("li",[v._v("Callback - 容易出现 “回调地狱”")]),v._v(" "),_("li",[v._v("Thunk - 让回调链式执行")]),v._v(" "),_("li",[v._v("Promise - 更优雅的 Thunk")]),v._v(" "),_("li",[v._v("Generator - 生成一切")]),v._v(" "),_("li",[v._v("async/await - 终极杀器")]),v._v(" "),_("li",[v._v("最佳方式 - "),_("code",[v._v("Async")]),v._v(" + "),_("code",[v._v("Promise")])])])])}),[],!1,null,null,null);t.default=a.exports}}]);