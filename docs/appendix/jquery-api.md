## 简介

&emsp;&emsp;针对 `jQuery 1.x` 版本，所有 `API` 参考自 [jQuery API](https://www.jquery123.com/)。

+ 选择器
+ 遍历和筛选
+ 属性操作
+ 增删改元素
+ 特效
+ Ajax
+ 事件
+ 设置/核心


## 选择器

&emsp;&emsp;`jQuery` 最强大的一个地方就是把选择器从 `CSS` 带到了 `javascript`，从而可以用类似 `CSS` 的匹配规则来匹配元素。

|说明|语法|
|-|-|
|<font color="orange">基础选择</font>||
|`$(document)`|选中文档|
|`$('body')`|选中 body|
|`$('this')`|选中当前元素|
|`$('*')`|选中所有元素|
|`$('#idName')`|id 选择器|
|`$('.className')`|类选择器|
|`$('p')`|元素选择器|
|`$('.class1, .class2')`|选中多个元素|
|<font color="orange">层级选择</font>：子、后代、兄弟元素||
|`$('div > p')`|直接子元素|
|`$('div p')`|后代元素|
|`$('.prev + .next')`|下一个兄弟元素|
|`$('.prev ~ .siblings')`|所有兄弟元素|
|<font color="orange">基本筛选</font>：对前一组匹配结果筛选||
|`:not(selector)`|除括号外的所有元素|
|`:first`|第一个元素|
|`:last`|最后一个元素|
|`:even`|序号为偶数的元素|
|`:odd`|序号为基数的元素|
|`:eq(index)`|序号等于 `index` 的元素|
|`:gt(index)`|序号大于 `index` 的元素|
|`:lt(index)`|序号小于 `index` 的元素|
|`:animated`|正在进行动画的元素|
|`:root`|文档根元素|
|`:target`|由文档 URI 的格式化识别码表示的目标元素|
|`:lang`|指定语言的所有元素|
|`:header`|所有 `<h1>` ~ `<h6>` 元素|
|<font color="orange">内容筛选</font>：根据包含/不包含筛选||
|`:empty`|没有子节点的元素|
|`:parent`|拥有子节点的元素|
|`:contains('text')`|包含指定文本的元素|
|`:has(selector)`|至少包含一个指定选择器的元素|
|<font color="orange">可见性筛选</font>：根据元素的可见性筛选||
|`:hidden`|所有隐藏的元素|
|`:visible`|所有在页面占据控件的元素|
|<font color="orange">子节点筛选</font>||
|`:only-child`|是父元素的唯一元素|
|`:nth-child(n)`|第 n 个元素|
|`:nth-last-child(n)`|倒数第 n 个元素|
|`:first-child`|第一个子元素|
|`:last-child`|最后一个子元素|
|`:only-of-type`|所有没有兄弟元素，且具有相同的元素名称的元素|
|`:nth-of-type(n)`|同属于一个父元素之下，并且标签名相同的子元素中的第 n 个|
|`:nth-last-of-type(n)`|所有他们的父级元素的第 n 个子元素，计数从最后一个元素到第一个|
|`:first-of-type`|所有相同的元素名称的第一个兄弟元素|
|`:last-of-type`|所有元素之间具有相同元素名称的最后一个兄弟元素|
|<font color="orange">属性筛选</font>：与 `CSS` 的属性匹配类似||
|`[attr]`|拥有指定属性的元素，以下属性均以匹配指定属性为前提|
|`[attr="value"`]|匹配指定值的元素|
|`[attr!="value"`]|值不等于指定值的元素|
|`[attr^="value"`]|以指定值开头的元素|
|`[attr$="value"`]|以指定值结尾的元素|
|`[attr*="value"`]|包含特定值的元素|
|`[attr~="value"`]|属性值是以空格分隔的多个值中的一个|
|`[attr|="value"`]|等于指定值，或者以指定值开头|
|<font color="orange">表单筛选</font>：快速匹配特定表单元素||
|`:input`|所有 `input` 元素|
|`:text`|所有 `text` 类型的 `input` 元素|
|`:password`|所有 `password` 类型的元素|
|`:radio`|所有单选框|
|`:checkbox`|所有复选框|
|`:submit`|所有提交按钮|
|`:image`|所有图片按钮|
|`:reset`|所有重置按钮|
|`:button`|所有 `button` 元素|
|`:file`|所有文件选择器|
|`:selected`|所有被选中的列表项|
|`:enabled`|所有可用的表单新元素|
|`:disabled`|所有禁用的表单元素|
|`:checked`|所有选中的单选/复选框|
|`:focus`|当前获取焦点的元素|



