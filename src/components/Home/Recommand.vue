<template>
    <!-- 猜你喜欢 -->
    <div class="rec">
        <div class="yourLove">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#iconxin"></use>
            </svg>
            <span class="yourLove-text">猜你喜欢</span>
        </div>

        <router-link 
            tag="div" 
            v-for="item of list" 
            :key="item.id" 
            :to="'/detail/' + item.name"
            class="rec-whole"
        >
            <div @click="handleChangeAttra(item.name)">
                <div class="rec-left">
                    <span class="rec-left-label" v-if="item.label == '随买随用'">{{ item.label }}</span>
                    <span class="rec-left-labelTwo" v-else-if="item.label == '可定明日'">{{ item.label }}</span>
                    <div v-else></div>
                    <img :src="item.url" alt="" class="rec-img">
                </div>
                <div class="rec-right">
                    <div class="rec-title">{{ item.name }}</div>
                    <!-- 计算星级 -->
                    <div class="rec-star">
                    <span class="score">
                            <span 
                                class="star-item" 
                                v-for="(star, index) in starScore(item.score)" 
                                :class="star"
                                :key="index"
                            >
                            </span>
                        </span>
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
        </router-link>
        <div class="rec-last">查看所有产品</div>
    </div>
</template>

<script>
export default {
    name: 'HomeRecommand',
    props: {
        list: Array
    },
    methods: {
        handleChangeAttra (attraction) {
            console.log(attraction + '请求了数据')
            this.$store.dispatch('changeAttra', attraction)
        },
        starScore(temp){
            let stars = [];
            let score = Math.floor(temp * 2)/2;   //把评分转成整数或整数+0.5（如：4.7转成4.5，4.2转成4.0）
            let halfScore = score%1 !== 0;   //取1的余数不等于0，说明有小数（显示半星）
            let integerScore = Math.floor(score);   //取整数分数（显示全星）
            for (let i=0; i<integerScore; i++){
                stars.push('on')
            }
            if (halfScore){
                stars.push('half')
            }
            while(stars.length<5){
                stars.push('off')
            }
            return stars
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
                .rec-left-label
                    position absolute
                    left .8rem
                    font-size 0.7rem
                    background-image url(https://img1.qunarzz.com/piao/fusion/1802/20/2ba6d10b17972e02.png)
                    color white
                    padding 0.2rem
                    border-bottom-right-radius .7rem
                .rec-left-labelTwo
                    position absolute
                    left .8rem
                    font-size 0.7rem
                    background-image url(https://img1.qunarzz.com/piao/fusion/1802/52/b9080e45b69b4f02.png)
                    color white
                    padding 0.2rem
                    border-bottom-right-radius .7rem
                .rec-img
                    width 6.25rem
                    margin-left 0.8rem
            .rec-right
                margin-bottom 1rem
                .rec-title
                    padding-top 0.9rem
                .rec-star
                    margin-top 0.5rem
                    .score
                        .star-item
                            display inline-block
                            background no-repeat
                        .on
                            background-image url("../../assets/static/all.png")
                            height 0.7rem
                            width 0.7rem
                            margin-right 0.2rem
                            background-size contain
                        .half
                            background url("../../assets/static/half.png")
                            height 0.7rem
                            width 0.7rem
                            margin-right 0.2rem
                            background-size contain
                        .off
                            background url("../../assets/static/none.png")
                            height 0.7rem
                            width 0.7rem
                            margin-right 0.2rem
                            background-size contain
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
