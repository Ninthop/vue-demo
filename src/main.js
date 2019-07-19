import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastClick'
import './assets/style/reset.css'
import './assets/style/border.css'
import './assets/style/iconfont.css'
import 'swiper/dist/css/swiper.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/icon-font/iconfont.js'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  VueAwesomeSwiper,
  fastClick,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
