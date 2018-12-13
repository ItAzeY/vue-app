<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" >
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t27565/103/2567518235/12945/5683be64/5c04cc68Nfae2c9eb.jpg!q70.jpg.dpg',
          desc: '浪漫大连首站,浪漫的海洋主题乐园',
          title: '大连圣亚海洋世界'
        },
        {
          id: '0002',
          imgUrl: 'https://m.360buyimg.com/mobilecms/s150x150_jfs/t22666/293/257815171/29274/6b5605b1/5b2a5295N5a81ad96.jpg!q70.jpg.dpg',
          desc: '浪漫大连首站,浪漫的海洋主题乐园',
          title: '大连圣亚海洋世界'
        },
        {
          id: '0003',
          imgUrl: 'https://m.360buyimg.com/n1/s150x150_jfs/t26176/51/1929045996/165543/d8a39956/5bf3bcdaN73cafc89.jpg!q70.jpg.dpg',
          desc: '浪漫大连首站,浪漫的海洋主题乐园',
          title: '大连圣亚海洋世界'
        }
      ]
    }
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
