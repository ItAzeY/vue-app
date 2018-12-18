<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail/'+item.id" >
          <img class="item-img" :src="item.imgUrl" >
          <div class="item-info">
            <p class="item-title">{{ item.title }}</p>
            <p class="item-desc">{{ item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
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
    .item
      overflow hidden
      display flex
      height 1.9rem
      .item-img
        width 1.7rem
        height 1.7rem
        padding .1rem
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
        button
          margin 0
          font-size .26rem
          background #ff9300
          outline none
          border none
          color #333
          border-radius 0.6rem
</style>
