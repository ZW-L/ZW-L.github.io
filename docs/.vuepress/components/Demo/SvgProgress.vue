<template>
  <div class="box">
    <button @click="start">开始</button>
    <div>
      <svg width="300px" viewBox="0 0 30 30" style="background: #ccc;">
        <circle cx="15" cy="15" :r="R"
          transform="rotate(-90, 15, 15)"
          fill="none" stroke="#d62c39" :stroke-width="strokeWidth"
          :stroke-dasharray="perimeter"
          :stroke-dashoffset="current"
        />
        <text x="10" y="16" style="font-size:5;">{{percent}}%</text>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      R: 14.5,
      strokeWidth: 1,
      current: 0
    }
  },
  computed: {
    perimeter () {
      return 2 * Math.PI * this.R
    },
    percent () {
      return Math.floor((this.perimeter - this.current) / this.perimeter * 100)
    }
  },
  methods: {
    start () {
      this.current = this.perimeter
      const timer = setInterval(() => {
        this.current--
        if (this.current < 0) {
          this.current = 0
          clearInterval(timer)
          console.log('done!')
        }
      }, 30)
    }
  }
}
</script>
