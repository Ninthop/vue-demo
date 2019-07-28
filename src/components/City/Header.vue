<template>
    <div class="header" @touchmove.prevent>
        <div>
            城市选择
            <router-link to="/">
                <div class="iconfont header-back">&#xe624;</div>
            </router-link>
        </div>
        <div>
            <input type="text" placeholder="搜索" class="search" v-model="keyWord">
        </div>
        <nav>
            <ul class="choose-two" :class="active">
                <li class="china" @click="makeActive('china')">境内</li>
                <li class="foreign" @click="makeActive('foreign')">境外·港澳台</li>
            </ul>
        </nav>

        <!-- 搜索，未查询到时给出提示，查询到了则取消提示 -->
        <div class="search-content" ref="search" v-show="keyWord"> 
            <ul>
                <li 
                    v-for="(item, index) of searchList" 
                    :key="index"
                    class="search-item"
                    @click="handleCityClick(item.name)"
                >{{ item.name }}</li>
                <li class="search-item none-item" v-show="hasNoData">未查询到匹配数据</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'

export default {
    name: 'CityHeader',
    props: {
        list: Array
    },
    data () {
        return {
            active: 'china',
            keyWord: '',
            searchList: [],
            time: null
        }
    },
    methods: {
        makeActive (country) {
            this.active = country
            this.$emit('chosen', country)
        },
         handleCityClick (city) {
            this.$store.dispatch('changeCity', city)
            this.$router.push('/')
            console.log(city + '请求了数据')
        }
    },
    watch: {
        keyWord () {
            if(this.timer) {
                clearTimeout(this.timer)
            }
            if(!this.keyWord) {
                this.searchList = []
                return
            }
            this.timer = setTimeout(() => {
                const result = []
                for(let i in this.list) {
                    this.list[i].cities.forEach((value) => {
                        if(value.pinyin.indexOf(this.keyWord) > -1 ||
                            value.name.indexOf(this.keyWord) > -1) {
                                result.push(value)
                        }
                    });
                }
                this.searchList = result
            }, 100)
        }
    },
    mounted() {
      this.scroll = new Bscroll(this.$refs.search, {click: true, bounceTime: 300})
    },
    computed: {
        hasNoData () {
            return !this.searchList.length && this.keyWord
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .header
        background-color $bgColor
        color white
        text-align center
        padding-top 0.9rem
        padding-bottom 0.23rem
        .search
            margin-top 0.5rem
            outline none
            border 0
            padding 0.2rem
            text-align center
            border-radius 0.2rem
            width 50%
            &::placeholder
                text-align center
        .search-content
            position absolute
            z-index 1
            top 6.45rem
            left 0
            right 0
            bottom 0
            background-color $homeBgColor
            overflow hidden
            .search-item
                line-height 2.5rem
                text-align left
                color black
                padding-left 1rem
                border-bottom 0.1rem solid #f5f5f5
                background-color white
            .none-item
                text-align center
        .header-back
            position absolute
            top 0.6rem
            left 0.8rem
            font-size 1rem
            font-weight bold
            color white
        nav
            height 2.5rem
            .choose-two
                display flex
                position absolute
                left 50%
                transform translateX(-50%)
                width 72%
                li
                    display flex
                    justify-content center
                    align-items center
                    margin 0.9rem 0 0 0
                    border 0.05rem solid white
                    width 50%
                    height 1.25rem
                    font-size 0.9rem
            ul.foreign
                .foreign
                    background-color white
                    color $bgColor
            ul.china
                .china
                    background-color white
                    color $bgColor

</style>
