// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick' // 解决移动端click点击延迟的问题
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Rem from './router/rem'
import store from './store/index'

import 'styles/Normalize.css' // 引入 Normalize.css
import 'styles/border.css' // 解决移动端1px像素问题
import 'styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.config.productionTip = false
fastClick.attach(document.body) // 给body绑定事件
Vue.use(VueAwesomeSwiper)
Vue.use(Rem)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

/**
 * 路由 :
 *      路由就是根据网址的不同, 返回不同的页面给用户
*/
