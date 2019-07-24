<template>
    <div class="wrapper" ref="wrapper">
        <div class="all-city">
            <div class="all-city-china" v-show="country == 'china'">
                <div class="local-city">
                    <h2 class="local-city-title">
                        当前城市
                    </h2>
                    <div class="the-city">{{  this.currentCity  }}</div>
                </div>
                <div class="city-list">
                    <div class="hot-city">
                        <h2 class="hot-city-title">热门城市</h2>
                        <ul class="hot-city-table">
                            <li 
                                v-for="item of hotlist" 
                                :key="item.id"
                                @click="handleCityClick(item.city)"
                            >{{ item.city }}</li>
                        </ul>
                    </div>
                </div>
                <div class="alpha-sort">
                    <h2 class="alpha-sort-title">字母排序</h2>
                    <ul class="alphabet-alpha">
                        <li v-for="(alpha, index) of list" 
                            :key="index" 
                            @click="handleAlphaClick"
                        >
                            {{ alpha.idx }}
                        </li>
                    </ul>
                </div>
                <div class="all-city-list"
                    v-for="allCity of list" 
                    :key="allCity.cities.id"
                    :ref="allCity.idx"
                >
                    <div class="city-alpha" @click="backTop()">{{ allCity.idx }}</div>
                    <ul class="city-list">
                        <li 
                            v-for="(city, index) of allCity.cities" 
                            :key="index"
                            @click="handleCityClick(city.name)"
                        >{{ city.name }}</li>
                    </ul>
                </div>
            </div>

            <div class="all-city-foreign" v-show="country == 'foreign'">
                没有数据
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'AllCityList',
    props: {
        list: Array,
        hotlist: Array,
        country: String
    },
    methods: {
        handleAlphaClick (e) {
            const element = this.$refs[e.target.innerText][0]
            this.scroll.scrollToElement(element, 700)
        },
        backTop () {
            this.scroll.scrollTo(0, 0, 700)
        },
        handleCityClick (city) {
            this.changeCity(city)
            this.$router.push('/')
        },
        ...mapMutations(['changeCity'])
    },
    computed: {
        ...mapState({
            currentCity: 'city'
        })
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper, {click: true, bounceTime: 300})
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/minins.styl'
    @import '~_style/varibles.styl'
    .wrapper
        height 85vh
        .all-city
            position absolute
            left 0
            right 0
            background-color $homeBgColor
            .all-city-china
                .local-city
                    .local-city-title
                        margin .8rem .9rem
                        font-size 0.7rem
                    .the-city
                        font-size 0.9rem
                        width 100%
                        text-align center
                        background-color white
                        height 2.81rem
                        line-height 2.9rem
                        ellipsis()
                .all-city-list
                    .city-alpha
                        margin .8rem .9rem
                        font-size 0.7rem
                    .city-list
                        background-color white
                        display flex
                        flex-wrap wrap
                        position relative
                        
                        li
                            font-size 0.9rem
                            width 24.99%
                            text-align center
                            border-bottom .02rem solid #ddd
                            height 2.81rem
                            line-height 2.9rem
                            ellipsis()
                            border-right 0.001rem solid #ddd

                .alpha-sort
                    .alphabet-alpha
                        height 11.25rem
                        background-color white
                        display flex
                        flex-wrap wrap
                        position relative
                        padding 0.9rem 0
                        li
                            font-size 0.9rem
                            width 16.6%
                            text-align center
                            height 2.81rem
                            display flex
                            justify-content center
                            align-items center
                            font-size 0.8rem
                    .alpha-sort-title
                        margin .8rem .9rem
                        font-size 0.7rem
                .city-list
                    .hot-city
                        .hot-city-title
                            margin .8rem .9rem
                            font-size 0.7rem
                        .hot-city-table
                            height 11.25rem
                            background-color white
                            display flex
                            flex-wrap wrap
                            position relative
                            li
                                font-size 0.9rem
                                width 33.33%
                                text-align center
                                border-bottom .02rem solid #ddd
                                height 2.81rem
                                display flex
                                justify-content center
                                align-items center
                                border-right 0.001rem solid #ddd

</style>
