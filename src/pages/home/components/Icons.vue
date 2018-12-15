<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon" v-for="item of list" :key="item.id">
          <img :src="item.imgUrl" alt="">
          <p>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    width 100%
    overflow hidden
    .icon
      width 20%
      float left
      overflow hidden
      p
        margin 0
        line-height 1
        text-align center
        font-size .26rem
        color #666
        margin-top -.2rem
</style>
