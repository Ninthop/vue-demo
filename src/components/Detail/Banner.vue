<template>
    <!-- 详情页画廊 -->
    <div class="banner">
        <img  @click="handleBannerClick" src="//img1.qunarzz.com/sight/p0/1903/61/617ac4a711f6cb34a3.img.jpg_600x330_e2ae600a.jpg" alt="" class="banner-img">
        <div class="banner-info">
            <div class="banner-title">
                苏州乐园森林水世界(AAAA景区)
            </div>
            <div class="banner-number">
                <span class="iconfont">&#xe632;</span>
                {{ imgs.length }}
            </div>
        </div>
        <fade>
            <commom-gallary 
                :imgs="imgs" 
                v-show="showGallary" 
                @close="handleGallaryClose"
            ></commom-gallary>
        </fade>
    </div>
</template>

<script>
import CommomGallary from '_gallary/Gallary.vue'
import Fade from '_common/animation/fade.vue'

export default {
    name: 'DetailBanner',
    data () {
        return {
            showGallary: false,
            imgs: ['http://img1.qunarzz.com/sight/p0/1903/61/617ac4a711f6cb34a3.img.jpg_r_800x800_f6d84656.jpg',
                    'http://img1.qunarzz.com/sight/p0/1903/47/4773b984f99d9010a3.img.jpg_r_800x800_559bf444.jpg',
                    'http://img1.qunarzz.com/sight/p0/1903/3e/3e4d43719773bb7aa3.img.jpg_r_800x800_2d3115cb.jpg'],
        }
    },
    components: {
        CommomGallary,
        Fade
    },
    methods: {
        handleBannerClick () {
            this.showGallary = true
        },
        handleGallaryClose () {
            this.showGallary = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        background-color #f5f5f5
        height 0
        padding-bottom 55%
        .banner-img
            width 100%
        .banner-info
            position absolute
            display flex
            left 0
            right 0
            bottom 0
            width 100%
            height 2.37rem
            background-color red
            color white
            background linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8))
            .banner-title
                flex 1
                font-size 1.1rem
                padding-top 0.08rem
                padding-left .6rem
            .banner-number
                position absolute
                top -1.6rem
                padding 0.1rem 0.1rem
                height 1.2rem
                width 3rem
                text-align center
                border-radius 2rem
                font-size 0.5rem
                background-color rgba(0,0,0,0.5)
                margin-left .6rem
                
</style>
