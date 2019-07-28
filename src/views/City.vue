<template>
    <div class="city">
        <city-header 
          :list="alhpaList"
          @chosen="handleChosen"
        ></city-header>
        <all-city-list 
          :list="alhpaList"
          :hotlist="hotCityList"
          :country="country"
        ></all-city-list>
    </div>
</template>

<script>
import CityHeader from '_c/City/Header.vue'
import AllCityList from '_c/City/AllCityList.vue'
import axios from 'axios'

export default {
    name: 'City',
    components: {
        CityHeader,
        AllCityList
    },
    data () {
        return {
            hotCityList: [],
            alhpaList: [],
            country: 'china'
        }
    },
    mounted () {
      axios
        .get('https://shadow.elemecdn.com/lib/city-list@0.0.3/city_list.json')
        .then(response => {
          const data = response.data
          this.alhpaList = data.cityList
          })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
      axios
        .get('/mock/city.json')
        .then(response => {
          const data = response.data.data
          this.hotCityList = data.hotCityList
          })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
  },
  methods: {
    handleChosen (country) {
      this.country = country
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .city
        background-color $homeBgColor
</style>
