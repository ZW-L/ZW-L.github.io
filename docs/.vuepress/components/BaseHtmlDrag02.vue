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