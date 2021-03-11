## 介绍

[HTMLDocument](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLDocument)：

+ 继承了 [Document](/base/javascript/dom/document) 接口，并扩展了一些属性

## 属性

|属性|类型|描述|
|-|-|-|
|`cookie`|`String`|获取/设置与当前文档相关联的 `cookie`|
|`domain`|`String`|获取/设置当前文档的原始域部分|
|`title`|`String`|获取/设置当前文档的标题|
|`designMode`|`Enum('off', 'on')`|获取/设置整个文档是否可编辑(默认 `off`)|
|`dir`|`Enum('ltr', 'rtl')`|获取/设置文档的文字方向(默认 `ltr`)|
|`location`|`readonly Location`|文档的 `URI`|
|`URL`|`readonly String`|文档的 `URL`|
|`referrer`|`readonly Location`|来源页面的 `URI`|
|`defaultView`|`readonly Window | Null`|文档对象所关联的 `window` 对象|
|`lastModified`|`readonly String`|文档的最后修改日期和时间|
|`readyState`|`readonly Enum('loading', 'interactive', 'complete')`|文档的加载状态|

::: tip 说明：
+ `cookie` 的设置格式为 `key1=value1;key2=value2;...`，多个键值对间用分号隔开
+ `readyState` 属性的值可以是以下之一，它们每次改变都会触发 `readystatechange` 事件
  + `loading`: 正在加载
  + `interactive`: 可交互(文档被解析，但图像和样式表等资源可能仍在加载)
  + `complete`: 加载完成(文档和所有子资源均已加载完成)
:::

## 方法

+ `open(): Document`: 打开一个要写入的文档
+ `close(): void`: 结束由 `write()` 的写入(这种写入操作一般由 `open()` 打开)
+ `write(markup: String): void`: 将文本字符串写入由 `open()` 打开的文档流
+ `writeln(markup: String): void`: 比 `write()` 多输入一个换行符
+ `execCommand(commandName: String, showUI: Boolean, args=null: any): Boolean`: 运行命令操纵可编辑内容区域的元素
+ `getElementsByName(name: String): NodeList`: 返回符合指定标签名的节点列表
+ `hasFocus(): Boolean`: 指示当前文档是否获得了焦点
+ `queryCommandEnabled(command: String): Boolean`: 指示浏览器中是否可使用指定指令
+ `queryCommandIndeterm(command: String): Boolean`: 指示指定命令在当前范围内是否处于不确定状态
+ `queryCommandState(command: String): Boolean`: 指示指定命令是否已在当前范围内执行
+ `queryCommandValue(command: String): Boolean`: 指示当前范围是否支持指定命令
+ `queryCommandSupported()`: 返回当前范围支持的的命令