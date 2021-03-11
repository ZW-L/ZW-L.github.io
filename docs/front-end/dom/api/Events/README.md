## 简介


## 事件类型

### 鼠标事件

事件|说明|可用元素
-|-|-
click|单击时
dbclick|双击时
contextmenu|鼠标右键触发打开上下文菜单时
mousedown|鼠标按键按下瞬间
mouseup|鼠标按键松开瞬间
mousemove|鼠标在目标元素上移动时(或者是其子元素，即使子元素已经超出目标元素的盒子)
mouseover|鼠标移动到目标元素上方时(或者是其子/后代元素上方，在目标元素、子、后代元素间相互移动都会触发)
mouseout|鼠标离开目标元素区域(或者是其子/后代元素区域，在目标元素、子、后代元素间相互离开都会触发)
mouseenter|鼠标进入目标元素区域(区域包括子元素撑开的区域，但在子/后代元素之间移动不会多次触发)
mouseleave|鼠标离开目标元素区域(区域包括子元素撑开的区域)

**注意：**
+ mouseover 和 mouseover 属于相反的行为，但又有相似的地方：在目标元素、子、后代元素间相互移动都会触发
+ mouseenter 和 mouseleave 属于相反的行为，而且不会在目标元素、子、后代元素间相互触发


### 键盘事件

事件|说明|可用元素
-|-|-
keydown|按键被按下瞬间
keypress|按键按下后没松开之前
keyup|按键松开瞬间


###  剪贴板事件
事件|说明|可用元素
-|-|-
copy|拷贝时
cut|剪切时
paste|粘贴时


### 框架/对象事件
事件|说明|可用元素
-|-|-
abort|图像的加载被中断时
load|一个页面或图像加载完成时
beforeunload|即将离开页面(刷新或关闭)时
unload|用户退出页面时
error|加载文档或图像发生错误时
hashchange|当前 URL 的锚部分发生错误时
pageshow|用户访问页面时
pagehide|用户离开当前页面跳转至另一个页面时
resize|窗口或框架重新调整大小时
scroll|滚动时


### 表单事件
事件|说明|可用元素
-|-|-
blur|
change|
focus|
focusin|
fucusout|
input|
reset|
search|
select|
submit|


### 打印事件
事件|说明|可用元素
-|-|-
afterprint|
beforeprint|


### 拖动事件
事件|说明|可用元素
-|-|-
drag|
dragend|
dragenter|
dragleave|
dragover|
dragstart|
drop|


### 过渡/动画事件
事件|说明|可用元素
-|-|-
transitionend|CSS 完成过渡时
animationstart|CSS 动画开始播放时
animationend|CSS 动画结束播放时
animationiteration|CSS 动画重复播放时


### 多媒体事件
事件|说明|可用元素
-|-|-
abort|
canplay|
canplaythrough|
durationchange|
emptied|
ended|
error|
loadeddata|
loadedmetadata|
loadstart|
pause|
play|
playing|
progress|
ratechange|
seeked|
seeking|
stakked|
suspend|
timeuodate|
volumechange|
waiting|


### 其他事件
事件|说明|可用元素
-|-|-
message|
mousewheel|
wheel|
online|
offline|
popstate|
show|
storage|
toggle|






## 事件绑定

### 添加事件

+ 传统的 DOM 事件处理：`el.onclick = funcName;`
+ 旧版本 IE：`el.attachEvent('onclick', funcName);`
+ 事件监听器：`el.addEventListener('click', funcName, isCapture);`

**注意：**

+ `funcName` 不带括号，否则它会在一开始自动执行并不再响应，也就是说不能传递参数
+ `funcName` 可以改写为匿名函数，然后在里面执行多个函数，并且可以传递事件对象 `e`，但这样就不能再取消该事件了
+ `isCapture` 默认为 `false`，即事件模型为事件冒泡
+ 尽量使用事件监听器，而不是传统的 DOM 事件处理

### 取消事件

+ 旧版本 IE：`el.detachEvent('onclick', funcName);`
+ 事件监听器：`el.removeEventListener('click', funcName, isCapture);`

**注意：**

+ 取消事件的参数和添加事件的参数一致
+ 必须为命名函数的事件才能被取消
+ `funcName` 和 `isCapture` 必须与添加时一致该事件才能被取消



## 事件流

### 事件模型

+ 事件捕获：事件流以最外层父元素向内收缩，一直到目标元素。在添加事件监听器时指定第三个参数为 true 即可使用该模型
+ 事件冒泡：默认事件流。事件流以目标元素向外扩张，一直到最外层父元素，必要时用 stopPropagation() 方法取消事件冒泡


### 事件阶段

+ 捕获阶段：事件正在捕获，值为 1，对应 e.CAPTURING_PHASE
+ 冒泡阶段：事件正在冒泡，值为 2，对应 e.BUBBLING_PHASE
+ 目标阶段：事件已捕获或已冒泡，值为 3，对应e.AT_TARGET



## 事件对象的通用属性和方法

### 属性

属性|说明
-|-
NONE|0，目前没有处理任何事件
CAPTURING_PHASE|1，当前事件阶段为捕获阶段
AT_TARGET|2，当前事件阶段为目标阶段
BUBBLING_PHASE|3，当前事件阶段为冒泡阶段
eventPhase|返回值为 0~3，标识事件传播的当前阶段
bubbles|布尔值。标识是否是冒泡事件模型
cancelable|布尔值。标识是否可用 preventDefault() 取消默认行为
currentTarget|返回事件监听器触发该事件的元素
target|返回触发该事件的元素(不一定是添加监听的元素)，<font color="red">旧版本 IE 为：e.srcElement</font>
timeStamp|返回事件生成的日期和事件
type|返回事件类型名

**注意：**
+ `target` 和 `currentTarget` 在事件委托中比较常见，`currentTarget` 为添加监听的父节，`target` 为触发事件的子节点。


### 方法

方法|说明
-|-
initEvent()|初始化新创建的 Event 对象的属性
preventDefault()|取消事件的默认行为，<font color="red">旧版本IE 为: e.returnValue = false</font>
stopPropagation()|阻止事件冒泡，<font color="red">旧版本IE 为: e.cancelBubble = true</font>



## 不同事件对象的属性和方法






