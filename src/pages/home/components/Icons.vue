<template>
  <div class="icons">
    <swiper>
      <swiper-slide>
        <div class="icon" v-for="item of iconList" :key="item.id">
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
  data () {
    return {
      iconList: [
        {
          id: '0001',
          imgUrl: 'https://gw.alicdn.com/tfs/TB1Wxi2trsrBKNjSZFpXXcXhFXa-183-144.png_.webp',
          desc: '热门景点'
        },
        {
          id: '0002',
          imgUrl: 'https://img.alicdn.com/tfs/TB10UHQaNjaK1RjSZKzXXXVwXXa-183-144.png?getAvatar=1_.webp',
          desc: '热门景点'
        },
        {
          id: '0003',
          imgUrl: 'https://gw.alicdn.com/tfs/TB11rTqtj7nBKNjSZLeXXbxCFXa-183-144.png?getAvatar=1_.webp',
          desc: '热门景点'
        },
        {
          id: '0004',
          imgUrl: 'https://gw.alicdn.com/tps/TB1gmFhPVXXXXXhXXXXXXXXXXXX-183-144.png?getAvatar=1_.webp',
          desc: '热门景点'
        },
        {
          id: '0005',
          imgUrl: 'https://gw.alicdn.com/tfs/TB1IKqDtpooBKNjSZFPXXXa2XXa-183-144.png_.webp',
          desc: '热门景点'
        },
        {
          id: '0006',
          imgUrl: 'https://gw.alicdn.com/tfs/TB1o0FLtyMnBKNjSZFoXXbOSFXa-183-144.png_.webp',
          desc: '热门景点'
        },
        {
          id: '0007',
          imgUrl: 'https://gw.alicdn.com/tfs/TB1ydXzhCzqK1RjSZPcXXbTepXa-183-144.png?getAvatar=1_.webp',
          desc: '热门景点'
        },
        {
          id: '0008',
          imgUrl: 'https://gw.alicdn.com/tfs/TB1BqystrZnBKNjSZFrXXaRLFXa-183-144.png?getAvatar=1_.webp',
          desc: '热门景点'
        },
        {
          id: '0009',
          imgUrl: 'https://gw.alicdn.com/tfs/TB1CMf4tlnTBKNjSZPfXXbf1XXa-183-144.png?getAvatar=1_.webp',
          desc: '热门景点'
        },
        {
          id: '0010',
          imgUrl: 'https://gw.alicdn.com/tfs/TB18P98tyQnBKNjSZFmXXcApVXa-183-144.png?getAvatar=1_.webp',
          desc: '热门景点'
        }
      ]
    }
  }
  // 这个没得用, 不知道为什么.从布局到这个地方一直再乱
  // computed: {
  //   pages () {
  //     const pages = []
  //     this.iconList.forEach((item, index) => {
  //       const page = Math.floor(index / 8)
  //       if (!pages[page]) {
  //         pages[page] = []
  //       }
  //       pages[page].push[item]
  //     })
  //     return pages
  //   }
  // }
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
