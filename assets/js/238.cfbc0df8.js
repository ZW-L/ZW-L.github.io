(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{656:function(t,e,s){"use strict";s.r(e);var r=s(25),a=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN Service Worker"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("ul",[s("li",[t._v("是一个注册在指定源和路径下的事件驱动 "),s("code",[t._v("worker")])]),t._v(" "),s("li",[t._v("本质上充当 "),s("code",[t._v("Web")]),t._v(" 应用程序与浏览器之间的代理服务器，也可以在网络可用时作为浏览器和网络间的代理")]),t._v(" "),s("li",[t._v("能够创建有效的离线体验，拦截网络请求并基于网络是否可用以及更新的资源是否驻留在服务器上来采取适当的动作")]),t._v(" "),s("li",[t._v("还允许访问推送通知和后台同步 API")]),t._v(" "),s("li",[t._v("出于安全原因，"),s("code",[t._v("Service workers")]),t._v(" 只适用于 "),s("code",[t._v("HTTPS")]),t._v(" 协议(或本地调试)，且在 Firefox 的用户隐私模式下不可用")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("说明：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("Service workers")]),t._v(" 优于以前同类尝试(如 "),s("code",[t._v("AppCache")]),t._v(")，是因为它们无法支持当操作出错时终止操作，而 "),s("code",[t._v("Service workers")]),t._v(" 可以更细致地控制")]),t._v(" "),s("li",[s("code",[t._v("Service workers")]),t._v(" 大量使用 "),s("code",[t._v("Promise")]),t._v("，因为通常它们会等待响应后继续，并根据响应返回一个成功或者失败的操作")])])]),t._v(" "),s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),s("h3",{attrs:{id:"注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[t._v("#")]),t._v(" 注册")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("ServiceWorkerContainer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("scriptURL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("ServiceWorkerRegistration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something...")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("scriptURL")]),t._v(": "),s("code",[t._v("Service workers")]),t._v(" 脚本的 URL")]),t._v(" "),s("li",[s("code",[t._v("options")]),t._v(": 注册时提供选项的配置对象，目前可用的选项包括:\n"),s("ul",[s("li",[s("code",[t._v("scope")]),t._v(": 定义 "),s("code",[t._v("Service workers")]),t._v(" 注册范围的 URL")])])]),t._v(" "),s("li",[t._v("返回一个 "),s("code",[t._v("Promise")]),t._v(" 对象，值是 "),s("code",[t._v("ServiceWorkerRegistration")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);