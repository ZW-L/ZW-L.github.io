## 安装

```shell
npm install vue-awesome-swiper --save
```

## 使用

简单的带 `paganation` 的效果：

```vue
<template>
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  }

</script>
```

## 注意

不要使用 `swiper` 定义的类名：

+ swiper-container
+ swiper-wrapper
+ swiper-slide
+ swiper-slide-prev/active/next



## pagination

（1）默认的 pagination 是绝对定位(absolute)，并设置了 `bottom: 10px;` ，要改变 pagination  的位置可以修改 `swiper-container` 的高度，在设置全屏的 swiper 时可以控制 pagination 在页面的底部，而图片调整再调整为垂直居中。



##  options

调整参数，可以实现很多不同的效果。

+ pagination：指定 pagination 使用的元素，类似 jQuery 选择器
+ paginationType：pagination 显示的类型
+ initialSlide： 初始显示 slide 索引
+ observer：监视器，在改变 swiper 的样式（例如隐藏/显示）时，会自动初始化 swiper，在切换全屏的 swiper 时很有用
+ observeParents：作用于 swiper 的父元素



##  swiper对象

在 swiper 组件标签上添加 `ref`，可以获取swiper 对象，获取了 swiper 对象后，能够调用 swiper 的相关方法：

```vue
<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  
  data () {
    return {
      swiperOption: {
        initialSlide: 0,
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        spaceBetween: 10,
        observer:true,
        observeParents:true
      }
    }
  },
  
  watch: {
    activeIndex (val) {
      // 点击相应索引的图片时，切换全屏 swiper，并且将 swiper 切换到对应图片的 slide
      this.$refs.mySwiper.swiper.slideTo(val)
    }
  }

</script>
```