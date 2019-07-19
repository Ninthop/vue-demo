<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-hot></home-hot>
    <home-recommand></home-recommand>
    <home-weekends></home-weekends>
  </div>
</template>

<script>
import HomeHeader from '../components/Header.vue'
import HomeSwiper from '../components/Swiper.vue'
import HomeIcons from '../components/Icons.vue'
import HomeHot from '../components/Hot.vue'
import HomeRecommand from '../components/Recommand.vue'
import HomeWeekends from '../components/Weekends.vue'

export default {
  name: 'home',
  components: {
    HomeWeekends,
    HomeRecommand,
    HomeHot,
    HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style lang="stylus" scoped>
  @import '~_style/varibles.styl'
  .home 
    background-color $homeBgColor
</style>

