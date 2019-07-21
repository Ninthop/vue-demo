<template>
    <div class="city">
        <city-header></city-header>
        <all-city-list 
          :list="alhpaList"
          :hotlist="hotCityList"
          @change="handleLetterChange"
          :letter="letter"
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
            letter: ''
        }
    },
    mounted () {
      axios
        .get('https://shadow.elemecdn.com/lib/city-list@0.0.3/city_list.json')
        .then(response => {
          const data = response.data
          this.alhpaList = data.cityList
          console.log(response.data)
          })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
      axios
        .get('/api/city.json')
        .then(response => {
          const data = response.data.data
          this.hotCityList = data.hotCityList
          console.log(response.data)
          })
        .catch(function (error) { // 请求失败处理
          console.log(error);
        });
  },
  methods: {
    handleLetterChange (letter) {
      this.letter = letter
    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .city
        background-color $homeBgColor
</style>
