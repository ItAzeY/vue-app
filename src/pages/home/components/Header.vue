<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe668;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe686;</span>
      输入城市/景点/游主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'homeHeaders',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  // @符号代表当前根路径 也就是 src 路径, 但是要在其他模块引入这个需要再 @ 前面 加上 ~
  @import '~styles/varibles.styl';
  .header
    line-height .86rem
    display flex
    background $bgColor
    color #fff
    margin-top 0
    .header-left
      width .64rem
      float left
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      flex 1
      background #ffffff
      margin-top .12rem
      height .64rem
      line-height .64rem
      border-radius .1rem
      margin-left .2rem
      padding-left .2rem
      color #ccc
    .header-right
      min-width 1.04rem
      padding 0 .1rem
      padding-left: .2rem;
      float right
      color #fff
      .arrow-icon
        font-size .24rem
</style>
