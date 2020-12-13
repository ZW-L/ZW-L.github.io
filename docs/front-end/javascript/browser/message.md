## WebSocket





## 多标签页间的通信

+ **Cookie**：在同源页面中共享数据，只能读取和设置，无法监听变化

+ **localStorage**：在同源页面中共享数据，并且可以对 window 添加 `storage` 事件监听属性的修改
```html
<!-- a.html -->
<body>
  <h1>page A</h1>
  <p>Add localStorage：</p>
  <p>key: <input type="text" id="ik"></p>
  <p>value: <input type="text" id="iv"></p>
  <button id="btn">Add</button>

  <script>
    const ik = document.getElementById('ik')
    const iv = document.getElementById('iv')
    const btn = document.getElementById('btn')

    btn.addEventListener('click', e => {
      if (!iv.value || !ik.value) return alert('Not allow empty key-value.')
      // 设置键值对
      localStorage.setItem(ik.value, iv.value)
    })
  </script>
</body>

<!-- b.html -->
<body>
  <h1>page B</h1>

  <script>
    // 监听变化并打印
    window.addEventListener('storage', e => {
      console.log(e.oldValue, e.newValue)
    })
  </script>
</body>

<!-- 提示：在本地安装 serve 包，启动一个服务测试 -->
```

+ **SharedWorker**：在同源页面中通信，Worker 线程使用 `onmessage` 事件监听客户端，两端均使用 `postMessage()` 发送信息
```html

```
```js

```

+ **WebSocket**：全双工通信
