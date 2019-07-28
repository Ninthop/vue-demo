<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-hot :list="HotList"></home-hot>
    <home-recommand :list="RecList"></home-recommand>
    <home-weekends :list="WeekList"></home-weekends>
  </div>
</template>

<script>
import HomeHeader from '_c/Home/Header.vue'
import HomeSwiper from '_c/Home/Swiper.vue'
import HomeIcons from '_c/Home/Icons.vue'
import HomeHot from '_c/Home/Hot.vue'
import HomeRecommand from '_c/Home/Recommand.vue'
import HomeWeekends from '_c/Home/Weekends.vue'
import axios from 'axios'
import { mapState } from 'vuex'

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
      swiperList: [],
      iconList: [],
      HotList: [],
      RecList: [],
      WeekList: [],
      lastCity: ''
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
      axios
        .get('mock/index.json?city=' + this.city)
        .then(response => {
          const data = response.data.data
          this.swiperList = data.swiperList
          this.iconList = data.iconList
          this.HotList = data.HotList
          this.RecList = data.RecList
          this.WeekList = data.WeekList
          })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
        this.lastCity = this.city
  },
  activated () {
    if(this.lastCity != this.city) {
      this.lastCity = this.city
      axios
        .get('mock/index.json?city=' + this.city)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~_style/varibles.styl'
  .home 
    background-color $homeBgColor
</style>

