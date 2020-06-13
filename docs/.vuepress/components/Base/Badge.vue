<template>
  <span class="container">
    <slot></slot>
    <span class="badge" :class="bindClass">{{ text }}</span>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      require: true
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  data () {
    return {
      bindClass: ['badge--' + this.type]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
}
.badge {
  position: absolute;
  top: -10px;
  margin: 0 3px;
  padding: 2px 4px;
  color: #fff;
  font-size: 12px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  border-radius: 3px;
  background-color: #ccc;

  @each $type, $bgc in (
    (primary, #409eff),
    (warning, #e6a23c),
    (danger, #f56c6c),
    (success, #67c23a),
    (info, #909399)
  ) {
    &--#{$type} {
      background-color: $bgc;
    }
  }
}
</style>
