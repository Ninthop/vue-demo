<template>
    <!-- 详情页简介 -->
    <div class="list">
        <div class="list-introduction">
            <ul class="attraction">
                <li class="attra-li-left">
                    <div class="score">
                        <span class="score-number">4.9</span>分
                    </div>
                    <div class="intro">
                        <span class="intro-list">3021条评论</span>
                        <span class="intro-raider">1条攻略</span>
                    </div>
                    <div class="intro-left">&gt;</div>
                </li>
                <li class="attra-li-right">
                    <div class="attra-intro">景点简介</div>
                    <div class="attra-time">开放时间、贴士</div>
                    <div class="intro-right">&gt;</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DetailListIntro'    
}
</script>

<style lang="stylus" scoped>
    @import '~_style/varibles.styl'
    .list
        position relative
        top -0.3rem
        background-color white
        width 100%
        border-top-left-radius .3rem
        border-top-right-radius .3rem
        height 4rem
        .list-introduction
            .attraction
                padding-top .6rem
                .attra-li-right
                    float left
                    position relative
                    width 49.9%
                    height 2.8rem
                    .attra-intro
                        margin-left 0.8rem
                        font-size 0.9rem
                        margin-top 0.4rem
                    .attra-time
                        font-size 0.5rem
                        margin 0.4rem 0 0 0.8rem
                        color gray
                    .intro-right
                        position absolute
                        right 10%
                        top 50%
                        transform translateY(-50%)
                        font-size 1.5rem
                        color lightgray
                .attra-li-left
                    border-right 0.01rem solid #f5f5f5
                    position relative
                    float left
                    width 50%
                    height 2.8rem
                    .intro-left
                        position absolute
                        top 50%
                        right 10%
                        font-size 1.5rem
                        color lightgray
                        transform translateY(-50%)
                    .score
                        color $moneyColor
                        padding-left 0.6rem
                        .score-number
                            font-size 1.3rem
                    .intro
                        color gray 
                        font-size 0.6rem
                        margin-top 0.4rem
                        padding-left 0.6rem
                        .intro-list
                            margin-right 0.8rem
</style>