## 遍历和筛选

|语法|说明|
|-|-|
|<font color="orange">查找或遍历 DOM</font>||
|`.index()`|从匹配的元素中搜索给定元素的索引值，从 0 开始|
|`.toArray()`|返回一个包含 `jQuery` 对象集合中的所有 `DOM` 元素的数组|
|`.find()`|在当前结果内选取符合的元素|
|`.closet()`|在当前结果内寻找最近的祖先|
|`.parent()`|当前选取结果的直接父节点|
|`.parents()`|当前选取结果的所有直接父节点|
|`.parentsUnit()`||
|`.children()`|当前选取结果的所有子节点|
|`.siblings()`|当前选取结果的所有兄弟节点|
|`.next()`|当前选取结果的下一个兄弟节点|
|`.nextAll()`|当前选取结果的后面所有兄弟节点|
|`.nextUnit()`||
|`.prev()`|当前选取结果的前一个兄弟节点|
|`.prevAll()`|当前选取结果的前面所有兄弟节点|
|`.prevUnit()`||
|<font color="orange">添加元素或再筛选</font>||
|`.is()`|检查当前筛选结果是否满足条件|
|`.add()`|为匹配的元素集合添加元素|
|`.addBack()`|添加堆栈中元素集合到当前集合|
|`.find()`|在匹配结果集中查找符合这个选择器的结果后代|
|`.filter()`|筛选元素集合中匹配表达式 或 通过传递函数测试的 那些元素集合|
|`.has()`|相当于 `:has()`|
|`.not()`|相当于 `:not()`|
|`.first()`|获取匹配元素集合中第一个元素|
|`.last()`|获取匹配元素集合中最后一个元素|
|`.each()`|遍历一个 `jQuery` 对象，为每个匹配元素执行一个函数|
|`.map()`|通过一个函数匹配当前集合中的每个元素，生成一个新的 `jQuery` 对象|
|`.slice()`|根据指定的下标范围，过滤匹配的元素集合，生成一个新的 `jQuery` 对象|



## 属性操作

|语法|说明|
|-|-|
|<font color="orange">class 属性</font>||
|`.hasClass(string)`|查询是否含有指定类名|
|`.addClass(string | function(index))`|添加一个或类名|
|`.toggleClass(string | function [, switch])`|切换类名|
|`.removeClass([string | function(index, class)])`|删除一个、多个或全部类名|
|<font color="orange">css 属性</font>||
|`.css()`|获取或设置 `CSS` 属性|
|`.width()`|获取或设置元素的宽度|
|`.height()`|获取或设置元素的高度|
|`.innerWidth()`|返回元素的宽度，包括左右 `padding`|
|`.innerHeight()`|返回元素的高度，包括左右 `padding`|
|`.outerWidth([true])`|返回元素的宽度，包括左右 `padding` 和 `border` ，传入 `true` 将包括 `margin`|
|`.outerHeight([true])`|返回元素的高度，包括左右 `padding` 和 `border` ，传入 `true` 将包括 `margin`|
|`.position()`|获取元素相对于父元素的偏移位置|
|`.offset()`|获取或设置元素的坐标(相对于文档)|
|`.scrollLeft()`|获取或设置元素的水平滚动条的位置|
|`.scrollTop()`|获取或设置元素的垂直滚动条的位置|
|`jQuery.cssNumber`|一个包含所有 `CSS` 属性的对象|
|<font color="orange">通用属性操作</font>||
|`.attr()`|获取或设置元素的属性值，会覆盖同类值|
|`.val()`|获取或设置元素的值，常用于表单|
|`.prop()`|获取或设置元素的 `property`、`disabled`、`checked`等|
|`.removeAttr()`|为匹配的元素集合中的每个元素中移除一个属性|
|`.removeProp()`|为集合中匹配的元素删除一个 `property` 属性|
|`.data()`|在匹配元素上存储任意相关数据|
|`.removeData()`|在元素上移除绑定的数据|




