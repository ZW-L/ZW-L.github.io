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
    const right = document.getElementById('right')
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
  margin: 30px;
  width: 200px;
  height: 200px;
  text-align: center;
  line-height: 200px;
  font-size: 30px;
  border: 1px solid #ccc;
}

</style>