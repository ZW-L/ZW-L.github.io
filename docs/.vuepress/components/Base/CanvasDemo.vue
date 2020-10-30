<template>
  <div>
    <span>
      <slot></slot>
    </span>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$slots.default)
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')

    ctx.fillRect(25, 25, 100, 100)
    ctx.clearRect(45, 45, 60, 60)
    ctx.strokeRect(50, 50, 50, 50)
  }
}
</script>

<style lang="scss" scoped>

</style>
