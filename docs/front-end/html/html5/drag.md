## 事件

|事件|描述|兼容性|
|-|-|-|
|drag|拖动元素时(第 2 个触发，且会<font color="orange">持续触发</font>)||
|dragstart|开始拖动元素时，第 1 个触发||
|dragenter|拖动元素进入目标时||
|dragover|拖动元素置目标上方时(<font color="orange">持续触发</font>)||
|dragleave|拖动元素离开目标时||
|dragexit|取消拖动元素时||
|dragend|拖动操作结束时||
|drop|在目标内放置元素时||

::: danger 兼容性：
+ 测试时 Chrome 并不支持 dragexit 事件
:::

::: tip 各事件说明：
+ 拖放事件也属于鼠标事件，其中 `dragenter`/`dragleave` 类似 `mouseenter`/`mouseleave`
+ `dragstart`/`dragend` 分别在拖放操作的最先/最后触发，而 `drop` 在 `dragend` 之前触发
+ `drag`/`dragover` 会持续触发的；只要鼠标不松开，`drag` 就会持续触发，而将元素拖至目标上方时 `dragover` 也会持续触发
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
|setData(type, data)|设置给定类型的拖动操作的数据|
|getData(type)|获取给定类型的拖动操作的数据，type 缺省时返回空串|
|clearData(type)|删除给定类型的拖动操作的数据，type 缺省时删除所有数据|
|setDragImage(imgEl, x, y)|设置拖曳反馈图像|

::: tip 说明：
+ 可以在 `dragstart` 事件中使用 `setData()` 设置一个关于被拖动的节点的属性值(如 `id` 或 `class`)，然后在 `drop` 事件中使用 `getData()` 获取该值，并用于 DOM 操作
:::


## 说明

+ 拖放是指抓取对象以后拖到另一个位置，在 `HTML5` 中，任何元素都能够拖放
+ 为了保证元素可拖动，必须把拖放元素的 `draggable` 属性设置为 `true`
+ 在可放置拖放元素的容器绑定 `dragover`，并取消默认行为(默认无法将数据/元素放置到其他元素中)
+ 为了保证看得到元素拖动后的结果，必须在事件对象中响应变化(修改样式或操作 `DOM`)，一般在 `drop` 事件中将拖动元素添加至目标容器


## 一个简单的例子

给拖动元素设置 `draggable` 属性，并且为目标容器添加 `dragover` 和 `drop` 事件监听即可：

```vue
<template>
  <div class="container">
    <div class="box" id="left">
      <!-- 设置元素可拖动 -->
      <span id="text" draggable="true">Drag Text!</span>
    </div>
    <div class="box" id="right"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const left = document.getElementById('left')
    const text = document.getElementById('text')

    // 添加 dragover 事件并取消默认行为
    right.addEventListener('dragover', function(e) {
      e.preventDefault()
    })

    // 添加 drop 事件并操作 DOM 将拖放元素添加至目标容器
    right.addEventListener('drop', function(e) {
      right.appendChild(text)
    })
  },
}
</script>

<style lang="scss" scoped>

.container {
  overflow: hidden;
  border: 1px solid #ccc;
}

.box {
  float: left;
  margin-left: 50px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 30px;
  border: 1px solid #ccc;
}

</style>
```

<BaseHtmlDrag01 />

## 一个可拖动的 todo

为了能左右拖动元素，再将左侧的容器添加相同的事件监听(`dragover` 和 `drop`)；而且在 `dragstart` 事件中使用 `DataTransfer` 对象设置一个 id 属性，这样在 `drop` 事件中获取该 id 属性，就能动态移动元素了：

```vue
<template>
  <div class="container">
    <ul class="list" id="list-left">
      <li class="todo" draggable="true" 
        v-for="todo in todos" :key="todo" :id="todo"
      >{{todo}}</li>
    </ul>
    <ul class="list" id="list-right"></ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: ['coding', 'writing', 'running']
    }
  },

  mounted() {
    const left = document.getElementById('list-left')
    const right = document.getElementById('list-right')

    // left 容器的事件
    left.addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('id', e.target.getAttribute('id')) // 设置一个 id 属性
    })
    left.addEventListener('dragover', function(e) {
      e.preventDefault()
    })
    left.addEventListener('drop', function(e) {
      const id = e.dataTransfer.getData('id') // 获取一个 id 属性
      left.appendChild(document.getElementById(id))
    })

    // right 容器的事件
    right.addEventListener('dragstart', function (e) {
      e.dataTransfer.setData('id', e.target.getAttribute('id')) // 设置一个 id 属性
    })
    right.addEventListener('dragover', function(e) {
      e.preventDefault()
    })
    right.addEventListener('drop', function(e) {
      const id = e.dataTransfer.getData('id') // 设置一个 id 属性
      right.appendChild(document.getElementById(id))
    })
  },
}
</script>

<style lang="scss" scoped>

.container {
  overflow: hidden;
  border: 1px solid #ccc;
}

.list {
  float: left;
  margin: 30px;
  width: 200px;
  height: 200px;
  list-style: none;
  border: 1px solid #ccc;
}

.todo {
  padding: 10px 0;
  &:hover {
    cursor: pointer;
    background-color: #d3d3d3;
  }
}

</style>
```

<BaseHtmlDrag02 />