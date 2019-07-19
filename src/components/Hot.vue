<template>
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
                <swiper-slide v-for="item of HotList" :key="item.id">
                    <div class="hot-whole">
                        <img class="hot-img" :src="item.url" alt="">
                        <div class="hot-text">
                            {{ item.name }}
                            <div class="hot-price">
                                <span class="hot-price-number">{{ item.price }}</span>
                                起
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'HomeHot',
    data () {
        return {
            HotList: [{
                id: '0001',
                url: "http://img1.qunarzz.com/sight/p0/1603/85/85aa0c000578a01e90.water.jpg_250x250_57d288e6.jpg",
                name: "拙政园",
                price: "￥39"
            },{
                id: '0002',
                url: "http://img1.qunarzz.com/sight/p0/1802/19/19ea68a3f2b8a9c7a3.img.jpg_250x250_d07f9b49.jpg",
                name: "狮子林",
                price: "￥0.7"
            },{
                id: '0003',
                url: "http://img1.qunarzz.com/sight/p0/201305/21/11a6f465375344e6c8d65eac.jpg_250x250_efe640a9.jpg",
                name: "寒山寺",
                price: "￥17.1"
            },{
                id: '0004',
                url: "http://img1.qunarzz.com/sight/p0/1707/33/33c133cf198d092aa3.water.jpg_250x250_e1283ca1.jpg",
                name: "虎丘",
                price: "￥78"
            },{
                id: '0005',
                url: "http://img1.qunarzz.com/sight/p0/201405/14/3dfad2bcd30c40e91a15f8b7296d86a6.jpg_250x250_118aa466.jpg",
                name: "同里古镇",
                price: "￥35"
            },{
                id: '0006',
                url: "http://img1.qunarzz.com/sight/p0/1503/38/3806235c8444b759.water.jpg_250x250_b8f101fe.jpg",
                name: "周庄",
                price: "￥88"
            },{
                id: '0007',
                url: "http://img1.qunarzz.com/sight/p0/1906/69/6905dabd406023a8a3.img.jpg_250x250_8ba6f2e7.jpg",
                name: "华谊兄弟电影世界",
                price: "￥199.1"
            },{
                id: '0008',
                url: "http://img1.qunarzz.com/sight/p0/1603/41/411873a415e03f1e90.water.jpg_250x250_dfd23a08.jpg",
                name: "留园",
                price: "￥53"
            },{
                id: '0009',
                url: "http://img1.qunarzz.com/sight/p0/1903/61/617ac4a711f6cb34a3.img.jpg_250x250_b12a4f71.jpg",
                name: "苏州乐园森林水上乐园",
                price: "￥485"
            },{
                id: '0010',
                url: "http://img1.qunarzz.com/sight/p0/1412/b4/77f601b2a965f62a39a8939fbd5db488.water.jpg_250x250_3d4d311c.jpg",
                name: "七里山塘",
                price: "￥50"
            },],
            swiperOption: {
                freeMode: true,
                freeModeMomentumVelocityRatio: 0.8,
                freeModeMomentumRatio: 0.5,
                slidesPerView :'auto' ,
                spaceBetween: 6,
                scrollbar: {
                    el: '.swiper-scrollbar',
                    hide: true,
                    dragSize: 120,
                },
            }
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

