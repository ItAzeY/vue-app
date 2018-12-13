<template>
  <div>
    <div class="title">周末去哪</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
  data () {
    return {
      recommendList: [
        {
          id: '0001',
          imgUrl: 'https://m.360buyimg.com/mobilecms/jfs/t1/17532/39/996/145336/5c0e32e0E70e7d45f/0b061986d0207178.jpg!cr_1125x549_0_72',
          desc: '浪漫大连首站,浪漫的海洋主题乐园',
          title: '大连圣亚海洋世界'
        },
        {
          id: '0002',
          imgUrl: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t21031/96/1109839657/84560/4436e3c7/5b20814bN4d869aa3.jpg!cr_1125x549_0_72!q70.jpg.dpg',
          desc: '浪漫大连首站,浪漫的海洋主题乐园',
          title: '大连圣亚海洋世界'
        },
        {
          id: '0003',
          imgUrl: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/16525/30/1134/32452/5c0f77b7E1e096ed2/c19dc1b028ddc001.jpg!cr_1125x549_0_72!q70.jpg.dpg',
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
