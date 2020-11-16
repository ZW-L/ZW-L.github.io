<template>
  <div class="badge-list">
    <a class="badge-list__item"
      v-for="item of list" :key="item"
      :style="{ background: randomColor, textDecoration: 'none' }"
      :href="`#${item}`">
      {{ item }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    list: { type: Array, default: () => [] },
    colorPalete: { type: Array, default: () => ['#409eff', '#f56c6c', '#67c23a'] } // 色板
  },
  computed: {
    randomColor () {
      const index = Math.floor(Math.random() * this.colorPalete.length)
      return this.colorPalete[index]
    }
  }
}
</script>

<style lang="scss" scoped>
.badge-list {
  box-sizing: border-box;
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
  border: 1px solid #ccc;
  border-radius: 5px;

  &__item {
    float: left;
    padding: 5px 10px;
    margin: 0 10px;
    font-size: 16px;
    /* 以下语句不生效？ */
    /* text-decoration: none; */
    color: #fff;
    border-radius: 2px;
    transition: color .5s;

    &:hover {
      cursor: pointer;
      color: #000;
    }
  }
}
</style>
