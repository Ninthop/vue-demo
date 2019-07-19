<template>
    <div class="rec">
        <div class="yourLove">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconxin"></use>
            </svg>
            <span class="yourLove-text">猜你喜欢</span>
        </div>
        <div class="rec-whole" v-for="item of RecList" :key="item.id">
            <div class="rec-left">
                <img :src="item.url" alt="" class="rec-img">
            </div>
            <div class="rec-right">
                <div class="rec-title">{{ item.name }}</div>
                <div class="rec-star">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconxing1"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconxing1"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconxing1"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconxing1"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#iconxing1"></use>
                    </svg>
                    <span class="rec-comment">{{ item.commentNumber }}条评论</span>
                </div>
                <div class="rec-price">
                    <span class="rec-symbol">￥</span>
                    <span class="rec-number">{{ item.price }}</span>
                    <span class="rec-price-text">起</span>
                    <span class="rec-location">{{ item.location }}</span>
                </div>
                <div class="rec-special" v-if="item.special != null" v-html="item.special">{{ item.special }}</div>
                <div v-else></div>
            </div>
        </div>
        <div class="rec-last">查看所有产品</div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommand',
    data () {
        return {
            RecList: [{
                id: '00001',
                url: "http://img1.qunarzz.com/sight/p0/1903/61/617ac4a711f6cb34a3.img.jpg_200x200_5e8ac1c0.jpg",
                name: "苏州乐园森林水世界",
                commentNumber: "3003",
                price: "485",
                location: "苏州乐园",
                special: "东南亚风情水上乐园，体验别样风情"
            },{
                id: '00002',
                url: "http://img1.qunarzz.com/sight/p0/201405/14/3dfad2bcd30c40e91a15f8b7296d86a6.jpg_200x200_265db173.jpg",
                name: "同里古镇",
                commentNumber: "13697",
                price: "35",
                location: "吴江市",
                special: null
            },{
                id: '00003',
                url: "http://img1.qunarzz.com/sight/p0/1505/3c/3c760c67b7cd23a6.water.jpg_200x200_005b1381.jpg",
                name: "苏州乐园",
                commentNumber: "10503",
                price: "75",
                location: "高新区",
                special: `<svg class="icon" aria-hidden="true" style="width: 1.2rem; height: 1.2rem">
                            <use xlink:href="#iconhuo"></use>
                        </svg>好评如潮，小伙伴热推景点~`
            },{
                id: '00004',
                url: "http://img1.qunarzz.com/tuan/team2/1507/49/40f46fd83f4ae7.jpg_200x200_7a0a0674.jpg",
                name: "白马涧",
                commentNumber: "2109",
                price: "45",
                location: "高新区",
                special: null
            },{
                id: '00005',
                url: "http://img1.qunarzz.com/sight/p0/201301/14/bf26ff3662c7a2a393835fbb.png_200x200_35c6466e.png",
                name: "苏州海洋馆",
                commentNumber: "626",
                price: "119.9",
                location: "吴中区",
                special: "还原马代水下珊瑚环境，别样珊瑚情结"
            }],
        }
    }
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .rec
        margin-top 0.7rem
        padding-top 0.7rem
        background-color white
        .rec-last
            height 2.5rem
            display flex
            justify-content center
            align-items center
            color #00afc7
            font-size 0.9rem
        .rec-whole
            margin-top 0.5rem
            border-bottom 1px solid $homeBgColor
            .rec-left
                float left
                margin-right 0.7rem
                height 100%
                .rec-img
                    width 6.25rem
                    margin-left 0.8rem
            .rec-right
                margin-bottom 1rem
                .rec-title
                    padding-top 0.9rem
                .rec-star
                    margin-top 0.5rem
                    .icon
                        width 0.7em
                        height 1em
                        margin-right 0.1rem
                        margin-top 0.2rem
                    .rec-comment
                        margin-left 0.5rem
                        font-size 0.5rem
                        color gray
                .rec-price
                    margin-top 0.8rem
                    .rec-symbol
                        color $moneyColor
                        font-size 0.5rem
                    .rec-number
                        color $moneyColor
                        font-size 1.3rem
                    .rec-price-text
                        font-size 0.5rem
                        color gray
                    .rec-location
                        float right
                        margin-top 0.4rem
                        margin-right 0.8rem
                        font-size 0.5rem
                        color gray
                .rec-special
                    display inline-block
                    font-size 0.5rem
                    margin-top 1.5rem
                    background-color #fff9f9
                    padding 3px
                    color #f55
        .yourLove
            margin-left 0.7rem
            margin-bottom 1.6rem
            .icon
                width 1.5rem
                height 1rem
                margin-right 0.1rem
                display inline-block

</style>