## 增删改元素

|语法|说明|
|-|-|
|<font color="orange">复制元素</font>||
|`.clone()`|创建一个匹配的元素集合的深度拷贝副本|
|<font color="orange">插入到现有元素内</font>||
|`.html()`|获取或设置 a 的 `HTML` 内容(渲染标签)|
|`.text()`|获取或设置 a 的 `HTML` 内容(不渲染标签)|
|`a.append(b)`|b 添加到 a 的末尾|
|`a.appendTo(b)`|a 添加到 b 的末尾|
|`a.prepend(b)`|b 添加到 a 的开始|
|`a.prependTo(b)`|a 添加到 b 的开始|
|<font color="orange">插入到现有元素外</font>||
|`a.after(b)`|b 添加至 a 后面|
|`a.before(b)`|b 添加至  a 前面|
|`a.insertAfter(b)`|a 添加至 b 前面|
|`a.insertBefore(b)`|a 添加至 b 后面|
|<font color="orange">插入并包裹现有内容</font>||
|`.wrap()`|在每个匹配的元素外层包上一个 `HTML` 元素|
|`.wrapAll()`|在所有匹配元素外面包一层 `HTML` 结构|
|`.wrapInner()`|在匹配元素里的内容外包一层结构|
|<font color="orange">删除元素</font>||
|`.detach()`|从 `DOM` 中去掉所有匹配的元素，但不删除事件及 `jQuery` 数据|
|`.remove()`|将匹配元素集合从 `DOM` 中删除，同时移除元素上的事件及 `jQuery` 数据|
|`.empty()`|从 `DOM` 中移除集合中匹配元素的所有子节点|
|`.unwrap()`|将匹配元素集合的父级元素删除，保留自身在原来的位置|
|<font color="orange">替换元素</font>||
|`.replaceAll()`|用集合的匹配元素替换每个目标元素|
|`.replaceWith()`|用提供的内容替换集合中所有匹配的元素并且返回被删除元素的集合|




## 特效

|语法|说明|
|-|-|
|<font color="orange">基础特效</font>||
|`.hide()`|隐藏匹配的元素|
|`.show()`|显示匹配的元素|
|`.toggle()`|显示或隐藏匹配元素|
|`.fadeIn()`|通过淡入过渡状态|
|`.fadeOut()`|通过淡出过渡状态|
|`.fadeTo()`|通过调整匹配元素的透明度过渡状态|
|`.fadeToggle()`|淡入/淡出切换|
|`.slideUp()`|上拉隐藏元素|
|`.slideDown()`|下拉显示元素|
|`.slideToggle()`|上拉/下拉切换|
|<font color="orange">自定义特效</font>||
|`.delay()`|设置一个延时来推迟执行队列中后续的项|
|`.stop()`|停止匹配元素当前正在运行的动画|
|`.animate()`|根据一组 `CSS` 属性，执行自定义动画|
|`.finish()`|停止正在运行的动画，删除队列中的的动画，并完成所有匹配元素的动画|
|`.queue()`|显示在匹配的元素上的已经执行的函数队列|
|`.dequeue()`|执行匹配元素队列的下一个函数|
|`.clearQueue()`|从列队中移除所有未执行的项|
|`jQuery.speed`|创建一个包含一组准备在自定义动画中使用的属性的对象|
|`jQuery.fx.off`|全局禁用所有动画|
|`jQuery.fx.interval`|定义动画的频率(ms)|





