<template>
  <div id="app">
    <keep-alive><!--当我路由中的内容被加载过一次之后, 就把路由中的内容放到内存中,下一次加载的时候就不需要重新加载组件-->
      <router-view/><!-- 显示的是当前路由地址所对应的内容 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>

</style>
