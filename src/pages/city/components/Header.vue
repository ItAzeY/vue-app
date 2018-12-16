<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-icon">&#xe668;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    position relative
    overflow hidden
    height .86rem
    line-height .86rem
    text-align center
    color #ffffff
    background $bgColor
    font-size .36rem
    .header-icon
      position absolute
      left 0
      top 0
      width .64rem
      text-align center
      font-size .36rem
      color #ffffff
</style>