## Ajax

&emsp;&emsp;`jQuery` 另一个强大的功能就是对 `Ajax` 的封装。

|语法|说明|
|-|-|
|<font color="orange">快捷方法</font>||
|`.load(url, [data, completeCallback])`|从服务器载入数据并且将返回的 `HTML` 代码并插入至匹配的元素中|
|`jQuery.get(url, [data, successCallback, dataType])`|使用 `GET` 请求从服务器加载数据|
|`jQuery.post(url, [data, successCallback, dataType])`|使用 `POST` 请求从服务器加载数据|
|`jQuery.getJSON(url, [data, successCallback])`|使用 `GET` 请求从服务器加载 `JSON` 数据|
|`jQuery.getScript(url, [data, successCallback])`|使用 `GET` 请求从服务器加载并执行一个 `JavaScript` 文件|
|<font color="orange">底层接口</font>||
|`jQuery.ajax(url, [settings])`|执行一个异步的 `Ajax` 的请求|
|`jQuery.ajaxSetup(options)`|为 `Ajax` 请求设置默认的值|
|`jQuery.ajaxTransport(dataType, handler)`|创建一个用于处理 `Ajax` 数据传输的对象|
|`jQuery.ajaxPrefilter([dataTypes], handler)`|发送 `Ajax` 请求前预设选项或修改现有选项|
|<font color="orange">辅助函数</font>||
|`jQuery.param(obj)`|创建一个数组或对象序列化的的字符串，适用于一个 `URL` 地址查询字符串或 `Ajax` 请求|
|`.serialize()`|将用作提交的表单元素的值编译成字符串|
|`.serializeArray()`|将用作提交的表单元素的值编译成拥有 `name` 和 `value` 对象组成的数组|
|<font color="orange">注册全局 `Ajax` 回调</font>||
|`.ajaxSend(callback)`|注册 `Ajax` 请求发送之前的回调|
|`.ajaxStart(callback)`|注册 `Ajax` 请求刚开始时的回调|
|`.ajaxStop(callback)`|注册 `Ajax` 请求停止时的回调|
|`.ajaxComplete(callback)`|注册 `Ajax` 请求完成时的回调|
|`.ajaxError(callback)`|注册 `Ajax` 请求出错时的回调|
|`.ajaxSuccess(callback)`|注册 `Ajax` 请求成功时的回调|





## 事件

**绑定事件处理器和事件对象：**

|语法|说明|
|-|-|
|<font color="orange">用于绑定事件处理器的方法</font>||
|`.bind()`|为一个元素绑定一个事件处理程序|
|`.unbind()`|从元素上删除一个以前绑定的事件处理程序|
|`.delegate()`|为所有匹配选择器的元素绑定一个或多个事件处理函数|
|`.undelegate()`|删除当前选择器匹配的所有元素的事件处理程序，根据一组特定根元素的集合|
|`.on()`|在选定的元素上绑定一个或多个事件处理函数|
|`.off()`|移除一个事件处理函数|
|`.one()`|为元素的事件添加处理函数，该事件最多只执行一次|
|`.trigger()`|根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为|
|`.triggerHandler()`|为一个事件执行附加到元素的所有处理程序|
|<font color="orange">事件对象的属性和方法</font>||
|`e.target`|触发事件的 `DOM` 元素|
|`e.relatedTarget`|事件中涉及的其它任何 `DOM` 元素|
|`e.currentTarget`|在事件冒泡过程中的当前 `DOM` 元素|
|`e.delegateTarget`|当前正在调用 `jQuery` 事件处理器的元素|
|`e.type`|事件的类型|
|`e.data`|添加事件监听时传递给的数据对象|
|`e.metaKey`|事件触发时按下的 `Meta` 键|
|`e.which`|针对键盘和鼠标事件，指示到底按的是哪个键|
|`e.timeStamp`|事件触发时距离 1970-01-01 的毫秒数|
|`e.namespace`|当事件被触发时此属性包含指定的命名空间|
|`e.pageX`|鼠标相对于文档的左边缘的位置（左边）|
|`e.pageY`|鼠标相对于文档的顶部边缘的位置（坐标）|
|`e.result`|事件被触发的一个事件处理程序的最后返回值，除非值是 `undefined`|
|`e.preventDefault`|取消事件默认行为|
|`e.stopPropagation()`|取消事件冒泡|
|`e.stopImmediatePropagation()`|阻止剩余的事件处理函数执行并且取消事件冒泡|
|`e.isDefaultPrevented()`|指示事件对象是否调用过 `event.preventDefault()`|
|`e.isPropagationStopped()`|指示事件对象是否调用过 `event.stopPropagation()`|
|`e.isImmediatePropagationStopped()`|指示事件对象是否调用过 `event.stopImmediatePropagation()`


