## 说明

+ 拖放是指抓取对象以后拖到另一个位置，在 HTML5 中，任何元素都能够拖放
+ 为了保证元素可拖动，必须把元素的 `draggable` 属性设置为 `true`:

```html
<div draggable="true"></div>
```

## 事件

|事件|描述|
|-|-|
|drag|拖动元素或选择文本时，会持续触发|
|dragstart|开始拖动元素或选择文本时|
|dragenter|拖动的元素或选择文本输入有效的放置目标时|
|dragover|将元素或文本选择拖动置目标到有效放上时，会持续触发|
|dragleave|拖动的元素或文本选择离开有效的放置目标时|
|dragexit|元素不再是拖动操作的选择目标时|
|dragend|拖动操作结束时（释放鼠标按钮或按下退出键）|
|drop|在有效放置目标上放置元素或选择文本时|

::: tip 事件触发的顺序：
asd
:::


## DataTransfer 对象

DataTransfer 对象包含一系列的属性和方法，在拖放事件中使用：

```js
event.dataTransfer.setData('text', 'A drag event.')
event.dataTransfer.getData('text')
```

**属性：**

|属性|说明|
|-|-|
|effectAllowed|指定拖放操作所允许的一个效果|
|files|用于将文件从用户桌面拖动到浏览器|
|types|拖动操作中使用的数据格式数组|

**方法：**

|方法|说明|
|-|-|
|setDate(type, data)|设置给定类型的拖动操作的数据|
|getData(type)|获取给定类型的拖动操作的数据，type 缺省时返回空串|
|clearData(type)|删除给定类型的拖动操作的数据，type 缺省时删除所有数据|
|setDragImage(imgEl, x, y)|设置拖曳反馈图像|


## Demo

