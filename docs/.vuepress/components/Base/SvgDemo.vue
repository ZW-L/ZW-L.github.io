<template>
  <div class="svg-demo__container" :style="styles">
    <slot>svg content</slot>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  computed: {
    styles () {
      return {
        'box-sizing': 'border-box',
        border: '1px solid #ccc',
        'border-radius': '5px',
        width: this.width,
        height: this.height
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-item {
  background-color: #ccc;
}
</style>
