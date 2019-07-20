<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-hot :list="HotList"></home-hot>
    <home-recommand :list="RecList"></home-recommand>
    <home-weekends :list="WeekList"></home-weekends>
  </div>
</template>

<script>
import HomeHeader from '_c/Header.vue'
import HomeSwiper from '_c/Swiper.vue'
import HomeIcons from '_c/Icons.vue'
import HomeHot from '_c/Hot.vue'
import HomeRecommand from '_c/Recommand.vue'
import HomeWeekends from '_c/Weekends.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HomeWeekends,
    HomeRecommand,
    HomeHot,
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      HotList: [],
      RecList: [],
      WeekList: []
    }
  },
  methods: {
     getHomeInfo () {
       axios.get('/api/index.json')
         .then(this.getHomeInfoSucc)
     },
     getHomeInfoSucc (res) {
       res = res.data
       if (res.ret && res.data){
         const data = res.data
         this.city = data.city
         this.swiperList = data.swiperList
         this.iconList = data.iconList
         this.HotList = data.HotList
         this.RecList = data.RecList
         this.WeekList = data.WeekList
       }
       console.log(res)
     }
   },
   mounted() {
     this.getHomeInfo()
   }
}
</script>

<style lang="stylus" scoped>
  @import '~_style/varibles.styl'
  .home 
    background-color $homeBgColor
</style>

