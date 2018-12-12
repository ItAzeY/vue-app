<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- 这个是用来 配合下面的数据进行展示, 但是应该只支持绝对路径, 我本地的相对路径打不开, 注释的是一个淘宝的图片地址, 换的时候, 只需要打开注释即可 -->
      <swiper-slide class="swiper-img" v-for="item of swiperList" :key="item.id">
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
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgUrl: 'https://gw.alicdn.com/imgextra/i1/81/O1CN01vf7RAJ1CT8Z0mb8T4_!!81-0-lubanu.jpg'
        },
        {
          id: '0002',
          imgUrl: 'https://gw.alicdn.com/imgextra/i4/7/O1CN01LJ0Q2w1BvFFzEfaGJ_!!7-0-lubanu.jpg'
        },
        {
          id: '0003',
          imgUrl: 'https://gw.alicdn.com/imgextra/i2/124/O1CN01M3Yosf1Cmpb2A0iTQ_!!124-0-lubanu.jpg'
        },
        {
          id: '0004',
          imgUrl: 'https://gw.alicdn.com/imgextra/i1/79/O1CN01VCdCsH1CSDlztDQg2_!!79-0-lubanu.jpg'
        },
        {
          id: '0005',
          imgUrl: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
        },
        {
          id: '0006',
          imgUrl: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'
        }
      ]
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
