<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <!-- 这个是用来 配合下面的数据进行展示, 但是应该只支持绝对路径, 我本地的相对路径打不开, 注释的是一个淘宝的图片地址, 换的时候, 只需要打开注释即可 -->
      <swiper-slide class="swiper-img" v-for="item of list" :key="item.id">
        <img :src="item.imgUrl" alt="">
      </swiper-slide>
      <!-- <swiper-slide class="swiper-img">
        <img src="../../../assets/images/1.jpg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-img">
        <img src="../../../assets/images/2.jpg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-img">
        <img src="../../../assets/images/3.jpg" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-img">
        <img src="../../../assets/images/4.png" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-img">
        <img src="../../../assets/images/5.png" alt="">
      </swiper-slide>
      <swiper-slide class="swiper-img">
        <img src="../../../assets/images/6.jpg" alt="">
      </swiper-slide> -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang='stylus' scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background #fff
  .wrapper
    width 100%
    height 0
    overflow hidden
    padding-bottom 31.2%
    background #eee
    .swiper-img
      width 100%
</style>
