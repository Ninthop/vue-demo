<template>
    <div class="wrapper" ref="wrapper">
        <div class="all-city">
            <div class="city-list">
                <div class="hot-city">
                    <h2 class="hot-city-title">热门城市</h2>
                    <ul class="hot-city-table">
                        <li v-for="item of hotlist" :key="item.id">{{ item.city }}</li>
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
                <div class="city-alpha">{{ allCity.idx }}</div>
                <ul class="city-list">
                    <li v-for="(city, index) of allCity.cities" :key="index">{{ city.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name: 'AllCityList',
    props: {
        list: Array,
        hotlist: Array,
        letter: String
    },
    methods: {
        handleAlphaClick (e) {
            this.$emit('change', e.target.innerText)
        }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.wrapper, {click: true})
    },
    watch: {
        letter () {
            console.log(this.$refs)
            if(this.letter) {
                const element = this.$refs[this.letter][0]
                this.scroll.scrollToElement(element)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/minins.styl'
    @import '~_style/varibles.styl'
    .wrapper
        height 100vh
        .all-city
            position absolute
            left 0
            right 0
            background-color $homeBgColor
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
                        width 25%
                        text-align center
                        border-bottom .02rem solid #ddd
                        height 2.81rem
                        line-height 2.9rem
                        ellipsis()
                    &:before
                        content ''
                        position absolute
                        width 25%
                        left 25%
                        height 100%
                        border-left .02rem solid #ddd
                        border-right .02rem solid #ddd
                    &:after
                        content ''
                        position absolute
                        width 25%
                        right 25%
                        height 100%
                        border-right .02rem solid #ddd
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
                        &:before
                            content ''
                            position absolute
                            width 33.33%
                            left 33.33%
                            height 100%
                            border-left .02rem solid #ddd
                            border-right .02rem solid #ddd
</style>