**事件类型：**

|语法|说明|
|-|-|
|<font color="orange">文档加载</font>||
|`.load()`|为 javascript 的 `load` 事件添加监听|
|`.unload()`|为 javascript 的 `unload` 事件添加监听|
|`.ready()`|当 `DOM` 准备就绪时执行回调函数|
|<font color="orange">浏览器事件</font>||
|`.resize()`|为 javascript 的 `resize` 事件添加监听，或触发该事件|
|`.scroll()`|为 javascript 的 `scroll` 事件添加监听，或触发该事件|
|`.error()`|为 javascript 的 `error` 事件添加监听|
|<font color="orange">表单事件</font>||
|`.blur()`|为 javascript 的 `blur` 事件添加监听，或触发该事件|
|`.focus()`|为 javascript 的 `focus` 事件添加监听，或触发该事件|
|`.focusin()`|将一个事件函数绑定到 `focusin` 事件|
|`.focusout()`|将一个事件函数绑定到 `focusout` 事件|
|`.change()`|为 javascript 的 `change` 事件添加监听，或触发该事件|
|`.select()`|为 javascript 的 `select` 事件添加监听，或触发该事件|
|`.submit()`|为 javascript 的 `submit` 事件添加监听，或触发该事件|
|<font color="orange">键盘事件</font>||
|`.keydown()`|为 javascript 的 `keydown` 事件添加监听，或触发该事件|
|`.keypress()`|为 javascript 的 `keypress` 事件添加监听，或触发该事件|
|`.keyup()`|为 javascript 的 `keyup` 事件添加监听，或触发该事件|
|<font color="orange">鼠标事件</font>||
|`.hover()`|为 hover 行为添加事件监听|
|`.contextmenu()`|为 javascript 的 `contextmenu` 事件添加监听，或触发该事件|
|`.click()`|为 javascript 的 `click` 事件添加监听，或触发该事件|
|`.dbclick()`|为 javascript 的 `dbclick` 事件添加监听，或触发该事件|
|`.mousedown()`|为 javascript 的 `mousedown` 事件添加监听，或触发该事件|
|`.mouseup()`|为 javascript 的 `mouseup` 事件添加监听，或触发该事件|
|`.mouseenter()`|为 javascript 的 `mouseenter` 事件添加监听，或触发该事件|
|`.mouseleave()`|为 javascript 的 `mouseleave` 事件添加监听，或触发该事件|
|`.mouseout()`|为 javascript 的 `mouseout` 事件添加监听，或触发该事件|
|`.mouseover()`|为 javascript 的 `mouseover` 事件添加监听，或触发该事件|
|`.mousemove()`|为 javascript 的 `mousemove` 事件添加监听，或触发该事件|





## 其他

|语法|说明|
|-|-|
|`jQuery.proxy()`|接受一个函数，然后返回一个新函数，并且这个新函数始终保持了特定的上下文语境|
|`jQuery.ready()`|当文档对象可用时|
|`jQuery.holdReady()`|暂停或恢复 `ready()` 事件的执行|
|`jQuery.noConflict()`|命令冲突时为 `jQuery` 设置别名|