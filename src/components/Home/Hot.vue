<template>
    <!-- 首页热门榜单 -->
    <div class="hot">
        <div class="hot-header">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconchaojihuati-remendianjitai"></use>
            </svg>
                本周热门榜单
            <span class="allList">
                全部榜单
                <span class="icon-allList">&gt;</span>
            </span>
        </div>
        <div class="hots">
            <swiper :options="swiperOption">
                <swiper-slide v-for="item of list" :key="item.id">
                    <router-link 
                        tag="div" 
                        class="hot-whole" 
                        :to="'/detail/' + item.name" 
                    >
                        <div  @click="handleChangeAttra(item.name)">
                            <span class="hot-label" v-if="item.top != null">
                                <img class="hot-label-top1" :src="item.top" alt="">
                            </span>
                            <div class="hot-label" v-else></div>
                            <img class="hot-img" :src="item.url" alt="">
                            <div class="hot-text">
                                {{ item.name }}
                                <div class="hot-price">
                                    <span class="hot-price-number">{{ item.price }}</span>
                                    起
                                </div>
                            </div>
                        </div>
                    </router-link>
                </swiper-slide>
            </swiper>
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'HomeHot',
    props: {
        list: Array
    },
    data () {
        return {
            swiperOption: {
                freeMode: true,
                freeModeMomentumVelocityRatio: 3,
                freeModeMomentumRatio: 1,
                slidesPerView :'auto' ,
                spaceBetween: 6,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                    dragSize: 120,
                },
            }
        }
    },
    methods: {
        handleChangeAttra (attraction) {
            console.log(attraction  + '请求了数据')
            this.$store.dispatch('changeAttra', attraction)
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    @import '~_style/minins.styl'
    .hot >>> .swiper-scrollbar
        position relative
        top -10px
        left -5px
        height 3px
        background-color transparent
    .hot >>> .swiper-container
        width 100%
        height 100%
    .hot
        background-color white
        margin-top 0.7rem
        padding-top 0.5rem
        padding-left 0.5rem
        height 12rem
        overflow hidden
        .swiper-slide
            width 100px
        .hots
            width 100%
            .hot-whole
                margin-left 0.25rem
                margin-right 0.1rem
                width 6.25rem
                height 9.625rem
                float left
                .hot-label
                    position absolute
                    .hot-label-top1
                        width 2.5rem
                    .hot-label-top2
                        width 2.5rem
                    .hot-label-top3
                        width 2.5rem
                .hot-img
                    height 6.25rem
                    margin-bottom .25rem
                .hot-text
                    text-align center
                    font-size 0.7rem
                    line-height 1.25
                    ellipsis()
                    .hot-price
                        font-size 0.8rem
                        .hot-price-number
                            color $moneyColor
        .hot-header
            margin-bottom 1.2rem
            .icon
                width 1.2rem 
                height 1.2rem
            .hotIcon
                font-size 1.2rem
            .allList
                float right
                margin 0.2rem 0.7rem 0 0
                font-size 0.6rem
                color gray
                .icon-allList
                    font-size 1.2rem

</style>

