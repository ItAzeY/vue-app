<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of list" :key="item.id">
        <div class="item-pic">
          <img class="item-img" :src="item.imgUrl" >
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top .2rem
    line-height .8rem
    background #eee
    text-indent .2rem
    font-size .28rem
  ul
    padding 0
    margin 0
    list-style none
    .item-pic
      overflow hidden
      height 0
      padding-bottom 49%
    .item-info
      min-width 0
      p:nth-child(2)
        color #ccc
      p
        padding .1rem
        font-size .28rem
        line-height .28rem
        margin 0
        color #666
        margin-bottom .05rem
        ellipsis()
</style>
