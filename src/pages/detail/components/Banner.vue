<template>
  <div>
    <div class="banner" @click="handleShowClick">
      <img :src="bannerImg" class="banner-img" alt="">
      <div class="banner-info">
        <div class="banner-title">
          {{ this.sightName }}
        </div>
        <div class="banner-number">
          <span class="iconfont back-icon banner-icon">&#xe600;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation><common-gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary></fade-animation>
  </div>
</template>

<script>
// eslint-disable-next-line
import CommonGallary from 'common/gallary/Gallary.vue'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
  name: 'DetailBanber',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleShowClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
        color #fff
      .banner-number
        line-height .32rem
        height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        font-size .24rem
        background rgba(255,255,255,.8)
        .banner-icon
          font-size .24rem
</style>
